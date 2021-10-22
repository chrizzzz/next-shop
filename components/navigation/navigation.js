import Link from "next/link";
import { useTranslation } from "react-i18next";

/*
import dynamic from "next/dynamic";

const NotSRRSoppingCard = dynamic(() => import("./shoppingCart"), {
  ssr: false,
});*/

export default function Navigation() {
  const { t } = useTranslation("common");

  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link href="/articles">
            <a>{t("header.navigation.productLink")}</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

/**   <li>Einloggen</li>
        <li>Warenkorb</li>*/
