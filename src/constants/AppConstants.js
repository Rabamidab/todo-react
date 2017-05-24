import PropTypes from 'prop-types';

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const CHECK_TASK = 'CHECK_TASK';
export const FILTER_DONE_TASKS = 'FILTER_DONE_TASKS';

export const taskProps = PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
});