import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTasks } from '../redux/operations';
import { getIsLoading, getError } from '../redux/selectors';

import { Layout } from './Layout/Layout';
import { AppBar } from './AppBar/AppBar';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';

const App = () => {
  const dispatch = useDispatch();
  // Получаем части состояния
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  // Вызываем операцию
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <p>{error}</p>}
      <TaskList />
    </Layout>
  );
};

export default App;
