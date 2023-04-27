import React, { Component, Fragment } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import NewStudentForm from './NewStudentForm'

class NewStudentModal extends Component {
  state = { modal: false }
  
  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }))
  }
  
  render() {
    const create = this.props.create
    
    let title = 'Editing Student'
    let button = <Button onClick={this.toggle}>Edit</Button>
    
    if (create) {
      <Button
        color="primary"
        className="float-right"
        onClick={this.toggle}
        style={{ minwidth: "200px" }}
      >
        Create New
      </Button>
    }
    
    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
          <ModalBoy>
            <NewStudentForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              student={this.props.student}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    )
  }
}

export default NewStudentModal