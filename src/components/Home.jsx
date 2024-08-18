import React, { useState } from 'react';
import { Container, Typography, Paper, Box, TextField, Button, List, ListItem, ListItemText, IconButton, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleAddTask = () => {
    if (taskTitle.trim() && taskDescription.trim()) {
      const newTask = {
        id: Date.now(),
        title: taskTitle,
        description: taskDescription,
      };
      setTasks([...tasks, newTask]);
      setTaskTitle('');
      setTaskDescription('');
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      {/* Header */}
      <Typography variant="h2" align="center" gutterBottom>
        My To-Do App
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        Manage your tasks efficiently and stay organized with our intuitive to-do list application.
      </Typography>
      
      {/* Add To-Do Section */}
      <Paper sx={{ p: 3, mb: 4, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Add New To-Do
        </Typography>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            sx={{ mt: 2 }}
            onClick={handleAddTask}
          >
            Add Task
          </Button>
        </Box>
      </Paper>

      {/* To-Do List Section */}
      <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Your Tasks
        </Typography>
        <List>
          {tasks.map(task => (
            <React.Fragment key={task.id}>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(task.id)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={task.title} secondary={task.description} />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default HomePage;
