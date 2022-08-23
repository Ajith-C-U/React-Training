import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from "yup";
import coverImage from "../../assets/images/coverImage.png"
import "./index.scss"

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(7, 'Password should be of minimum 7 characters length')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{7,})/, 'Must Contain One Uppercase, One Lowercase, One Number and One Special Case Character')
        .required('Password is required'),
});


export default function Login() {

    const navigate = useNavigate()
    const [showPassword, setShowPassword] = React.useState(false)
    const [emailFail, setEmailFail] = React.useState(false)

    const address = ["tom@yopmail.com", "jerry@yopmail.com", "sharon@yopmail.com", "jim@yopmail.com", "jit@yopmail.com"]

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const isEmailIncluded = address.includes(values.email)
            setEmailFail(isEmailIncluded)
            if (isEmailIncluded === true) {
                navigate("/")
            } else {
                localStorage.setItem("credentials", (JSON.stringify(values, null, 2)));
                navigate("/dashboard")
            }
        },
        handleChange: (values) => {
            const isEmailIncluded = address.includes(values.email)
            setEmailFail(isEmailIncluded)
        }
    });


    return (
        <Grid container component="main" className='login' sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid item
                xs={false}
                sm={4}
                md={7}><Box
                    component="img"
                    sx={{
                        height: "100%",
                        width: "100%",
                        maxHeight: { xs: "80%", md: "80%" },
                        maxWidth: { xs: "100%", md: "100%" },
                    }}
                    className="cover-image"
                    alt="The house from the offer."
                    src={coverImage}
                /></Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="off"
                            autoFocus
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={(formik.touched.email && formik.errors.email) || (emailFail ? <span className='invalid'>invalid Email id</span> : "")}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            id="password"
                            autoComplete="off"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Typography component="div" className='signup'>Don't have an account yet?
                            <Link to="/signup"> Sign Up </Link>
                        </Typography>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}