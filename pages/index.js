import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Landing from "./landing";

const Index = () => {
  return <Landing />;
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Index;
