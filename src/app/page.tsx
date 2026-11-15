import CpHeader from "./components/cp-header";
import CpHomeAbout from "./components/cp-home-about";
import CpHomeApproach from "./components/cp-home-approach";
import CpHomeHero from "./components/cp-home-hero";
import CpHomeProducts from "./components/cp-home-products";

export default function HomePage() {
  return (
    <>
     <CpHeader />
     <CpHomeHero />
     <CpHomeAbout />
     <CpHomeProducts />
     <CpHomeApproach />
    </>
  );
}
