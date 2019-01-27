const DEFAULT_STORE_ID = "*"
const PROJECT_OBJECT_ID = "project"

export const OVE_GET_PROJECT_LIST_ROUTE = () => `api/${DEFAULT_STORE_ID}/list?hasObject=${PROJECT_OBJECT_ID}`;

export const OVE_PROJECT_FILE_ROUTE = (projectId) => `api/${DEFAULT_STORE_ID}/${projectId}/object/${PROJECT_OBJECT_ID}`;
export const OVE_VALIDATE_PROJECT_ROUTE = () => `api/${DEFAULT_STORE_ID}/validate`;
export const OVE_CREATE_PROJECT_ROUTE = () => `api/${DEFAULT_STORE_ID}/create`;