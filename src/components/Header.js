import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

const Header = () => {
    return (
        <>
        <Navbar bg="light" expand='lg'>
            <Container>
                <Navbar.Brand href="">Redux React</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="">Home</Nav.Link>
                        <Nav.Link href="">Link</Nav.Link>
                        <NavDropdown title='basic-nav-dropdown' id="basic-nav-dropdown">
                            <NavDropdown.Item href="">Action</NavDropdown.Item>
                            <NavDropdown.Item href="">Action</NavDropdown.Item>
                            <NavDropdown.Item href="">Action</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default Header