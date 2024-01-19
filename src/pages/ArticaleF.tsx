import { Box, ThemeOptions, Typography, useTheme } from '@mui/material';

const ArticaleF = () => {
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
          🌐🏁 Événements de Course de Vitesse : Où l'Excitation et la Rapidité
          se Rencontrent !
        </Typography>
      </Box>

      <Typography
        variant="body2"
        fontSize={{ sx: '1rem', sm: '1.25rem' }}
        color={text?.primary}
      >
        Les événements de course de vitesse sont le terrain de jeu des athlètes
        agiles et déterminés. Plongeons dans le monde palpitant de la
        compétition rapide et découvrons les courses qui électrisent les foules
        et font battre les cœurs plus vite.
      </Typography>
      <>
        <Typography
          color={text?.secondary}
          fontSize={{ sx: '1.25rem', sm: '1.5rem' }}
        >
          1. 🏃‍♀️ Sprints Explosifs : Des Départs Fulgurants
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          Les sprints explosifs sont le summum de la rapidité pure. Des départs
          fulgurants, des athlètes qui s'élancent comme des éclairs, ces courses
          sont un spectacle de puissance et de technique. Découvrez les
          compétitions qui mettent en lumière la vitesse brute sur la piste.
        </Typography>
      </>
      <>
        <Typography
          color={text?.secondary}
          fontSize={{ sx: '1.25rem', sm: '1.5rem' }}
        >
          2. 🚀 Courses de Relais : La Coordination à Grande Vitesse
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          Les courses de relais ajoutent une dimension d'équipe à la vitesse
          individuelle. Des échanges de témoin impeccables, une coordination à
          grande vitesse, explorez les compétitions où la rapidité de chaque
          membre de l'équipe est cruciale pour atteindre la ligne d'arrivée en
          tête.
        </Typography>
      </>
      <>
        <Typography
          color={text?.secondary}
          fontSize={{ sx: '1.25rem', sm: '1.5rem' }}
        >
          3. 🌪️ Courses Hurdles : Franchir les Obstacles avec Agilité
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          Les courses de haies demandent agilité et rapidité. Les athlètes
          franchissent chaque obstacle avec une précision remarquable, ajoutant
          une dimension stratégique à la vitesse. Plongez dans l'excitation des
          courses où chaque saut compte.
        </Typography>
      </>
      <>
        <Typography
          color={text?.secondary}
          fontSize={{ sx: '1.25rem', sm: '1.5rem' }}
        >
          4. 🌍 Championnats Mondiaux : Où les Étoiles de la Vitesse Brillent
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          Les championnats mondiaux sont l'apogée de la compétition de vitesse.
          Des athlètes de partout dans le monde convergent pour afficher leurs
          prouesses. Des courses épiques qui déterminent qui est le plus rapide
          sur la scène mondiale, ces championnats sont une célébration de la
          vitesse sous toutes ses formes.
        </Typography>
      </>

      <>
        <Typography
          color={text?.primary}
          fontSize={{ sx: '1.5rem', sm: '1.75rem' }}
          fontWeight={600}
        >
          Conclusion : 🌪️
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          Les événements de course de vitesse sont bien plus que des
          compétitions sportives. Ils sont une célébration de la détermination,
          de la puissance et de la grâce. Que ce soit sur la piste, avec des
          haies, en relais, ou dans des championnats mondiaux, ces événements
          repoussent constamment les limites de ce qui est possible dans le
          monde de la course.
        </Typography>
      </>
      <>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          color={text?.primary}
        >
          <b> Conseil Final : 🏆</b> Chaque événement de course de vitesse offre
          une opportunité unique d'apprendre, de grandir et de repousser vos
          propres limites. Que ce soit en tant que spectateur ou athlète,
          imprégnez-vous de l'excitation, applaudissez les performances
          exceptionnelles et soyez inspiré par la passion qui unit tous les
          amoureux de la vitesse. La course n'est pas seulement une compétition,
          c'est une aventure commune où la vitesse crée des liens et inspire des
          rêves plus rapides. 🏃‍♂️💨
        </Typography>
      </>
    </Box>
  );
};

export default ArticaleF;
