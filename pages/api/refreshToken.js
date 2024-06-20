import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { token } = req.body;

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid or expired token' });
      }

      // Optionally, check if the user still exists in the database
      const dbUser = await prisma.utilisateur.findUnique({
        where: { id: user.id },
      });

      if (!dbUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Create a new token
      const newToken = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '3h' });
      res.status(200).json({ token: newToken });
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
