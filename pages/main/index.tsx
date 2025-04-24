import type { NextPage } from "next";
import Layout from "components/layout";
import Contact from "components/contact";
import Hero from "components/hero";
import Intro from "components/intro";
import ServicesComp from "components/services";

const Main: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Intro />
      <ServicesComp />
      <Contact />
    </Layout>
  );
};

export default Main;
