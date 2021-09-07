export const offsetReducer = (state, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { offset: state.offset + 10 }
		default:
			return 0
	}
}
