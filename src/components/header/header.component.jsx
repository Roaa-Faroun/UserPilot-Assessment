import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
const Header = (props) => {
  let [randUser, setRandUser] = useState();
  useEffect(() => {
    if (props.randUser) {
      setRandUser(props.randUser);
    }
  }, [props.randUser]);
  return (
    <header
      style={{
        margin: "50px 0 0 0",
        display: "flex",
        width: "calc(100% - 60px)",
        justifyContent: "space-between",
      }}
    >
      {randUser !== undefined && (
        <>
          <h1
            style={{
              fontSize: "24px",
            }}
          >
            Users
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight: "700",
              fontSize: "14px",
            }}
          >
            <span>{randUser.name.first + " " + randUser.name.last}</span>
            <span
              style={{
                width: "44px",
                height: "44px",
                border: "1px solid #DFE0EB",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                // padding: "5px",
              }}
            >
              <Avatar
                style={{ width: "38px", height: "38px" }}
                alt="user-img"
                src={randUser.picture.thumbnail}
              />
            </span>
          </div>
        </>
      )}
    </header>
  );
};
export default Header;
