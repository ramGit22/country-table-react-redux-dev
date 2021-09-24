import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CountryHeader from "./CountryHeader";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import CountryBody from "./CountryBody";
import { makeStyles } from "@material-ui/core/styles";
import TablePagination from "@material-ui/core/TablePagination";
import Button from "@mui/material/Button";
import { addCountryToCart } from "../redux/actions";

export const useStyles = makeStyles((theme) => ({
  table: {
    minwidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "10px 10px",
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
}));

const CountryTable = ({ countryData, name }) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const cart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event, newPage) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <p>{name}</p>
        <Table className={classes.table} aria-label="simple table">
          <CountryHeader />
          {countryData

            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((country) => (
              <CountryBody
                key={country.name}
                flag={country.flag}
                name={country.name}
                population={country.population}
                region={country.region}
                languages={country.languages.map((lang) => lang.name).join(",")}
                favourite={
                  <Button
                    variant="contained"
                    disabled={
                      cart.filter((cart) => cart === country).length > 0
                    }
                    onClick={() => dispatch(addCountryToCart(country))}
                  >
                    Add
                  </Button>
                }
              />
            ))}
        </Table>
      </TableContainer>
      <TablePagination
        style={{
          color: "blue",
        }}
        rowsPerPageOptions={5}
        component="paper"
        count={countryData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};
export default CountryTable;
