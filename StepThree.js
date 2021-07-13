import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import CloseModal from "./CloseModal";
import { useHistory } from "react-router-dom";
import { ResellerProvider } from "./ResellerContext";
import { SHOW_LINKS } from "../../Store/actions/hideNavLinks";
import { useDispatch, useSelector } from "react-redux";
import { HIDETOASTER, SHOWTOASTER } from "../../Store/actions/Toster";

const StepThree = (props) => {
  const history = useHistory();
  const [contactInfo, setContactInfo] = React.useContext(ResellerProvider);
  const [modalShow, setModalShow] = React.useState(false);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setContactInfo({
      ...contactInfo,
      [name]: value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    const result = JSON.stringify(contactInfo);
    // console.log(result);
    setModalShow(!modalShow);
  };
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  return (
    <>
      <Form onSubmit={submit}>
        {" "}
        <Row className="mt-5 pt-5 mx-auto reseller-form-section">
          <Col sm={6} xs={12} lg={6} xl={6} className="custom-input-class">
            <Form.Group controlId="">
              <Form.Control
                value={contactInfo.date}
                name="date"
                onChange={handleChange}
                type="date"
                required
                placeholder="date *"
                className="text-secondary button-radius input font-weight-lighter"
              />
            </Form.Group>
          </Col>
          <Col sm={6} xs={12} lg={6} xl={6} className="custom-input-class">
            <Form.Group controlId="">
              <Form.Control
                value={contactInfo.Territory}
                onChange={handleChange}
                name="Territory"
                type="text"
                required
                placeholder="Preferred Territory * (Area where you can effectively market) "
                className="text-secondary button-radius input font-weight-lighter"
              />
            </Form.Group>
          </Col>
          <Col sm={6} xs={12} lg={6} xl={6} className="custom-input-class">
            <Form.Group controlId="">
              <Form.Control
                value={contactInfo.aboutBeyondant}
                onChange={handleChange}
                name="aboutBeyondant"
                type="text"
                required
                as="textarea"
                rows={4}
                placeholder="How Did You Hear About Beyondant? (Enter Code If Provide) *"
                className="text-are-screen-3 text-secondary button-radius"
              />
            </Form.Group>
          </Col>
          <Col sm={6} xs={12} lg={6} xl={6} className="custom-input-class">
            <Form.Group controlId="formBasicName">
              <Form.Control
                value={contactInfo.reviews}
                onChange={handleChange}
                name="reviews"
                type="text"
                required
                rows={4}
                as="textarea"
                placeholder="When Ideally Would You Like To Start Promoting Beyondant? *"
                className="text-are-screen-3 text-secondary button-radius"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="ml-0 submit-proposal-row">
          <Col className="d-block">
            <Button
              className="submit-application-button shadow float-right button-next text-center more text-uppercase"
              type="submit"
            >
              <span className="submit-application">Submit Application</span>{" "}
              <i class="fas fa-arrow-right ml-2"></i>
            </Button>
            <Button
              className="transparent-button shadow float-right text-center more text-uppercase text-muted"
              onClick={() => {
                props.back(false, true, false);
              }}
            >
              <i class="fas fa-arrow-left ml-2"></i> back
            </Button>
          </Col>
        </Row>
      </Form>
      <CloseModal
        show={modalShow}
        onHide={async () => {
          // await dispatch(SHOW_LINKS());
          setModalShow(false);
          dispatch(SHOWTOASTER());
          setTimeout(async () => {
            await dispatch(SHOW_LINKS());
            dispatch(HIDETOASTER());
            props.back(true, false, false);
            // history.push("/");
          }, 2000);
        }}
      />
    </>
  );
};

export default StepThree;
