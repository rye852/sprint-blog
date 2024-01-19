import { Box, ThemeOptions, Typography, useTheme } from '@mui/material';

const ArticaleB = () => {
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
          🏃‍♀️ Équipement de Sprint : Les Clés pour une Course Rapide et Efficace
        </Typography>
      </Box>

      <Typography
        variant="body2"
        fontSize={{ sx: '1rem', sm: '1.25rem' }}
        color={text?.primary}
      >
        La course de sprint n'est pas simplement une question de vitesse brute,
        mais aussi de l'équipement que vous choisissez. Dans cet article, nous
        explorerons les éléments essentiels de l'équipement de sprint, révélant
        les clés pour une course rapide et efficace.
      </Typography>
      <>
        <Typography
          color={text?.secondary}
          fontSize={{ sx: '1.25rem', sm: '1.5rem' }}
        >
          1. 👟 Chaussures de Sprint : L'Atout Fondamental
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          Les chaussures de sprint sont bien plus que de simples accessoires.
          Elles sont l'atout fondamental de tout sprinteur. Légères, avec des
          pointes pour maximiser l'adhérence, elles offrent le support
          nécessaire pour une poussée explosive. Choisissez des chaussures qui
          s'adaptent parfaitement à votre pied et assurez-vous qu'elles offrent
          un bon maintien de la voûte plantaire.
        </Typography>
      </>
      <>
        <Typography
          color={text?.secondary}
          fontSize={{ sx: '1.25rem', sm: '1.5rem' }}
        >
          2. 🌬️ Tenue Aérodynamique : Éliminez la Résistance à l'Air :
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          Chaque fraction de seconde compte dans le sprint. Une tenue
          aérodynamique peut faire la différence en réduisant la résistance à
          l'air. Optez pour des vêtements ajustés et conçus spécifiquement pour
          minimiser la traînée. Les matières légères et respirantes sont
          également essentielles pour rester à l'aise tout en sprintant.
        </Typography>
      </>
      <>
        <Typography
          color={text?.secondary}
          fontSize={{ sx: '1.25rem', sm: '1.5rem' }}
        >
          3. 🧤 Gants de Sprint : Une Prise Optimale
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          Les gants de sprint ne sont pas uniquement un accessoire stylé. Ils
          offrent une prise optimale lors du démarrage et contribuent à une
          meilleure stabilité des mains pendant la course. Choisissez des gants
          qui offrent un équilibre parfait entre adhérence et flexibilité.
        </Typography>
      </>
      <>
        <Typography
          color={text?.secondary}
          fontSize={{ sx: '1.25rem', sm: '1.5rem' }}
        >
          4. 🕶️ Lunettes de Soleil : Plus que la Mode
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          Au-delà de l'aspect esthétique, les lunettes de soleil peuvent
          améliorer la concentration en filtrant l'éblouissement du soleil.
          Choisissez des lunettes légères avec des verres de qualité optique
          pour une vision nette et sans distorsion.
        </Typography>
      </>
      <>
        <Typography
          color={text?.secondary}
          fontSize={{ sx: '1.25rem', sm: '1.5rem' }}
        >
          5. ⌚ Montre de Course : Suivez Vos Performances
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          Une montre de course fiable peut être un outil précieux pour un
          sprinteur. Choisissez une montre qui mesure le temps avec précision et
          offre des fonctionnalités telles que le chronométrage fractionné pour
          suivre vos performances d'un sprint à l'autre.
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
          L'équipement de sprint n'est pas simplement une question de style,
          c'est un investissement dans votre performance. En choisissant
          soigneusement chaque élément, des chaussures à la montre, vous pouvez
          créer un ensemble qui optimise votre potentiel de vitesse.
        </Typography>
      </>
      <>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          color={text?.primary}
        >
          <b>Conseil Final : 🚀</b> Ne sous-estimez pas l'impact de l'ajustement
          parfait. Assurez-vous que votre équipement vous offre non seulement la
          performance, mais aussi le confort nécessaire. Prenez le temps de
          tester différents modèles, ajustez votre choix en fonction de votre
          style de course unique, et préparez-vous à dépasser vos propres
          limites. L'équipement adapté peut faire la différence entre une bonne
          course et une course exceptionnelle. Que chaque foulée soit soutenue
          par la confiance en votre équipement et la certitude que vous avez
          tout en main pour atteindre vos objectifs.
        </Typography>
      </>
    </Box>
  );
};

export default ArticaleB;
