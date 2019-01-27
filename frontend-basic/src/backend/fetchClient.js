import fetch from 'cross-fetch'
import { shouldLog } from '../data/config'

import _ from 'underscore'

export class FetchClient {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
    }

    GET(requestUrl, options = {}, contentType = 'application/json') {
        return this.request(requestUrl, options, 'GET', contentType)
    }

    POST(requestUrl, options = {}, contentType = 'application/json') {
        return this.request(requestUrl, options, 'POST', contentType)
    }

    PUT(requestUrl, options = {}, contentType = 'application/json') {
        return this.request(requestUrl, options, 'PUT', contentType)
    }

    DELETE(requestUrl, options = {}, contentType = 'application/json') {
        return this.request(requestUrl, options, 'DELETE', contentType)
    }

    request(requestUrl, options = {}, method = 'GET', contentType = 'application/json') {
        options = {
            credentials: 'same-origin',
            redirect: 'error',
            method: method,
            headers: { 'content-type': contentType },
            ...options,
        };

        let url = this._baseUrl + requestUrl;
        if (options['queryParams']) {
            url += (url.indexOf('?') === -1 ? '?' : '&') + queryParamsUrl(options['queryParams']);
            delete options['queryParams'];
        }

        if (shouldLog()) {
            console.log('request', url, options);
        }

        return fetch(url, options)
            .then(response => {
                if (response.ok) {
                    return response.text().then(text => text && text.length ? Promise.resolve(JSON.parse(text)) : Promise.resolve(null))
                } else {
                    return response.text().then(text => text && text.length ? Promise.reject(JSON.parse(text)) :
                        Promise.reject({ title: 'Error: ' + response.statusText + ' while requesting ' + url }));
                }
            },
                error => Promise.reject({ title: 'Error: ' + error + ' while requesting ' + url })
            )
    }
}

export function queryParams(params) {
    let filteredParams = {};
    _.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined) {
            filteredParams[key] = params[key]
        }
    });
    return { queryParams: filteredParams }
}

export function body(data) {
    return { body: JSON.stringify(data) }
}

export function setupRestBackend(backendUrl) {
    window.fetchClient = new FetchClient(backendUrl)
}

export function restBackend() {
    if (window.fetchClient) {
        return window.fetchClient;
    } else {
        console.error('Client not configured ...')
    }
}

function singleParamEncode(key, value) {
    if (key === 'list') {
        return queryListParams(value)
    } else {
        return encodeURIComponent(key) + '=' + encodeURIComponent(value)
    }
}

function queryParamsUrl(params) {
    return Object.keys(params).map(k => singleParamEncode(k, params[k])).join('&');
}

function queryListParams(lst) {
    return _.map(lst, queryParamsUrl).join('&')
}
