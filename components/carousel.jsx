// components/CardSection.js
import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import styles from '../styles/carousel.module.css';

const CardSection = () => {
  return (
    <Box className={styles.cardSection}>
      <Paper className={styles.card}>
        <Typography variant="h6">Fourniture des pièces et accessoires de rechange</Typography>
        <Typography variant="body1"  className={styles.para} >3A-PRIZE’S propose une expertise spécialisée pour la fourniture d’un large éventail de pièces et accessoires de rechanges de meilleures qualité avec des délais de livraison littéralement courts dans différents secteurs. </Typography>
      </Paper>
      <Paper className={styles.card}>
        <Typography variant="h6">Fourniture des pièces et accessoires de rechange</Typography>
        <Typography variant="body1" className={styles.para}>3A-PRIZE’S propose une expertise spécialisée pour la fourniture d’un large éventail de pièces et accessoires de rechanges de meilleures qualité avec des délais de livraison littéralement courts dans différents secteurs. </Typography>
      </Paper>
      <Paper className={styles.card}>
        <Typography variant="h6">Fourniture des pièces et accessoires de rechange</Typography>
        <Typography variant="body1" className={styles.para}>3A-PRIZE’S propose une expertise spécialisée pour la fourniture d’un large éventail de pièces et accessoires de rechanges de meilleures qualité avec des délais de livraison littéralement courts dans différents secteurs. .</Typography>
      </Paper>
    </Box>
  );
};

export default CardSection;
