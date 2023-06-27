import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'


export default class NavbarHome extends Component {
    render() {
        return (
            <div>
                <Navbar bg="bg-gray-800"expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#"><b>ACPLAY</b></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Trending</Nav.Link>
                                <Nav.Link href="#action2">Music</Nav.Link>
                                <Nav.Link href="#action2">Gaming</Nav.Link>
                                <Nav.Link href="#action2">News</Nav.Link>
                                
                                

                                <NavDropdown.Divider />



                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <span
                                    class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                                    id="basic-addon2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="h-5 w-5">
                                        <path
                                            fill-rule="evenodd"
                                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </Form>
                        </Navbar.Collapse>
                        {/* <Nav.Link href="#action2" ><b>Register</b></Nav.Link> */}
                    </Container>
                    {/* <Nav.Link href="#action2"align-middle f-10rem><b>Register</b></Nav.Link> */}
                </Navbar>
            </div>
        )
    }
}
