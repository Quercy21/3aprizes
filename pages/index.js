import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import styles from "../styles/index.module.css"
import { Button } from "@/components/ui/button"
import Footer from "@/components/Footer";
import * as React from "react"
import Carousel from "@/components/carousel";
import CardContact from "@/components/CardContact"
 
import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (  
    <>
      <title>Accueil</title>
      <Header/>

      <div className={styles.main}>
        <div className={styles.texte}>
            <h1> Faites appel à <span className={styles.green}>
              nos experts formateurs</span> pour développer les compétences de vos équipes.</h1>
            <p>Rejoignez nous avec des formations innovantes en phase avec 
              la sécurité et les bonnes pratiques. Nous vous proposons une large gamme de formations 
              pour répondre à vos enjeux de développement des compétences localement ou pour des projets internationaux. </p>
              <Button className={styles.ghost1} variant="secondary"><a href="/Connexion"> Voir plus </a></Button>
        </div>

        <div className={styles.img}>
        <Image
            src="/th.jpg"
            alt=""
            width={700} 
            height={350} 
         />
        </div>
      </div>
      <div className={styles.secondSection}>
        <div className={styles.secondImg}>
          <Image
            src="/2.png"
            alt=""
            width={500}
            height={400}
          />
        </div>

        <div className={styles.secondTexte}>
          <h2>Choisissez-nous simplement!</h2>
          <p>
          Présent au Cameroun et représenté au
           Sénégal, Burkina Faso, Mali et Niger à travers ses partenaires 
           Locaux, les experts de 3A-PRIZE’S apportent des réponses inclusives et personnalisées aux défis de nos clients dans un
            large éventail de secteurs (Pétrolier, Minier, BTP, brassicole, agroalimentaire…) 
            en vue de satisfaire les engagements ponctuels à la gestion à long terme sur des décennies.
          </p>
          <p>Nous sommes une entreprise qui offre des services de conception et de construction pour vous, des esquisses initiales à la construction finale.</p>
          <Button className={styles.ghost1} variant="secondary"> <a href="/Connexion"> Voir plus </a></Button>
        </div>
      </div>
            <div className={styles.slide}>
              <h1>Nos services</h1>
              <Carousel></Carousel>
              
            </div>

            <div className={styles.CardContact}>
            <h1>Nos adresses</h1>
              <CardContact/>
            </div>

      <Footer/>
    </>

  )
}
