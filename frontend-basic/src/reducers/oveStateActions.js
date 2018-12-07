export const INVALIDATE_OVE_STATE = 'INVALIDATE_OVE_STATE';

export function invalidateOveState() {
    return { type: INVALIDATE_OVE_STATE }
}

export const REQUEST_OVE_STATE = 'REQUEST_OVE_STATE';

export function requestOveState() {
    return { type: REQUEST_OVE_STATE }
}

export const RECEIVE_OVE_STATE = 'RECEIVE_OVE_STATE';

export function receiveOveState(projectId, data) {
    return { type: RECEIVE_OVE_STATE, projectId, data }
}

export const CREATE_OVE_PROJECT = 'CREATE_OVE_PROJECT';

export function createOveProject({ gallery, cols, rows }) {
    return { type: CREATE_OVE_PROJECT, gallery, cols, rows }
}