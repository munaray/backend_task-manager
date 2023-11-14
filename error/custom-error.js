class CustomAPIError extends Error {
	constructor(message, statusCode) {
		super(message);
		this.statusCode = statusCode;
	}
}

export const createCustomError = (msg, statusCode) => {
	return CustomAPIError(msg, statusCode);
};

export default CustomAPIError;
