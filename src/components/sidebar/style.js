import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
	drawer: {
		width: "250px",
		zIndex: "9999",
	},
	paper: {
		display: "flex",
		alignItems: "center",
		backgroundColor: "#000051",
		color: "#ddd",
		borderRadius: "1px",
		justifyContent: "space-around",
		padding: "5px 5px 20px 5px",
		width: "250px",
	},
	img: {
		width: "50px",
	},
	list: {
		backgroundColor: "#000051",
		color: "#ddd",
		height: "100vh",
		overflowX: "hidden",
	},
	icon: {
		color: "#ddd",
		// display: "none",
	},
	item: {
		backgroundColor: "#004ba0",
	},
	appbar: {
		position: "fixed",
		width: "100%",
		backgroundColor: "#000051",
		top: 0,
		left: 0,
		display: "none",
		[theme.breakpoints.down("sm")]: {
			display: "block",
		},
	},
	Toolbar: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		color: "#ddd",
	},
	brand: {
		display: "flex",
		alignItems: "center",
	},
}));
