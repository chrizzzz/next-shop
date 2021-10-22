import axios from "axios";

export default async function handler(req, res) {
  const { query, method } = req;
  const limit = query.limit ? `?limit=${query.limit}` : "";
  const category = query.category ? `/category/${query.category}` : "";

  switch (method) {
    case "GET":
      const response = await axios.get(
        `https://fakestoreapi.com/products${category}${limit}`
      );
      res.status(200).json(response.data);

      break;
    default:
      res.status(405).end("Not Allowed");
  }
}
/**?limit=${query.limit} */
