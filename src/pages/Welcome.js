import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";

import AuthConsumer from "../context/UserAuthentication";

export default function Welcome() {
  const [authenticated, dispatch] = AuthConsumer();
  let navigate = useNavigate();

  return (
    <CardContainer>
      <CardHeader>
        <CardHeaderTxt>Sign Up & Start Your Free Trial</CardHeaderTxt>
      </CardHeader>
      <CardLeft>
        <h1>The best way to xyz on abc with your friends!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
      </CardLeft>
      <CardRight>
        <CardSubHeaderTxt>Quick Sign Up</CardSubHeaderTxt>
        <br />
        <LoginBtn
          onClick={() => {
            dispatch({ type: "login" });
            navigate("/stepOne", { replace: true });
          }}
          type="submit"
        >
          Email & Password
        </LoginBtn>
        <FBLoginBtn
          onClick={() => {
            dispatch({ type: "login" });
            navigate("/stepOne", { replace: true });
          }}
          type="submit"
        >
          Facebook
        </FBLoginBtn>
        <GoogleLoginBtn
          onClick={() => {
            dispatch({ type: "login" });
            navigate("/stepOne", { replace: true });
          }}
          type="submit"
        >
          Google
        </GoogleLoginBtn>
      </CardRight>
    </CardContainer>
  );
}

const CardContainer = styled.main`
  padding: 0;
  width: 100%;
  max-width: 800px;
  margin: 0 auto 3em;
  display: grid;
  grid:
    "HeaderArea    HeaderArea"
    "AreaA    AreaB";
  border-radius: 10px;
`;

const CardHeader = styled.header`
  background-color: rgba(7, 121, 136, 0.9); //make variable for theming
  border-radius: 10px 10px 0 0;
  color: #fff;
  padding: 0.5rem 1rem;
  text-align: center;
  grid-column: 1/3;
  padding-top: 1em;
`;

const CardSubHeaderTxt = styled.h4`
  margin: 0;
  padding: 0;
  color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardHeaderTxt = styled.h1`
  margin: 0;
  padding: 0;
  color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardLeft = styled.section`
  margin: 0;
  padding: 1rem;
  grid: AreaA;
  max-width: 400px;
  text-align: left;
  background-color: rgba(255, 255, 255, 0.35);
  border-bottom-left-radius: 10px;
  box-shadow: inset -10px 0 10px -10px rgba(0, 0, 0, 0.5);
  /* box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.6); */
  /* display: flex;
  border-radius: 0 0 10px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  padding: 20px 35px; */
  /* text-align: center; */
`;

const CardRight = styled.section`
  margin: 0;
  padding: 1rem;
  max-width: 400px;
  grid: AreaB;
  text-align: left;
  background-color: rgba(255, 255, 255, 0.15);
  border-bottom-right-radius: 10px;
  /* box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.6); */
`;

const LoginBtn = styled(NavLink)`
  display: block;
  margin: 0;
  padding: 0.5rem;
  min-width: 200px;
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

const FBLoginBtn = styled(LoginBtn)`
  background-color: rgb(59, 89, 152);
  border-color: rgb(59, 89, 152);
`;

const GoogleLoginBtn = styled(LoginBtn)`
  background-color: rgb(219, 68, 55);
  border-color: rgb(219, 68, 55);
`;
