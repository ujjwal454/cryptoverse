import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
	container: {
		minHeight: "100vh",
		backgroundColor: "#ddd",
		[theme.breakpoints.down("sm")]: {
			padding: " 60px 20px",
		},
	},
	heading: {
		fontSize: "25px",
		paddingBottom: "20px",
		[theme.breakpoints.down("sm")]: {
			fontSize: "15px",
		},
	},
	input: {
		width: "80%",
		marginBottom: "20px",
	},
	btn: {
		marginBottom: "20px",
	},
	paper: {
		padding: "20px",
		textAlign: "center",
		width: "200px",
	},
	grid: {
		margin: "20px 0",
	},
	delete: {
		cursor: "pointer",
	},
}));
