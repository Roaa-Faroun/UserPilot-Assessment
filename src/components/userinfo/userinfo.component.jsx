import { Fade, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  fade: {
    transitionDelay: "0.5s",
  },
  box: {
    outline: "none",
  },
  infocolor: {
    background: "#2050AD",
    width: "100%",
    height: "158px",
    position: "relative",
  },
  user: {
    margin: "0 auto",
    width: "447px",
    height: "336px",
    zIndex: "2000",
    position: "absolute",
    top: "88px",
    left: "50%",
    marginLeft: " -223px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  pic: {
    marginBottom: "22px",
    borderRadius: "50%",
    width: "132px",
    height: "132px",
    boxShadow: "rgb(196 196 196) 0px 4px 5px 0px",
  },
  name: {
    marginBottom: "10px",
    fontSize: "18px",
    color: "#252733",
    fontFamily: "Mulish",
    fontWeight: "700",
  },
  location: { color: "#87888C", fontWeight: "400", fontSize: "14px" },
}));

const UserInfo = (props) => {
  const classes = useStyles();
  let [usr, setUsr] = useState();
  useEffect(() => {
    if (props.id) {
      setUsr(props.id);
    }
  }, [props.id]);
  return (
    <div>
      {usr && (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={props.open}
          onClose={props.handleClose}
          closeAfterTransition
          slots={{ backdrop: props.Backdrop }}
        >
          <Fade
            in={props.open}
            className={classes.fade}
            style={{
              transitionDelay: "0.5s",
            }}
          >
            <Box
              sx={props.style}
              className={classes.box}
              style={{
                outline: "none",
              }}
            >
              <div className={classes.infocolor}></div>

              <div className={classes.user}>
                <img
                  src={usr.picture.large}
                  alt="user"
                  className={classes.pic}
                />

                <h2 id="transition-modal-title" className={classes.name}>
                  {usr.name.first + " " + usr.name.last}
                </h2>
                <p id="transition-modal-description">
                  <Typography className={classes.location}>
                    {`${usr.location.street.number} ${usr.location.street.name}. ${usr.location.state}, ${usr.location.city} ${usr.location.postcode}`}
                  </Typography>
                </p>
              </div>
            </Box>
          </Fade>
        </Modal>
      )}
    </div>
  );
};

export default UserInfo;
