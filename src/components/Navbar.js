import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AuthConsumer from "../context/UserAuthentication";
import {
  AiOutlineHome,
  AiOutlineProfile,
  AiOutlineDashboard,
  AiOutlineLogout,
  AiOutlineLogin,
} from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

export default function Navbar() {
  const [authenticated, dispatch] = AuthConsumer();
  let navigate = useNavigate();

  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    /* Close the drawer when the user clicks outside of it */
    const closeDrawer = (event) => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }
      toggleDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  return (
    <Nav.Wrapper>
      <Nav.Logo>
        <Nav.LogoLink to="/">DJAWN</Nav.LogoLink>
      </Nav.Logo>

      <HamburgerButton.Wrapper onClick={() => toggleDrawer(true)}>
        <HamburgerButton.Lines />
      </HamburgerButton.Wrapper>

      <Nav.Items ref={drawerRef} openDrawer={openDrawer}>
        <Nav.Item>
          <Nav.StyledNavLink to="/">
            <AiOutlineHome /> Home
          </Nav.StyledNavLink>
        </Nav.Item>
        <Nav.Item>
          <Nav.StyledNavLink to="/welcome">
            Welcome
          </Nav.StyledNavLink>
        </Nav.Item>

        {authenticated.auth ? (
          <>
            <Nav.Item>
              <Nav.StyledNavLink to="/dashboard">
                <AiOutlineDashboard /> Dashboard
              </Nav.StyledNavLink>
            </Nav.Item>
            <Nav.Item>
              <Nav.StyledNavLink to="/profile">
                <AiOutlineProfile /> Profile
              </Nav.StyledNavLink>
            </Nav.Item>
            <Nav.Item>
              <Nav.StyledNavLink to="/settings">
                <FiSettings /> Settings
              </Nav.StyledNavLink>
            </Nav.Item>

            <Nav.Item>
              <Nav.StyledLoginLink
                onClick={() => {
                  dispatch({ type: "logout" });
                  navigate("/", { replace: true });
                }}
              >
                <AiOutlineLogout /> Logout
              </Nav.StyledLoginLink>
            </Nav.Item>
          </>
        ) : (
          <>
            <Nav.Item>
              <Nav.StyledLoginLink to="/login">
                <AiOutlineLogin /> Login
              </Nav.StyledLoginLink>
            </Nav.Item>
          </>
        )}
      </Nav.Items>
    </Nav.Wrapper>
  );
}

const Nav = {
  Wrapper: styled.nav`
    margin: 0 auto;
    padding: 0 3rem;
    display: flex;
    flex: 1;
    align-self: flex-start;
    justify-content: space-between;
    align-items: center;
    max-width: 1380px;
    @media only screen and (max-width: 640px) {
      position: fixed;
      width: 100vw;
      bottom: 0;
    }
  `,
  Logo: styled.h1`
    border: 5px solid whitesmoke;
    padding: 0.5rem 1rem;
    color: white;
  `,
  LogoLink: styled(Link)`
    text-decoration: none;
    color: white;
    /* font-family: 'Bungee', cursive; */
    font-size: 1.5em;
  `,

  Items: styled.ul`
    display: flex;
    list-style: none;
    @media only screen and (max-width: 640px) {
      position: fixed;
      right: 0;
      top: 0;
      bottom: 0;
      height: 100%;
      flex-direction: column;
      background-color: crimson;
      margin: 0;
      padding: 1rem 2rem;
      transition: 0.2s ease-out;
      transform: ${({ openDrawer }) =>
        openDrawer ? `translateX(0)` : `translateX(100%)`};
    }
  `,

  Item: styled.li`
    padding: 0 1rem;
    cursor: pointer;
    @media only screen and (max-width: 640px) {
      padding: 1rem 0;
    }
  `,

  StyledNavLink: styled(NavLink)`
    margin: 0;
    padding: 0.5rem 1rem;
    display: block;
    align-items: center;
    color: whitesmoke;
    box-sizing: border-box;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.2rem;
    text-decoration: none;
    /* gap: 0.5rem; */
    /* background-color: whitesmoke; */
    /* border: 1px solid darkred; */
    /* border-radius: 4px; */
    /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4); */
    &:hover,
    &:focus {
      border: 2.5px solid whitesmoke;
      color: white;
    }
    &:active {
      /* background-color: darkred;
      color: whitesmoke; */
    }
  `,
  StyledLoginLink: styled(Link)`
    margin: 0;
    padding: 0.5rem 1rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: whitesmoke;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.2em;
    text-decoration: none;
    &:hover {
      border: 2.5px solid whitesmoke;
      color: white;
    }
  `,
};

const HamburgerButton = {
  Wrapper: styled.button`
    height: 3rem;
    width: 3rem;
    position: relative;
    font-size: 12px;
    display: none;
    @media only screen and (max-width: 640px) {
      display: block;
    }

    /* Remove default button styles */
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;
    &:after {
      content: "";
      display: block;
      position: absolute;
      height: 150%;
      width: 150%;
      top: -25%;
      left: -25%;
    }
  `,
  Lines: styled.div`
    top: 50%;
    margin-top: -0.125em;

    &,
    &:after,
    &:before {
      /* Create lines */
      height: 2px;
      pointer-events: none;
      display: block;
      content: "";
      width: 100%;
      background-color: whitesmoke;
      position: absolute;
    }

    &:after {
      /* Move bottom line below center line */
      top: -0.8rem;
    }

    &:before {
      /* Move top line on top of center line */
      top: 0.8rem;
    }
  `,
};
