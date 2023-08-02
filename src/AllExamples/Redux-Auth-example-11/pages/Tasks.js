import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { TaskList } from '../components/TaskList/TaskList';
import { TaskForm } from '../components/TaskForm/TaskForm';
import { AppBar } from '../components/AppBar/AppBar';
import { fetchTasks } from '../redux/tasks/operations';
import { selectIsLoading } from '../redux/tasks/selectors';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Your tasks</title>
        </Helmet>
        <AppBar />
        <TaskForm />
        <div>{isLoading && 'Request in progress...'}</div>
        <TaskList />
      </>
    </HelmetProvider>
  );
}
