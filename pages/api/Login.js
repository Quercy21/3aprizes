import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient();

export default async function handler(req, res){
    if(req.method === 'POST'){
        const {email, password} = req.body



        const Utilisateur = await prisma.utilisateur.findFirst({
            where: {
                email: email,
            },
        });
        
        if(Utilisateur && bcrypt.compareSync(password, Utilisateur.password)){

            const token = jwt.sign({id: Utilisateur.id, email: Utilisateur.email}, process.env.JWT_SECRET, {expiresIn: '1h'})
            res.status(200).json({token})
        }else{
            res.status(401).json({message: 'Invalid email or password'})
        }

    }else{
        res.status(405).json({message: 'Message not allowed'})
    }
}

