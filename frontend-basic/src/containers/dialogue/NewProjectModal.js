import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Badge, Button, Card, Container, Row, Col, Modal } from 'react-bootstrap'
import { createOveProject } from '../../reducers/oveStateActions';

const NewProjectModal = ({ show, onHide, createOveProject }) => <Modal show={show} onHide={onHide} size="lg">
    <Modal.Header closeButton>
        <Modal.Title>Create new project</Modal.Title>
    </Modal.Header>

    <Modal.Body>
        <Container>
            <Row>
                <Col xs={12} md={4}>
                    <Card style={{ height: 400 }}>
                        <Card.Img variant="top" src="https://via.placeholder.com/200x100?text=Gallery+Project" />
                        <Card.Body>
                            <Card.Title>Gallery Project</Card.Title>
                            <Card.Text>
                                This will generate a project from multiple images (assets) displayed one by one on the observatory.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary" onClick={() => { createOveProject({ gallery: true, cols: 1, rows: 1 }) }}>Create</Button>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card style={{ height: 400 }}>
                        <Card.Img variant="top" src="https://via.placeholder.com/200x100?text=Single+Page+Project" />
                        <Card.Body>
                            <Card.Title>Full screen single section project</Card.Title>
                            <Card.Text>
                                This will generate a project from a single asset displayed as a single section on the observatory.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary">Create</Button>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card style={{ height: 400 }}>
                        <Card.Img variant="top" src="https://via.placeholder.com/200x100?text=5+cols+x+1+row" />
                        <Card.Body>
                            <Card.Title>Five section project</Card.Title>
                            <Card.Text>
                                This will generate a project from a 5 assets displayed as multiple sections on the observatory.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary">Create</Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row style={{ marginTop: 20 }}>
                <Col xs={12} md={4}>
                    <Card style={{ height: 400 }}>
                        <Card.Img variant="top" src="https://via.placeholder.com/200x100?text=4+cols+x+1+row" />
                        <Card.Body>
                            <Card.Title>Four section project</Card.Title>
                            <Card.Text>
                                This will generate a project from multiple images (assets) displayed as 4 sections.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary">Create</Button>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card style={{ height: 400 }}>
                        <Card.Img variant="top" src="https://via.placeholder.com/200x100?text=4+cols+x+2+rows" />
                        <Card.Body>
                            <Card.Title>Four section project over two columns</Card.Title>
                            <Card.Text>
                                This will generate a project from multiple images (assets) displayed as 8 sections, 2 rows by 4 columns.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary">Create</Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    </Modal.Body>
</Modal>;

NewProjectModal.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func.isRequired,
    createOveProject: PropTypes.func.isRequired
};

class NewProjectComponent extends React.Component {
    constructor() {
        super();
        this.state = { expanded: false };
    }

    render() {
        let self = this;
        let createOveProject = this.props.createOveProject;

        return <>
            <NewProjectModal show={this.state.expanded} onHide={() => { self.setState({ expanded: false }); }} createOveProject={createOveProject} />
            <Button variant="light" size="lg" block style={{ border: '1px solid darkgray' }} onClick={() => { self.setState({ expanded: true }); }}>
                Create <Badge variant="primary">new</Badge> project
            </Button>
        </>
    }
}

NewProjectComponent.propTypes = {
    createOveProject: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return { createOveProject: (params) => dispatch(createOveProject(params)) }
};

export default connect(null, mapDispatchToProps)(NewProjectComponent);