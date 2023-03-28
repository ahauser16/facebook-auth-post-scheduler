// import { Link, Form } from "react-router-dom";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";

import AuthConsumer from "../context/UserAuthentication";
// import { useAuth } from "../context/AuthProvider";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [authenticated, dispatch] = AuthConsumer();
  let navigate = useNavigate();

  return (
    <CardContainer>
      <CardHeader>
        <CardHeaderTxt>Log in to your DJAWN account</CardHeaderTxt>
      </CardHeader>
      <LoginForm>
        <FormWrapper
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <Label htmlFor="email">
            <MailIcon size={14} /> Email Address
          </Label>
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
            <PasswordIcon size={14} />
            Password
          </Label>
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
          <LoginBtn
            onClick={() => {
              dispatch({ type: "login" });
              navigate("/dashboard", { replace: true });
            }}
            type="submit"
          >
            SIGN IN
          </LoginBtn>
          <RedirectAside>
            <SecondaryBtn href="#">Forgot your password?</SecondaryBtn>
            <SecondaryBtn href="#">
              Don't have a DJAWN account? Join Now
            </SecondaryBtn>
          </RedirectAside>
        </FormWrapper>
      </LoginForm>
    </CardContainer>
  );
}

const CardContainer = styled.main`
  margin: auto;
  padding: 1em;
  width: 100%;
  max-width: 800px;
  /* border-radius: 10px; */
  display: grid;
  grid:
    "HeaderArea  HeaderArea"
    "BodyArea  BodyArea";
`;

const CardHeader = styled.header`
  background-color: rgba(7, 121, 136, 0.9); //make variable for theming
  border-radius: 10px 10px 0 0;
  color: #fff;
  padding: 0.5rem 1rem;
  text-align: center;
  grid-area: HeaderArea;
  padding-top: 1em;
`;

const CardHeaderTxt = styled.h1`
  margin: 0;
  padding: 0;
  color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginForm = styled.section`
  padding: 20px 35px;
  grid-area: BodyArea;
  text-align: left;
  background-color: rgba(255, 255, 255, 0.15);
  display: flex;
  border-radius: 0 0 10px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  /* text-align: center; */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);
`;

const SecondaryBtn = styled(Link)`
  margin: 0 1rem;
  padding: 0.5rem;
  text-decoration: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background-color: rgba(7, 121, 136, 0.9);
  border: solid 2px rgba(7, 121, 136, 0.9);
  border-radius: 10px;
  color: whitesmoke;
`;

const RedirectAside = styled.aside`
  display: flex;
  align-items: center;
`;

const LoginBtn = styled(NavLink)`
  display: block;
  margin: 0;
  padding: 0.5rem;
  width: 100%;
  background-color: rgba(7, 121, 136, 0.9);
  border: solid 2px rgba(7, 121, 136, 0.9);
  margin-bottom: 25px;
  border-radius: 25px;
  color: whitesmoke;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
`;

const Input = styled.input`
  display: block;
  margin-bottom: 1em;
  border-radius: 6px;
  padding: 6px;
  border: solid 1px #9b9b9b;
  width: 100%;
`;

const Label = styled.label`
  display: inline-block;
  font-size: 0.8rem;
  color: #767676;
  /* background-color: red; */
  vertical-align: center;
  color: whitesmoke;
`;

const MailIcon = styled(AiOutlineMail)`
  display: inline-block;
`;

const MailIconTxt = styled.p`
  font-size: 21px;
  display: inline-block;
  color: whitesmoke;
`;

const PasswordIcon = styled(AiFillLock)``;

const FormWrapper = styled.form`
  padding: 1rem;
  width: 400px;
`;

// Key	Default	Notes
// color	undefined (inherit)
// size	1em
// className	undefined
// style	undefined	Can overwrite size and color
// attr	undefined	Overwritten by other attributes
// title	undefined	Icon description for accessibility

//size reference for react-icons
// 1x - 14px
// 2x - 28px
// 3x - 42px
// 4x - 56px
// 5x - 70px
