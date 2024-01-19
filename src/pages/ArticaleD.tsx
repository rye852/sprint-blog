import { Box, ThemeOptions, Typography, useTheme } from '@mui/material';

const ArticaleD = () => {
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
          🏆💨 Records de Vitesse en Course : Des Performances Qui Défient la
          Rapidité
        </Typography>
      </Box>

      <Typography
        variant="body2"
        fontSize={{ sx: '1rem', sm: '1.25rem' }}
        color={text?.primary}
      >
        Les records de vitesse en course sont la quintessence de l'athlétisme,
        des moments où les limites humaines sont transcendées. Embarquons pour
        un voyage palpitant à travers ces performances extraordinaires qui ont
        établi de nouveaux standards de rapidité.
      </Typography>
      <>
        <Typography
          color={text?.secondary}
          fontSize={{ sx: '1.25rem', sm: '1.5rem' }}
        >
          1. 🏃‍♂️ Sprint sur Piste : Les Fulgurances Légendaires
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          Sur la piste, les sprinteurs ont repoussé les limites de la vitesse.
          Explorez les fulgurances légendaires, des sprints de 100 mètres aux
          courses éclair sur 400 mètres. Découvrez les noms qui résonnent dans
          l'histoire de l'athlétisme, ayant couru à une vitesse qui semblait
          défier la logique.
        </Typography>
      </>
      <>
        <Typography
          color={text?.secondary}
          fontSize={{ sx: '1.25rem', sm: '1.5rem' }}
        >
          2. 🌐 Records Mondiaux : Des Marques Inégalées
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          Les records mondiaux sont les étalons de la performance en course de
          vitesse. Plongez dans les chiffres qui ont résisté à l'épreuve du
          temps, établissant des marques inégalées sur diverses distances. Ces
          performances incroyables continuent d'inspirer les générations à
          venir.
        </Typography>
      </>
      <>
        <Typography
          color={text?.secondary}
          fontSize={{ sx: '1.25rem', sm: '1.5rem' }}
        >
          3. 🚄 Vitesse de Pointe : Au-Delà des Limites Humaines
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          Explorez les moments où les athlètes ont atteint leur vitesse de
          pointe, une fraction de seconde où le monde semble ralentir. Des
          accélérations foudroyantes aux finales électrisantes, ces instants
          illustrent la beauté brute de la course de vitesse.
        </Typography>
      </>
      <>
        <Typography
          color={text?.secondary}
          fontSize={{ sx: '1.25rem', sm: '1.5rem' }}
        >
          4. 🏅 Olympiades Rapides : Des Podiums Mémorables
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          Les Jeux Olympiques sont le théâtre des performances mémorables en
          course de vitesse. Revivez les moments où les athlètes ont gravi les
          podiums, établissant des records olympiques et capturant l'essence
          même de la compétition rapide.
        </Typography>
      </>
      <>
        <Typography
          color={text?.primary}
          fontSize={{ sx: '1.5rem', sm: '1.75rem' }}
          fontWeight={600}
        >
          Conclusion : 🚀
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          Les records de vitesse en course sont bien plus que des chiffres sur
          un tableau. Ils sont les témoins des capacités extraordinaires du
          corps humain et de la détermination des athlètes à atteindre des
          sommets inégalés. Chaque record est une célébration de la rapidité
          pure et de la quête incessante de repousser les limites.
        </Typography>
      </>
      <>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          color={text?.primary}
        >
          <b>Conseil Final : </b>  🏁 Que ces records vous inspirent à poursuivre vos propres objectifs avec détermination. La course de vitesse est un voyage où chaque foulée compte. Cultivez la passion, restez concentré et rappelez-vous que même le record le plus rapide commence par un premier pas. Que votre parcours soit rapide, durable et rempli de moments qui repoussent vos propres limites !
        </Typography>
      </>
    </Box>
  );
};

export default ArticaleD;
