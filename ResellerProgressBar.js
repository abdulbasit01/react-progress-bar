import React from "react";
import { Col, Row } from "react-bootstrap";
import "../auth.css";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

const ResellerProgressBar = () => {
  const [showOne, setShowOne] = React.useState(true);
  const [showTwo, setShowTwo] = React.useState(false);
  const [showThree, setShowThree] = React.useState(false);
  const [CLASSES,CHANGE_CLASSES]=React.useState([{step2:["bg-light","text-info","text-dark"]},{step3:["bg-light","text-info","text-dark"]}])
  const switchForm = (step1, step2, step3) => {
    setShowOne(step1);
    setShowTwo(step2);
    setShowThree(step3);
    if(!!step1){
      CHANGE_CLASSES([{step2:["bg-light","text-info"]},{step3:["bg-light","text-info"]}])
    }
    if(!!step2){
      CHANGE_CLASSES([{step2:["bg-primary","text-light","text-primary"]},{step3:["bg-light","text-info","text-dark"]}])
    }
    if(!!step3){
      CHANGE_CLASSES([{step2:["bg-primary","text-light","text-primary"]},{step3:["bg-primary","text-light","text-primary"]}])
    }
  };
  return (
    <div className="main__progress__bar my-5 container-fluid left-rounded right-rounded ">
      <Row className="">
        <Col lg={4} sm={4} xs={4} className="p-0 m-0 position-relative">
          <div className={`progress__section bg-primary left-rounded cursor-pointer`}>
            <span
              className="step-text bg-primary number text-light my-0 text-center"
            >
              1
            </span>
            <p className="pt-5 text-primary text-center">Contact Info</p>
          </div>
        </Col>
        <Col lg={4} sm={4} xs={4} className="p-0 m-0 position-relative">
          <div className={`progress__section ${CLASSES[0].step2[0]} cursor-pointer`}>
            <span
              className={`step-text ${CLASSES[0].step2[0]} ${CLASSES[0].step2[1]} number text-info text-center`}
              
            >
              2
            </span>
            <p className={`pt-5 text-center ${CLASSES[0].step2[2]}`}>Account Info</p>
          </div>
        </Col>
        <Col
          lg={4}
          sm={4}
          xs={4}
          className="p-0 m-0 right-rounded position-relative"
        >
          <div className={`progress__section ${CLASSES[1].step3[0]} right-rounded cursor-pointer`}>
            <span
              className={`step-text ${CLASSES[1].step3[0]}  number ${CLASSES[1].step3[1]} text-center`}
             
            >
              3
            </span>
            <p className={`pt-5 text-center ${CLASSES[1].step3[2]}`}>Start Promoting</p>
          </div>
        </Col>
        {showOne && <StepOne next={switchForm} />}
        {showTwo && <StepTwo next={switchForm} back={switchForm} />}
        {showThree && <StepThree back={switchForm} />}
      </Row>
    </div>
  );
};

export default ResellerProgressBar;
