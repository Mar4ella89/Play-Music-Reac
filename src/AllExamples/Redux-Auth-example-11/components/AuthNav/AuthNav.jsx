import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.link} to="/examples/ex11/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/examples/ex11/login">
        Log In
      </NavLink>
    </div>
  );
};
