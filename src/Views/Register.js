import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Register() {
    return (
            <div>
 
 <Form>
  <Form.Group controlId="formGroupUsername" required>
    <Form.Label>Username</Form.Label>
    <Form.Control type="username" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword1">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword2">
    <Form.Label>Retype Password</Form.Label>
    <Form.Control type="password"/>
  </Form.Group>
  <Form.Group controlId="formGroupName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" />
  </Form.Group>
  <Form.Group controlId="formGroupLastName">
    <Form.Label>Last name</Form.Label>
    <Form.Control type="last-name" />
  </Form.Group>

  <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Label>Country</Form.Label>
    <Form.Control as="select" custom>
      <option>Latvia</option>
      <option>Lithuania</option>
      <option>Estonia</option>
      <option>Poland</option>
      <option>Germany</option>
    </Form.Control>
    <Form.Check 
    type="checkbox"
    id="custom-switch"
    label="Agree with terms and conditions"
  />

<Button variant="primary">Submit</Button>

  </Form.Group>


</Form>
            </div>
    
    )
    
    
    };
    
    export default Register;