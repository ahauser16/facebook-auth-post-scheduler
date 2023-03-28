// import { Link, Form } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { SiLetsencrypt } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";

import AuthConsumer from "../context/UserAuthentication";
import Modal from "../components/Modal";
// import { useAuth } from "../context/AuthProvider";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [authenticated, dispatch] = AuthConsumer();
  let navigate = useNavigate();

  return (
    <Modal>
      <FormWrapper
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <SignInHeader>
          Sign Up & Start Your Free Trial
        </SignInHeader>
        <label htmlFor="email">
          <MailIcon /> Email Address
        </label>
        <Input
          {...register("email")}
          placeholder="Email"
          type="text"
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          required
          autoFocus
        />
        <Label htmlFor="password">
          <PasswordIcon />
          Password</Label>
        <Input
          {...register("password")}
          placeholder="Password"
          type="password"
          id="password"
          label="Password"
          name="password"
          autoComplete="current-password"
          required
        />
        <input type="checkbox" id="remember" name="remember" /> Remember me
        <LoginButton
          onClick={() => {
            dispatch({ type: "login" });
            navigate("/dashboard", { replace: true });
          }}
          type="submit"
        >
          SIGN IN
        </LoginButton>
        <ForgotSignup>Forgot password?</ForgotSignup>
        <ForgotSignup>Don't have an account? Sign Up!</ForgotSignup>
      </FormWrapper>
    </Modal>
  );
}


const MailIcon = styled(AiOutlineMail)`
`;

const PasswordIcon = styled(AiFillLock)`

`

const SignInHeader = styled.h2`
  color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled.form`
  padding: 1rem;
  width: 400px;
  background-color: #6233b9;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.05rem;
  color: #eadbfb;
  font-weight: bold;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
  background-color: #c4a9e4;
  color: #28262c;
`;

const Actions = styled.p`
  display: block;
  justify-content: flex-end;
  gap: 0.5rem;
  align-items: center;
`;

const LoginButton = styled.button`
  margin: 0;
  padding: 0.75rem 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #1976d2;
  color: whitesmoke;
  border: none;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2em;
  text-decoration: none;
  width: 100%;
  &:hover {
    background-color: rgba(25, 118, 210, 0.5);
    color: whitesmoke;
  }
`;

const ForgotSignup = styled(Link)`
  margin: 1rem 0;
  color: whitesmoke;
  display: block;
`;
