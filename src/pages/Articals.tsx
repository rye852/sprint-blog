import { useTheme } from '@emotion/react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  ThemeOptions,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Articals = () => {
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
      <Typography
        variant="h4"
        color={text?.secondary}
        textAlign={'center'}
        sx={{
          fontSize: { xs: '1.75rem', md: '2.2rem' },
          fontWeight: 'bold',
          textTransform: 'capitalize',
        }}
      >
        📚 Explorez la Vitesse ! 🏃‍♀️💨
      </Typography>
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
          maxWidth={'90vw'}
          margin={'auto'}
        >
          🏃‍♀️✨ Décryptage de la Vitesse : Explorez Six Facettes Captivantes !
          ✨🏃‍♂️
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
        >
          {' '}
          <Link to="/articales/1">
            <Card
              sx={{ maxWidth: 345, margin: 'auto', background: text?.bgColor }}
            >
              <CardActionArea>
                <CardContent sx={{ background: text?.bgColor }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: text?.primary }}
                  >
                    Techniques de Sprint Explosives
                  </Typography>
                  <Typography
                    variant="body2"
                    color={text?.primary}
                  >
                    Plongez dans l'art du sprint avec des conseils pratiques
                    pour développer une explosivité maximale dès le départ.
                    Explorez des techniques d'entraînement spécifiques et
                    affinez chaque mouvement pour maximiser votre vitesse sur la
                    piste. 🚀
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>

        <Grid
          item
          xs={4}
        >
          {' '}
          <Link to="/articales/2">
            <Card
              sx={{ maxWidth: 345, margin: 'auto', background: text?.bgColor }}
            >
              <CardActionArea>
                <CardContent sx={{ background: text?.bgColor }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color={text?.primary}
                  >
                    Équipement Essentiel du Sprinteur
                  </Typography>
                  <Typography
                    variant="body2"
                    color={text?.primary}
                  >
                    Découvrez le monde des équipements incontournables du
                    sprinteur qui font toute la différence. Des chaussures
                    spécialisées aux gadgets high-tech, explorez des revues
                    détaillées et des conseils d'experts pour choisir le
                    matériel optimal. 🛠️👟
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>

        <Grid
          item
          xs={4}
        >
          {' '}
          <Link to="/articales/3">
            <Card
              sx={{ maxWidth: 345, margin: 'auto', background: text?.bgColor }}
            >
              <CardActionArea>
                <CardContent sx={{ background: text?.bgColor }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color={text?.primary}
                  >
                    Entraînement Mental pour la Vitesse
                  </Typography>
                  <Typography
                    variant="body2"
                    color={text?.primary}
                  >
                    Explorez les stratégies de concentration et les techniques
                    de préparation mentale pour des performances
                    exceptionnelles. Des méthodes de visualisation aux exercices
                    de pleine conscience, cultivez la force mentale pour
                    surpasser les obstacles. 🧠💪
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>

        <Grid
          item
          xs={4}
        >
          {' '}
          <Link to="/articales/4">
            <Card
              sx={{ maxWidth: 345, margin: 'auto', background: text?.bgColor }}
            >
              <CardActionArea>
                <CardContent sx={{ background: text?.bgColor }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color={text?.primary}
                  >
                    Histoires Inspirantes de Record de Vitesse
                  </Typography>
                  <Typography
                    variant="body2"
                    color={text?.primary}
                  >
                    Découvrez des récits captivants d'athlètes qui ont repoussé
                    les limites de la vitesse, battant des records et inspirant
                    le monde. Explorez les coulisses de leurs réussites et la
                    détermination qui a laissé une empreinte indélébile. 🏆🌍
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>

        <Grid
          item
          xs={4}
        >
          {' '}
          <Link to="/articales/5">
            <Card
              sx={{ maxWidth: 345, margin: 'auto', background: text?.bgColor }}
            >
              <CardActionArea>
                <CardContent sx={{ background: text?.bgColor }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color={text?.primary}
                  >
                    Alimentation Optimale pour les Sprinteurs
                  </Typography>
                  <Typography
                    variant="body2"
                    color={text?.primary}
                  >
                    Explorez les secrets d'une alimentation adaptée allant
                    au-delà du simple carburant. Des plans nutritionnels
                    détaillés aux recettes énergétiques, maximisez votre
                    énergie, optimisez votre récupération et renforcez votre
                    endurance. 🍏🥤
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>

        <Grid
          item
          xs={4}
        >
          {' '}
          <Link to="/articales/6">
            <Card sx={{ maxWidth: 345, margin: 'auto', background: text?.bgColor }}>
              <CardActionArea>
                <CardContent sx={{background: text?.bgColor}}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color={text?.primary}
                  >
                    Les Événements de Course Incontournables
                  </Typography>
                  <Typography
                    variant="body2"
                    color={text?.primary}
                  >
                    Soyez au cœur de l'action avec les derniers événements
                    sportifs de course de vitesse à ne pas manquer. Des
                    compétitions locales aux championnats mondiaux, restez
                    informé(e) et plongez au cœur de la communauté passionnée.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
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
          maxWidth={'90vw'}
          margin={'auto'}
        >
          🏃‍♀️🎥 Vivez la Vitesse : Vidéos Captivantes sur la Course ! 💨📹
        </Typography>
      </Box>
      <Box>
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
          🎬Explorez l'univers de la course rapide à travers des vidéos
          captivantes ! 🏃‍♀️💨 Découvrez des techniques de sprint explosif,
          plongez dans l'équipement essentiel des sprinteurs, et explorez les
          records de vitesse incroyables. Rejoignez-nous pour des conseils
          nutritionnels, des entraînements mentaux stimulants et des moments
          forts des compétitions de vitesse. 🌟 Qu'attendez-vous ? Cliquez,
          regardez, et laissez-vous emporter par la vitesse en action ! 🚀📹
          #Vitesse #Course #Sprint <br />
          <br />
          <b>Sprint Explosif :</b>
          <br />
          - 💥 Sprints explosifs techniques
          <br />
          - 🚀 Entraînement sprint puissant
          <br />
          <br />
          <b>Équipement de Sprint :</b>
          <br />
          - 👟 Revues d'équipement pour sprinteurs - 🛠️ Choix d'équipement pour
          les sprints <br />
          <br />
          <b>Entraînement Mental en Sprint :</b>
          <br />
          - 🧠 Stratégies mentales pour le sprint
          <br />
          - 💪 Entraînement mental pour les athlètes de sprint
          <br />
          <br />
          <b>Records de Vitesse :</b>
          <br />
          - 🏆 Records de vitesse incroyables
          <br />
          - 🌍 Athlètes qui ont battu des records de sprint
          <br />
          <br />
          <b>Nutrition pour les Sprinteurs :</b>
          <br />
          - 🍏 Conseils nutritionnels pour les athlètes de sprint
          <br />
          - 🥤 Repas énergétiques pour les sprinteurs
          <br />
          <br />
          <b>Événements de Course de Vitesse :</b>
          <br />
          - 🏁 Championnats de sprint à ne pas manquer
          <br />
          - 🎉 Moments forts des compétitions de vitesse
          <br />
        </Typography>
        <Typography
          variant="h5"
          component={'p'}
          color={text?.secondary}
          fontWeight={600}
          textAlign={'center'}
        >
          <br />
          🌟 Un grand merci pour votre intérêt et votre énergie ! Restez à
          l'affût pour plus de moments rapides. Merci de faire partie de cette
          course passionnante ! 🏁🙏
        </Typography>
      </Box>
    </Box>
  );
};

export default Articals;
