import { ALERT_DANGER, ALERT_SUCCESS } from '../data/alertType'
import { OVE_PROJECT_FILE_ROUTE, OVE_GET_PROJECT_LIST_ROUTE, OVE_VALIDATE_PROJECT_ROUTE, OVE_CREATE_PROJECT_ROUTE } from '../backend/backendRoutes'

import { addAlert } from './alertActions'
import { restBackend, body } from '../backend/fetchClient'
import { receiveOveProject, requestOveProject, receiveOveProjectList, requestOveProjectList } from './oveProjectActions'

function fetchOveProject(projectId) {
    return (dispatch) => {
        dispatch(requestOveProject());
        restBackend().GET(OVE_PROJECT_FILE_ROUTE(projectId)).then(json => {
            dispatch(receiveOveProject(projectId, json));
            dispatch(addAlert(ALERT_SUCCESS, 'Project loaded ...'));
        }).catch(error => {
            dispatch(receiveOveProject(projectId, {}));
            dispatch(addAlert(ALERT_DANGER, String(error)));
        });
    }
}

function shouldFetchOveProject(state, projectId) {
    const oveState = state.oveCurrentProject;
    if (!oveState) {
        return true
    } else if (oveState.isFetching) {
        return false
    } else {
        return oveState.didInvalidate || projectId !== oveState.projectId
    }
}

export function fetchOveProjectIfNeeded(projectId) {
    return (dispatch, getState) => {
        if (shouldFetchOveProject(getState(), projectId)) {
            return dispatch(fetchOveProject(projectId));
        } else {
            return Promise.resolve()
        }
    }
}

function fetchOveProjectList() {
    return (dispatch) => {
        dispatch(requestOveProjectList());
        restBackend().GET(OVE_GET_PROJECT_LIST_ROUTE()).then(json => {
            dispatch(receiveOveProjectList(json['Projects']));
            dispatch(addAlert(ALERT_SUCCESS, 'Project list loaded ...'));
        }).catch(error => {
            dispatch(receiveOveProjectList([]));
            dispatch(addAlert(ALERT_DANGER, String(error)));
        });
    }
}

function shouldFetchOveProjectList(state) {
    const oveState = state.oveProjectList;
    if (!oveState) {
        return true
    } else if (oveState.isFetching) {
        return false
    } else {
        return oveState.didInvalidate
    }
}

export function fetchOveProjectListIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchOveProjectList(getState())) {
            return dispatch(fetchOveProjectList());
        } else {
            return Promise.resolve()
        }
    }
}

export function validateOveProjectName(projectId) {
    return restBackend().POST(OVE_VALIDATE_PROJECT_ROUTE(), body({ name: projectId }));
}

function createProjectFolder(dispatch, projectId) {
    return restBackend().POST(OVE_CREATE_PROJECT_ROUTE(), body({ name: projectId }))
        .catch(() => dispatch(addAlert(ALERT_DANGER, "Unable to create project due to a server error")));
}

export function updateOveProject(dispatch, projectId, model) {
    return restBackend().POST(OVE_PROJECT_FILE_ROUTE(projectId), body(model))
        .catch(() => dispatch(addAlert(ALERT_DANGER, "Unable to upload project due to a server error")));
}

export function createOveProject(dispatch, projectId, template) {
    return createProjectFolder(dispatch, projectId).then(updateOveProject(dispatch, projectId, template));
}