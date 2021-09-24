import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import useCountry from "../customHooks/useCountry";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    margin: 50,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SingleCountry() {
  const { countryName } = useParams();
  const classes = useStyles();
  const countryData = useCountry();
  console.log(countryData);
  const details = countryData.find(
    (country) => country.name.toLowerCase() === countryName.toLowerCase()
  );
  return (
    <>
      {details && (
        <div className={classes.root}>
          <Accordion>
            <Accordion>
              <AccordionSummary>
                <Typography className={classes.heading}>
                  <img
                    src={details.flag}
                    style={{ width: "150px" }}
                    alt={"flag"}
                  />
                </Typography>
              </AccordionSummary>
            </Accordion>
            <AccordionSummary>
              <Typography className={classes.heading}>
                {details.nativeName}
              </Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Typography className={classes.heading}>
                {details.region}
              </Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Typography className={classes.heading}>
                {details.borders.join(",")}
              </Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Typography className={classes.heading}>
                {details.currencies[0].code}
              </Typography>
            </AccordionSummary>
          </Accordion>
          <Button variant="contained">
            <Link to={`/`}>Back to all countries</Link>
          </Button>
        </div>
      )}
    </>
  );
}
