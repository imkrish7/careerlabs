import { getActionStates } from '../Utils/reducerUtility';
import axios from 'axios';

export const COURSE_LIST = 'COURSE_LIST';

const apiRequest = (dispatch, params, url, requestType, successActions, loadingActions, errorActions) => {
	let headers = { 'Content-Type': 'application/json' };
	let defaultUrl = '';
	if (process.env.NODE_ENV == 'development') {
		defaultUrl = 'http://localhost:5000';
	}

	let reqObj = { method: requestType, url: defaultUrl + url, data: JSON.stringify(params), headers };

	if (dispatch && loadingActions) dispatch(loadingActions(true));

	axios(reqObj)
		.then(res => {
			if (dispatch && loadingActions) dispatch(loadingActions(false));

			if (dispatch && successActions) dispatch(successActions(res.data));
		})
		.catch(error => {
			console.log(error);
			if (dispatch && errorActions) dispatch(errorActions(error.response));
		});
};
export const getListSuccess = data => {
	return { type: getActionStates(COURSE_LIST).success, data };
};

export const getListErrored = error => {
	return { type: getActionStates(COURSE_LIST).failure, error };
};

export const getListLoading = loading => {
	return {
		type: getActionStates(COURSE_LIST).inProgress,
		loading,
	};
};

export const getList = params => {
	const url = '/api/getList';
	const requestType = 'GET';
	return dispatch =>
		apiRequest(
			dispatch,
			params,
			url,
			requestType,
			getListSuccess,
			getListLoading,
			getListErrored
		);
};