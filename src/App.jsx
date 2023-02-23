import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import Fade from "@mui/material/Fade";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router";
import "./App.css";
import Main from "./components/main/main.comonent";
import SideBar from "./components/sidebar/sidebar.compnent";
import UserInfo from "./components/userinfo/userinfo.component";
function App() {
  let [userID, setUserID] = useState();
  let [user, setUser] = useState([]);
  let [nat, setNat] = useState("");
  let [gender, setGender] = useState("");
  const [randUser, setRandUsr] = useState();
  let nav = useNavigate();
  useEffect(() => {
    if (window.location.pathname.split("/").slice(-1)[0] !== "") {
      fetch("https://randomuser.me/api")
        .then((res) => res.json())
        .then((data) => {
          handleOpen(data.results[0]);
        });
    }
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => setRandUsr(data.results[0]));
  }, []);
  useEffect(() => {
    fetch(`https://randomuser.me/api?results=8&nat=${nat}&gender=${gender}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results);
      });
  }, [nat, gender]);

  useEffect(() => {}, [userID]);
  const BackdropUnstyled = React.forwardRef((props, ref) => {
    const { open, ...other } = props;
    return (
      <Fade in={open}>
        <div ref={ref} {...other} />
      </Fade>
    );
  });

  BackdropUnstyled.propTypes = {
    open: PropTypes.bool,
  };

  const Modal = styled(ModalUnstyled)`
    position: fixed;
    z-index: 1300;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
  `;

  const Backdrop = styled(BackdropUnstyled)`
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    outline: none !important;
  `;

  const style = (theme) => ({
    position: "absolute",
    top: 0,
    right: 0,
    width: "545px",
    height: "100%",
    backgroundColor: theme.palette.mode === "dark" ? "#0A1929" : "white",
    boxShadow: 24,
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = (id) => {
    setUserID(id);
    setOpen(true);
    nav(`users/${id.login.uuid}`);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Grid container>
        <Grid item xs={3}>
          <SideBar />
        </Grid>
        <Grid item xs={9}>
          <Main
            randUser={randUser}
            setUserID={setUserID}
            user={user}
            setNat={setNat}
            setGender={setGender}
            handleOpen={handleOpen}
            setUser={setUser}
          />
        </Grid>
      </Grid>
      <Routes>
        {
          <Route
            path="/users/:id"
            element={
              <UserInfo
                id={userID}
                user={user}
                open={open}
                handleClose={handleClose}
                Backdrop={Backdrop}
                style={style}
              />
            }
          />
        }
      </Routes>
    </div>
  );
}

export default App;
