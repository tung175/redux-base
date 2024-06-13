import { Button, Container, Form } from "react-bootstrap"

const FormAddNew = () => {
    return (
        <>
        <Container>
            <br/>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>password: </Form.Label>
                    <Form.Control type="password"/>
                </Form.Group><Form.Group className="mb-3">
                    <Form.Label>username: </Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <Button variant="primary">Create</Button>
            </Form>
        </Container>
        </>
    )
}

export default FormAddNew