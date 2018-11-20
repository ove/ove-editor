import {ALERT_DANGER, ALERT_SUCCESS} from '../data/alertType'
import {OVE_STATE_ROUTE} from '../backend/backendRoutes'

import {addAlert} from './alertActions'
import {restBackend} from '../backend/fetchClient'
import {receiveOveState, requestOveState} from './oveStateActions'

function fetchOveState(projectId = null) {
    return (dispatch) => {
        dispatch(requestOveState());
        restBackend().GET(OVE_STATE_ROUTE).then(json => {
            dispatch(receiveOveState(projectId, json));
            dispatch(addAlert(ALERT_SUCCESS, 'Project loaded ...'));
        }).catch(error => {
            dispatch(receiveOveState(projectId, {}));
            dispatch(addAlert(ALERT_DANGER, String(error)));
        });
    }
}

function shouldFetchOveState(state, projectId = null) {
    const oveState = state.oveState;
    if (!oveState) {
        return true
    } else if (oveState.isFetching) {
        return false
    } else {
        return oveState.didInvalidate || projectId !== oveState.projectId
    }
}

export function fetchTOveStateIfNeeded(projectId = null) {
    return (dispatch, getState) => {
        if (shouldFetchOveState(getState(), projectId)) {
            return dispatch(fetchOveState(projectId));
        } else {
            return Promise.resolve()
        }
    }
}

export function initOveState() {
    return (dispatch) => {
        console.log("Init Ove state");
        return dispatch(fetchTOveStateIfNeeded(null));
    }
}
