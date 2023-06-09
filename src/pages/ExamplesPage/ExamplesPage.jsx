import {
  useNavigate,
  NavLink,
  Outlet,
  useParams,
  Link,
} from 'react-router-dom';

import Container from 'components/Container/Container';

const ExamplesPage = ({ examples }) => {
  return (
    <Container>
      <aside>
        <nav>
          <ul>
            {examples.map(({ id, title }) => (
              <li key={id}>
                <NavLink to={`/examples/${id}`}>
                  <p>{title}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <Outlet />
    </Container>
  );
};

export default ExamplesPage;
