import Card from 'react-bootstrap/Card';

const CardComponent = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <a href={props.link} class="stretched-link"></a>
      </Card.Body>
    </Card>
  )
}

export default CardComponent;