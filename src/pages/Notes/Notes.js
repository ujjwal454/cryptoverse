import React, { useState } from "react";
import {
	Container,
	Typography,
	TextField,
	Button,
	Grid,
	Paper,
} from "@material-ui/core";
import { createNotes } from "../../redux/actions/notesAction";
import { deleteNote } from "../../redux/actions/notesAction";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useId } from "react-id-generator";
const Notes = () => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const [Title, setTitle] = useState("");
	const [Detail, setDetail] = useState("");
	const [randomId] = useId();
	const { data } = useSelector((state) => state.notes);
	console.log(data);
	const handleSubmit = () => {
		let note = {
			title: Title,
			detail: Detail,
			id: randomId,
		};
		dispatch(createNotes(note));
		setDetail("");
		setTitle("");
	};
	const handleDelete = (id) => {
		dispatch(deleteNote(id));
	};
	return (
		<Container className={classes.container}>
			<Typography variant="h5" color="primary" className={classes.heading}>
				Add Notes Of Your Observation!
			</Typography>
			<TextField
				variant="outlined"
				color="primary"
				className={classes.input}
				label="title"
				placeholder="Give a title to your note"
				value={Title}
				onChange={(e) => setTitle(e.target.value)}
			/>{" "}
			<br />
			<TextField
				variant="outlined"
				color="primary"
				className={classes.input}
				multiline
				rows={4}
				label="Detail"
				placeholder="Add details of your Notes"
				value={Detail}
				onChange={(e) => setDetail(e.target.value)}
			/>{" "}
			<br />
			<Button
				variant="contained"
				color="primary"
				className={classes.btn}
				onClick={handleSubmit}
			>
				Add Note
			</Button>
			<hr />
			<Grid container className={classes.grid} spacing={2}>
				{data &&
					data.map((card) => (
						<Grid item key={card.id}>
							<Paper elevation={0} className={classes.paper}>
								<Typography variant="h6" className={classes.title}>
									{card.title}
								</Typography>
								<Typography variant="body1">{card.detail}</Typography>
								<DeleteIcon
									onClick={() => handleDelete(card.id)}
									className={classes.delete}
								/>
							</Paper>
						</Grid>
					))}
			</Grid>
		</Container>
	);
};

export default Notes;
