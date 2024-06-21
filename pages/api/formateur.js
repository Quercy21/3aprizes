import { PrismaClient } from '@prisma/client';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'POST':
      return createFormateur(req, res);
    case 'GET':
      return getAllFormateurs(req, res);
    default:
      res.setHeader('Allow', ['POST', 'GET']);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}

const createFormateur = async (req, res) => {
  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to parse form', details: err.message });
    }

    const { nom, telephone, email, username, password } = fields;
    const cvPath = files.cv ? path.join(process.cwd(), 'public/uploads', files.cv.newFilename) : null;

    if (cvPath) {
      // Ensure the directory exists
      fs.mkdirSync(path.dirname(cvPath), { recursive: true });
      fs.renameSync(files.cv.filepath, cvPath);
    }

    try {
      const newFormateur = await prisma.formateur.create({
        data: {
          nom,
          telephone,
          email,
          username,
          password, // Hash the password before storing in production
          cv: cvPath ? `/uploads/${files.cv.newFilename}` : null,
        },
      });
      return res.status(201).json(newFormateur);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to create formateur', details: error.message });
    }
  });
};

const getAllFormateurs = async (req, res) => {
  try {
    const formateurs = await prisma.formateur.findMany();
    return res.status(200).json(formateurs);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch formateurs', details: error.message });
  }
};
