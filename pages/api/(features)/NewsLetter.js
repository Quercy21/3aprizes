import { PrismaClient } from '@prisma/client'

const { formatISO } = require('date-fns');
const prisma = new PrismaClient()


export default async function handlerCreateNewsLetter(req, res){
    if(req.method === 'POST'){
        const {informations} = req.body
       let DateEnvoie = req.body.DateEnvoie

       const date = new Date(); 
        const formattedDate = formatISO(date);
        DateEnvoie = formattedDate

        const UserId = await prisma.utilisateur.findUnique({
            where:{
                id : req.body.UserNews,
            }
        })
        const UserNews = UserId 
       
        try{
            const newNewsLetter = await prisma.NewsLetter.create({
            data: {
                informations,
                DateEnvoie,
                UserNews
            
            },

             });
        res.status(201).json(newNewsLetter);

        }catch(error){
            res.status(500).json({ message : "NewsLetter creation failled", error: error.message})
        }

    }
    else{
        res.status(405).json({message: 'Methode not allowed'})
    }
}

