import { NextPage } from "next";
import Layout from "../src/components/Layout/Layout";
import BoxMoving from "../src/components/Loadings/BoxMoving";
import BoxRotate from "../src/components/Loadings/BoxRotate";
import CirclePaht from "../src/components/Loadings/Circle";
import OrderRotate from "../src/components/Loadings/OrderRotate";
import Wave from "../src/components/Loadings/Wave";

const Mini: NextPage = () => {
  return (
    <Layout isHeader={true} isFooter={true} title={"Mini | FramerAnimation"} isShow={true}>
      <div className="py-28 px-4 max-w-5xl mx-auto">
        <h2 className="heading-primary">Lading&nbsp;Animations</h2>
        <div className="grid grid-cols-3 justify-items-center items-center gap-16 p-4">
          <BoxRotate />
          <BoxMoving />
          <Wave />
          <CirclePaht />
          <OrderRotate />
        </div>
      </div>
    </Layout>
  );
};
export default Mini;
