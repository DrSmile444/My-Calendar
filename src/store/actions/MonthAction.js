export const addDay = date => {
	return {
		type: 'ADD_DAY',
		payload: {
			title: date,
			color: '',
			todo: ''
		}
	}
}

export const setDayData = data => {
	return {
		type: 'SET_DAY',
		payload: data
	}
}