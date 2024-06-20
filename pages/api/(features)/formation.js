import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'POST':
      return createFormation(req, res);
    case 'GET':
      return getAllFormations(req, res);
    case 'PUT':
      return updateFormation(req, res);
    case 'DELETE':
      return deleteFormation(req, res);
    default:
      res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE']);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}

const createFormation = async (req, res) => {
  const { intitule, prerequis, prix, heure, delais, creePar, debut, duree, image, Forapport, section } = req.body;
  try {
    const newFormation = await prisma.formation.create({
      data: {
        intitule,
        prerequis,
        prix,
        heure,
        delais,
        creePar,
        debut: new Date(debut),
        duree,
        image,
        Forapport,
        section,
      },
    });
    return res.status(201).json(newFormation);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to create formation', details: error.message });
  }
};

const getAllFormations = async (req, res) => {
  try {
    const formations = await prisma.formation.findMany();
    return res.status(200).json(formations);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch formations', details: error.message });
  }
};

const updateFormation = async (req, res) => {
  const { id, intitule, prerequis, prix, heure, delais, creePar, debut, duree, image, Forapport, section } = req.body;
  try {
    const updatedFormation = await prisma.formation.update({
      where: { id },
      data: {
        intitule,
        prerequis,
        prix,
        heure,
        delais,
        creePar,
        debut: new Date(debut),
        duree,
        image,
        Forapport,
        section,
      },
    });
    return res.status(200).json(updatedFormation);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update formation', details: error.message });
  }
};

const deleteFormation = async (req, res) => {
  const { id } = req.body;
  try {
    await prisma.formation.delete({
      where: { id },
    });
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ error: 'Failed to delete formation', details: error.message });
  }
};
