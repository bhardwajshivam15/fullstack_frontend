import React from 'react';
import { Container, Typography, Grid, Avatar, Card, CardContent, CardHeader } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const AboutPage = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography variant="h2" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        Learn more about our mission and the team behind My To-Do App.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 2, boxShadow: 3, display: 'flex', flexDirection: 'column' }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  <InfoIcon />
                </Avatar>
              }
              title="Our Mission"
              sx={{ bgcolor: 'primary.light', color: 'primary.contrastText' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="body1" paragraph>
                At My To-Do App, our mission is to help individuals stay organized and achieve their goals efficiently. We provide an intuitive and user-friendly platform to manage tasks seamlessly, whether you're planning daily activities or tracking long-term projects.
              </Typography>
              <Typography variant="body1" paragraph>
                Our app is designed with simplicity in mind, allowing you to focus on what's important without distractions. With features like task management, reminders, and easy organization, we aim to enhance productivity and make task management a breeze.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 2, boxShadow: 3, display: 'flex', flexDirection: 'column' }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: 'secondary.main' }}>
                  <InfoIcon />
                </Avatar>
              }
              title="Meet the Team"
              sx={{ bgcolor: 'secondary.light', color: 'secondary.contrastText' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="body1" paragraph>
                Our team is a diverse group of passionate individuals dedicated to creating the best task management experience. With expertise in technology and a commitment to innovation, we strive to bring you an app that meets your needs and exceeds your expectations.
              </Typography>
              <Typography variant="body1" paragraph>
                We're always open to feedback and suggestions. Your input helps us improve and evolve our app to better serve you. Thank you for being a part of our journey!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
