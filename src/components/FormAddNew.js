import { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { createAllUsers } from "../redux/action/action"

const FormAddNew = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    const dispatch = useDispatch()
    const isCreating = useSelector(state => state.user.isCreating)

    const handleCreateNewUser = () => {
        dispatch(createAllUsers(email, password, username))
        setEmail("")
        setPassword("")
        setUsername("")
    }

    return (
        <>
        <Container>
            <br/>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>password: </Form.Label>
                    <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                </Form.Group><Form.Group className="mb-3">
                    <Form.Label>username: </Form.Label>
                    <Form.Control type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
                </Form.Group>
                <Button variant="primary" disabled={isCreating} onClick={() => handleCreateNewUser()}>Create</Button>
            </Form>
        </Container>
        </>
    )
}

export default FormAddNew