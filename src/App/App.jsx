import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Navbar = lazy(() => import('../modules/Navbar/Navbar'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const ExamplesPage = lazy(() => import('../pages/ExamplesPage/ExamplesPage'));
const Product = lazy(() =>
  import('AllExamples/Products-example-1/components/Products/Product')
);

// import Product from '../Products-example-1/components/Products/Product';
// import Section from '../Products-example-1/components/Section/Section';
// import css from './App.module.css';

// import { PageTitle } from 'EventBoard-example-2/components/PageTitle/PageTitle';
// import EventBoard from 'EventBoard-example-2/components/EventBoard';
// import upcomingEvents from 'EventBoard-example-2/upcoming-events.json';
// import productsList from 'Products-example-1/products.json';
// import { Container } from './App.styled';
// import { Counter } from 'Counter-example-3/components/Counter';
// import SignUpForm from 'Form-example-4/SignUpForm';
// import NewsApi from 'API-example-5/components/NewsApi';
// import Hooks from 'Hook-example-6/Hooks';

export const App = () => (
  <Suspense>
    <Navbar />
    <Routes>
      <Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/examples" element={<ExamplesPage />} />
        <Route path="/examples/:" element={<ExamplesPage />}>
          <Route path="ex1" element={<Product />}></Route>
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
