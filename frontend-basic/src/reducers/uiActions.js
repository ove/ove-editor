import { push } from "connected-react-router"

import { createOveProject, invalidateOveProject, invalidateOveProjectList } from "./oveProjectActions"
import { fetchOveProjectIfNeeded, fetchOveProjectListIfNeeded } from "./backendActions"

export function createOveProjectFromTemplate(dispatch, name, template) {
    dispatch(invalidateOveProject());
    dispatch(createOveProject(name, template));
    dispatch(push("/designer"));
}

export function loadOveProjectList(dispatch) {
    dispatch(invalidateOveProjectList());
    dispatch(fetchOveProjectListIfNeeded());
}

export function loadOveProject(dispatch, projectId) {
    dispatch(invalidateOveProject());
    dispatch(fetchOveProjectIfNeeded(projectId));
    dispatch(push("/designer"));
}