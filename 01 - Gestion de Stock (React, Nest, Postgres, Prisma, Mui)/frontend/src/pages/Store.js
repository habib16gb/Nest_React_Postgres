import React, { useEffect, useState } from "react";
import CustomizedTables from "../components/CustomizedTables";
import axios from "axios";
import { FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Typography from "@mui/material/Typography";

const Store = () => {
  const tableList = [
    { label: "Id Store" },
    { label: "Name Store" },
    { label: "Edit" },
    { label: "Delete" },
  ];
  const [data, setData] = useState([]);
  const [store, setStore] = useState("");
  const [errorInput, setErrorInput] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3300/api/v1/store")
      .then((result) => setData(result.data))
      .catch((err) => console.error(err));
  }, []);

  const addStore = () => {
    axios
      .post("http://localhost:3300/api/v1/store", {
        name: store,
      })
      .then((result) => {
        setData([...data, result.data]);
        setStore("");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <Stack spacing={4}>
      <Box sx={{ display: "flex", gap: "8px", width: "100%" }}>
        <Typography variant='h4'>Add Store</Typography>
        <FormControl sx={{ maxWidth: "80%" }}>
          <TextField
            onChange={(e) => setStore(e.target.value)}
            value={store}
            label='Name Store'
            required
          />
        </FormControl>
        <Box>
          <IconButton
            onClick={() => addStore()}
            aria-label='add'
            color='success'
          >
            <AddBoxIcon />
          </IconButton>
        </Box>
      </Box>
      <CustomizedTables tableList={tableList} data={data} />
    </Stack>
  );
};

export default Store;
