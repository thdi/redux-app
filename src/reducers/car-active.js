export default function(state=null, action) {
	switch(action.type){
		case "CAR_SLELECTED":
			return action.payload
			break;
		default:
			return state;
	}
}