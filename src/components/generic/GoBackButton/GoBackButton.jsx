import { useNavigate } from 'react-router-dom';

import css from './GoBackButton.module.css';

const GoBackButton = ({ path }) => {
  const navigate = useNavigate();

  return (
    <button
      className={css.buttonBack}
      onClick={() => {
        navigate(path);
      }}
    >
      Go back
    </button>
  );
};

export default GoBackButton;
