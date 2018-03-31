export const select = (car) => {
	console.log("Now car is :" + car.name);

	return {
		type: "CAR_SLELECTED",
		payload: car
	}
};