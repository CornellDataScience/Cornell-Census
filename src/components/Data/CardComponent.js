import Card from 'react-bootstrap/Card';

const CardComponent = (props) => {
  return (
    <div>
      <Card>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <a href={props.link} class="stretched-link"></a>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardComponent;