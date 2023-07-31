import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { TaskList } from '../components/TaskList/TaskList';
import { TaskForm } from '../components/TaskForm/TaskForm';
import { StatusFilter } from '../components/StatusFilter/StatusFilter';
import { AppBar } from '../components/AppBar/AppBar';
import { Layout } from '../components/Layout/Layout';
import { fetchTasks } from '../redux/tasks/operations';
import { selectIsLoading } from '../redux/tasks/selectors';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      {/* <Layout> */}
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <AppBar />
      <StatusFilter />
      <TaskForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList />
      {/* </Layout> */}
    </>
  );
}
