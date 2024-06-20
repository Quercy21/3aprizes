import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken'
import axios from 'axios'
import {Box, AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemText, IconButton, Grid, Paper, Collapse} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../styles/Dashboard.module.css'
import HeaderAdmin from '@/components/HeaderAdmin';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Dashboard = () => {
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

  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      axios.post('/api/verifyToken', {token})
      .then(response => {
        setUser(response.data.user)
      })
      .catch(error => {
          console.error('Invalid token', error);
          router.push('/Connexion')
      })
    }else{
      router.push('/Connexion')
    }
  },[])

    if (!user) return <div>Loading...</div>

      return <div> Welcome, {utilisateur.email} </div>
  // return (
  //   <>
  //   <Box className={styles.container}>
  //   <HeaderAdmin/>
  //   <IconButton edge="start" aria-label="menu" className={styles.nav} onClick={toggleDrawer}>
  //           <MenuIcon /> 
  //    </IconButton>
  //     <Drawer
  //       className={styles.drawer}
  //       classes={{ paper: styles.drawerPaper }}
  //       open={drawerOpen}
  //       onClose={toggleDrawer}
  //     >
  //       <List>
  //         <ListItem button>
  //           <ListItemText primary="Dashboard" />
  //         </ListItem>
  //         <ListItem button onClick={handleClientsClick}>
  //           <ListItemText primary="Clients" />
  //           {openClients ? <ExpandLess /> : <ExpandMore />}
  //         </ListItem>
  //         <Collapse in={openClients} timeout="auto" unmountOnExit>
  //           <List component="div" disablePadding>
  //             <ListItem button className={styles.nested}>
  //               <ListItemText primary="Liste des particuliers" />
  //             </ListItem>
  //             <ListItem button className={styles.nested}>
  //               <ListItemText primary="Liste des entreprises" />
  //             </ListItem>
  //           </List>
  //         </Collapse>

  //         <ListItem button onClick={handleFormationsClick}>
  //           <ListItemText primary="Formations" />
  //           {openFormations ? <ExpandLess /> : <ExpandMore />}
  //         </ListItem>
  //         <Collapse in={openFormations} timeout="auto" unmountOnExit>
  //           <List component="div" disablePadding>
  //             <ListItem button className={styles.nested}>
  //               <ListItemText primary="Ajouter Formations" />
  //             </ListItem>
  //             <ListItem button className={styles.nested}>
  //               <ListItemText primary="Liste Formations" />
  //             </ListItem>
  //             <ListItem button className={styles.nested}>
  //               <ListItemText primary="Demande Formations" />
  //             </ListItem>
  //           </List>
  //         </Collapse>

  //         <ListItem button onClick={handleFormateursClick}>
  //           <ListItemText primary="Formateurs" />
  //           {openFormateurs ? <ExpandLess /> : <ExpandMore />}
  //         </ListItem>
  //         <Collapse in={openFormateurs} timeout="auto" unmountOnExit>
  //           <List component="div" disablePadding>
  //             <ListItem button className={styles.nested}>
  //               <ListItemText primary="Ajouter Formateurs" />
  //             </ListItem>
  //             <ListItem button className={styles.nested}>
  //               <ListItemText primary="Liste Formateurs" />
  //             </ListItem>
  //             <ListItem button className={styles.nested}>
  //               <ListItemText primary="Gestion Formations" />
  //             </ListItem>
  //             <ListItem button className={styles.nested}>
  //               <ListItemText primary="Historique de Paiements" />
  //             </ListItem>
  //           </List>
  //         </Collapse>

  //       </List>
  //     </Drawer> 
  //     <Box component="main" className={styles.mainContent}>
  //       <Toolbar />
  //       <Grid container spacing={3} className={styles.gridContainer}>
  //         <Grid item xs={12} sm={6} md={4} className={styles.gridItem}>
  //           <Paper className={styles.paper}>
  //             <Typography variant="h6" className= {styles.titles}>Nombres de clients</Typography>
  //             <Typography variant="h4">20</Typography>
  //           </Paper>
  //         </Grid>
  //         <Grid item xs={12} sm={6} md={4} className={styles.gridItem}>
  //           <Paper className={styles.paper}>
  //             <Typography variant="h6" className= {styles.titles}>Nombres de demande de formation</Typography>
  //             <Typography variant="h4">20</Typography>
  //           </Paper>
  //         </Grid>
  //         <Grid item xs={12} sm={6} md={4} className={styles.gridItem}>
  //           <Paper className={styles.paper}>
  //             <Typography variant="h6" className= {styles.titles}>Nombres de formation en cours</Typography>
  //             <Typography variant="h4">20</Typography>
  //           </Paper>
  //         </Grid>
  //       </Grid>
  //       <Box sx={{ mt: 4 }} >
  //         <Typography variant="h6" className= {styles.titles} >Demande de formation</Typography>
  //         <Grid container spacing={2}>
  //           <Grid item xs={12}>
  //             <Paper className={styles.paper}>
  //               <Grid container spacing={2} className={styles.main}>
  //                 <Grid item xs={12} sm={3}>
  //                   <Typography className={styles.titre} >Client</Typography>
  //                 </Grid>
  //                 <Grid item xs={12} sm={3}>
  //                   <Typography className={styles.titre} >Formation</Typography>
  //                 </Grid>
  //                 <Grid item xs={12} sm={2}>
  //                   <Typography className={styles.titre} >Cv</Typography>
  //                 </Grid>
  //                 <Grid item xs={12} sm={2}>
  //                   <Typography className={styles.titre} >Lettre de motivation</Typography>
  //                 </Grid>
  //                 <Grid item xs={12} sm={2}>
  //                   <Typography className={styles.titre} >Statut</Typography>
  //                 </Grid>
  //               </Grid>
  //               <Grid container spacing={2}>
  //                 <Grid item xs={12} sm={3}>
  //                   <Typography>Priso Martial</Typography>
  //                 </Grid>
  //                 <Grid item xs={12} sm={3}>
  //                   <Typography>F. ATEX</Typography>
  //                 </Grid>
  //                 <Grid item xs={12} sm={2}>
  //                   <Button variant="contained" className={`${styles.fullWidthButton} ${styles.btn} `}>Télécharger</Button>
  //                 </Grid>
  //                 <Grid item xs={12} sm={2}>
  //                   <Button variant="contained" className={`${styles.fullWidthButton} ${styles.btn} `}>Télécharger</Button>
  //                 </Grid>
  //                 <Grid item xs={12} sm={2}>
  //                   <Button variant="contained"  className={`${styles.fullWidthButton} ${styles.btn1} `} >Valider</Button>
  //                   <Button variant="contained"  className={`${styles.fullWidthButton} ${styles.marginTop}`}>Rejeter</Button>
  //                 </Grid>
  //               </Grid>
  //               <Grid container spacing={2} sx={{ mt: 2 }}>
  //                 <Grid item xs={12} sm={3}>
  //                   <Typography>Priso Annitta</Typography>
  //                 </Grid>
  //                 <Grid item xs={12} sm={3}>
  //                   <Typography>F. ATEX</Typography>
  //                 </Grid>
  //                 <Grid item xs={12} sm={2}>
  //                   <Button variant="contained" className={`${styles.fullWidthButton} ${styles.btn} `}>Télécharger</Button>
  //                 </Grid>
  //                 <Grid item xs={12} sm={2}>
  //                   <Button variant="contained" className={`${styles.fullWidthButton} ${styles.btn} `}>Télécharger</Button>
  //                 </Grid>
  //                 <Grid item xs={12} sm={2}>
  //                   <Button variant="contained" color="success" className={`${styles.fullWidthButton} ${styles.btn1} `}>Valider</Button>
  //                   <Button variant="contained" color="error" className={`${styles.fullWidthButton} ${styles.marginTop}`}>Rejeter</Button>
  //                 </Grid>
  //               </Grid>
  //             </Paper>
  //           </Grid>
  //         </Grid>
  //       </Box>
  //     </Box>
  //   </Box>
  //   </>
  // );
};


export default Dashboard;