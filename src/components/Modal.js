import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Modal({ children }) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("..");
  }

  return (
    <>
      <Backdrop onClick={closeHandler} />
      <ModalDialog open={true}>{children}</ModalDialog>
    </>
  );
}

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;

const ModalDialog = styled.dialog`
  border: none;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 0;
  overflow: hidden;
  z-index: 1;
`;
