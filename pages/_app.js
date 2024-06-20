import "@/styles/globals.css";
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Head from 'next/head';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

export default function App({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>3Aprizes</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline intègre des styles de base pour les navigateurs */}
        <CssBaseline />
        {/* Composant de la page actuelle */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
