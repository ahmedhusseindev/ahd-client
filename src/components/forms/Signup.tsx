"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import EmailIcon from "@mui/icons-material/Email";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControlLabel from "@mui/material/FormControlLabel";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import google from "../../images/google.svg"
import facebook from "../../images/facebook.svg"
import Image from "next/image";

const Signup = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <form className="w-4/5 lg:w-[500px] p-5 flex flex-col gap-3 bg-black bg-opacity-60 rounded-lg">
      <Typography variant="h4" className="text-center text-[#FF9F0D]">
        Sign up
      </Typography>
      <FormControl variant="filled" className="bg-white rounded">
        <InputLabel htmlFor="username">Username</InputLabel>
        <OutlinedInput
          id="username"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
          label="Username"
        />
      </FormControl>

      <FormControl variant="filled" className="bg-white rounded">
        <InputLabel>Email</InputLabel>
        <OutlinedInput
          startAdornment={
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          }
          label="Email"
        />
      </FormControl>

      <FormControl variant="filled" className="bg-white rounded">
        <InputLabel>Password</InputLabel>
        <OutlinedInput
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? "hide the password" : "display the password"
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <FormControlLabel
        control={<Checkbox color="warning" />}
        label="Remember me"
        className="text-white"
      />
      <Button variant="contained" color="warning">
        Signup
      </Button>
      <button className="flex items-center gap-3 p-2 rounded bg-white">
        <Image src={google} alt="google" />
        <span>Signup with google</span>
      </button>
      <button className="flex items-center gap-3 p-2 rounded bg-white">
        <Image src={facebook} alt="google" />
        <span>Signup with facebook</span>
      </button>
    </form>
  );
};

export default Signup;
