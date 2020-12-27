import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

function CardComponent(props) {
    return (
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.image} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
        {props.text}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    )

}

export default CardComponent;