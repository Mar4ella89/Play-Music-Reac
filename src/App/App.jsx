import { Routes, Route, useParams } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import productsList from '../AllExamples/Products-example-1/products';
// import Hooks from 'AllExamples/Hook-example-6/Hooks';

import Container from 'components/Container/Container';
import upcomingEvents from 'AllExamples/EventBoard-example-2/upcoming-events.json';
// import upcomingEvents from 'EventBoard-example-2/upcoming-events.json';
// import EventBoard from 'AllExamples/EventBoard-example-2/components/EventBoard';

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
const Hooks = lazy(() => import('AllExamples/Hook-example-6/Hooks'));

// import Product from '../Products-example-1/components/Products/Product';
// import Section from '../Products-example-1/components/Section/Section';
// import css from './App.module.css';

// import { PageTitle } from 'EventBoard-example-2/components/PageTitle/PageTitle';
// import EventBoard from 'EventBoard-example-2/components/EventBoard';

// import { Container } from './App.styled';
// import { Counter } from 'Counter-example-3/components/Counter';
// import SignUpForm from 'Form-example-4/SignUpForm';
// import NewsApi from 'API-example-5/components/NewsApi';
// import Hooks from 'Hook-example-6/Hooks';
const examples = [
  { id: 'ex1', title: 'Example-1 Products' },
  { id: 'ex2', title: 'Example-2 Event Board' },
  { id: 'ex3', title: 'Example-3 Counter' },
  { id: 'ex4', title: 'Example-4 Form and Formik' },
  { id: 'ex5', title: 'Example-5 API' },
  { id: 'ex6', title: 'Example-6 Hooks' },
  { id: 'ex7', title: 'Example-7' },
  { id: 'ex8', title: 'Example-8' },
  { id: 'ex9', title: 'Example-9' },
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

      default:
        return null;
    }
  };

  return renderComponent();
};

export const App = () => (
  <Suspense>
    <Navbar />
    {/* <Product allFood={productsList} /> */}
    <Routes>
      <Route>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/examples"
          element={<ExamplesPage examples={examples} />}
        />
        <Route path="/examples/:ex" element={<Example />}>
          {/* <Route path="ex1" element={<Product allFood={productsList} />} />
          <Route path="ex6" element={<Hooks />} /> */}
        </Route>
      </Route>

      <Route path="*" element={<HomePage />} />
    </Routes>
  </Suspense>
);

/* <Container>
     <div className={css.container}>
       <h1>Best selling products</h1>
       <Product allFood={productsList} />
       <Section title={'TOP 3'} />
       <Section />
       <Section title={'NEW 3'} />
       <Section title={'HOT 3'} />
     </div>
     <PageTitle text="24th Core Worlds Coalition Conference" />
     <EventBoard events={upcomingEvents} />
     <Counter />
     <SignUpForm />
     <NewsApi />
     <Hooks />
   </Container> */
