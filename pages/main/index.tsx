import type { NextPage } from "next";
import Layout from "components/layout";
import Contact from "components/contact";
import Hero from "components/hero";
import Intro from "components/intro";
import Services from "components/services";

const Main: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Intro />
      <Services />
      <Contact />
    </Layout>
  );
};

export default Main;
