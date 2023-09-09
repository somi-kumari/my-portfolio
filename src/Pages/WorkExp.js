import React from "react";
import { Container } from "react-bootstrap";
import WorkExp from "../Components/WorkExp/WorkExp";
function WorkEx() {
    return (
        <Container id="about" fluid className="about-section">
            <Container>
                <WorkExp />
            </Container>
        </Container>
    );
}

export default WorkEx;