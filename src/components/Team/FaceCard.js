import "../../static/styles/FaceCard.css"
import Card from 'react-bootstrap/Card';

const FaceCard = ({name, image}) => {
  return (
        <div>
        <Card className="card-to" style={{ borderRadius: 25 }}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <img className="img-ft" src={image}></img>
            <Card.Text>

            </Card.Text>
          </Card.Body>
        </Card>
        </div>
  )
}

export default FaceCard;
