import styles from '../styles/CardContact.module.css';
import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

const AddressCards = () => {
  return (
    <Box className={styles.container}>
      <Paper className={`${styles.card} ${styles.cardCameroun}`}>
        <Typography variant="h5" component="h3" className={styles.title}>
          3A-PRIZE'S SARL CAMEROUN
        </Typography>
        <Typography variant="body1">
          Siège social: Makèpè – Tradex Parcours Vita.
          <br />
          BP: 3123 – Douala
          <br />
          Tel: (+237) 699 468 777 / (+237) 699 747 292
          <br />
          Mail: secretariat@3aprize.com
        </Typography>
      </Paper>
      <Paper className={`${styles.card} ${styles.cardBurkinaFaso}`}>
        <Typography variant="h5" component="h3" className={styles.title}>
          3A-PRIZE'S SARL BURKINA FASO
        </Typography>
        <Typography variant="body1">
          Siège social: Ouagadougou patte d’oie derrière pharmacie des apôtres.
          <br />
          S/C: 18 BP 145 Ouagadougou 18
          <br />
          Tel: (+226) 56433554 / (+226) 77433434
          <br />
          Mail: secretariatbf@3aprize.com
        </Typography>
      </Paper>
    </Box>
  );
};

export default AddressCards;
