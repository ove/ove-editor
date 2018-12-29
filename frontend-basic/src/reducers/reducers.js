import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import _ from 'underscore'

import { ADD_ALERT, DISMISS_ALERT, DISMISS_ALL_ALERTS, TOGGLE_ALERTS } from "./alertActions";
import { INVALIDATE_OVE_STATE, RECEIVE_OVE_STATE, REQUEST_OVE_STATE, CREATE_OVE_PROJECT } from "./oveStateActions";

const DEFAULT_OVE_STATE = {
    isFetching: false,
    didInvalidate: true,
    projectId: null,
    project: {}
};

function oveState(state = DEFAULT_OVE_STATE, action) {
    switch (action.type) {
        case INVALIDATE_OVE_STATE:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case REQUEST_OVE_STATE:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE_OVE_STATE:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                project: action.data
            });
        case CREATE_OVE_PROJECT:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                projectId: action.name,
                project: action.template
            });
        default:
            return state
    }
}

function alerts(state = { expanded: false, items: [] }, action) {
    switch (action.type) {
        case ADD_ALERT:
            return {
                ...state,
                items: [...state.items, { id: _.uniqueId('alert_'), type: action.alertType, text: action.text }]
            };
        case DISMISS_ALERT:
            return { ...state, items: state.items.filter(t => t.id !== action.id) };
        case DISMISS_ALL_ALERTS:
            return { expanded: false, items: [] };
        case TOGGLE_ALERTS:
            return { ...state, expanded: !state.expanded };
        default:
            return state
    }
}

export default (history) => combineReducers({
    router: connectRouter(history),
    oveState,
    alerts
})
