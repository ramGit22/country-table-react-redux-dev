import React, { useContext } from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

function CountryBody({ flag, name, population, region, languages, favourite }) {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <TableBody>
      <TableRow>
        <TableCell
          style={{ background: theme.background, color: theme.foreground }}
        >
          <img src={flag} style={{ width: "150px" }} alt={`${name} flag`} />
        </TableCell>
        <TableCell
          style={{ background: theme.background, color: theme.foreground }}
        >
          <Link to={`/${name}`}>{name}</Link>
        </TableCell>
        <TableCell
          style={{ background: theme.background, color: theme.foreground }}
        >
          {population}
        </TableCell>
        <TableCell
          style={{ background: theme.background, color: theme.foreground }}
        >
          {region}
        </TableCell>
        <TableCell
          class="MuiTableCell-root MuiTableCell-body"
          // style={{ width: "100px" }},
          style={
            ({ width: "100px" },
            { background: theme.background, color: theme.foreground })
          }
        >
          {languages}
        </TableCell>
        <TableCell
          style={{ background: theme.background, color: theme.foreground }}
        >
          {favourite}
        </TableCell>
      </TableRow>
    </TableBody>
  );
}

export default CountryBody;
