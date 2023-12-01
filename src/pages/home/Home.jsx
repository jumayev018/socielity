import {
  Faq,
  Footer,
  Hero,
  Know,
  Navbar,
  Platform,
  Socielity,
  Subscribe,
  Trusted,
} from "../../components/pages/home-components";

export const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <Hero />
        <Trusted />
        <Socielity />
        <Know />
        <Faq />
        <Platform />
        <Subscribe />
      </div>
      <Footer />
    </>
  );
};
