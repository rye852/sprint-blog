import { Box, ThemeOptions, Typography, useTheme } from '@mui/material';
const ArticaleC = () => {
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
          🧠💪 Entraînement Mental en Sprint : Développez Votre Puissance
          Intérieure sur la Piste
        </Typography>
      </Box>

      <Typography
        variant="body2"
        fontSize={{ sx: '1rem', sm: '1.25rem' }}
        color={text?.primary}
      >
        Le sprint ne se résume pas uniquement à la puissance physique.
        L'entraînement mental est une clé souvent négligée pour déverrouiller
        votre véritable potentiel sur la piste. Dans cet article, plongeons dans
        le monde fascinant de l'entraînement mental en sprint et découvrons
        comment développer votre puissance intérieure.
      </Typography>
      <>
        <Typography
          color={text?.secondary}
          fontSize={{ sx: '1.25rem', sm: '1.5rem' }}
        >
          1. 🎯 Visualisation Pré-Sprint : L'Art de la Préparation Mentale :
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          La visualisation pré-sprint est une pratique puissante. Fermez les
          yeux, respirez profondément, et imaginez chaque détail de votre sprint
          à venir. Visualisez le départ explosif, la foulée parfaite, et
          franchissez la ligne d'arrivée avec une victoire resplendissante. La
          visualisation renforce votre confiance et crée un schéma mental
          positif.
        </Typography>
      </>
      <>
        <Typography
          color={text?.secondary}
          fontSize={{ sx: '1.25rem', sm: '1.5rem' }}
        >
          2. 🧘‍♂️ Mindfulness en Mouvement : Connectez-vous à Chaque Foulée
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          Le sprint exige une concentration intense. Pratiquez la pleine
          conscience en mouvement pendant votre entraînement. Concentrez-vous
          sur chaque foulée, ressentez la puissance dans vos muscles, soyez
          conscient de votre respiration. La pleine conscience renforce votre
          connexion esprit-corps, améliorant ainsi votre contrôle mental pendant
          la course.
        </Typography>
      </>
      <>
        <Typography
          color={text?.secondary}
          fontSize={{ sx: '1.25rem', sm: '1.5rem' }}
        >
          3. 📚 Affirmations Positives : Programmez Votre Esprit pour la
          Réussite
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          Créez une série d'affirmations positives liées à votre sprint.
          Répétez-les régulièrement. Que ce soit "Je suis rapide", "Je suis
          puissant", ou "Je domine la piste", ces affirmations renforcent une
          mentalité positive. Votre esprit croit ce que vous lui dites, alors
          assurez-vous que vos paroles vous propulsent vers le succès.
        </Typography>
      </>
      <>
        <Typography
          color={text?.secondary}
          fontSize={{ sx: '1.25rem', sm: '1.5rem' }}
        >
          4. 🎵 Song Motivan : Créez Votre Bande-Son de Victoire
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          La musique a le pouvoir d'influencer notre état d'esprit. Créez une
          playlist de morceaux qui vous motivent et vous inspirent. Écoutez-la
          avant chaque sprint pour stimuler votre énergie et cultiver une
          mentalité gagnante. La musique devient votre alliée, vous guidant vers
          la zone mentale optimale.
        </Typography>
      </>
      <>
        <Typography
          color={text?.primary}
          fontSize={{ sx: '1.5rem', sm: '1.75rem' }}
          fontWeight={600}
        >
          Conclusion : 🌟
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          L'entraînement mental en sprint va au-delà des pistes physiques. C'est
          un voyage intérieur vers la confiance, la concentration et la
          puissance mentale. En intégrant ces pratiques dans votre routine
          d'entraînement, vous découvrirez que votre force intérieure peut être
          tout aussi décisive que votre force physique.
        </Typography>
      </>
      <>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          color={text?.primary}
        >
          <b>Conseil Final 💡 :</b> Ne sous-estimez jamais le pouvoir de
          votre esprit sur votre performance. Prenez le temps de nourrir votre
          mentalité gagnante à chaque étape de votre parcours. Soyez
          bienveillant envers vous-même, célébrez vos victoires mentales, et
          rappelez-vous que chaque progrès, même petit, contribue à renforcer
          votre force intérieure. Que votre mentalité soit votre plus grand
          atout sur la piste et au-delà. 🏃‍♀️💪🧠
        </Typography>
      </>
    </Box>
  );
};

export default ArticaleC;
