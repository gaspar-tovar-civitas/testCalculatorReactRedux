import { SUM_VALUES, DIV_VALUES, CLEAN_RESULT, NUMBER1_VALUE, NUMBER2_VALUE } from '../actions/index';

export default function (state = 0, action) {
	switch (action.type) {
		case SUM_VALUES:
			return action.payload;
		case DIV_VALUES:
			return action.payload;
		case CLEAN_RESULT:
			return action.payload;
		case NUMBER1_VALUE:
			return action.payload
		case NUMBER1_VALUE:
			return action.payload
	}

	return state;
}
