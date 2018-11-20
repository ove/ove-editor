import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Badge, Card, Collapse} from 'react-bootstrap'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'

import {dismissAlert, dismissAllAlerts, toggleAlerts} from "../reducers/alertActions";
import CloseableAlert from "../components/CloseableAlert";

class AlertContainer extends React.Component {
    render() {
        let {onDismiss, onDismissAll, onToggleAlert} = this.props;
        let {alerts, expanded} = this.props;

        if (alerts.length > 1) {
            return (
                <Card id="alert-panel" bg="light" className="alert-container">
                    <Card.Header onClick={onToggleAlert}>
                        <h5>
                            <Badge variant="primary">{alerts.length}</Badge>&nbsp;Messages
                            <FontAwesomeIcon className="close pull-right" onClick={onDismissAll} icon={faTimesCircle}/>
                        </h5>
                    </Card.Header>
                    <Collapse in={expanded}>
                        <Card.Body>
                            {this.props.alerts.map(a =>
                                <CloseableAlert key={a.id} id={a.id} text={a.text} type={a.type} onDismiss={onDismiss}/>
                            )}
                        </Card.Body>
                    </Collapse>
                </Card>
            );
        } else if (alerts.length === 1) {
            let a = alerts[0];
            return (<CloseableAlert key={a.id} id={a.id} text={a.text} type={a.type} onDismiss={onDismiss}/>)
        } else {
            return null;
        }
    }
}

AlertContainer.propTypes = {
    alerts: PropTypes.array.isRequired,
    expanded: PropTypes.bool.isRequired,
    onDismiss: PropTypes.func.isRequired,
    onDismissAll: PropTypes.func.isRequired,
    onToggleAlert: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {expanded: state.alerts.expanded, alerts: state.alerts.items}
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDismiss: (id) => dispatch(dismissAlert(id)),
        onDismissAll: () => dispatch(dismissAllAlerts()),
        onToggleAlert: () => dispatch(toggleAlerts())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertContainer)
