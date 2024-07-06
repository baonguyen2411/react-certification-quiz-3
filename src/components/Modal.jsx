import { createContext, useContext } from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext();

function Modal({ children, open, onClose }) {
  return createPortal(
    <ModalContext.Provider value={{ open, onClose }}>
      <div className={`modal ${open ? "modal--open" : ""} `}>
        <div className="modal__dialog">{children}</div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("modal")
  );
}

Modal.Header = function ({ title }) {
  const { onClose } = useContext(ModalContext);

  return (
    <div className="modal-header">
      <div>
        <h3 className="modal-header__title">{title}</h3>
      </div>
      <button
        className="modal-header__close-btn"
        onClick={() => onClose(false)}
      >
        X
      </button>
    </div>
  );
};

Modal.Body = function ({ children }) {
  return <div className="modal-body">{children}</div>;
};

Modal.Footer = function ({ children }) {
  return <div className="modal-footer">{children}</div>;
};

export default Modal;
