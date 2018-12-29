import { push } from "connected-react-router"

import { createOveProject, invalidateOveState } from "./oveStateActions"

export function createOveProjectFromTemplate(dispatch, name, template) {
    dispatch(invalidateOveState());
    dispatch(createOveProject(name, template));
    dispatch(push("/designer"));
}