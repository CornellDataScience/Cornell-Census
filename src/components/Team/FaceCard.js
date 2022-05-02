import "../../static/styles/FaceCard.css"
import Card from 'react-bootstrap/Card';
import linkedin_logo from '../../static/img/socials/linkedin_logo.png';
import github_logo from '../../static/img/socials/github_logo.webp';
import website_logo from '../../static/img/socials/ubuntu_logo.png';

const FaceCard = ({name, image, hometown, year, text, linked, gith}) => {
  return (
        <div>
        <Card className="card-to" style={{ borderRadius: 25 }}>
          <Card.Body>
            <Card.Title><strong><p className="myname">{name}</p></strong></Card.Title>
            <a href={text}><img className="img-ft" src={image}></img></a>
            <Card.Text>
            <div className="aboutme">
              <div className="major" style={{textAlign:"center"}}>
              <strong><p className="major-text" style={{paddingRight:"5px"}}>Major: </p></strong>
              <p className="major-text">Computer Science</p>
              </div>
              <div className="major">
              <strong><p className="major-text" style={{paddingRight:"5px"}}>Graduation Year: </p></strong>
              <p className="major-text">{year}</p>
              </div>
              <div className="major">
              <strong><p className="major-text" style={{paddingRight:"5px"}}>Hometown: </p></strong>
              <p className="major-text">{hometown}</p>
              </div>
            </div>
            <div className="socials">
              <div className="linkedin">
                <a href={linked}><img src={linkedin_logo} height="40" width="40" alt="logo1"/></a>
              </div>
              <div className="github">
              <a href={gith}><img src={github_logo} height="40" width="40" alt="logo2"/></a>
              </div>
            </div>
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
  )
}

export default FaceCard;
