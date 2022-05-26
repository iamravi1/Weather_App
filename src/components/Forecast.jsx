import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CurrentDayDescription from "./CurrentDayDescription";
import CurrentDay from "./Currentday";

const Forecast = ({ forecast }) => (
  <Container className="box3">
    <Row>
      <Col xs={12} md={4}>
        <div className="card-title">
          <CurrentDay {...forecast.currentDay} />
        </div>
      </Col>
      <Col xs={12} md={8} className="card-info">
        <CurrentDayDescription forecast={forecast.currentDayDetails} />
      </Col>
    </Row>
  </Container>
);

export default Forecast;
