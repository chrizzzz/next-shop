import { useEffect, useState } from "react";
import axios from "axios";

export default function ShoppingCard() {
  const [content, setContent] = useState([]);
  const [open, isOpened] = useState(false);
  useEffect(() => {
    axios.get(`http://localhost:3000/api/products?limit=4`).then((response) => {
      setContent(response.data);
    });
  }, []);

  return (
    <>
      <button onClick={() => isOpened(true)}>
        🛍
        <span className="bg-yellow-700 text-white rounded-full h-24 w-24">
          {content.length}
        </span>
      </button>
      {open && (
        <div className="absolute shadow rounded right-2 p-8">
          <button
            className="absolute top-1 right-2"
            onClick={() => isOpened(false)}
          >
            x
          </button>
          <ul>
            {content.map((article) => (
              <li key={article.title} className="flex justify-between gap-2">
                <h2>{article.title}</h2>
                <p className="justify-self-end">{article.price} € x 1</p>
              </li>
            ))}
          </ul>
          <button className="bg-yellow-600 rounded text-white p-2 inline-block mt-8">
            Buy
          </button>
        </div>
      )}
    </>
  );
}
