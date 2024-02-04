import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables({ tableList, data }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            {tableList.map((list, index) => (
              <StyledTableCell align='center' key={index}>
                {list.label}
              </StyledTableCell>
            ))}
            {/* <StyledTableCell>Id Store</StyledTableCell>
            <StyledTableCell align='right'>Name Store</StyledTableCell>
            <StyledTableCell align='right'>Actions</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row?.id}>
              <StyledTableCell align='center'>{row?.id}</StyledTableCell>
              <StyledTableCell align='center'>{row?.name}</StyledTableCell>
              <StyledTableCell align='center'>
                {
                  <IconButton aria-label='delete' color='primary'>
                    <EditIcon />
                  </IconButton>
                }
              </StyledTableCell>
              <StyledTableCell align='center'>
                {
                  <IconButton aria-label='delete' color='error'>
                    <DeleteIcon />
                  </IconButton>
                }
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
