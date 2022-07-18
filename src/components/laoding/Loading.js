import React from "react";
import { Container, Typography } from "@material-ui/core";
import useStyles from "./style";
import undraw_loading_re_5axr from "../../undraw_loading_re_5axr.svg";
const Loading = () => {
	const classes = useStyles();
	return (
		<Container className={classes.main}>
			<img
				src={undraw_loading_re_5axr}
				alt="loadingillustration"
				className={classes.img}
			/>
			<Typography variant="h4" color="textSecondary">
				Loading.....
			</Typography>
		</Container>
	);
};

export default Loading;
