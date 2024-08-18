import React from 'react';
import { Container, Typography, Paper, Box, TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ContactPage = () => {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 2,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Change font here
            fontWeight: 500,
            color: 'primary.main'
          }}
        >
          We&apos;d Love to Hear From You
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          If you have any questions, feedback, or just want to say hello, feel free to reach out to us using the form below. We'll get back to you as soon as possible.
        </Typography>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', maxWidth: '600px', mx: 'auto' }}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<SendIcon />}
            sx={{ mt: 2 }}
          >
            Send Message
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ContactPage;
