import { backendRestUrl } from "../data/config";
import { OVE_UPLOAD_ASSET_ROUTE } from './backendRoutes';

export function processUploadRequest(projectId, _fieldName, file, _metadata, load, error, progress, abort) {
    console.log("ProcessUpload.fieldname", _fieldName)
    console.log("ProcessUpload.file", file)
    console.log("ProcessUpload.meta", _metadata)

    const request = new XMLHttpRequest();
    request.open('POST', backendRestUrl() + OVE_UPLOAD_ASSET_ROUTE(projectId, file.name));
    request.setRequestHeader('Content-Type', 'application/octet-stream');
    request.setRequestHeader('Content-Disposition', `filename="${file.name}"`);

    request.upload.onprogress = (e) => {
        progress(e.lengthComputable, e.loaded, e.total);
    };

    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            console.log("Upload client.response", request.response)
            load(request.response);
        }
        else {
            console.log("Upload client.error", request.status, request.statusText)
            console.log("Upload client.errorResponse", request.response)
            let errorResult = JSON.parse(request.responseText);
            error(errorResult.title);
        }
    };

    request.send(file);

    return {
        abort: () => {
            request.abort();
            abort();
        }
    };
}

export function processUploadRevert(projectId, uniqueFileId, load, error) {
    console.log("ProcessRevert.uniqueFileId", uniqueFileId);

    error("Not implemented");
}