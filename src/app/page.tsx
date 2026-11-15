import CpFooter from "./components/cp-footer";
import CpHeader from "./components/cp-header";
import CpHomeAbout from "./components/cp-home-about";
import CpHomeApproach from "./components/cp-home-approach";
import CpHomeClients from "./components/cp-home-clients";
import CpHomeContact from "./components/cp-home-contact";
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
     <CpHomeClients />
     <CpHomeContact />
     <CpFooter />
    </>
  );
}
