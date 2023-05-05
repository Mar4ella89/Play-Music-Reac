import Product from '../Products/Product';
import Section from '../Section/Section';
import css from './App.module.css';

import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';
import upcomingEvents from '../../upcoming-events.json';
import productsList from '../../products';
import { Container } from './App.styled';

export const App = () => (
  <Container>
    <div className={css.container}>
      <h1>Best selling products</h1>
      <Product allFood={productsList} />
      <Section title={'TOP 3'} />
      <Section />
      <Section title={'NEW 3'} />
    </div>
    <PageTitle text="24th Core Worlds Coalition Conference" />
    <EventBoard events={upcomingEvents} />
  </Container>
);
