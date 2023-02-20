import React from "react";
import { Container, Typography } from "@material-ui/core";
import useStyles from "./style";
import ErrorImage from "../../error_image.svg";
const Error = () => {
  const classes = useStyles();
  return (
    <Container className={classes.main}>
      <img src={ErrorImage} alt="loadingillustration" className={classes.img} />
      <Typography variant="h4" color="textSecondary">
        OOps !!! Something went wrong please try later
      </Typography>
    </Container>
  );
};

export default Error;
