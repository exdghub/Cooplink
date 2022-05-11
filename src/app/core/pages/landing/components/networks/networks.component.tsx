import React from "react";
import HeaderTitle from "shared/components/headerTitle/headerTitle.component";
import GridBlock from "./components/grid/grid.component";
import { bankList } from "./network.data";

const NetworkSection = () => {
  return (
    <div className="container">
      <HeaderTitle titleText={"Our"} colorText={"Networks"} />

      <div className="py-5">
        <GridBlock items={bankList} />
      </div>
    </div>
  );
};

export default NetworkSection;
