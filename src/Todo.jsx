import { Checkbox, FormControlLabel } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <Stack>
      <FormControlLabel
        control={
          <Checkbox
          checked={todo.completed}
          onChange={handleTodoClick}
          readOnly
          />
        }
        label={todo.name}
      />
    </Stack>
  )
};

export default Todo;