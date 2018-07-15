export const addDay = date => {
	return {
		type: "ADD_DAY",
		payload: {
			date: date,
			color: "",
			todo: ""
		}
	};
};

export const setDayData = data => {
	return {
		type: "SET_DAY",
		payload: data
	};
};

export const pushOpenedPopup = index => {
	return {
		type: 'PUSH_OPENED_POPUP',
		payload: index
	}
}
