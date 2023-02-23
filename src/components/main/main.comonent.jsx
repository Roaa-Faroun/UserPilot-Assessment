import Header from "../header/header.component";
import UsersTable from "../table/table.component";
const Main = (props) => {
  return (
    <>
      <Header randUser={props.randUser} />
      <UsersTable
        setUserID={props.setUserID}
        handleOpen={props.handleOpen}
        user={props.user}
        setUser={props.setUser}
        setNat={props.setNat}
        setGender={props.setGender}
      />
    </>
  );
};
export default Main;
