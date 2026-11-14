import CpHeader from "./components/cp-header";
import CpHomeAbout from "./components/cp-home-about";
import CpHomeHero from "./components/cp-home-hero";

export default function HomePage() {
  return (
    <>
     <CpHeader />
     <CpHomeHero />
     <CpHomeAbout />
    </>
  );
}
