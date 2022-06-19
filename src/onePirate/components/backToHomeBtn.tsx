import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Button } from '../modules/components/button';

export const BackToHomeBtn = () => {
  const { t } = useTranslation();
  return (
    <Link to="/">
      <Button
        color="info"
        variant="contained"
        component="a"
        sx={{ mt: 8 }}
      >
        {t('backBtn')}
      </Button>
    </Link>
  );
};