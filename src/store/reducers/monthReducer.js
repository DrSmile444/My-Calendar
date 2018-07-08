const initialState = {
	todoDays: []
}

const monthReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_DAY':
			const todoDays = state.todoDays;
			return {...state, todoDays: [ ...todoDays, action.payload ]}
		default:
			return state;
	}
}

export default monthReducer;