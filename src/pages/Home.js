import { Container, Row, Col, Card, Image } from "react-bootstrap";
import profile from '../images/profile.jpg';
import stack1 from '../images/html5.png';
import stack2 from '../images/css.png';
import stack3 from '../images/js.png';
import stack4 from '../images/powerpoint.png';
import stack5 from '../images/word.png';
import stack6 from '../images/excel.png';
import project from '../images/web.png';
function Home(){
    return(
        <div>
           <Container className="py-3 pt-lg-5 mt-lg-4">
                <section id="home" className="border-bottom-primary py-3 py-lg-5">
                    <Row lg={2} xs={1} className="pb-3">
                        <Col className="mt-lg-5 pt-lg-4 order-2 order-lg-1">
                            <Card className="border-0 bg-transparent mt-lg-5 pt-lg-5">
                                <h1 className="text-center text-lg-start mt-4 mt-lg-2 fw-bold">Hi, Im Bimbim  Valiente</h1>
                                <h4 className="text-justify">Recently graduated at Central Philippines State University with a degree of Information Technology. </h4>
                                <p className="mt-2 text-justify" >
                                I am passionate about leveraging technology to solve problems and create innovative solutions. Throughout my academic journey, I've gained hands-on experience in software development, encoding data and other technology stack.
                                </p>
                            </Card>
                        </Col>
                        <Col className="order-1 order-lg-2">
                            <Card className="border-0 bg-transparent w-75 m-auto">
                                <Image src={profile} alt="Profile" className="img-fluid  rounded-5 shadow-lg border-bottom-primary border-3"/>
                            </Card>
                        </Col>
                    </Row>
                </section>

                <section id="skill" className="py-4 border-bottom-primary">
                    <Row>
                        <Col>
                            <h3 className="fw-bold text-primary-color">Skills</h3>
                            <Row xs={1} md={3} className="g-4">
                                <Col>
                                    <Card  className="h-100 shadow radius-0 p-3 rounded-5">
                                        <Card.Img variant="top" src={stack1} className="img-fluid w-50 m-auto" />
                                        <Card.Title className="text-justify">I use HTML to structure web pages, ensuring they are well-organized and accessible, laying the foundation for responsive and user-friendly websites.</Card.Title>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card  className="h-100 shadow radius-0 p-3 rounded-5">
                                        <Card.Img variant="top" src={stack2} className="img-fluid w-50 m-auto" />
                                        <Card.Title className="text-justify">I apply CSS to style web pages, creating visually appealing designs with attention to layout and color schemes to enhance the user experience.</Card.Title>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card  className="h-100 shadow radius-0 p-3 rounded-5">
                                        <Card.Img variant="top" src={stack3} className="img-fluid w-50 m-auto" />
                                        <Card.Title className="text-justify">I leverage JavaScript to add interactivity and dynamic elements to web pages, enabling features like form validation, content updates, and animations.</Card.Title>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card  className="h-100 shadow radius-0 p-3 rounded-5">
                                        <Card.Img variant="top" src={stack4} className="img-fluid w-50 m-auto" />
                                        <Card.Title className="text-justify"> I design impactful presentations with PowerPoint, using slides to convey information effectively through visuals, animations, and multimedia elements.</Card.Title>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card  className="h-100 shadow radius-0 p-3 rounded-5">
                                        <Card.Img variant="top" src={stack5} className="img-fluid w-50 m-auto" />
                                        <Card.Title className="text-justify"> I use Word to produce well-formatted and professional documents, including reports, and letters, incorporating features like styles and templates.</Card.Title>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card  className="h-100 shadow radius-0 p-3 rounded-5">
                                        <Card.Img variant="top" src={stack6} className="img-fluid w-50 m-auto" />
                                        <Card.Title className="text-justify"> I utilize Excel for data analysis and management, performing calculations and using advanced functions and formulas to solve problems.</Card.Title>
                                    </Card>
                                </Col>
                            </Row>
                            
                        </Col>
                    </Row>
                </section>
                <section id="project" className="pt-3">
                    <Row>
                        <Col>
                            <h3 className="fw-bold text-primary-color">Project</h3>
                                <Card  className="shadow-lg radius-0 p-3 bg-dark text-white rounded-5">
                                    <Card.Title className=" fs-3 text-center">Valiente Veterinary Clinic</Card.Title>
                                    <Row lg={2} xs={1}>
                                        <Col className="m-auto text-justify py-4 px-lg-4 order-2 order-lg-1">
                                            <h5>Welcome to Valiente Veterinary Clinic, a project born from my passion as a beginner in Information Technology. Here, I invite you to discover the services I've developed, get to know my approach, and see how my work aims to improve the care of our furry friends through innovative programming. Join me as I embark on this journey of exploration and learning in the world of veterinary technology.</h5>
                                        </Col>
                                        <Col className="m-auto d-flex justify-content-center overflow-hidden order-1 order-lg-1">
                                            <Card.Img src={project} className="img-fluid scale-up py-2 w-100" />
                                        </Col>
                                    </Row>
                                </Card>
                            
                        </Col>
                    </Row>
                </section>
           </Container>
        </div>
    )
}
export default Home;