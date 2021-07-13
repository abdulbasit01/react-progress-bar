import React from "react";
import { Col, Form, Row, Button, Container } from "react-bootstrap";
import { SocialIcons } from "../../Components/common/SocialIcons";
import { BrandLogo } from "../../Components/common/Logo/BrandLogo";
import "../auth.css";
import AuthHeader from "../AuthHeader";
import ResellerProgressBar from "./ResellerProgressBar";
import { ResellerContext } from "./ResellerContext";
function ResellerForm() {
  return (
    <ResellerContext>
      <div className="login-screen-bg w-100">
        <AuthHeader />
        <Container fluid>
          <Row className="row-1-reseller-screen">
            <Col xl={5} lg={3}></Col>
            <Col className="" lg={6} sm={12} className="ml-0 ">
              <div className="login-details-section mt-5">
                <h2>Authorized Reseller Application</h2>
                <p className="register-here" style={{ fontWeight: "500" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
              <ResellerProgressBar />
            </Col>
          </Row>
        </Container>
        <div className="container-fluid reseller-footer">
          <div className="row-1">
            <Row>
              <Col lg={4}>
                <div className="text-right auth-brand-logo">
                  <BrandLogo width="170px" />
                </div>
                <div className="reseller-screen-text text-secondary ">
                  <p>
                    <strong>Calling qualified entrepreneurs!</strong> Join a
                    growing network of Authorized Resellers and build a solid
                    stream of income. <strong>Earn monthly commissions.</strong>{" "}
                    Allow <strong>7 business days</strong> for your application
                    to be reviewed. We will be in touch soon and look forward to
                    working with you!
                  </p>
                </div>
              </Col>
            </Row>
          </div>

          <div className="login-screen-icons">
            <Row className="mt-2">
              <Col lg={4} className="text-right icons-auth-footer">
                <div>
                  <SocialIcons iconsClass={"auth-footer-social-icons"} />
                </div>
              </Col>
              <Col lg={1}></Col>
              <Col>
                <p className="text-left text-secondary h5 copy-right-text auth-copy-right-text">
                  Copyright © 2020 Beyondant | All Rights Reserved - Privacy
                  &#38; Terms | Regions
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </ResellerContext>
  );
}

export default ResellerForm;
