const notFound = (req, res) =>
	res.status(404).send("404 Route can not be found");

export default notFound;
