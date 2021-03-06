import React from "react";
import NewTicketForm from "./NewTicketForm";
import PropTypes from "prop-types";
import { Button }  from "react-bootstrap";
import { Modal } from "react-bootstrap";

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.showFormModal = this.showFormModal.bind(this);
    this.hideFormModal = this.hideFormModal.bind(this);
    this.state = {
      formModalIsShowing: false
    };
  }

  showFormModal(event){
    this.setState({
      formModalIsShowing: true
    });
  }

  hideFormModal(event){
    this.setState({
      formModalIsShowing: false
    });
  }

  render(){
    return (
      <div>
        <Button
          block="true"
          bsStyle="primary"
          bsSize="large"
          onClick={this.showFormModal}>
            Request Help!
        </Button>
        <Modal
          show={this.state.formModalIsShowing}
          onHide={this.hideFormModal}
          bsSize="large">
           <Modal.Header>
             <Modal.Title>Request Help</Modal.Title>
           </Modal.Header>
           <Modal.Body>
             <NewTicketForm
              onNewTicketCreation={this.props.onNewTicketCreation}
              hideFormAfterSubmission = {this.hideFormModal}/>
           </Modal.Body>
         </Modal>
      </div>
    );
  }

NewTicketControl.propTypes = {
  onNewTicketCreation: PropTypes.func
}

export default NewTicketControl;
