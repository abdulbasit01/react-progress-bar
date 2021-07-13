import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { ResellerProvider } from "./ResellerContext";

const StepTwo = (props) => {
  const [contactInfo, setContactInfo] = React.useContext(ResellerProvider);
  const submit = (e) => {
    e.preventDefault();
    console.log(contactInfo.businessStatus);
    if (contactInfo.businessStatus) {
      // console.log(contactInfo);
      props.next(false, false, true);
    } else {
      alert("business status is not selected");
    }
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setContactInfo({
      ...contactInfo,
      [name]: value,
    });
  };

  return (
    <>
      <Form onSubmit={submit}>
        <Row className="mt-5 pt-5 mx-auto reseller-form-section">
          <Col sm={6} xs={12} lg={4} xl={4} className="custom-input-class">
            <Form.Group controlId="">
              <Form.Control
                value={contactInfo.country}
                name="country"
                type="text"
                required
                placeholder="Country *"
                onChange={handleChange}
                className="text-secondary button-radius input font-weight-lighter"
              />
            </Form.Group>
          </Col>
          <Col sm={6} xs={12} lg={4} xl={4} className="custom-input-class">
            <Form.Group controlId="">
              <Form.Control
                value={contactInfo.postalcode}
                name="postalcode"
                type="text"
                required
                placeholder="Postal Code / Zip Code * "
                onChange={handleChange}
                className="text-secondary button-radius input font-weight-lighter"
              />
            </Form.Group>
          </Col>
          <Col sm={6} xs={12} lg={4} xl={4} className="custom-input-class">
            <Form.Group controlId="">
              <Form.Control
                value={contactInfo.phone}
                name="phone"
                type="tel"
                required
                placeholder="Business Phone"
                onChange={handleChange}
                className="text-secondary button-radius input"
              />
            </Form.Group>
          </Col>
          <Col sm={6} xs={12} lg={4} xl={4} className="custom-input-class">
            <Form.Group controlId="">
              <select
                name="businessStatus"
                placeholder="Business Status * "
                onChange={handleChange}
                className="text-secondary button-radius font-weight-lighter select-dropdown-menu col-12 p-2 bg-light"
                value={contactInfo.businessStatus}
                required
              >
                <option hidden>Business Status</option>
                <option value={1}>proprietorship</option>
                <option value={2}>sole proprietorship</option>
                <option value={3}>general proprietorship</option>
                <option value={4}>limited partnership (LP)</option>
                <option value={5}>limited liability company (LLC)</option>
                <option value={6}>C-corporation</option>
                <option value={7}>S-corporation</option>
              </select>
            </Form.Group>
          </Col>
          <Col sm={6} xs={12} lg={4} xl={4} className="custom-input-class">
            <Form.Group controlId="">
              <Form.Control
                value={contactInfo.last4digits}
                name="last4digits"
                type="number"
                required
                min="0"
                placeholder="ID number only last 4 digits"
                onChange={handleChange}
                className="text-secondary button-radius input font-weight-lighter"
              />
            </Form.Group>
          </Col>
          <Col sm={6} xs={12} lg={4} xl={4} className="custom-input-class">
            <Form.Group controlId="">
              <Form.Control
                value={contactInfo.noOfOwners}
                name="noOfOwners"
                type="number"
                required
                min="0"
                placeholder="No Of Owner / Principal"
                onChange={handleChange}
                className="text-secondary button-radius input font-weight-lighter"
              />
            </Form.Group>
          </Col>
          <Col sm={6} xs={12} lg={4} xl={4} className="custom-input-class">
            <Form.Group controlId="">
              <Form.Control
                value={contactInfo.noOfEmployee}
                name="noOfEmployee"
                type="number"
                required
                min="0"
                placeholder="No Of Employees"
                onChange={handleChange}
                className="text-secondary button-radius input font-weight-lighter"
              />
            </Form.Group>
          </Col>
          <Col sm={6} xs={12} lg={4} xl={4} className="custom-input-class">
            <Form.Group controlId="">
              <Form.Control
                value={contactInfo.noOfSalesEmployee}
                name="noOfSalesEmployee"
                type="number"
                min="0"
                required
                placeholder="No Of Sales Employee"
                onChange={handleChange}
                className="text-secondary button-radius input font-weight-lighter"
              />
            </Form.Group>
          </Col>
          <Col sm={6} xs={12} lg={4} xl={4} className="custom-input-class">
            <Form.Group controlId="">
              <Form.Control
                value={contactInfo.password}
                name="password"
                type="password"
                required
                placeholder="Password"
                onChange={handleChange}
                className="text-secondary button-radius input font-weight-lighter"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="ml-0 submit-proposal-row">
          <Col className="d-block">
            <Button
              className="shadow float-right button-next text-center more text-uppercase"
              type="submit"
            >
              next <i class="fas fa-arrow-right ml-2"></i>
            </Button>
            <Button
              className="transparent-button shadow float-right text-center text-uppercase text-muted"
              onClick={() => props.back(true, false, false)}
            >
              <i class="fas fa-arrow-left ml-2 "></i> back
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default StepTwo;
