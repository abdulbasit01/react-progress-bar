import React from "react";
import { Modal ,Button} from "react-bootstrap";
import LOGO from '../../assets/logo-sm.png'
import Tick from '../../assets/submit-check.png'
const CloseModal = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <img src={LOGO}/>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>
            Thanks You for Submitting Your Resellers Application
          </p>
          <img src={Tick}  width="50px" height="60px"/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CloseModal;
