import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Link } from '@mui/material';

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Container maxWidth="xs" sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box
        sx={{
          width: '100%',
          p: 4,
          bgcolor: 'black',
          borderRadius: '8px',
          boxShadow: 3,
          textAlign: 'center',
        //   bgcolor: '#000',
          color: '#fff',
        }}
      >
        <Typography variant="h4" gutterBottom>
          {isLogin ? 'Login' : 'Sign Up'}
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            InputLabelProps={{ style: { color: '#fff' } }}
            sx={{ input: { color: '#fff' }, fieldset: { borderColor: '#fff' } }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            InputLabelProps={{ style: { color: '#fff' } }}
            sx={{ input: { color: '#fff' }, fieldset: { borderColor: '#fff' } }}
          />
          {!isLogin && (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              InputLabelProps={{ style: { color: '#fff' } }}
              sx={{ input: { color: '#fff' }, fieldset: { borderColor: '#fff' } }}
            />
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: '#fff', color: '#000', '&:hover': { bgcolor: '#ccc' } }}
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>
        </form>
        <Link href="#" variant="body2" onClick={toggleForm} sx={{ color: '#fff' }}>
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
        </Link>
      </Box>
    </Container>
  );
};

export default LoginSignupPage;