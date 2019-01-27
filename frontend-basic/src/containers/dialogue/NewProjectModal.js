import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import _ from 'underscore'

import { Badge, Button, Form, Modal } from 'react-bootstrap'
import TemplateDeck from '../../components/TemplateDeck'

import projectTemplates from '../../data/templates/projectTemplates'
import { createOveProjectFromTemplate } from '../../reducers/uiActions'

import { validateProjectName } from '../../reducers/backendActions'

class NewProjectModal extends React.Component {
    constructor() {
        super();

        this.state = {
            name: "",
            selectedTemplate: "",
            errors: { name: null, selectedTemplate: null }
        }
    }

    handleTemplateSelection(value) {
        if (value === this.state.selectedTemplate) {
            this.setState({ selectedTemplate: "", errors: { ...this.state.errors, selectedTemplate: null } })
        } else {
            this.setState({ selectedTemplate: value, errors: { ...this.state.errors, selectedTemplate: null } })
        }
    }

    handleNameChange(evt) {
        this.setState({ name: evt.target.value, errors: { ...this.state.errors, name: null } })
    }

    validate() {
        let self = this;

        let templateValidation = new Promise((resolve, reject) => {
            if (_.isEmpty(self.state.selectedTemplate)) {
                reject({ selectedTemplate: "Please select at least one template" })
            } else {
                resolve(true);
            }
        });

        let nameValidation = new Promise((resolve, reject) => {
            if (_.isEmpty(self.state.name)) {
                reject({ name: "The project name can't be empty" });
            } else {
                validateProjectName(self.state.name)
                    .then(() => resolve(true))
                    .catch(error => reject({ name: error.title }));
            }
        });

        return Promise.all([nameValidation, templateValidation]);
    }

    createProject() {
        let { createOveProject } = this.props;
        this.validate().then(() => {
            let selectedTemplate = _.find(projectTemplates, e => e.id === this.state.selectedTemplate).projectTemplate;
            createOveProject(this.state.name, selectedTemplate);
        }).catch((errors) => {
            console.log("validation errors", errors)
            this.setState({ errors });
        })
    }

    render() {
        let { show, onHide } = this.props;
        let { name, selectedTemplate } = this.state;

        let handleTemplateSelection = this.handleTemplateSelection.bind(this);
        let handleNameChange = this.handleNameChange.bind(this);
        let createProject = this.createProject.bind(this);

        return <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Create new project</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Group>
                    <Form.Control type="text" placeholder="Project Name" name="project-name" value={name}
                        onChange={handleNameChange} isInvalid={!_.isEmpty(this.state.errors.name)} />
                    <Form.Control.Feedback type="invalid">{this.state.errors.name}</Form.Control.Feedback>
                </Form.Group>
                <TemplateDeck templates={projectTemplates} selectedState={selectedTemplate}
                    onSelect={handleTemplateSelection} error={this.state.errors.selectedTemplate} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => createProject()}>Create</Button>
            </Modal.Footer>
        </Modal>
    }
}

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
            <NewProjectModal show={this.state.expanded} onHide={() => { self.setState({ expanded: false }); }}
                createOveProject={createOveProject} />
            <Button variant="light" size="lg" block style={{ border: '1px solid darkgray' }}
                onClick={() => { self.setState({ expanded: true }); }}>
                Create <Badge variant="primary">new</Badge> project
            </Button>
        </>
    }
}

NewProjectComponent.propTypes = {
    createOveProject: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return { createOveProject: (name, template) => createOveProjectFromTemplate(dispatch, name, template) }
};

export default connect(null, mapDispatchToProps)(NewProjectComponent);