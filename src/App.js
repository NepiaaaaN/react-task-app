import { useState, useRef } from "react";
// import './App.css';
import { createTheme, CssBaseline, ThemeProvider, Stack, Button, TextField, Typography, Box } from "@mui/material";
import TodoList from "./TodoList.jsx"
import { v4 as uuidv4 } from "uuid";
import { Container } from "@mui/system";

function App() {
  const apptheme = createTheme({
    palette: {
      typography: {
        fontfamily: [
          'Roboto',
          '"Noto Sans JP"',
          '"Helvetica"',
          'Arial',
          'sans-serif',
        ].join(','),
      },
      mode: 'dark',
    }
  });
  const todoNameRef = useRef();
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (e) => {
    // タスクを追加
    const name = todoNameRef.current.value;
    if(name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}];
    });
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    // newTodosにコピーする。todosはstateなので直接値を変更しない
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    // 条件に合うものだけがsetされる、それ以外は破棄される
    setTodos(newTodos);
  }

  return (
    <ThemeProvider theme={apptheme}>
      <CssBaseline />
      <Container>
        <Box mt={2}>
          <Typography variant="h3" >Task管理ツール</Typography>
        </Box>
        <TextField
          label="Task"
          id="outlined-basic"
          variant="outlined"
          margin="normal"
          inputRef={todoNameRef}
          helperText={todoNameRef?.current?.validationMessage}
        />
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" color="success" onClick={handleAddTodo}>追加</Button>
          <Button variant="outlined" color="error" onClick={handleClear}>完了済タスクを削除</Button>
        </Stack>
        <Typography variant="subtitle1" gutterBottom>残タスク : {todos.filter((todo) => !todo.completed).length}</Typography>
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
