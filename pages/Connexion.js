import Header from "@/components/Header";
import styles from "../styles/Connexion.module.css"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import axios from "axios"; 

export default function Connexion(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/Login', { email, password });
      const token = response.data.token;

      // Stocker le token dans localStorage ou les cookies
      localStorage.setItem('token', token);

      // Rediriger vers le dashboard
      router.push('/Dashboard');
    } catch (error) {
      if (error.response.status === 403) {
        await refreshToken(); // Appel à la fonction de rafraîchissement du token
        await handleSubmit(event); // Réessayer la soumission du formulaire après le rafraîchissement
      } else {
        console.error('Login failed', error);
      }
    }
  };

  const refreshToken = async () => {
    const oldToken = localStorage.getItem('token');
    try {
      const response = await axios.post('/api/refresh-token', { token: oldToken });
      const newToken = response.data.token;
      localStorage.setItem('token', newToken);
    } catch (error) {
      console.error('Token refresh failed:', error.response?.data?.message || error.message);
    }
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formContent}>
            <div className={styles.fields}>
              <h2>Connectez-vous</h2>
              <p>Commencez avec notre plateforme, <br/>connectez vous à votre compte et profitez de l'expérience.</p>
              <div className={styles.inputGroup}>
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Entrez votre email" required />
              </div>
              <div className={styles.inputGroup}>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Mot de passe" required />
              </div>      
              <Button className={styles.ghost1} variant="secondary" type="submit">Se connecter</Button>
              <p>Vous n'avez pas de compte ? <a href="/Inscription">Inscrivez vous.</a></p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
