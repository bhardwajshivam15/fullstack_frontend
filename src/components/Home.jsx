import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Only if using axios, otherwise use fetch
import {
  Container,
  Typography,
  Paper,
  Box,
  TextField,
  Button,
  List,
  ListItem,
  IconButton,
  Divider,
  Card,
  CardContent,
  CardActions,
  CardHeader,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const url = 'http://localhost:8080';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [taskId, setTaskId] = useState('');
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [editingDescription, setEditingDescription] = useState('');

  // Fetch tasks from the API when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${url}/tasks`);
        setTasks(response.data);
        console.log(response);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleAddTask = () => {
    if (taskTitle.trim() && taskDescription.trim()) {
      const newTask = {
        id: taskId || Date.now(), // Use provided ID or generate a new one
        title: taskTitle,
        description: taskDescription,
      };
      setTasks([...tasks, newTask]);
      setTaskId('');
      setTaskTitle('');
      setTaskDescription('');
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (id, title, description) => {
    setEditingTaskId(id);
    setEditingTitle(title);
    setEditingDescription(description);
    setTaskId(id); // Set the ID to be used in the form
  };

  const handleUpdateTask = () => {
    if (editingTitle.trim() && editingDescription.trim()) {
      setTasks(tasks.map((task) =>
        task.id === editingTaskId
          ? { ...task, title: editingTitle, description: editingDescription }
          : task
      ));
      setEditingTaskId(null);
      setTaskId('');
      setEditingTitle('');
      setEditingDescription('');
    }
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
          {editingTaskId ? 'Update To-Do' : 'Add New To-Do'}
        </Typography>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            label="ID"
            variant="outlined"
            fullWidth
            margin="normal"
            value={taskId}
            onChange={(e) => setTaskId(e.target.value)}
          />
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={editingTaskId ? editingTitle : taskTitle}
            onChange={(e) => {
              if (editingTaskId) {
                setEditingTitle(e.target.value);
              } else {
                setTaskTitle(e.target.value);
              }
            }}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={editingTaskId ? editingDescription : taskDescription}
            onChange={(e) => {
              if (editingTaskId) {
                setEditingDescription(e.target.value);
              } else {
                setTaskDescription(e.target.value);
              }
            }}
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            sx={{ mt: 2 }}
            onClick={editingTaskId ? handleUpdateTask : handleAddTask}
          >
            {editingTaskId ? 'Update Task' : 'Add Task'}
          </Button>
          {editingTaskId && (
            <Button
              variant="outlined"
              color="secondary"
              sx={{ mt: 2, ml: 1 }}
              onClick={() => {
                setEditingTaskId(null);
                setTaskId('');
                setEditingTitle('');
                setEditingDescription('');
              }}
            >
              Cancel
            </Button>
          )}
        </Box>
      </Paper>

      {/* To-Do List Section */}
      <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Your Tasks
        </Typography>
        <List>
          {tasks.map((task) => (
            <React.Fragment key={task.id}>
              <ListItem
                sx={{ p: 0 }}
                secondaryAction={
                  <CardActions>
                    <IconButton
                      edge="end"
                      aria-label="edit"
                      onClick={() => handleEditTask(task.id, task.title, task.description)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDeleteTask(task.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </CardActions>
                }
              >
                <Card sx={{ width: '100%', mb: 2 }}>
                  <CardHeader
                    title={task.title}
                    subheader={`ID: ${task.id}`}
                    sx={{ textAlign: 'center' }}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {task.description}
                    </Typography>
                  </CardContent>
                </Card>
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
