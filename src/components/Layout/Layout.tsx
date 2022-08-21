import { motion } from "framer-motion";
import { useAtom } from "jotai";
import Head from "next/head";
import { FunctionComponent, ReactNode } from "react";
import { sceneAtom } from "../../atom";
import SceneChange from "../SceneChange";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  title: string;
  isHeader: boolean;
  isFooter: boolean;
  children: ReactNode;
  isShow: boolean;
};

const Layout: FunctionComponent<Props> = ({
  title,
  isHeader,
  isFooter,
  children,
  isShow,
}) => {
  const [scene] = useAtom(sceneAtom);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="This is my portfoio site to description my skills"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SceneChange />
      <motion.div
        initial={{ opacity: 0 }}
        animate={
          !scene && {
            opacity: 1,
            transition: { duration: 1, ease: "backInOut" },
          }
        }
      >
        {isHeader && <Header isShow={isShow} />}
        {children}
        {isFooter && <Footer />}
      </motion.div>
    </>
  );
};

export default Layout;
