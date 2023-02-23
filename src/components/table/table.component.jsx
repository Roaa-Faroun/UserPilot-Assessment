import {
  Table,
  TableContainer,
  TableBody,
  TablePagination,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Head from "../tablehead/tablehead.component";
import Body from "../tablebody/tablebody.component";
import { useState } from "react";
import ToolBar from "../toolbar/toolbar.compnent";
const useStyles = makeStyles((theme) => ({
  head: {
    padding: "48px 10px 10px 0!important",
    color: "#9FA2B4!important",
    fontSize: "14px!important",
    fontWeight: "700!important",
  },

  tableContainer: {
    borderRadius: "10px",
    border: "1px solid #DFE0EB    ",
    margin: "58px 0",
    padding: "32px",
    background: "#FFF",
    width: "calc(100% - 60px)",
  },

  pagination: {
    color: "#9FA2B4  ",
    justifySelf: "flex-end",
    right: "0",
  },
}));

const UsersTable = (props) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    fetch(`https://randomuser.me/api?results=8&npage=${newPage}`)
      .then((res) => res.json())
      .then((data) => {
        props.setUser(data.results);
      });
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 8));
    setPage(0);
  };
  return (
    <TableContainer
      className={classes.tableContainer}
      style={{ width: "calc(100% - 60px)" }}
    >
      <ToolBar setGender={props.setGender} setNat={props.setNat} />
      <Table aria-label="simple table" className={classes.table}>
        <Head
          classes={classes}
          titles={[
            "User",
            "Contact Information",
            "Registeration Date",
            "Country/Post Code",
          ]}
        />
        <TableBody>
          {props.user.length > 0 &&
            props.user.map((e) => {
              return (
                <Body
                  user={e}
                  handleOpen={props.handleOpen}
                  setUserID={props.setUserID}
                />
              );
            })}
          <Box>
            <TablePagination
              component="div"
              count={8}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              rowsPerPageOptions={[8, 10, 12]}
              className={classes.pageination}
            />
          </Box>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default UsersTable;
