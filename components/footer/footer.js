import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("common");
  return (
    <footer className="p-2.5">
      <ul className="flex gap-4">
        <li>
          <Link href="/about">
            <a>{t("footer.about")}</a>
          </Link>
        </li>
        <li>
          <Link href="/imprint">
            <a>{t("footer.imprint")}</a>
          </Link>
        </li>
        <li>
          <Link href="/contacts">
            <a>{t("footer.contacts")}</a>
          </Link>
        </li>
        <li>
          <Link href="/press">
            <a>{t("footer.press")}</a>
          </Link>
        </li>
        <li>
          <Link href="/career">
            <a>{t("footer.career")}</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
