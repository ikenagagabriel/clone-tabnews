function status(request, response) {
  response.status(200).json({ 200: "aprovado" });
}

export default status;
