import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
	main: {
		backgroundColor: "#eceff1",
		minHeight: "100vh",
		padding: "50px",
		[theme.breakpoints.down("sm")]: {
			padding: "100px 50px",
		},
	},
	heading: {
		textAlign: "center",
		fontWeight: "600",
		color: "#1c54b2",
		marginBottom: "20px",
	},
	subHeading: {
		textAlign: "center",
		marginBottom: "20px",
		borderBottom: "1px solid #ddd",
		paddingBottom: "10px",
	},
	sheading: {
		marginBottom: "10px",
	},
	stat: {
		display: "flex",
		justifyContant: "space-between",
		marginBottom: "20px",
		alignItems: "center",
		width: "100%",
	},
	title: {
		display: "flex",
		justifyContant: "space-between",
		alignItems: "center",
	},
	spacing: {
		paddingRight: "50px",
	},
}));
