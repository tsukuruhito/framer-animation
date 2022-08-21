import type { NextPage } from "next";
import { useState } from "react";
import KV from "../src/components/KV";
import Layout from "../src/components/Layout/Layout";
import Main from "../src/components/Main";

const Home: NextPage = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <Layout
      title="frameranimation"
      isHeader={true}
      isFooter={true}
      isShow={isShow}
      >
      <KV setIsShow={setIsShow} />
      <Main />
    </Layout>
  );
};

export default Home;
