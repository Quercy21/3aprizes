// import bcrypt from 'bcryptjs';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { email, password, nom, UserName, Telephone, Ville, Pays} = req.body;

//     let clientId = req.body.clientId
//     const salt = bcrypt.genSaltSync(10);
//     const handlePassword = bcrypt.hashSync(password, salt);
 
//     console.log('Data received:', req.body);

//     try {
//       clientId = 8
//       const existingUser = await prisma.utilisateur.findFirst({
//         where:{
//           OR:[
//             {email : email},
//             {clientId : clientId}
//           ]
//         }
//       });

//       if (existingUser){
//         return res.status(400).json({message : 'Email or ClientId already exists'});
//       }

//       const newUtilisateur = await prisma.utilisateur.create({
//         data: {
//           email,
//           password: handlePassword,
//           nom,
//           UserName,
//           Telephone: parseInt(Telephone),
//           Ville,
//           Pays,
//           UserNewsId: 1, 
//           clientId: clientId, 
//         },
//       });
//       res.status(201).json(newUtilisateur);
//     } catch (error) {
//       res.status(500).json({ message: 'User creation failed', error: error.message });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }

import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password, nom, UserName, Telephone, Ville, Pays } = req.body;

    const salt = bcrypt.genSaltSync(10);
    const handlePassword = bcrypt.hashSync(password, salt);

    console.log('Data received:', req.body);

    try {
      const maxClientId = await prisma.utilisateur.aggregate({
        _max: {
          clientId: true,
        }
      });

      let clientId = (maxClientId._max.clientId || 0) + 1; 

      const existingUser = await prisma.utilisateur.findFirst({
        where: {
          OR: [
            { email: email },
            { clientId: clientId }
          ]
        }
      });

      if (existingUser) {
        return res.status(400).json({ message: 'Email or ClientId already exists' });
      }

      const newUtilisateur = await prisma.utilisateur.create({
        data: {
          email,
          password: handlePassword,
          nom,
          UserName,
          Telephone: parseInt(Telephone),
          Ville,
          Pays,
          UserNewsId: 1, 
          clientId: clientId, 
        },
      });
      res.status(201).json(newUtilisateur);
    } catch (error) {
      res.status(500).json({ message: 'User creation failed', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
