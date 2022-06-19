import { Link } from "react-router-dom";
import { Button } from '../modules/components/button';

export const BackToHomeBtn = () => (
  <Link to="/">
    <Button
      color="info"
      variant="contained"
      component="a"
      sx={{ mt: 8 }}
    >
      Volver
    </Button>
  </Link>
);