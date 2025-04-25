import type { NextPage } from "next";
import Layout from "components/layout";
import Contact from "components/contact";

const ContactPage: NextPage = () => {
  return (
    <Layout headerTheme={true}>
      <Contact />
    </Layout>
  );
};

export default ContactPage;
