import CpFooter from "./components/cp-footer";
import CpHeader from "./components/cp-header";
import CpHomeAbout from "./components/cp-home-about";
import CpHomeApproach from "./components/cp-home-approach";
import CpHomeClients from "./components/cp-home-clients";
import CpHomeContact from "./components/cp-home-contact";
import CpPageBanner from "./components/cp-page-banner";
import CpHomeProducts from "./components/cp-home-products";

export default function HomePage() {
  return (
    <>
      <CpHeader />
      <CpPageBanner
        eyebrow="MAJESTIC METALWORKS / ARCHITECTURAL METAL SOLUTIONS"
        title="Crafted in Metal."
        highlight="Designed for Living."
        description="Gates, railings and glass solutions, thoughtfully crafted to bring character, elegance and lasting appeal to modern spaces."
        imageSrc="/images/home/hero-architecture.jpg"
        imageAlt="Modern architectural residence featuring metal and glass design"
        imagePosition="center 55%"
      />
      <CpHomeAbout />
      <CpHomeProducts />
      <CpHomeApproach />
      <CpHomeClients />
      <CpHomeContact />
      <CpFooter />
    </>
  );
}
