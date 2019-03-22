import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PostCard from '../PostCard/PostCard';
// import ViewCard from '../ViewCard/ViewCard';

class ModalMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: props.showModal
            // modal: true
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div>
                <Button onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}></ModalHeader>
                    <ModalBody>
                        <PostCard />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" className="modal-btn" onClick={this.toggle}>Save</Button>{' '}
                        <Button color="secondary" className="modal-btn" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalMain;