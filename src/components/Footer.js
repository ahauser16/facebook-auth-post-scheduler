import styled from "styled-components";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <FooterWrapper>
        <FootNav>
          <Items>
            <FooterItem>
              <FollowUs>Follow us</FollowUs>
              <AiOutlineInstagram size={30} />
              <AiOutlineFacebook size={30} />
              <AiFillTwitterSquare size={30} />
            </FooterItem>
            <FooterItem>
              <FooterNavLink to="/about" target="_blank">
                About Us
              </FooterNavLink>
            </FooterItem>
            <FooterItem>
              <FooterNavLink to="/blog" target="_blank">
                Our Blog
              </FooterNavLink>
            </FooterItem>
            <FooterItem>
              <FooterNavLink to="/contact" target="_blank">
                Contact Us
              </FooterNavLink>
            </FooterItem>
            <FooterItem>
              <FooterNavLink to="/partners" target="_blank">
                Partners
              </FooterNavLink>
            </FooterItem>
            <FooterItem>
              <FooterNavLink to="/policies" target="_blank">
                Policies
              </FooterNavLink>
            </FooterItem>
          </Items>
        </FootNav>
      </FooterWrapper>
    </>
  );
}

const FooterWrapper = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  margin: 0;
  padding: 0;
  grid-area: footer;
  width: 100%;
  background-color: rgba(25, 24, 31, .5);

  backdrop-filter: blur(15px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
`;

const FollowUs = styled.h3`
  color: white;
  margin: 0;
  padding: 0;
`;

const FootNav = styled.nav`
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
`;

const Items = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  width: 100%;
  @media only screen and (max-width: 640px) {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    flex-direction: row;
    transition: 0.2s ease-out;
    transform: ${({ openDrawer }) =>
      openDrawer ? `translateX(0)` : `translateX(100%)`};
  }
`;

const FooterItem = styled.li`
  padding: 0 1rem;
  cursor: pointer;
  @media only screen and (max-width: 640px) {
    padding: 1rem 0;
  }
`;

const FooterNavLink = styled(Link)`
  margin: 0;
  padding: 0.5rem 1rem;
  display: block;
  align-items: center;
  color: whitesmoke;
  box-sizing: border-box;
  cursor: pointer;
  /* font-weight: bold; */
  font-size: 1.2rem;
  text-decoration: none;
`;
