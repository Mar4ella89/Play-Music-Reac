import { nanoid } from 'nanoid';

const addTask = text => {
  return {
    type: 'tasks/addTask',
    payload: {
      id: nanoid(),
      text,
      completed: false,
    },
  };
};

const deleteTask = taskId => {
  return {
    type: 'tasks/deleteTask',
    payload: taskId,
  };
};

const toggleCompleted = taskId => {
  return {
    type: 'tasks/toggleCompleted',
    payload: taskId,
  };
};

const setStatusFilter = value => {
  return {
    type: 'filters/setStatusFilter ',
    payload: value,
  };
};
