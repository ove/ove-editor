import React from 'react'
import PropTypes from 'prop-types'

import { Alert } from 'react-bootstrap'

class CloseableAlert extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: true };
    }

    handleClose() {
        this.setState({ show: false });
        this.props.onDismiss(this.props.id);
    }

    render() {
        if (!this.state.show) {
            return null;
        }

        return (
            <Alert variant={this.props.type} dismissible={true} onClose={this.handleClose.bind(this)}>
                {this.props.text}
            </Alert>
        );
    }
}

CloseableAlert.propTypes = {
    id: PropTypes.string.isRequired,
    onDismiss: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["success", "warning", "danger", "info"]).isRequired

};

export default CloseableAlert
