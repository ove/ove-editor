export const INVALIDATE_OVE_PROJECT_LIST = 'INVALIDATE_OVE_PROJECT_LIST';

export function invalidateOveProjectList() {
    return { type: INVALIDATE_OVE_PROJECT_LIST }
}

export const REQUEST_OVE_PROJECT_LIST = 'REQUEST_OVE_PROJECT_LIST';

export function requestOveProjectList() {
    return { type: REQUEST_OVE_PROJECT_LIST }
}

export const RECEIVE_OVE_PROJECT_LIST = 'RECEIVE_OVE_PROJECT_LIST';

export function receiveOveProjectList(data) {
    return { type: RECEIVE_OVE_PROJECT_LIST, data }
}

export const INVALIDATE_OVE_PROJECT = 'INVALIDATE_OVE_PROJECT';

export function invalidateOveProject() {
    return { type: INVALIDATE_OVE_PROJECT }
}

export const REQUEST_OVE_PROJECT = 'REQUEST_OVE_PROJECT';

export function requestOveProject() {
    return { type: REQUEST_OVE_PROJECT }
}

export const RECEIVE_OVE_PROJECT = 'RECEIVE_OVE_PROJECT';

export function receiveOveProject(projectId, data) {
    return { type: RECEIVE_OVE_PROJECT, projectId, data }
}