import axios from "axios";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  if (!id) {
    res.status(404).end("Bad Request");
    return;
  }

  switch (method) {
    case "GET":
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      res.status(200).json(response.data);
      break;
    default:
      res.status(405).end("Not Allowed");
  }
}
