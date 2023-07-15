import { Routes, Route, useParams } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import productsList from '../AllExamples/Products-example-1/products';

import Container from 'components/Container/Container';
import upcomingEvents from 'AllExamples/EventBoard-example-2/upcoming-events.json';

const Navbar = lazy(() => import('modules/Navbar/Navbar'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ExamplesPage = lazy(() => import('pages/ExamplesPage/ExamplesPage'));
const Product = lazy(() =>
  import('AllExamples/Products-example-1/components/Products/Product')
);
const EventBoard = lazy(() =>
  import('AllExamples/EventBoard-example-2/components/EventBoard')
);
const Counter = lazy(() =>
  import('AllExamples/Counter-example-3/components/Counter')
);
const SignUpForm = lazy(() => import('AllExamples/Form-example-4/SignUpForm'));
const NewsApi = lazy(() =>
  import('AllExamples/API-example-5/components/NewsApi')
);

const Hooks = lazy(() => import('AllExamples/Hook-example-6/Hooks'));
const RouteExample = lazy(() =>
  import('AllExamples/Route-example-7/components/RouteExample')
);

const ReduxExample = lazy(() =>
  import('AllExamples/Redux-example-8/ReduxExample')
);

const ReduxToolkitExample = lazy(() =>
  import('AllExamples/Redux-Toolkit-example-9/ReduxToolkitExample')
);
const examples = [
  { id: 'ex1', title: 'Example-1 Products' },
  { id: 'ex2', title: 'Example-2 Event Board' },
  { id: 'ex3', title: 'Example-3 Counter' },
  { id: 'ex4', title: 'Example-4 Form and Formik' },
  { id: 'ex5', title: 'Example-5 API' },
  { id: 'ex6', title: 'Example-6 Hooks' },
  { id: 'ex7', title: 'Example-7 Route' },
  { id: 'ex8', title: 'Example-8 Redux' },
  { id: 'ex9', title: 'Example-9 Redux-Toolkit' },
  { id: 'ex10', title: 'Example-10' },
];

const Example = () => {
  const { ex } = useParams();

  const renderComponent = () => {
    switch (ex) {
      case 'ex1':
        return (
          <Container>
            <Product allFood={productsList} />
          </Container>
        );
      case 'ex2':
        return (
          <Container>
            <EventBoard events={upcomingEvents} />
          </Container>
        );
      case 'ex3':
        return (
          <Container>
            <Counter />
          </Container>
        );
      case 'ex4':
        return (
          <Container>
            <SignUpForm />
          </Container>
        );
      case 'ex5':
        return (
          <Container>
            <NewsApi />
          </Container>
        );
      case 'ex6':
        return (
          <Container>
            <Hooks />
          </Container>
        );
      case 'ex7':
        return (
          <Container>
            <RouteExample />
          </Container>
        );
      case 'ex8':
        return (
          <Container>
            <ReduxExample />
          </Container>
        );
      case 'ex9':
        return (
          <Container>
            <ReduxToolkitExample />
          </Container>
        );

      default:
        return null;
    }
  };

  return renderComponent();
};

export const App = () => (
  <Suspense>
    <Navbar />
    <Routes>
      <Route>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/examples"
          element={<ExamplesPage examples={examples} />}
        />
        <Route path="/examples/:ex/*" element={<Example />}></Route>
      </Route>

      {/* <Route path="*" element={<HomePage />} /> */}
    </Routes>
  </Suspense>
);
