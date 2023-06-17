import { useUser } from '../hooks/userContext/userContext';

import css from '../Hooks.module.css';

export const UserMenu = () => {
  const { isLoggedIn, username, logIn, logOut } = useUser();

  return (
    <div>
      {isLoggedIn && <p>{username}</p>}
      {isLoggedIn ? (
        <button onClick={logOut} className={css.button}>
          Log out
        </button>
      ) : (
        <button onClick={logIn} className={css.button}>
          Log in
        </button>
      )}
    </div>
  );
};
