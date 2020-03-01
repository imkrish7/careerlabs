import { getActionStates } from '../Utils/reducerUtility';
import { COURSE_LIST } from '../actions/userActions';
import { successState, loadingState, errorState } from './defaultStats';

export function getListResponse(state={}, action){

	switch (action.type) {
		case getActionStates(COURSE_LIST).success:
			return { ...successState, data: action.data}
		case getActionStates(COURSE_LIST).inProgress:
			return { ...loadingState, loading: action.loading}
		case getActionStates(COURSE_LIST).failure:
			return { ...errorState, error: action.error}
		default:
			return state;
	}
}