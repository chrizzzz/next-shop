import Link from "next/link";
import Image from "next/image";

export default function ArticleList({ articles }) {
  return (
    <ul className="flex flex-wrap justify-center m-44 gap-6">
      {articles.map((article) => (
        <li key={article.id} className="shadow-sm p-4 max-w-xs w-full">
          <Link href={`/articles/${article.id}`}>
            <a>
              <article>
                <Image
                  src={article.image}
                  alt={article.title}
                  width={250}
                  height={250}
                />
                <h2>{article.title}</h2>
                <p>{article.price} €</p>
              </article>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
