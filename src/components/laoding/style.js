import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
	main: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		minHeight: "100vh",
		backgroundColor: "#ddd",
	},
	img: {
		minWidth: "400px",
		[theme.breakpoints.down("sm")]: {
			width: "250px",
		},
	},
}));
