
export const SUM_VALUES = 'REQUEST_SUM_VALUES';
export const DIV_VALUES = 'REQUEST_DIV_VALUES';
export const CLEAN_RESULT = 'REQUEST_CLEAN_RESULT';
export const NUMBER1_VALUE = 'NUMBER1_VALUE';
export const NUMBER2_VALUE = 'NUMBER2_VALUE';

export function number1(a) {
	return {
		type: NUMBER1_VALUE,
		payload: a
	};
}

export function number2(b) {
	return {
		type: NUMBER2_VALUE,
		payload: b
	};
}

export function sumValue(a, b) {
	return {
		type: SUM_VALUES,
		payload: (parseInt(a) + parseInt(b))
	};
}

export function divValue(a, b) {
	return {
		type: DIV_VALUES,
		payload: (parseInt(a) / parseInt(b))
	};
}

export function cleanResult() {
	return {
		type: CLEAN_RESULT,
		payload: 0
	}
}
