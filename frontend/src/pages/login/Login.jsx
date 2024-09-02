import React from 'react';
import { Box, Button, TextField, Typography, IconButton, InputAdornment } from '@mui/material';
import { Facebook, Apple, Google, Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                bgcolor: '#f5f5f5',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 4,
                    bgcolor: '#ffffff',
                    borderRadius: 2,
                    boxShadow: 1,
                    width: '400px',
                }}
            >
                <img src="your-image-path" alt="Secure" style={{ width: '80px', marginBottom: '20px' }} />
                <Typography variant="h5" sx={{ marginBottom: 2 }}>
                    Welcome, please authorize
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, marginBottom: 2 }}>
                    <IconButton color="primary"><Facebook /></IconButton>
                    <IconButton color="primary"><Apple /></IconButton>
                    <IconButton color="primary"><Google /></IconButton>
                </Box>
                <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                    margin="normal"
                    autoComplete="email"
                />
                <TextField
                    fullWidth
                    label="Password"
                    variant="outlined"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    margin="normal"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Typography variant="body2" sx={{ alignSelf: 'flex-end', marginBottom: 2 }}>
                    <a href="#" style={{ textDecoration: 'none', color: '#1976d2' }}>Forgot password?</a>
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
                    <Button fullWidth variant="contained" color="primary">
                        Login
                    </Button>
                    <Button fullWidth variant="outlined" color="primary">
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;