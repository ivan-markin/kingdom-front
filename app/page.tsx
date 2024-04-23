import style from "./page.module.scss";
import HeroSection from "@/containers/HeroSection/HeroSection";
import KeyFeatures from "@/containers/KeyFeatures/KeyFeatures";
import Houses from "@/containers/Houses/Houses";
import ParamsDisclaimer from "@/containers/ParamsDisclaimer/ParamsDisclaimer";
import Params from "@/containers/Params/Params";
import Included from "@/containers/Included/Included";
import Form from "@/components/Form/Form";
import Gallery from "@/containers/Gallery/Gallery";
import About from "@/containers/About/About";
import AboutParams from "@/components/AboutParams/AboutParams";
import Stages from "@/containers/Stages/Stages";
import ExhibitionArea from "@/containers/ExhibitionArea/ExhibitionArea";
import Faq from "@/components/FAQ/FAQ";
import Footer from "@/containers/Footer/Footer";

export default function Home() {
  return (
    <main className={style.main}>
      <HeroSection />
      <KeyFeatures />
      <Houses />
      <ParamsDisclaimer />
      <Params />
      <Included />
      <Form />
      <Gallery />
      <About />
      <AboutParams />
      <Stages />
      <ExhibitionArea />
      <Form />
      <Faq />
      <Footer />
    </main>
  );
}
