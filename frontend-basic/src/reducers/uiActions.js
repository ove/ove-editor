import { invalidateOveProject, invalidateOveProjectList } from "./oveProjectActions"
import { createOveProject, fetchOveProjectIfNeeded, fetchOveProjectListIfNeeded } from "./backendActions"

export function createOveProjectFromTemplate(dispatch, name, template) {
    createOveProject(dispatch, name, template).then(() => loadOveProject(dispatch, name));
}

export function loadOveProjectList(dispatch) {
    dispatch(invalidateOveProjectList());
    dispatch(fetchOveProjectListIfNeeded());
}

export function loadOveProject(dispatch, projectId) {
    dispatch(invalidateOveProject());
    dispatch(fetchOveProjectIfNeeded(projectId));
}