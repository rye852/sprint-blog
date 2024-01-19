import { Box, ThemeOptions, Typography, useTheme } from '@mui/material';

const About = () => {
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
        sx={{
          fontSize: { xs: '1.75rem', md: '2.2rem' },
          textAlign: { xs: 'center' },
          fontWeight: 'bold',
          textTransform: 'capitalize',
        }}
      >
        À la Course de la Passion : Découvrez l'Équipe De Aya et Latifa,
        Créatrices Intrépides de Vitesse et d'Aventure 🌟🏃‍♀️💨
      </Typography>
      <>
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
            À Propos de Nous
          </Typography>
        </Box>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-25px'}
          color={text?.primary}
          fontWeight={600}
        >
          Nous sommes Aya et Latifa, étudiantes passionnées, sprinteuses
          intrépides, et créatrices de ce projet de classe passionnant. Nous
          tenons à exprimer notre sincère gratitude pour prendre le temps de
          visiter notre site. Merci de vous joindre à nous dans cette aventure
          dédiée à la course de vitesse. Votre présence ici ajoute une valeur
          inestimable à notre projet, et nous sommes ravis de partager cette
          passion commune avec vous.
        </Typography>
      </>
      <>
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
            Notre Histoire
          </Typography>
        </Box>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-25px'}
          color={text?.primary}
          fontWeight={600}
        >
          Notre aventure commence dans le cadre de notre classe de Première Bac
          SMF1, où nous avons décidé de fusionner notre amour pour la course
          rapide avec notre engagement académique. Unissant nos forces, nous
          avons créé cet espace pour explorer, partager et célébrer la passion
          commune qui nous anime.
        </Typography>
      </>

      <>
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
            Notre Vision
          </Typography>
        </Box>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-25px'}
          color={text?.primary}
          fontWeight={600}
        >
          Notre objectif est de créer une plateforme dynamique où la vitesse
          devient une histoire partagée. À travers des articles inspirants, des
          conseils pratiques et des histoires personnelles, nous aspirons à
          créer une communauté engagée de passionnés de la course.
        </Typography>
      </>

      <>
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
            Ce que Vous Trouverez
          </Typography>
        </Box>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-25px'}
          color={text?.primary}
          fontWeight={600}
        >
          Articles Captivants : Explorez nos récits sur la piste, des sprints
          explosifs aux compétitions de relais, et plongez dans l'univers
          palpitant de la course de vitesse. <br />
          <br />
          Conseils Pratiques : Découvrez des astuces d'entraînement, des
          techniques de sprint, et des conseils pour optimiser votre performance
          sur la piste. <br />
          <br />
          Projets Pédagogiques : Suivez notre parcours éducatif en tant
          qu'étudiantes de Première Bac SMF1, transformant notre passion en un
          projet concret au sein de notre cursus. <br />
          <br />
        </Typography>
      </>
      <>
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
            Nous, Aya et Latifa
          </Typography>
        </Box>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-25px'}
          color={text?.primary}
          fontWeight={600}
        >
          Nous sommes plus que des créatrices de contenu ; nous sommes des amies
          liées par notre amour pour la vitesse et notre détermination à
          repousser nos limites. À travers ce projet de classe, nous souhaitons
          exprimer notre gratitude envers notre professeur de sport, qui nous a
          inspirées à canaliser notre passion pour la course. <br />
          <br />
          Merci de faire partie de notre aventure. Rejoignez-nous alors que nous
          transformons notre salle de classe en une piste d'excitation et
          d'apprentissage continu !<br />
          <br />
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-25px'}
          color={text?.secondary}
          fontWeight={600}
        >
          Aya & Latifa 🎓👭 <br />
          Étudiantes en 1ère Bac SMF1 📚
        </Typography>
      </>
    </Box>
  );
};

export default About;
