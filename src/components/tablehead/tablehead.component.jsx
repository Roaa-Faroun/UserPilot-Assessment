import { TableCell, TableHead } from "@mui/material";

const Head = (props) => {
  const cellsTitles = [...props.titles];
  return (
    <TableHead className={props.classes.head}>
      {cellsTitles.map((e) => {
        return <TableCell className={props.classes.head}>{e}</TableCell>;
      })}
    </TableHead>
  );
};

export default Head;
