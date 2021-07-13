import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { ResellerProvider } from "./ResellerContext";

const StepOne = (props) => {
  const [contactInfo, setContactInfo] = React.useContext(ResellerProvider);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setContactInfo({
      ...contactInfo,
      [name]: value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    props.next(false, true, false);
    // console.log(contactInfo);
  };
  return (
    <Form onSubmit={submit}>
      <Row className="mt-5 pt-5 mx-auto reseller-form-section">
        <Col sm={6} xs={12} lg={4} xl={4} className="custom-input-class">
          <Form.Group>
            <Form.Control
              value={contactInfo.fname}
              name="fname"
              type="text"
              required
              onChange={handleChange}
              placeholder="First Name *"
              className="text-secondary button-radius font-weight-lighter input"
            />
          </Form.Group>
        </Col>
        <Col sm={6} xs={12} lg={4} xl={4} className="custom-input-class">
          <Form.Group>
            <Form.Control
              value={contactInfo.lname}
              name="lname"
              type="text"
              required
              onChange={handleChange}
              placeholder="Last Name *"
              className="text-secondary button-radius font-weight-lighter input"
            />
          </Form.Group>
        </Col>
        <Col sm={6} xs={12} lg={4} xl={4} className="custom-input-class">
          <Form.Group>
            <Form.Control
              value={contactInfo.company}
              name="company"
              required
              type="text"
              required
              onChange={handleChange}
              placeholder="Company *"
              className="text-secondary button-radius input"
            />
          </Form.Group>
        </Col>
        <Col sm={6} xs={12} lg={4} xl={4} className="custom-input-class">
          <Form.Group>
            <Form.Control
              value={contactInfo.email}
              name="email"
              required
              type="email"
              required
              onChange={handleChange}
              placeholder="Email Address *"
              className="text-secondary button-radius input"
            />
          </Form.Group>
        </Col>
        <Col sm={6} xs={12} lg={4} xl={4} className="custom-input-class">
          <Form.Group controlId="">
            <Form.Control
              value={contactInfo.website}
              name="website"
              type="url"
              pattern="https?://.*" size="30"
              onChange={handleChange}
              placeholder="Website"
              className="text-secondary button-radius font-weight-lighter input"
            />
          </Form.Group>
        </Col>
        <Col sm={6} xs={12} lg={4} xl={4} className="custom-input-class">
          <Form.Group>
            <Form.Control
              value={contactInfo.street1}
              name="street1"
              required
              type="text"
              required
              onChange={handleChange}
              placeholder="Street 1 *"
              className="text-secondary button-radius font-weight-lighter input"
            />
          </Form.Group>
        </Col>
        <Col sm={6} xs={12} lg={4} xl={4} className="custom-input-class">
          <Form.Group>
            <Form.Control
              value={contactInfo.street2}
              name="street2"
              required
              type="text"
              required
              onChange={handleChange}
              placeholder="Street 2 *"
              className="text-secondary button-radius font-weight-lighter input"
            />
          </Form.Group>
        </Col>
        <Col sm={6} xs={12} lg={4} xl={4} className="custom-input-class">
          <Form.Group>
            <Form.Control
              value={contactInfo.city}
              name="city"
              required
              type="text"
              required
              onChange={handleChange}
              placeholder="City *"
              className="text-secondary button-radius font-weight-lighter input"
            />
          </Form.Group>
        </Col>
        <Col sm={6} xs={12} lg={4} xl={4} className="custom-input-class">
          <Form.Group>
            <Form.Control
              value={contactInfo.state}
              name="state"
              required
              type="text"
              required
              onChange={handleChange}
              placeholder="State *"
              className="text-secondary button-radius font-weight-lighter input"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="ml-0">
        <Col className="d-block">
          <Button
            className="shadow float-right button-next text-center more text-uppercase"
            type="submit"
          >
            next <i class="fas fa-arrow-right ml-2"></i>
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default StepOne;
