import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function WorkExp() {
    return (
        <Container fluid className="home-about-section  container-fluid" id="workexperience">
            <Container>
                <Row>
                    <Col md={16} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            Work <span className="purple"> Experience </span>
                        </h1>
                        <h3 style={{ color: "#0A81AB", fontStyle: "italic" }}>Syntizen-An M2P Company</h3>
                        <h6>Aug 2022 - June 2023  |  Hyderabad</h6>
                        <p className="home-about-body">
                            <ul>
                                <li>
                                    Developed frontend of the project to create a secure VKYC
                                    system that effectively prevents unauthorized access, maintains
                                    the privacy and confidentiality of user data, and complies with
                                    relevant regulations and industry standards.
                                </li>
                                <li>
                                    Developed UI for the project which includes categorization,
                                    graph, piechart, enabled downloading feature of data, etc.
                                </li>
                                <li>
                                    Developed a dashboard, which has role-based authentication and
                                    features enabled.
                                </li>
                                <li>
                                    Developed another dashboard, the application incorporates role based access control, it supports three main roles: Superadmin,
                                    Admin, and User. Each role has different permissions and privileges within the system.
                                </li>

                                <li>
                                    Good exposure to <span style={{ color: "#0A81AB" }}>HTML, CSS, Bootstrap, Javascript, React JS and Redux-saga </span>.
                                </li>
                            </ul>

                        </p>
                    </Col>

                </Row>
                <Row>
                </Row>
            </Container>
        </Container>
    );
}
export default WorkExp;
