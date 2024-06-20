import Header from "@/components/Header";
import styles from "../styles/Connexion.module.css"
import React from 'react';
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import axios from "axios"; 
import { useState } from "react";

export default function Connexion(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('/api/Login', {email, password})
          localStorage.setItem('token', response.data.token)
          router.push('/Dashboard')
          
        } catch (error) {
          console.error('Login failled', error);
          
        }

      };
    return(
        <>
        <Header/>
 
       <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formContent}>
          <div className={styles.fields}>
            <h2>Connectez-vous</h2>
            <p>Commencez avec notre platefrome, <br/>connectez vous à votre compte et profitez de l'expérience.</p>
            <div className={styles.inputGroup}>
              <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Entrez votre email" required />
            </div>
            <div className={styles.inputGroup}>
              <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Mot de passe" required />
            </div>      
            <Button className={styles.ghost1} variant="secondary">Se connecter</Button>
            
          <p>Vous n'avez pas de compte ? <a href="/Inscription">Inscrivez vous.</a></p>
          </div>
        </div>
      </form>
    </div>

        </>
    )
}