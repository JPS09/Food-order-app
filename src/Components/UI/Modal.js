import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalTarget = document.getElementById("overlays");

const Modal = (props) => {
  <Fragment>
    {ReactDom.createPortal(Backdrop, portalTarget)}
    {ReactDom.createPortal(ModalOverlay, portalTarget)}
  </Fragment>;
};

export default Modal;
