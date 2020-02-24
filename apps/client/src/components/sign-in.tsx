import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { login as loginAction } from '../store/login/actions'

const onChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (
  event: React.FormEvent<HTMLInputElement>,
) => {
  setter(event.currentTarget.value)
}

type onChangeInputEventType = (event: React.FormEvent<HTMLInputElement>) => void

const useOnChangeInput = (initialValue: string): [string, onChangeInputEventType] => {
  const [value, setValue] = useState(initialValue)
  const onChangeHandler = useCallback(onChange(setValue), [setValue])
  return [value, onChangeHandler]
}

const SignIn: React.FC = () => {
  const dispatch = useDispatch()

  const [email, onChangeEmail] = useOnChangeInput('')
  const [password, onChangePassword] = useOnChangeInput('')

  const login = useCallback(() => {
    dispatch(loginAction({ email, password }))
  }, [email, password])
  return (
    <Container>
      <Row>
        <Col xs={12} md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
          <Form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault()
              login()
            }}
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={onChangeEmail} value={email} />
              <Form.Text className="text-muted">Well never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={onChangePassword} value={password} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default SignIn
