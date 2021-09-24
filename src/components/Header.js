import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ToggleButton from "./ToggleButton";
import { removeCountryFromCart } from "../redux/actions";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchBar from "material-ui-search-bar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const Header = ({ handleSearch }) => {
  const [openDrawer, setDrawer] = useState(false);
  const cart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <ToggleButton />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <SearchBar onChange={handleSearch}></SearchBar>
          </Typography>
          <Drawer
            anchor="right"
            open={openDrawer}
            onClose={() => setDrawer(false)}
          >
            {/* <p>hielsohfo</p> */}
            {cart.map((country) => (
              <Card key={country.name}>
                <CardContent>
                  <img
                    src={country.flag}
                    style={{ width: "150px" }}
                    alt={`${country.name} flag`}
                  />
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    name={country.name}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    population={country.population}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    region={country.region}
                  </Typography>
                </CardContent>
                <Button
                  variant="contained"
                  onClick={() => dispatch(removeCountryFromCart(country))}
                >
                  Remove
                </Button>
              </Card>
            ))}
          </Drawer>
          <Button onClick={() => setDrawer(true)}>
            <Badge badgeContent={cart.length} color="secondary">
              <AddShoppingCartIcon
                style={{ color: "secondary", alignItems: "center" }}
              />
            </Badge>
          </Button>{" "}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
