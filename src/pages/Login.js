// import { Link, Form } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AuthConsumer from "../context/UserAuthentication";

import Modal from "../components/Modal";
import { SiLetsencrypt } from "react-icons/si";
// import { useAuth } from "../context/AuthProvider";

export default function Login() {
  const [authenticated, dispatch] = AuthConsumer();
  let navigate = useNavigate();

  return (
    <Modal>
      {/* <FormWrapper method="post" onSubmit={handleSubmit} noValidate> */}
      <FormWrapper>
        <SignInHeader>
          <SiLetsencrypt size={50} />
        </SignInHeader>
        <p>
          <Label htmlFor="email">Email Address</Label>
          <Input
            type="text"
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            required
            autoFocus
          />
        </p>
        <p>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            label="Password"
            name="password"
            autoComplete="current-password"
            required
          />
        </p>
        <p style={{ color: "whitesmoke" }}>
          <input type="checkbox" id="remember" name="remember" /> Remember me
        </p>

        <Actions>
          {/* <CancelButton to=".." type="button">
            CANCEL
          </CancelButton> */}
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
        </Actions>
      </FormWrapper>
    </Modal>
  );
}

const SignInHeader = styled.h1`
  color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled.div`
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
