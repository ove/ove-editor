export const ADD_ALERT = 'ADD_ALERT';

export function addAlert(alertType, text) {
    return {type: ADD_ALERT, alertType, text}
}

export const DISMISS_ALERT = 'DISMISS_ALERT';

export function dismissAlert(id) {
    return {type: DISMISS_ALERT, id}
}

export const DISMISS_ALL_ALERTS = 'DISMISS_ALL_ALERTS';

export function dismissAllAlerts() {
    return {type: DISMISS_ALL_ALERTS}
}

export const TOGGLE_ALERTS = 'TOGGLE_ALERTS';

export function toggleAlerts() {
    return {type: TOGGLE_ALERTS}
}
