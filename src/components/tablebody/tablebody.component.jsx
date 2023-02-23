import * as React from "react";
import { Avatar, Grid, TableCell, TableRow, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  getPhoneNum,
  getDate,
  getTime,
} from "../../assets/functions/functions";
const useStyles = makeStyles((theme) => ({
  row: {
    "&:hover": {
      backgroundColor: " #f7f8ff   ",
      cursor: "pointer",
    },
    display: "flex",
    flexWrap: "nowrap",
  },
  tableCell: {
    paddingRight: "10px!important",
    paddingLeft: "0!important",
  },

  dark: { fontWeight: "700!important" },
  light: { fontSize: "12px!important", color: "#C5C7CD" },
}));
const Body = (props) => {
  const user = { ...props.user };
  const classes = useStyles();
  let phoneNum = getPhoneNum(user.phone);

  let regTime = getTime(user.registered.date);
  let regDate = getDate(user.registered.date);

  return (
    <TableRow
      className={classes.row}
      onClick={() => {
        props.handleOpen(user);
        props.setUserID(user);
      }}
    >
      <TableCell className={classes.tableCell}>
        <Grid container>
          <Grid item style={{ marginRight: "10px" }}>
            <Avatar alt="user-img" src={user.picture.thumbnail} />
          </Grid>
          <Grid>
            <Typography className={classes.dark}>
              {user.name.first + " "}
              {user.name.last}
            </Typography>
            <Typography
              style={{
                overflow: "hidden",
                textOverflow: "clip",
                maxWidth: "230px",
              }}
              className={classes.light}
            >
              {`${user.location.street.number} ${user.location.street.name}. ${user.location.state}, ${user.location.city} ${user.location.postcode}`}
            </Typography>
          </Grid>
        </Grid>
      </TableCell>
      <TableCell className={classes.tableCell}>
        <Typography className={classes.dark}>{user.email}</Typography>
        <Typography className={classes.light}>{phoneNum}</Typography>
      </TableCell>
      <TableCell className={classes.tableCell}>
        <Typography className={classes.dark}>{regDate}</Typography>
        <Typography className={classes.light}>{regTime}</Typography>
      </TableCell>
      <TableCell className={classes.tableCell}>
        <Typography className={classes.dark}>
          {user.location.country}
        </Typography>
        <Typography className={classes.light}>
          {user.location.postcode}
        </Typography>
      </TableCell>
    </TableRow>
  );
};
export default Body;
