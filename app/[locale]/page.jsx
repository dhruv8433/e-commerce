import { useTranslations } from "next-intl";
import Testing from "../testing/__testing__";
import StartupAnimation from "../components/startupAnimation";
import SwiperHome from "../components/SwiperHome";
import HomePage from "../pages/HomePage";

export default function Home() {
  // we can store setting api in our redux store so we can also try that thing here on home page load we just store whole setting inside redux store
  const t = useTranslations('translation');
  return (
    <div>
      {/* welcome animation for 4s */}
      <StartupAnimation />

      {/* main home page  */}
      <HomePage />
    </div>
  );
}