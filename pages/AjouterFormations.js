import { useState, useEffect } from 'react';
import {Box, AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemText, IconButton, Grid, Paper, Collapse} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '@/styles/AjouterFormations.module.css'
import HeaderAdmin from '@/components/HeaderAdmin';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default  async function DashboardClient(){
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
        intitule:'',
        prerequis:'',
        prix:'',
        heure:'',
        delais:'',
        creePar:'',
        debut: '',
        duree:'',
        image:'',
        Forapport:'',
        section:'',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, cv: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
       

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    const res = await fetch('/api/formations', {
      method: 'POST',
      body: formDataToSend,
    });

    if (res.ok) {
      alert('Formation ajouté avec succès');
      setFormData({
        intitule:'',
        prerequis:'',
        prix:'',
        heure:'',
        delais:'',
        creePar:'',
        debut: '',
        duree:'',
        image:'',
        Forapport:'',
        section:'',
      });
    } else {
      const error = await res.json();
      alert('Erreur lors de l\'ajout d\'une formation: ' + error.details);
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
            <label>intitule</label>
            <input type="text" name="intitule" value={formData.intitule} onChange={handleChange} />
          </div>
          <div className={styles.field}>
            <label>Prerecquis</label>
            <input type="text" name="Prerecquis" value={formData.Prerecquis} onChange={handleChange} />
          </div>
          <div className={styles.field}>
            <label>prix</label>
            <input type="prix" name="text" value={formData.prix} onChange={handleChange} />
          </div>
          <div className={styles.field}>
            <label>heure</label>
            <input type="text" name="heure" value={formData.heure} onChange={handleChange} />
          </div>
          <div className={styles.field}>
            <label>delais</label>
            <input type="text" name="delais" value={formData.delais} onChange={handleChange} />
          </div>
          <div className={styles.field}>
            <label>creePar</label>
            <input type="text" name="creePar" value={formData.creePar} onChange={handleChange} />
          </div>
          <div className={styles.field}>
            <label>debut</label>
            <input type="date" name="debut"  value={formData.debut} onChange={handleChange} />
          </div>
          <div className={styles.field}>
            <label>duree</label>
            <input type="text" name="duree" value={formData.duree} onChange={handleChange} />
          </div>
          <div className={styles.field}>
            <label>Forapport</label>
            <input type="text" name="Forapport" value={formData.Forapport} onChange={handleChange} />
          </div>
          <div className={styles.field}>
            <label>section</label>
            <input type="text" name="section" value={formData.section} onChange={handleChange} />
          </div>
          <div className={styles.field}>
            <label>image</label>
            <input type="fields" name="image"  onChange={handleFileChange} />
          </div>

          <button type="submit" className={styles.submitButton}>Confirmer</button>
        </form>
      </div>
      </Box>
    </Box>
        
        </>
    )
}