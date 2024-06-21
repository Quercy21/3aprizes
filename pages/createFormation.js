// import styles from "../styles/DashboardClient.module.css"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken'
import {Box, AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemText, IconButton, Grid, Paper, Collapse} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '@/styles/createFormation.module.css'
import HeaderAdmin from '@/components/HeaderAdmin';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default async function DashboardClient(){
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [openClients, setOpenClients] = useState(false);
    const [openFormations, setOpenFormations] = useState(false);
    const [openFormateurs, setOpenFormateurs] = useState(false);
  
    const toggleDrawer = () => { setDrawerOpen(!drawerOpen);
    };
    const handleClientsClick = () => {
      setOpenClients(!openClients);
    };
  
    const handleFormationsClick = () => {
      setOpenFormations(!openFormations);
    };
  
    const handleFormateursClick = () => {
      setOpenFormateurs(!openFormateurs);
    };

    const [formData, setFormData] = useState({
        nom: '',
        telephone: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        cv: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, cv: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (formData.password !== formData.confirmPassword) {
            alert('Les mots de passe ne correspondent pas');
            return;
        console.log(formData);
    };

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    const res = await fetch('/api/formateurs', {
      method: 'POST',
      body: formDataToSend,
    });

    if (res.ok) {
      alert('Formateur ajouté avec succès');
      setFormData({
        nom: '',
        telephone: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        cv: null,
      });
    } else {
      const error = await res.json();
      alert('Erreur lors de l\'ajout du formateur: ' + error.details);
    }
  };
  

    return(
        <>
        <HeaderAdmin/>
        <Box className={styles.container}>
    
    <IconButton edge="start" aria-label="menu" className={styles.nav} onClick={toggleDrawer}>
            <MenuIcon /> 
     </IconButton>
      <Drawer
        className={styles.drawer}
        classes={{ paper: styles.drawerPaper }}
        open={drawerOpen}
        onClose={toggleDrawer}>
        <List>
        <ListItem button>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={handleClientsClick}>
            <ListItemText primary="Clients" />
            {openClients ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openClients} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={styles.nested}>
              <a href='/'>Liste des particuliers</a>
                <ListItemText  />
              </ListItem>
              <ListItem button className={styles.nested}>
              <a href='/'>Liste des entreprises</a>
                <ListItemText />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleFormationsClick}>
            <ListItemText primary="Formations" />
            {openFormations ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openFormations} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={styles.nested}>
              <a href='/'>Ajouter Formations</a>
                <ListItemText  />
              </ListItem>
              <ListItem button className={styles.nested}>
              <a href='/'>Liste Formations</a>
                <ListItemText  />
              </ListItem>
              <ListItem button className={styles.nested}>
              <a href='/'>Demande Formations</a>
                <ListItemText  />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleFormateursClick}>
            <ListItemText primary="Formateurs" />
            {openFormateurs ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openFormateurs} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={styles.nested}>
              <a href='/'>Ajouter Formateurs</a>
                <ListItemText  />
              </ListItem>
              <ListItem button className={styles.nested}>
              <a href='/'>Liste Formateurs</a>
                <ListItemText  />
              </ListItem>
              <ListItem button className={styles.nested}>
              <a href='/'>Gestion Formations</a>
                <ListItemText  />
              </ListItem>
              <ListItem button className={styles.nested}>
              <a href='/'>Historique de Paiements</a>
                <ListItemText  />
              </ListItem>
            </List>
          </Collapse>

        </List>
      </Drawer> 
      <Box component="main" className={styles.mainContent}>
        <Toolbar />
        
        <div className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label>Nom</label>
            <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
          </div>
          <div className={styles.field}>
            <label>Numéro de téléphone</label>
            <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} />
          </div>
          <div className={styles.field}>
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className={styles.field}>
            <label>UserName</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
          </div>
          <div className={styles.field}>
            <label>Mot de Passe</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </div>
          <div className={styles.field}>
            <label>Confirmez mot de passe</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          </div>
          <div className={styles.field}>
            <label>CV</label>
            <input type="file" name="cv" onChange={handleFileChange} />
          </div>
          <button type="submit" className={styles.submitButton}>Confirmer</button>
        </form>
      </div>
      </Box>
    </Box>
        
        </>
    )
}