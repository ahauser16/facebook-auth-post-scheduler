import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";
//https://blog.logrocket.com/build-modal-with-react-portals/

export default function Modal({ children }) {
  const modalRoot = document.getElementById("modal-root");
  const navigate = useNavigate();

  function closeHandler() {
    console.log("Close Handler Called");
    navigate("..");
  }

  useEffect(() => {
    console.log("Modal Triggereed");
  });

  return createPortal(
    <>
      <Backdrop onClick={closeHandler} />
      <ModalDialog
        open={true}
        //  onClick={() => console.log('Test')}
      >
        {children}
      </ModalDialog>
    </>,
    modalRoot
  );
}

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  /* z-index: 2; */
`;

const ModalDialog = styled.div`
  border: none;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 0;
  overflow: hidden;
  /* z-index: 5; */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
