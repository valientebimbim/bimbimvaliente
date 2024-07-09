import { Card, CardTitle, Col, Container, Row } from "react-bootstrap";

function Contact(){
    return(
        <div>
            <Container>
                <Row className="py-4">
                <h3 className="fw-bold text-primary-color">Contact</h3>
                    <Col>
                        <Card className="border-0 shadow rounded-5 p-3 w-lg-75 m-auto">
                            <CardTitle className="poppins-bold text-center text-dark fs-1 mb-3">
                                Lets Connect!!
                            </CardTitle>
                            <p className="poppins-semibold text-center">
                            Send me an email, lets talk about your thoughs and ideas.We will build tech together.
                            </p>
                            <p className="poppins-bold text-center py-4">
                                YOU CAN ALSO
                            </p>
                            <p className="poppins-semibold text-center lh-1">
                                Message me via the following;
                            </p>
                            <div className="d-flex justify-content-center lh-1 mb-3">
                            <a href="https://web.facebook.com/bin.bim.1276" className="mx-1 mx-lg-2" rel="norefferer"><i class="bi bi-facebook vw-1"></i></a>
                            <a href="facebooklink" className="mx-1 mx-lg-2" rel="norefferer"><i class="bi bi-instagram text-primary-gradient vw-1"></i></a>
                            <a href="facebooklink" className="mx-1 ms-lg-2" rel="norefferer"><i class="bi bi-github text-dark vw-1"></i></a>
                            </div>
                            <p className="poppins-bold text-center py-4">
                                OR
                            </p>
                            <p className="poppins-semibold text-center lh-1">
                                Call Me
                            </p>
                            <p className="poppins-semibold text-center lh-1">
                            <i class="bi bi-telephone text-primary"></i> +639486576476
                            </p>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Contact;