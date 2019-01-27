import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { Badge, Button, ButtonGroup, Modal } from 'react-bootstrap'

import _ from 'underscore'

import { loadOveProject, loadOveProjectList } from '../../reducers/uiActions'
import Loader from '../../components/Loader';

const OpenProjectModal = ({ show, onHide, projectList, loading, loadProject }) =>
    <Modal show={show} onHide={onHide} size="lg">
        <Modal.Header closeButton>
            <Modal.Title>Open Project</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Loader isLoading={loading}>
                {_.isEmpty(projectList) && <p>No projects found</p>}

                {_.isEmpty(projectList) ||
                    <div className="overflow-list">
                        <ButtonGroup vertical style={{ width: '100%' }}>
                            {_.map(projectList, project =>
                                <Button key={project} variant="outline-dark" onClick={() => loadProject(project)}>
                                    {project}
                                </Button>)
                            }
                        </ButtonGroup>
                    </div>
                }
            </Loader>
        </Modal.Body>
    </Modal>;

OpenProjectModal.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func.isRequired,
    projectList: PropTypes.arrayOf(PropTypes.string).isRequired,
    loading: PropTypes.bool.isRequired,
    loadProject: PropTypes.func.isRequired
};

class OpenProjectComponent extends React.Component {
    constructor() {
        super();
        this.state = { expanded: false };
    }

    toggleExpand(expanded) {
        if (expanded) {
            this.props.loadProjectList();
        }
        this.setState({ expanded });
    }

    render() {
        let toggleExpand = this.toggleExpand.bind(this);

        let { projectList, loading, loadOveProject } = this.props;

        return <>
            <OpenProjectModal show={this.state.expanded} onHide={() => toggleExpand(false)}
                projectList={projectList} loading={loading} loadProject={loadOveProject} />
            <Button variant="light" size="lg" block style={{ border: '1px solid darkgray' }}
                onClick={() => toggleExpand(true)}>
                <Badge variant="primary">Open</Badge> existing project
            </Button>
        </>
    }
}

OpenProjectComponent.propTypes = {
    projectList: PropTypes.arrayOf(PropTypes.string).isRequired,
    loading: PropTypes.bool.isRequired,
    loadProjectList: PropTypes.func.isRequired,
    loadOveProject: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        projectList: state.oveProjectList.list,
        loading: state.oveProjectList.isFetching
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadProjectList: () => loadOveProjectList(dispatch),
        loadOveProject: (projectId) => loadOveProject(dispatch, projectId)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OpenProjectComponent)