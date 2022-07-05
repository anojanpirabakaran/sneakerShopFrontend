import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import image from "../../images/unc.jpg";
import "./Register.css";

/**
 * Interface for register what is needed
 */
interface IFormInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirmation: string;
}

/**
 * yup form validation
 */
const schema = yup.object().shape({
  email: yup.string().required().email(),
  firstName: yup.string().required().min(2).max(25),
  lastName: yup.string().required().min(2).max(25),
  password: yup.string().required().min(8).max(120),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(),
});

/**
 * styles for register
 */
const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
    margin: theme.spacing(1, 0, 4),
  },
  submitButton: {
    marginTop: theme.spacing(4),
  },
}));

/**
 * Register form to register a user
 * @returns register form
 */
function Register() {
  const navigation = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const { heading, submitButton } = useStyles();

  const [json, setJson] = useState<string>();

  const onSubmit = (data: IFormInput) => {
    setJson(JSON.stringify(data));
    axios
      .post("http://localhost:8080/clients/", data)
      .then(() => {
        navigation("/login");
      })
      .catch(() => {
        navigation("/register");
      });
  };

  return (
    <>
      <Grid container item xs={12}>
        <img className="aboutImg" src={image} alt="jordan 11" />
        <p className="first_title">"Be a member"</p>
        <p className="second_title">SIGN UP</p>
      </Grid>
      <Grid container item sm={12}>
        <Paper elevation={3} className="form_background">
          <Container maxWidth="xs">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <TextField
                {...register("email")}
                variant="outlined"
                margin="normal"
                label="Email"
                helperText={errors.email?.message}
                error={!!errors.email?.message}
                fullWidth
                required
              />
              <TextField
                {...register("firstName")}
                variant="outlined"
                margin="normal"
                label="First Name"
                helperText={errors.firstName?.message}
                error={!!errors.firstName?.message}
                fullWidth
                required
              />
              <TextField
                {...register("lastName")}
                variant="outlined"
                margin="normal"
                label="Last Name"
                helperText={errors.lastName?.message}
                error={!!errors.lastName?.message}
                fullWidth
                required
              />

              <TextField
                {...register("password")}
                variant="outlined"
                margin="normal"
                label="Password"
                helperText={errors.password?.message}
                error={!!errors.password?.message}
                type={showPassword ? "text" : "password"}
                fullWidth
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                {...register("passwordConfirmation")}
                variant="outlined"
                margin="normal"
                label="Confirm Password"
                helperText={errors.passwordConfirmation?.message}
                error={!!errors.passwordConfirmation?.message}
                type={showPassword ? "text" : "password"}
                fullWidth
                required
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={submitButton}
              >
                Sign Up
              </Button>
            </form>
          </Container>
        </Paper>
      </Grid>
    </>
  );
}

export default Register;
