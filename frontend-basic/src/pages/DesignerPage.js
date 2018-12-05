import 'react-table/react-table.css'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {Badge} from 'react-bootstrap'
import ReactTable from 'react-table'

import _ from 'underscore'

import {initOveState} from '../reducers/backendActions'

const JsonCell = ({value}) => <>
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

class DesignerPage extends React.Component {
    componentDidMount() {
        this.props.onMount()
    }

    render() {
        let {canvas} = this.props;
        if (canvas) {
            return <ReactTable data={canvas.sections} columns={columns} defaultPageSize={10}
                               className='table-striped table'/>
        }
        return null;
    }
}

DesignerPage.propTypes = {
    isLoading: PropTypes.bool,
    canvas: PropTypes.object,
    onMount: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.oveState.isFetching,
        canvas: state.oveState.state.canvas
    }
};

const mapDispatchToProps = (dispatch) => {
    return {onMount: () => dispatch(initOveState())}
};

export default connect(mapStateToProps, mapDispatchToProps)(DesignerPage)