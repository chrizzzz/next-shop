import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation("common");
  return (
    <>
      <h1>{t("about.heading")}</h1>
      <p>{t("about.content")}</p>
    </>
  );
}
