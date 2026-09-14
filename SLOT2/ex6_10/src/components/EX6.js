import React from 'react'
import { Button, Card, Carousel, Container, Nav, Navbar } from 'react-bootstrap';

export default function EX6() {
    return (
        <div >
            <Navbar bg="light">
                <Container className="d-flex justify-space-between">
                    <Navbar.Brand>Navbar</Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link>Home</Nav.Link>
                            <Nav.Link>Link</Nav.Link>
                            <Nav.Link>Dropdown</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="d-flex gap-2">
                        <input className="form-control" placeholder="Search" />
                        <Button variant="outline-primary">Search</Button>
                    </div>
                </Container>
            </Navbar>
            <Carousel>
                <Carousel.Item>
                    <div className="d-flex justify-content-center align-items-center bg-secondary" style={{ height: '400px' }}>
                        <h1 className="text-center">Slide 1</h1>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex justify-content-center align-items-center bg-secondary" style={{ height: '400px' }}>
                        <h1 className="text-center">Slide 2</h1>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex justify-content-center align-items-center bg-secondary" style={{ height: '400px' }}>
                        <h1 className="text-center">Slide 3</h1>
                    </div>
                </Carousel.Item>
            </Carousel>
            <div className="container mt-4">
                <h1 className="text-secondary">NEW PRODUCT</h1>
                <p className="text-secondary">List product description</p>
                <div className="d-flex gap-4 justify-evenly ">
                    <Card style={{ width: '280px' }} className="mb-4">
                        <div className="d-flex justify-content-center align-items-center bg-secondary"
                            style={{ height: '280px', width: "100%" }}>
                            <p>280x280</p>
                        </div>
                        <Card.Body>
                            <Card.Title>Product</Card.Title>
                            <Card.Text>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="text-decoration-line-through">100.000vnd</p>
                                    <p style={{ color: "orange" }}>80.000vnd</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary" className="w-100">Add to cart</Button>
                            <Button variant="outline-primary" className="w-100 mt-2">Xem chi tiết</Button>
                        </Card.Footer>
                    </Card>
                    <Card style={{ width: '280px' }} className="mb-4">

                        <div className="d-flex justify-content-center align-items-center bg-secondary"
                            style={{ height: '280px', width: "100%" }}>
                            <p>280x280</p>
                        </div>
                        <Card.Body>
                            <Card.Title>Product</Card.Title>
                            <Card.Text>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="text-decoration-line-through">100.000vnd</p>
                                    <p style={{ color: "orange" }}>80.000vnd</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary" className="w-100">Add to cart</Button>
                            <Button variant="outline-primary" className="w-100 mt-2">Xem chi tiết</Button>
                        </Card.Footer>
                    </Card>
                    <Card style={{ width: '280px' }} className="mb-4">

                        <div className="d-flex justify-content-center align-items-center bg-secondary"
                            style={{ height: '280px', width: "100%" }}>
                            <p>280x280</p>
                        </div>
                        <Card.Body>
                            <Card.Title>Product</Card.Title>
                            <Card.Text>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="text-decoration-line-through">100.000vnd</p>
                                    <p style={{ color: "orange" }}>80.000vnd</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary" className="w-100">Add to cart</Button>
                            <Button variant="outline-primary" className="w-100 mt-2">Xem chi tiết</Button>
                        </Card.Footer>
                    </Card>
                    <Card style={{ width: '280px' }} className="mb-4">

                        <div className="d-flex justify-content-center align-items-center bg-secondary"
                            style={{ height: '280px', width: "100%" }}>
                            <p>280x280</p>
                        </div>
                        <Card.Body>
                            <Card.Title>Product</Card.Title>
                            <Card.Text>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="text-decoration-line-through">100.000vnd</p>
                                    <p style={{ color: "orange" }}>80.000vnd</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary" className="w-100">Add to cart</Button>
                            <Button variant="outline-primary" className="w-100 mt-2">Xem chi tiết</Button>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </div>
    )
}
