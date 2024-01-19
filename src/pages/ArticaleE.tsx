import { Box, ThemeOptions, Typography, useTheme } from '@mui/material';


const ArticaleE = () => {
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
          🍏💪 Nutrition pour les Sprinteurs : Alimentez Votre Vitesse !
        </Typography>
      </Box>

      <Typography
        variant="body2"
        fontSize={{ sx: '1rem', sm: '1.25rem' }}
        color={text?.primary}
      >
        La nutrition est la clé pour optimiser les performances en sprint.
        Découvrez comment choisir les bons carburants pour votre moteur et
        maximiser votre puissance sur la piste.
      </Typography>
      <>
        <Typography
          color={text?.secondary}
          fontSize={{ sx: '1.25rem', sm: '1.5rem' }}
        >
          1. 🥦 Équilibrer les Macronutriments : La Base de la Vitesse
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          Les sprinteurs ont besoin d'un équilibre parfait entre les
          macronutriments. Assurez-vous d'inclure des protéines maigres, des
          glucides complexes et des graisses saines dans chaque repas. Les
          protéines favorisent la récupération, les glucides fournissent de
          l'énergie, et les graisses soutiennent le métabolisme.
        </Typography>
      </>
      <>
        <Typography
          color={text?.secondary}
          fontSize={{ sx: '1.25rem', sm: '1.5rem' }}
        >
          2. 🍇 Hydratation Optimale : Évitez la Déshydratation
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          La déshydratation peut considérablement affecter les performances.
          Assurez-vous de rester bien hydraté avant, pendant et après
          l'entraînement. Optez pour de l'eau, des boissons électrolytiques et
          des smoothies hydratants pour maintenir l'équilibre hydrique.
        </Typography>
      </>
      <>
        <Typography
          color={text?.secondary}
          fontSize={{ sx: '1.25rem', sm: '1.5rem' }}
        >
          3. 🍗 Protéines pour la Puissance : Renforcez Vos Muscles
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          Les protéines sont essentielles pour la construction musculaire et la
          récupération. Intégrez des sources de protéines maigres telles que le
          poulet, le poisson, les œufs et les légumineuses dans vos repas pour
          optimiser la puissance musculaire.
        </Typography>
      </>
      <>
        <Typography
          color={text?.secondary}
          fontSize={{ sx: '1.25rem', sm: '1.5rem' }}
        >
          4. 🍠 Glucides Complexes : L'Énergie Prolongée
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          Les sprinteurs ont besoin d'une source d'énergie durable. Choisissez
          des glucides complexes comme les patates douces, les céréales
          complètes et les légumes riches en fibres pour fournir une énergie
          constante tout au long de votre séance d'entraînement.
        </Typography>
      </>
      <>
        <Typography
          color={text?.secondary}
          fontSize={{ sx: '1.25rem', sm: '1.5rem' }}
        >
          5. 🥑 Graisses Saines : Un Soutien Métabolique
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          marginTop={'-15px'}
          color={text?.primary}
        >
          Les graisses saines sont cruciales pour le métabolisme et la santé
          hormonale. Intégrez des avocats, des noix, des graines de chia et de
          l'huile d'olive dans votre alimentation pour un soutien métabolique
          optimal.
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
          La nutrition pour les sprinteurs n'est pas simplement une question de
          quantité, mais aussi de qualité. 🍏🍠 En équilibrant les
          macronutriments, en restant bien hydraté et en choisissant des
          aliments riches en nutriments, vous alimentez non seulement votre
          corps, mais vous optimisez également votre vitesse sur la piste.
        </Typography>
      </>
      <>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          color={text?.primary}
        >
          <b>🔥 Conseil Final :</b> N'oubliez pas que votre alimentation est le
          carburant qui propulse votre sprint. Choisissez des protéines pour la
          puissance, des glucides complexes pour une énergie prolongée, et des
          graisses saines pour un soutien métabolique optimal. 🥦🍗 Que chaque
          repas devienne une opportunité d'améliorer vos performances et de
          favoriser une récupération rapide. La nutrition, c'est le secret pour
          dépasser les limites et atteindre de nouveaux sommets. Bonne
          alimentation, et que votre sprint soit nourri de succès ! 🏃‍♂️💨
        </Typography>
      </>
      <>
        <Typography
          variant="body2"
          fontSize={{ sx: '1rem', sm: '1.25rem' }}
          color={text?.primary}
        >
          <b>Conseil Supplémentaire : 🌱</b> N'oubliez pas de consulter un
          professionnel de la nutrition pour personnaliser votre plan
          alimentaire en fonction de vos besoins individuels. Leur expertise
          vous aidera à atteindre vos objectifs plus efficacement et à maintenir
          une santé optimale. 💪🍎
        </Typography>
      </>
    </Box>
  );
};

export default ArticaleE;
