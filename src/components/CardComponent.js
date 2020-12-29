import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

function CardComponent(props) {
  return (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body className="card-body">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  )

}

export default CardComponent;