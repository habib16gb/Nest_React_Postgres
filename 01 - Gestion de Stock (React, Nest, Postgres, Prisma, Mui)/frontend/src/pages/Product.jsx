import { useEffect, useState } from "react";
import Table from "../components/Table";
import axios from "axios";
import Form from "../components/Form";

const Product = () => {
  const [store, setProduct] = useState([]);
  const [ths, setThs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3300/api/v1/product")
      .then((res) => {
        setProduct(res.data);
        setThs(Object?.keys(res.data[0]));
        console.log(res.data);
      })
      .catch((err) => console.error(err.message));
  }, []);
  return (
    <div className='mt-4 mx-auto w-3/4 rounded-md flex flex-col gap-2'>
      <Table data={store} ths={ths} />
      <Form />
    </div>
  );
};

export default Product;
