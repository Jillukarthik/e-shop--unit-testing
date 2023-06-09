import React from "react";
import "./Login.css";
import {
  Box,
  Heading,
  InputGroup,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Image,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import logimg from "../../assests/lgimg.avif"

function Login() {
  const navigate= useNavigate();
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors, isSubmitting, isValid},
  } = useForm();


  function reDirectHome() {
    return new Promise((resolve) => {
      setTimeout(() => {
      navigate("/Home",{state:{data:username}})
        resolve()
      }, 3000)
    })
  }
let username=getValues("email");
  const redirectSignup=()=>{
    navigate("/")
  }

  return (
    <Box className="login">
      <Box className="login__left">
        <Image
          src={logimg}
          className="login__image"
        />
      </Box>
      <Box className="login__formfield">
        <Box className="login__inputs">
          <Heading as="h1" className="login__state">
            Login
          </Heading>
          <form onSubmit={handleSubmit(reDirectHome)} className="login__form">
            <FormControl isInvalid={errors.email}>
              <FormLabel htmlFor="name" title="label-email">Email</FormLabel>
              <InputGroup className="login__group">
              <Input className="login__inputfield"
              
                id="email"
                placeholder="Email"
                type="email"
                {...register("email", {
                  required: "This is required",
                  pattern:{
                    value:/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm,
                    message:"enter the valid email"
                  }
                })}
              />
            
              </InputGroup>
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <Button
            colorScheme="teal"
            isLoading={isSubmitting}
            isDisabled={!isValid}
            type="submit"
            className={ !isValid ? "btn btn--state-prevloginsubmit":"btn btn--state-loginsubmit"}
            onClick={reDirectHome}>
              submit
            </Button>
            <Button
            className="btn btn--state-signup"
            onClick={redirectSignup}>Signup</Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
