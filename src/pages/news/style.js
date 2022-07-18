import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
	paper: {
		width: "400px",
		padding: "20px",
		[theme.breakpoints.down("xs")]: {
			maxWidth: "250px",
		},
	},
	container: {
		padding: "50px 0px ",
		[theme.breakpoints.down("sm")]: {
			padding: "100px 0 ",
		},
	},
	header: {
		display: "flex",
		justifyContent: "space-between",
		// alignItems: "center",
		marginBottom: "20px",
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column",
			alignItems: "center",
		},
	},
	name: {
		width: "60%",
		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
	},
	img: {
		width: "100px",
		height: "100px",
	},
}));
