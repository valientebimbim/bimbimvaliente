import { Col, Container, Row, Card, CardTitle } from "react-bootstrap";
import project from '../images/web.png';

function Project(){
    return(
        <div>
            <Container>
                <Row className="py-4">
                    <Col>
                        <h3 className="fw-bold text-primary-color">Project</h3>
                        <Card  className="shadow-lg p-3 bg-dark text-white rounded-5">
                            <Card.Title className=" fs-3 text-center">Valiente Veterinary Clinic</Card.Title>
                            <Row lg={2} xs={1}>
                                <Col className="m-auto text-justify py-4 px-lg-4 order-2 order-lg-1">
                                    <h5>The Valiente Veterinary Clinic project is a comprehensive web application designed to provide essential services for pet owners and veterinary professionals. This project showcases my skills in web development, particularly in creating user-friendly interfaces and dynamic content to improve the overall experience for users.</h5>
                                </Col>
                                <Col className="m-auto d-flex justify-content-center overflow-hidden order-1 order-lg-1">
                                    <Card.Img src={project} className="img-fluid scale-up py-2 w-100" />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row lg={2} xs={1} className="g-3">
                    <Col>
                        <Card className="shadow-lg p-3 rounded-5 h-100">
                            <CardTitle className="fw-bold">
                                Objective :
                            </CardTitle>
                            <p className="text-justify">
                            The primary goal of the Valiente Veterinary Clinic website is to offer a seamless platform where pet owners can access vital information, schedule appointments, and connect with veterinary professionals. The website also serves as an educational resource, providing articles and tips on pet care.
                            </p>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="shadow-lg p-3 rounded-5 h-100">
                            <CardTitle className="fw-bold">
                            Technologies Used :
                            </CardTitle>
                            <ul className="text-primary-color">
                                <li>
                                    <p className="text-dark">
                                        <b>HTML :</b> Structured the content to ensure clear and accessible information for all users.
                                    </p>
                                </li>
                                <li>
                                    <p className="text-dark">
                                        <b>CSS :</b> Styled the website to create an appealing and intuitive user interface.
                                    </p>
                                </li>
                                <li>
                                    <p className="text-dark">
                                        <b>JavaScript :</b> Added animations and visual effects to enhance the user experience and make the website more engaging.
                                    </p>
                                </li>
                            </ul>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Project;