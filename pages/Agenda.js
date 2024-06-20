import styles from "../styles/Agenda.module.css"
import HeaderAdmin from "@/components/HeaderAdmin"
import React from 'react';
import { Box, Paper, Typography, Button } from '@mui/material';


export default function Agenda(){
    return(
        <>
        <HeaderAdmin/>
        <h2 className={styles.h2} >Formation des formateurs.</h2>
        <Box className={styles.header}>
       
       <Box className={styles.infoIcons}>
         <Typography variant="body1">📚 cours</Typography>
         <Typography variant="body1">🇫🇷 Français</Typography>
         <Typography variant="body1">🕒 5 jours</Typography>
         <Typography variant="body1">⚠️ Aucun prérequis pour cette formation</Typography>
       </Box>
     </Box>
        <div className={styles.main}>
            <div className={styles.img}>
             <form>
                
                <h2>Cette formation est pour vous </h2>
                <p> Formateur et toute personne souhaitant devenir un professionnel de la formation. Cette formation ne nécessite pas de connaissance ou de pratique préalable en matière de formation.</p>
             </form>
            </div>
        </div>

        {/* <div className={styles.secondPart} >
            <form>
                <button className={styles.bouton}> <a href="/Postuler" >Postuler</a></button>
            </form>

        </div> */}

        <Box className={styles.container}>
      <Paper className={styles.section}>
        <Typography variant="h5" component="h2">
          Programme de la formation
        </Typography>
        <Typography variant="body1" className={styles.module}>
          <strong>Module 1 : S’approprier les fondamentaux de l’animation</strong>
          <br />
          Séquence 1 : Identifier le rôle du formateur
          <br />
          Séquence 2 : Animer à partir d’un scénario pédagogique existant
          <br />
          Séquence 3 : Tenir compte des stratégies d’apprentissage
          <br />
          Séquence 4 : Utiliser les supports de formation
          <br />
          Séquence 5 : Animer une session de formation
          <br />
          <strong>Module 2 : Concevoir une formation et l’animer</strong>
          <br />
          Séquence 1 : Identifier les étapes de la conception d’une formation
          <br />
          Séquence 2 : Concevoir une action de formation en autonomie
          <br />
          Séquence 3 : Animer une séquence
          <br />
          Séquence 4 : Évaluer la formation
          <br />
          <strong>Module 3 : L’Application</strong>
          <br />
          <strong>Module 4 : La Micro Formation</strong>
        </Typography>
      </Paper>
      <Paper className={styles.section}>
        <Typography variant="h5" component="h2">
          Objectif de la formation
        </Typography>
        <Typography variant="body1">
          À l’issue de la formation, l’apprenant devra être capable de :
          <ul>
            <li>Concevoir des actions de formation efficaces et motivantes.</li>
            <li>Utiliser les techniques pédagogiques adaptées.</li>
            <li>Évaluer les acquis et réguler son intervention.</li>
            <li>Animer une session de formation.</li>
          </ul>
        </Typography>
      </Paper>
      <Box>
      <button className={styles.bouton}> <a href="/Postuler" >Postuler</a></button>
      </Box>
    </Box>
       
        </>
    )
}