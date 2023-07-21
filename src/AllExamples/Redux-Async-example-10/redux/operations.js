import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from '../redux/tasksSlice';

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

export const fetchTasks = () => async dispatch => {
  try {
    // Индикатор загрузки
    dispatch(fetchingInProgress());
    // HTTP-запрос
    const response = await axios.get('/tasks');
    // Обработка данных
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    // Обработка ошибки
    dispatch(fetchingError(e.message));
  }
};
