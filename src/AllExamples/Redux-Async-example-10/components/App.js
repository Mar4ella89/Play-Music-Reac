import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTasks } from '../redux/operations';
import { getTasks } from '../redux/selectors';

import { Layout } from './Layout/Layout';
import { AppBar } from './AppBar/AppBar';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';

const App = () => {
  const dispatch = useDispatch();
  // Получаем части состояния
  const { items, isLoading, error } = useSelector(getTasks);
  // Вызываем операцию
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  console.log(items);
  return (
    <Layout>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
      {/* <AppBar />
      <TaskForm />
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
      <TaskList /> */}
    </Layout>
  );
};

export default App;
