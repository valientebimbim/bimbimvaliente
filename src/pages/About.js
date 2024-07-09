import { Card, CardTitle, Col, Container, Row } from "react-bootstrap";
import stack1 from '../images/html5.png';
import stack2 from '../images/css.png';
import stack3 from '../images/js.png';
import stack4 from '../images/powerpoint.png';
import stack5 from '../images/word.png';
import stack6 from '../images/excel.png';
function About(){
    return(
        <div>
            <Container>
                <Row className="py-4">
                <h3 className="fw-bold text-primary-color">About</h3>
                    <Col>
                        <Row lg={1} className="g-3">
                            <Col>
                                <Card className="border-0 p-lg-4 p-3 shadow rounded-5">
                                    <CardTitle className="poppins-bold">
                                        Social Links
                                    </CardTitle>
                                    <ul className="text-primary-color">
                                        <li>
                                            <a href="https://web.facebook.com/bin.bim.1276" target="_blank" className="text-decoration-none poppins-medium" rel="norefferer noreferrer"><p>Facebook »  https://web.facebook.com/bin.bim.1276</p></a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/valientebimbim" target="_blank" className="text-decoration-none poppins-medium" rel="norefferer noreferrer"><p>Github »  https://github.com/valientebimbim</p></a>
                                        </li>
                                        <li>
                                            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=jrjtXGjnGXcpMDcWXPRzznDfgjlxlhKdbvXbVWfcDJrDLFTxGMFQlmgnRJWPwNlsmHXMxdNx" target="_blank" className="text-decoration-none poppins-medium" rel="norefferer noreferrer"><p>Gmail »  https://mail.google.com/mail/</p></a>
                                        </li>
                                    </ul>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="border-0 p-lg-4 p-3 shadow rounded-5">
                                    <CardTitle className="poppins-semibold text-justify">
                                        Want to hire me? You can contact me via my <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=jrjtXGjnGXcpMDcWXPRzznDfgjlxlhKdbvXbVWfcDJrDLFTxGMFQlmgnRJWPwNlsmHXMxdNx" target="_blank" className="text-decoration-none poppins-medium" rel="norefferer noreferrer"> Email </a>
                                        and ill get back to you soon.
                                    </CardTitle>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row lg={1} xs={1} className="g-3">
                            <Col>
                                <Card className="border-0 p-3 p-lg-4 mt-lg-0 mt-3 shadow rounded-5">
                                    <CardTitle className="poppins-bold">
                                        About Me
                                    </CardTitle>
                                    <p className="text-justify">
                                    Hello! I'm Bimbim Valiente, an IT graduate passionate about leveraging technology to create practical solutions. With a strong foundation in web development and office productivity tools, I bring a blend of creativity and technical proficiency to every project.
                                    </p>
                                    <Row lg={2} xs={2}>
                                        <Col className="m-auto">
                                            <p>
                                            <i class="bi bi-geo-alt text-danger"></i> Bacolod City
                                            </p>
                                        </Col>
                                        <Col className="m-auto">
                                            <p>
                                            <i class="bi bi-cake text-info"></i> April 7, 1998
                                            </p>
                                        </Col>
                                        <Col className="m-auto">
                                            <p>
                                            <i class="bi bi-telephone text-primary"></i> +639486576476
                                            </p>
                                        </Col>
                                        <Col className="m-auto">
                                            <p>
                                            <i class="bi bi-buildings text-success"></i> <a href="https://www.cpsu.edu.ph/" target="_blank" rel="noreferrer" className="text-primary text-decoration-none">CPSU Main Campus</a>
                                            </p>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="border-0 p-lg-4 p-3 shadow rounded-5">
                                    <CardTitle className="poppins-bold">
                                        Technology Stack
                                    </CardTitle>
                                    <Row lg={3} xs={2} className="g-3">
                                        <Col>
                                            <Card  className="h-100 shadow rounded-5 radius-0 p-3 overflow-hidden">
                                                <Card.Img variant="top" src={stack1} className="img-fluid scale-up w-50 m-auto" />
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card  className="h-100 shadow rounded-5 radius-0 p-3 overflow-hidden">
                                                <Card.Img variant="top" src={stack2} className="img-fluid scale-up w-50 m-auto" />
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card  className="h-100 shadow rounded-5 radius-0 p-3 overflow-hidden">
                                                <Card.Img variant="top" src={stack3} className="img-fluid scale-up w-50 m-auto" />
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card  className="h-100 shadow rounded-5 radius-0 p-3 overflow-hidden">
                                                <Card.Img variant="top" src={stack4} className="img-fluid scale-up w-50 m-auto" />
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card  className="h-100 shadow rounded-5 radius-0 p-3 overflow-hidden">
                                                <Card.Img variant="top" src={stack5} className="img-fluid scale-up w-50 m-auto" />
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card  className="h-100 shadow rounded-5 radius-0 p-3 overflow-hidden">
                                                <Card.Img variant="top" src={stack6} className="img-fluid scale-up w-50 m-auto" />
                                            </Card>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default About;