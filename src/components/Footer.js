import { Container, NavbarBrand, Row, Col } from "react-bootstrap";
function Footer() {
    return(
        <div className="bg-body-tertiary border-top-primary mt-5">
            <Container className="py-4">
                <Row>
                    <Col>
                        <NavbarBrand>Bimbim Valiente</NavbarBrand>
                    </Col>
                    <Col>
                        <p className="text-end">©All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Footer;