import { Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import GenderFilter from "../genderfilter/genderfilter.component";
import FilterNat from "../nationalityfilter/natfilter.component";
const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    gap: "14px",
    padding: "0!important",
  },
  tableTitle: { fontSize: "19px", fontWeight: "bold" },
}));
const ToolBar = (props) => {
  const classes = useStyles();
  return (
    <Toolbar className={classes.toolbar}>
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
        className={classes.tableTitle}
      >
        All Users
      </Typography>

      <Typography
        sx={{ flex: "1 1 50%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        <GenderFilter setGender={props.setGender} />
      </Typography>
      <Typography
        sx={{ flex: "1 1 50%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        <FilterNat setNat={props.setNat} />
      </Typography>
    </Toolbar>
  );
};
export default ToolBar;
