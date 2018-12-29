import 'react-table/react-table.css'

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import { Badge } from 'react-bootstrap'
import ReactTable from 'react-table'

import _ from 'underscore'

const JsonCell = ({ value }) => <>
    {_.map(value, (v, k) => <><Badge variant="secondary">{k}</Badge>&nbsp;{v}&nbsp;&nbsp;</>)}
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

const DesignerPage = ({ canvas, isLoading }) => {
    if (canvas || isLoading) {
        if (isLoading) {
            // todo; add a nice loader
            return null;
        }
        return <ReactTable data={canvas.sections} columns={columns} defaultPageSize={10}
            className='table-striped table' />
    } else {
        console.log("canvas not found")
        // canvas is not yet initialised
        return <Redirect to="/" />
    }
}

DesignerPage.propTypes = {
    isLoading: PropTypes.bool,
    canvas: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.oveState.isFetching,
        canvas: state.oveState.project.canvas
    }
};

export default connect(mapStateToProps, null)(DesignerPage)