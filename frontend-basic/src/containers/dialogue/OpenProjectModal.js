import React from 'react'
import PropTypes from 'prop-types'

import { Badge, Button, Modal } from 'react-bootstrap'

const OpenProjectModal = ({ show, onHide }) => <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
        <Modal.Title>Open Project</Modal.Title>
    </Modal.Header>

    <Modal.Body>
        <p>List of existing projects</p>
    </Modal.Body>

    <Modal.Footer>
        <Button variant="primary">Load</Button>
    </Modal.Footer>
</Modal>;

OpenProjectModal.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func.isRequired
};

class OpenProjectComponent extends React.Component {
    constructor() {
        super();
        this.state = { expanded: false };
    }

    render() {
        let self = this;

        return <>
            <OpenProjectModal show={this.state.expanded} onHide={() => { self.setState({ expanded: false }); }} />
            <Button variant="light" size="lg" block style={{ border: '1px solid darkgray' }} onClick={() => { self.setState({ expanded: true }); }}>
                <Badge variant="primary">Open</Badge> existing project
            </Button>
        </>
    }
}

OpenProjectComponent.propTypes = {};

export { OpenProjectModal, OpenProjectComponent };