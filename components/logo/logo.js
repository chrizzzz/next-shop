import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <a>
        <Image
          src="/logo.svg"
          alt="fake shop logo"
          width={500}
          height={100}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </a>
    </Link>
  );
}
