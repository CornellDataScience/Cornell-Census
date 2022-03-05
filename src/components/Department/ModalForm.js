import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';

const ModalForm = () => {
  let classes = ["Computer Science", "Math", "Biology"]
  const RenderList = () => {
      let tempArray = [];
   
           for(var i = 0; i < classes.length; i++){
              tempArray.push(<Dropdown.Item>{classes[i]}</Dropdown.Item>)
           }
   
           return tempArray
  }

  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Select Major</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <select>
            {RenderList}
          </select>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  )
}

export default ModalForm;
