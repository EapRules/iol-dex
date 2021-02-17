import React from 'react'
import { useTranslation } from "react-i18next";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Surprise from "../../Assets/Images/surprise.png"

const NotFound = () => {

  const { t } = useTranslation();

  return (
    <Container>
      <Row class="row">
        <Col class="col-md-12">
          <div class="error-template">
            <h1>{t("ErrorTitle")}</h1>
            <h2>404 Not Found</h2>
            <img src={Surprise} alt="surprise"></img>
            <div class="error-details">
              {t("Error404")}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default NotFound;