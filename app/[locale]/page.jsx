import StartupAnimation from "../components/startupAnimation";
import { company_name } from "../config/config";
import HomePage from "../pages/HomePage";

export const metadata = {
  title: `Home | ${company_name}`,
};

export default function Home() {
  // we can store setting api in our redux store so we can also try that thing here on home page load we just store whole setting inside redux store
  return (
    <div>
      {/* welcome animation for 4s */}
      <StartupAnimation />

      {/* main home page  */}
      <HomePage />
    </div>
  );
}
