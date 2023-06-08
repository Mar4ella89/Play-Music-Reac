import { useNavigate } from 'react-router-dom';

import Container from 'components/Container/Container';

const ExamplesPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <aside>
        <nav>
          <ul>
            <li
              onClick={() => {
                navigate('/ex1');
              }}
            >
              Ex-1 Products
            </li>
            <li>Ex-2 Event Board</li>
            <li>Ex-3 Counter</li>
            <li>Ex-4 Form and Formik</li>
            <li>Ex-5 API</li>
            <li>Ex-6 Hooks</li>
            <li>Ex-7</li>
            <li>Ex-8</li>
            <li>Ex-9</li>
            <li>Ex-10</li>
          </ul>
        </nav>
      </aside>
    </Container>
  );
};

export default ExamplesPage;
