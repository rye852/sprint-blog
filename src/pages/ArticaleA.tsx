import { Box, ThemeOptions, Typography, useTheme } from '@mui/material';

const ArticaleA = () => {
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
          🚀 Sprints Explosifs Techniques : Libérez Votre Puissance sur la Piste
          !
        </Typography>
      </Box>

      <Typography
        variant="body2"
        fontSize={{ sx: '1rem', sm: '1.25rem' }}
        color={text?.primary}
      >
        Plongez dans l'art du sprint avec des conseils pratiques pour développer
        une explosivité maximale dès le départ. Explorez des techniques
        d'entraînement spécifiques et affinez chaque mouvement pour maximiser
        votre vitesse sur la piste. 🚀
      </Typography>
      <>
        <Typography
          color={text?.secondary}
          fontSize={{ sx: '1.25rem', sm: '1.5rem' }}
        >
          1. 💥 Le Départ Explosif :
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          Le secret d'un sprint explosif réside dans un départ puissant. La
          première foulée est cruciale. Pratiquez des départs explosifs en
          concentrant votre énergie vers l'avant. Gardez le corps bas et
          propulsez-vous vers l'avant avec une force explosive dès le coup de
          pistolet.
        </Typography>
      </>
      <>
        <Typography
          color={text?.secondary}
          fontSize={{ sx: '1.25rem', sm: '1.5rem' }}
        >
          2. 🏃‍♀️ Foulées Efficaces :
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          La longueur de vos foulées joue un rôle majeur dans la vitesse.
          Travailler sur l'extension complète de la jambe peut augmenter la
          distance parcourue à chaque foulée. Entraînez-vous à étirer vos jambes
          sans compromettre la fréquence des foulées.
        </Typography>
      </>
      <>
        <Typography
          color={text?.secondary}
          fontSize={{ sx: '1.25rem', sm: '1.5rem' }}
        >
          3. 🏋️‍♂️ La Technique du Bras :
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          Les bras ne sont pas simplement là pour l'esthétique. Une technique
          appropriée des bras peut contribuer significativement à votre vitesse.
          Gardez les coudes pliés à 90 degrés, et utilisez des mouvements de
          balancier coordonnés pour générer une impulsion supplémentaire.
        </Typography>
      </>
      <>
        <Typography
          color={text?.secondary}
          fontSize={{ sx: '1.25rem', sm: '1.5rem' }}
        >
          4. 🏞️ L'Entraînement en Côte :
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          Les sprints en côte développent une force explosive considérable. Les
          muscles sollicités lors de cette montée renforcent la puissance
          nécessaire pour les sprints plats. Intégrez des séances d'entraînement
          en côte pour renforcer vos jambes et améliorer votre vitesse
          explosive.
        </Typography>
      </>
      <>
        <Typography
          color={text?.secondary}
          fontSize={{ sx: '1.25rem', sm: '1.5rem' }}
        >
          5. 🧠 La Concentration Mentale :
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          La puissance explosive ne se limite pas au physique. La concentration
          mentale joue un rôle crucial. Visualisez chaque sprint avant de le
          réaliser, en vous concentrant sur la puissance, la fluidité et la
          rapidité. La confiance mentale se traduit souvent par une performance
          physique améliorée.
        </Typography>
      </>
      <>
        <Typography
          color={text?.primary}
          fontSize={{ sx: '1.5rem', sm: '1.75rem' }}
          fontWeight={600}
        >
          🌟 Conclusion :
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          Maîtriser les techniques des sprints explosifs demande de la pratique,
          de la patience et une compréhension approfondie de votre propre corps.
          En intégrant ces conseils dans votre routine d'entraînement, vous
          pouvez déverrouiller une nouvelle dimension de vitesse et de
          puissance.
          <br />
          <br />
          La prochaine fois que vous vous tiendrez sur la ligne de départ, que
          ce soit pour une compétition ou simplement pour repousser vos propres
          limites, rappelez-vous ces techniques et sentez l'explosion de
          puissance sous chaque foulée. La piste est votre terrain de jeu, et
          les sprints explosifs sont votre billet vers des performances
          exceptionnelles.
        </Typography>
      </>
      <>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          color={text?.primary}
        >
          <b>🔥 Conseil Final :</b> Ne sous-estimez jamais le pouvoir de la
          cohérence. Intégrez ces techniques dans votre routine régulière,
          pratiquez-les avec dévouement, et observez comment la constance
          transforme progressivement chaque sprint en une démonstration de force
          explosive. La clé réside dans la persévérance. Continuez à sprinter,
          continuez à vous améliorer, et vous découvrirez de nouvelles limites
          de vitesse que vous n'auriez jamais imaginées. Bonne course ! 🏃‍♀️💨✨
        </Typography>
      </>
    </Box>
  );
};

export default ArticaleA;
