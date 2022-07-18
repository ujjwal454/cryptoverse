import { makeStyles } from "@material-ui/core";
const drawerWidth = "250px";
export default makeStyles((theme) => ({
	main: {
		backgroundColor: "#eceff1",
		width: "100%",
		minHeight: "100vh",
		[theme.breakpoints.down("sm")]: {
			paddingTop: "50px",
		},
	},
	container: {
		paddingTop: "20px",
	},
	stats: {
		display: "flex",
		flexWrap: "wrap",
		flex: "1 1 100px",
		justifyContent: "space-between",
		[theme.breakpoints.down("sm")]: {
			textAlign: "center",
		},
	},
	stat: {
		width: "500px",
		margin: "auto",
		padding: "20px 0",
		flex: "1 1 300px",
		alignSelf: "center",
	},
	header: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
	center: {
		textAlign: "left",
		[theme.breakpoints.down("sm")]: {
			textAlign: "center",
		},
	},
	sizing: {
		[theme.breakpoints.down("xs")]: {
			fontSize: "15px",
		},
	},
	bold: {
		fontWeight: "700",
		fontSize: "25px",
	},
}));
