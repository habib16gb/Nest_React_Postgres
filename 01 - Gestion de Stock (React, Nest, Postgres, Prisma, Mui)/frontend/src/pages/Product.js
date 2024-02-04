import React from "react";
import CustomizedTables from "../components/CustomizedTables";
// import axios from "axios";

const Product = () => {
  const tableList = [
    { label: "Id Product" },
    { label: "Name Product" },
    { label: "Price Product" },
    { label: "Edit" },
    { label: "Delete" },
  ];

  return (
    <div>
      <h1>product page</h1>
      <CustomizedTables tableList={tableList} />
    </div>
  );
};

export default Product;
