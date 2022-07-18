import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
	card: {
		width: "200px",
		margin: "20px 0",
		padding: "10px",
		transition: "all 0.4s ease",
		"&:hover": {
			transform: "scale(+105%)",
		},
	},
	menu: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		paddingBottom: "5px",
	},
	menuIcon: {
		cursor: "pointer",
	},
	header: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		borderBottom: "1px solid #ddd",
		marginBottom: "20px",
	},
	stat: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: "10px",
	},
	cardImg: {
		width: "25px",
	},
	main: {
		height: "100%",
		backgroundColor: "#eceff1",
		overflow: "hidden",
		[theme.breakpoints.down("sm")]: {
			padding: "100px 0 ",
		},
	},
	search: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
	},
	input: {
		width: "50%",
		margin: "auto",
		padding: "50px 0",
	},
}));
