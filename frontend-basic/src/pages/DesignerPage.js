import 'react-table/react-table.css'

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import { Badge } from 'react-bootstrap'
import ReactTable from 'react-table'

import _ from 'underscore'

const JsonCell = ({ value }) => <>
    {_.map(value, (v, k) => <span key={k + "_" + v}><Badge variant="secondary">{k}</Badge>&nbsp;{v}&nbsp;&nbsp;</span>)}
</>;

JsonCell.propTypes = {
    value: PropTypes.object.isRequired
};

const columns = [
    {
        Header: 'Name',
        accessor: 'name',
        id: 'name'
    },
    {
        Header: 'Type',
        accessor: 'type',
        id: 'type'
    },
    {
        Header: 'Geometry',
        accessor: 'geometry',
        id: 'geometry',
        Cell: JsonCell
    },
    {
        Header: 'Layout constraints',
        accessor: 'positionConstraints',
        id: 'positionConstraints',
        Cell: JsonCell
    }
];

const DesignerPage = ({ projectId, project, isLoading }) => {
    if (project.canvas || isLoading) {
        if (isLoading) {
            // todo; add a nice loader
            return null;
        }
        return <div>
            <h2>Project: {projectId}</h2>
            <ReactTable data={project.canvas.sections} columns={columns} defaultPageSize={10}
                className='table-striped table' />
        </div>
    } else {
        console.log("canvas not found")
        // canvas is not yet initialised
        return <Redirect to="/" />
    }
}

DesignerPage.propTypes = {
    isLoading: PropTypes.bool,
    projectId: PropTypes.string,
    project: PropTypes.object,
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.oveCurrentProject.isFetching,
        projectId: state.oveCurrentProject.projectId,
        project: state.oveCurrentProject.project
    }
};

export default connect(mapStateToProps, null)(DesignerPage)