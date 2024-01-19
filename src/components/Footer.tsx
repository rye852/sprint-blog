import { useTheme } from '@emotion/react';
import { Box, Grid, ThemeOptions, Typography } from '@mui/material';
const Footer = () => {
  const { text }: ThemeOptions = useTheme();
  const date = new Date();
  const titels = [
    {
      title: 'Catégories',
      childrens: ['- Sprint - Entraînement', '- Événements - Article'],
    },
    {
      title: 'À Propos',
      childrens: [
        `Notre site est dédié à la passion de la course de vitesse. Explorez nos articles, guides et conseils pour repousser vos limites.      `,
      ],
    },
  ];
  return (
    <Box
      sx={{
        background: text?.nav,
        width: '100vw',
        p: { xs: '15px', md: '20px' },
        my: '0',
      }}
    >
      <Grid
        container
        spacing={{ xs: 5, md: 3 }}
        columns={{ xs: 4, sm: 8 }}
        alignItems={'start'}
        justifyContent={'space-around'}
        className="m0"
      >
        {titels.map((e, key) => (
          <Grid
            item
            xs={4}
            sm={4}
          >
            <Typography
              key={key}
              margin={0}
              mb={2}
              variant="h6"
              sx={{ fontSize: { xs: '.75rem', md: '1.25rem' } }}
              className="footerText"
              color={"#fff"}
              fontWeight={600}
              textAlign={'center'}
            >
              {e.title}
            </Typography>{' '}
            {e.childrens.map((e) => (
              <Typography
                key={key}
                margin={0}
                variant="subtitle1"
                sx={{ fontSize: { xs: '.75rem', md: '1rem' } }}
                color={"#fff"}
                fontWeight={600}
                textAlign={'center'}
              >
                {e}
              </Typography>
            ))}
          </Grid>
        ))}
              <Typography
        mt={6}
        variant="h6"
        sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}
        className="footerText"
        color={'#fff'}
        fontWeight={600}
        textAlign={'center'}
      >
        © {date.getFullYear()} AYA&LATI. Tous droits réservés
    
      </Typography>
      <Typography
        mt={6}
        variant="h6"
        sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}
        className="footerText"
        color={'#fff'}
        fontWeight={600}
        textAlign={'center'}
      >

        <a href="https://github.com/rye852/" target="_blank">Développé par JR clicke pour voir le github</a>
      </Typography>
      </Grid>
    </Box>
  );
};

export default Footer;
