export default async function handler(req, res) {
  if (req.method != "GET") {
    res.status(405).end("Not Allowed");
    return;
  }

  res
    .status(200)
    .json(req.query.lang === "de" ? translationGerman : translationEnglish);
}

export const translationEnglish = [
  {
    id: "men's clothing",
    name: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: "jewelery",
    name: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: "electronics",
    name: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  },
  {
    id: "women's clothing",
    name: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  },
];

export const translationGerman = [
  {
    id: "men's clothing",
    name: "Herren Bekleidung",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: "jewelery",
    name: "Schmick",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: "electronics",
    name: "Elektronik",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  },
  {
    id: "women's clothing",
    name: "Damen Bekleidung",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  },
];
