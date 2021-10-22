import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ name, image, link }) {
  return (
    <Link href={link}>
      <a className="border-gray-200 rounded border shadow relative">
        <h2 className=" bg-gray-500  transition bg-opacity-50 hover:bg-opacity-75 absolute inset-0 z-10  rounded flex justify-center items-center font-semibold text-gray-200 hover:text-white ">
          {name}
        </h2>

        <Image src={image} alt={name} width={500} height={500} />
      </a>
    </Link>
  );
}
