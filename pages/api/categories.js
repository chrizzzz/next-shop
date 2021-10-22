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
    id: 1,
    name: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    name: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 3,
    name: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  },
  {
    id: 4,
    name: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  },
];

export const translationGerman = [
  {
    id: 1,
    name: "Herren Bekleidung",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    name: "Schmick",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 3,
    name: "Elektronik",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  },
  {
    id: 4,
    name: "Damen Bekleidung",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  },
];
