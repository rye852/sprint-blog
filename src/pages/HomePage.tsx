import { useTheme } from '@emotion/react';
import sprint from '../images/Sprint.jpg';
import etude from '../images/erude.jpg';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  ThemeOptions,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { text }: ThemeOptions = useTheme();
  return (
    <Box
      sx={{
        color: text?.primary,
        px: { xs: '20px', md: '40px' },
        py: '20px',
        display: 'flex',
        gap: '40px',
        flexDirection: 'column',
      }}
    >
      <Grid
        container
        spacing={{ xs: 5, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Grid
          item
          xs={4}
          sm={4}
          md={8}
        >
          <Box>
            <Typography
              variant="h4"
              color={text?.secondary}
              sx={{
                fontSize: { xs: '1.75rem', md: '2.2rem' },
                textAlign: { xs: 'center', sm: 'start' },
                fontWeight: 'bold',
                textTransform: 'capitalize',
              }}
            >
              voici Votre Destination Pour Tout sur la Course de Vitesse
            </Typography>
            <Typography
              variant="h6"
              component={'p'}
              color={text?.primary}
              sx={{
                mt: '1rem',
                fontSize: { xs: '1rem', md: '1.25rem' },
                textAlign: { xs: 'center', sm: 'start' },
              }}
            >
              Bienvenue sur notre super site dédié à la course rapide ! Que tu
              sois un fan de sprint, un pro de la piste, ou simplement curieux
              de ce qui se passe dans le monde de la vitesse, t'es au bon
              endroit. Ici on te tient au jus des dernières news et astuces sur
              la course rapide. <br />
              Explore nos articles cool, guides faciles à comprendre et conseils
              rédigés par des experts qui kiffent vraiment leur job. Que tu
              veuilles booster tes performances, suivre les événements sportifs,
              ou simplement nourrir ta passion pour la vitesse, on a tout ce
              qu'il te faut.
              <br />
              Fais un tour dans nos catégories, découvre des interviews cool
              avec des athlètes super connus, et plonge dans l'univers
              passionnant de la course rapide. Viens rejoindre notre gang,
              partage tes expériences, et trouve l'inspiration pour dépasser tes
              limites. On est là pour t'accompagner dans cette aventure pleine
              de vitesse ! 🏃‍♂️💨✨
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
        >
          <Card sx={{ maxWidth: 345, mx: 'auto' }}>
            <CardMedia
              sx={{
                height: 250,
                objectFit: 'cover',
                objectPosition: 'topcenter',
              }}
              image={sprint}
              title="des femme qui font la course"
            />
            <CardContent sx={{ background: text?.bgColor }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color={text?.primary}
              >
                🚀 Explorez la Vitesse : Lisez nos Articles ! 🏁✨
              </Typography>
              <Typography
                variant="body2"
                color={text?.primary}
              >
                Découvrez des conseils super cool et des histoires intéressantes
                sur la course de vitesse. Apprenez des trucs géniaux pour aller
                plus vite et amusez-vous en lisant nos articles ! Prêt(e) à
                commencer l'aventure ? Cliquez ici ! 🏁✨
              </Typography>
            </CardContent>
            <CardActions sx={{background: text?.bgColor }}>
              <Link to="articals" >
                <Button
                  sx={{ color: text?.secondary, mx: 'auto' }}
                  size="medium"
                >
                  Explorez les Articles
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Box
        sx={{
          background: text?.secondary,
          width: { xs: '110vw', sm: '100vw' },
          transform: 'translateX(-40px)',
          px: { xs: '20px', md: '40px' },
          py: { xs: '10px', md: '14px' },
          my: '10px',
        }}
      >
        <Typography
          fontWeight={'600'}
          variant="h5"
          textAlign={'center'}
          color={'#fff'}
        >
          ⌛ Prenez le Temps de Nous Découvrir
        </Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 5, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        alignItems={'center'}
      >
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
        >
          <Card sx={{ maxWidth: 345, mx: 'auto' }}>
            <CardMedia
              sx={{ height: '250px', objectFit: 'cover' }}
              image={etude}
              title=""
            />
            <CardContent sx={{ background: text?.bgColor }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color={text?.primary}
              >
                Rencontrez Vous Aya et Latifa ?
              </Typography>
              <Typography
                variant="body2"
                color={text?.primary}
              >
                Découvrez qui se cache derrière les articles ! Aya et Latifa,
                étudiantes passionnées et créatrices de ce projet de classe
                dédié à la course de vitesse. Plongez dans notre histoire, notre
                motivation, et apprenez à nous connaître davantage.🏃‍♀️💨
              </Typography>
            </CardContent>
            <CardActions sx={{ background: text?.bgColor }}>
              <Link to="about" style={{ background: text?.bgColor }}>
                {' '}
                <Button
                  sx={{ color: text?.secondary, mx: 'auto' }}
                  size="medium"
                >
                  savoir plus sur nous !
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>

        <Grid
          item
          xs={4}
          sm={4}
          md={8}
        >
          <Box>
            <Typography
              variant="h4"
              color={text?.secondary}
              sx={{
                fontSize: { xs: '1.75rem', md: '2.2rem' },
                textAlign: { xs: 'center', sm: 'start' },
                fontWeight: 'bold',
                textTransform: 'capitalize',
              }}
            >
              👋 Bienvenue sur notre Projet de Classe !
            </Typography>
            <Typography
              variant="h6"
              component={'p'}
              color={text?.primary}
              sx={{
                mt: '1.25rem',
                fontSize: { xs: '1rem', md: '1.25rem' },
                textAlign: { xs: 'center', sm: 'start' },
              }}
            >
              Nous sommes Aya et Latifa, deux étudiantes passionnées par la
              course et résolument déterminées à partager notre amour commun
              pour la vitesse avec vous. Bienvenue sur notre site, un projet de
              classe qui a vu le jour grâce à notre passion partagée. <br />
              Ce coin virtuel est notre espace dédié à tout ce qui concerne la
              course de vitesse. C'est ici que nous partageons notre voyage
              d'exploration à travers le monde de la course, nos découvertes
              fascinantes, et les conseils géniaux que nous avons glanés en
              chemin. Chaque article est une plongée dans notre aventure, une
              aventure que nous sommes ravis de partager avec vous. Nous vous
              invitons à explorer nos articles, à vous immerger dans nos récits
              et à tirer profit des conseils que nous avons soigneusement
              rassemblés. Posez-nous des questions, partagez vos propres
              histoires, car ici, la course est une expérience collective. Après
              tout, la route est toujours plus agréable quand on la parcourt
              ensemble, n'est-ce pas ? 🏃‍♀️💨 <br />
              Enfin Merci d'être à nos côtés dans cette aventure passionnante !{' '}
              <br />
              <br />
              Avec gratitude, Aya et Latifa 🎓✨
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
