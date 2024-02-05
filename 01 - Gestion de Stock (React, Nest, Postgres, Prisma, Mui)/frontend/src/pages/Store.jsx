import { useEffect, useState } from "react";
import Table from "../components/Table";
import axios from "axios";

const Store = () => {
  const [store, setStore] = useState([]);
  const [ths, setThs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3300/api/v1/store")
      .then((res) => {
        setStore(res.data);
        setThs(Object?.keys(res.data[0]));
        console.log(res.data);
      })
      .catch((err) => console.error(err.message));
  }, []);
  return (
    <div>
      <Table data={store} ths={ths} />
    </div>
  );
};

export default Store;
