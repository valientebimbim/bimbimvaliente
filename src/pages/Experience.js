import { Card, Col, Container, Row, Image } from "react-bootstrap";
import exp1 from '../images/experience1.jpg';
import exp2 from '../images/experience2.jpg';
import exp3 from '../images/experience3.jpg';

function Experience(){
    return(
        <div>
            <Container>
                <Row lg={1} xs={1} className="py-4 g-4">
                <h3 className="fw-bold text-primary-color">Experience</h3>
                    <Col>
                        <Card className="border-0 shadow rounded-5 p-4 w-lg-75 m-auto">
                            <Row>
                                <Col lg={8} className="m-auto text-justify order-lg-1 order-2">
                                During my On-the-Job Training, I focused on enhancing my skills in office productivity through practical tasks such as data encoding, document organizing, and assisting staff. My role involved accurately entering and managing large volumes of data using Microsoft Excel, ensuring data integrity and consistency. I also played a key role in organizing and maintaining both digital and physical documents, streamlining the filing system to improve accessibility and efficiency.
                                </Col>
                                <Col className="m-auto order-1 order-lg-2">
                                    <div className="m-auto overflow-hidden d-flex justify-content-center">
                                    <Image src={exp1} className='object-fit-cover scale-up m-auto' fluid/>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0 shadow rounded-5 p-4 w-lg-75 m-auto">
                            <Row>
                                <Col lg={8} className="m-auto text-justify order-lg-1 order-2">
                                Additionally, I provided support to the staff by assisting with various administrative tasks. This included preparing and formatting documents in Microsoft Word, creating visually appealing presentations in PowerPoint, and handling routine office duties. My experience allowed me to develop a keen attention to detail and a strong understanding of office workflows, ultimately contributing to the smooth operation of the office and enhancing my ability to work collaboratively in a professional environment.                        
                                </Col>
                                <Col className="m-auto order-1 order-lg-2">
                                    <div className="m-auto overflow-hidden d-flex justify-content-center">
                                    <Image src={exp2} className='object-fit-cover scale-up m-auto' fluid/>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0 shadow rounded-5 p-4 w-lg-75 m-auto">
                            <Row>
                                <Col lg={8} className="m-auto text-justify order-lg-1 order-2">
                                One of the highlights of my OJT was the opportunity to work closely with experienced professionals who provided valuable mentorship and guidance. Through this hands-on experience, I learned best practices in office productivity, developed effective communication skills, and gained insights into the day-to-day operations of a successful business. This experience not only improved my technical abilities but also prepared me for future challenges in my career.                  
                                </Col>
                                <Col className="m-auto order-1 order-lg-2">
                                    <div className="m-auto overflow-hidden d-flex justify-content-center">
                                    <Image src={exp3} className='object-fit-cover scale-up m-auto' fluid/>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Experience;