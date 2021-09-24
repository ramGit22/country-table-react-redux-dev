import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";

const header = [
  "flag",
  "name",
  "population",
  "region",
  "languages",
  " favourite",
];

const CountryHeader = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <TableHead>
      <TableRow>
        {header.map((headerItem) => (
          <TableCell
            style={{
              background: theme.background,
              color: theme.foreground,
            }}
          >
            {headerItem.toUpperCase()}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default CountryHeader;
