import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router';
import { Box } from '@mui/material';
import Footer from './components/Footer';

declare module '@mui/material/styles' {
  interface Theme {
    text: {
      primary: string;
      secondary: string;
      link: string;
      nav: string;
      bgColor: string;
      navColor: string;
      invers: string;
    };
  }

  export interface ThemeOptions {
    text?: {
      primary?: string;
      secondary?: string;
      link?: string;
      nav?: string;
      bgColor?: string;
      navColor?: string;
      invers?: string;
    };
  }

  interface TypographyVariants {
    myVar: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    myVar?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    myVar: true;
  }
}

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f00',
      light: '#eee',
      dark: '#111',
    },
  },
});

function App() {
  const [actuelMode, setMode] = useState<'dark' | 'light'>('dark');
  theme = createTheme(
    {
      palette: {
        mode: actuelMode,
      },
      typography: {
        myVar: {
          fontSize: 'clamp(1.25rem, 10vw, 2.5rem)',
          lineHeight: 1.25,
          fontWeight: 500,
        },
      },
    },
    {
      text: {
        primary: theme.palette.mode === 'dark' ? '#fff' : '#111',
        // secondary: theme.palette.mode === 'dark' ? '#bf1e2e' : '#d41c2e',
        secondary: theme.palette.mode === 'dark' ? '#bb86fc' : '#6200ee',
        link: theme.palette.mode === 'dark' ? '#6200ee' : '#bb86fc',
        // nav: theme.palette.mode === 'dark' ? '#000' : '#bf1e2e',
        nav: theme.palette.mode === 'dark' ? '#000' : '#6200ee',
        // navColor: theme.palette.mode === 'dark' ? '#fff' : '#bf1e2e',
        navColor: theme.palette.mode === 'dark' ? '#fff' : '#6200ee',
        bgColor: theme.palette.mode === 'dark' ? '#121212' : '#fff',
        inverse: theme.palette.mode === 'dark' ? '#fff' : '#121212',
      },
    }
  );

  const handleToogle = (): void => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };
  return (
    <ThemeProvider theme={theme}>
      <NavBar handleToogle={handleToogle} />
      <Box
        pt={'70px'}
        pb={'20px'}
        sx={{ background: theme.text.bgColor }}
      >
        <Outlet />
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
