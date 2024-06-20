import styles from "../styles/Inscription.module.css"
import React, { useState } from 'react';
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Inscription(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Ajouter pour confirmation du mot de passe
  const [nom, setNom] = useState(''); 
  const [UserName, setUserName] = useState('');
  const [Telephone, setTelephone] = useState('');
  const [Ville, setVille] = useState('');
  const [Pays, setPays] = useState('');

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      await axios.post('/api/register', { email, password, nom, UserName, Telephone, Ville, Pays });
      router.push('/Connexion');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit} method="POST">
          <div className={styles.formContent}>
            <div className={styles.fields}>
              <h2>Inscription</h2>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="Entrez votre nom"
                  required
                  value={nom}
                  onChange={(event) => setNom(event.target.value)}
                />
                <input
                  type="text"
                  placeholder="Entrez votre nom d'utilisateur"
                  required
                  value={UserName}
                  onChange={(event) => setUserName(event.target.value)}
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="password"
                  placeholder="Mot de passe"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <input
                  type="password"
                  placeholder="Confirmez votre mot de passe"
                  required
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="Entrez votre Email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <input
                  type="tel"
                  placeholder="Entrez votre numéro de Téléphone"
                  required
                  value={Telephone}
                  onChange={(event) => setTelephone(event.target.value)}
                />
              </div>
              <div className={styles.inputGroup}>
                <Select onValueChange={setPays}>
                  <SelectTrigger className="w-[210px]">
                    <SelectValue className={styles.select} placeholder="Sélectionner votre pays" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Pays</SelectLabel>
                      <SelectItem value="Cameroun">Cameroun</SelectItem>
                      <SelectItem value="Congo">Congo</SelectItem>
                      <SelectItem value="Burkina">Burkina</SelectItem>
                      <SelectItem value="Senegal">Senegal</SelectItem>
                      <SelectItem value="Nigéria">Nigéria</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Select onValueChange={setVille}>
                  <SelectTrigger className="w-[210px]">
                    <SelectValue placeholder="Sélectionner votre ville" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Ville</SelectLabel>
                      <SelectItem value="Douala">Douala</SelectItem>
                      <SelectItem value="Yaounde">Yaounde</SelectItem>
                      <SelectItem value="Ngaoundere">Ngaoundere</SelectItem>
                      <SelectItem value="Garoua">Garoua</SelectItem>
                      <SelectItem value="Maroua">Maroua</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className={styles.ghost1} variant="secondary">S'inscrire</Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
