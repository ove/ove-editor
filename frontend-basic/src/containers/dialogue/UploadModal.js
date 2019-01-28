import 'filepond/dist/filepond.min.css'

import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { Button, Modal } from 'react-bootstrap'

import { FilePond, File } from 'react-filepond'

import _ from 'underscore'

import { processUploadRequest, processUploadRevert } from '../../backend/uploadClient'

class UploadModal extends React.Component {
    render() {
        let { show, onHide, projectId, files, handleFilesUpdate } = this.props;

        let processUploadRequestProject = processUploadRequest.bind(this, projectId)
        let processUploadRevertProject = processUploadRevert.bind(this, projectId)

        return <Modal show={show} onHide={onHide} backdrop={false}>
            <Modal.Header closeButton>
                <Modal.Title>Upload Asset</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="overflow-list">
                    <FilePond allowMultiple={false} onupdatefiles={handleFilesUpdate}
                        server={{ process: processUploadRequestProject, revert: processUploadRevertProject }}>

                        {_.map(files, file => <File key={file} src={file} origin="local" />)}
                    </FilePond>
                </div>
            </Modal.Body>
        </Modal>
    }
}

UploadModal.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func.isRequired,
    projectId: PropTypes.string,
    files: PropTypes.array.isRequired,
    handleFilesUpdate: PropTypes.func.isRequired
};

class UploadComponent extends React.Component {
    constructor() {
        super();
        this.state = { expanded: false, files: [] };
    }

    toggleExpand(expanded) {
        this.setState({ expanded });
    }

    handleUpdate(fileItems) {
        console.log("Handle update", fileItems)
        console.log("Handle update statuses", _.map(fileItems, fileItem => fileItem.status))
        this.setState({ files: _.map(fileItems, fileItem => fileItem.file) });
    }

    render() {
        let toggleExpand = this.toggleExpand.bind(this);
        let handleUpdate = this.handleUpdate.bind(this);

        let { projectId } = this.props;

        return <>
            <UploadModal show={this.state.expanded} onHide={() => toggleExpand(false)}
                projectId={projectId} files={this.state.files} handleFilesUpdate={handleUpdate} />
            <Button variant="outline-primary" onClick={() => toggleExpand(true)}>
                Upload asset
            </Button>
        </>
    }
}

UploadComponent.propTypes = {
    projectId: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        projectId: state.oveCurrentProject.projectId,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadComponent)