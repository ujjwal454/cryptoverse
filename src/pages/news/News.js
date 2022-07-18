import React, { useEffect, useState } from "react";
import { Paper, Container, Grid, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { newsFetchInitiate } from "../../redux/actions/newsAction";
import useStyles from "./style";
import Loading from "../../components/laoding/Loading";

const News = ({ simplified }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [Count, setCount] = useState(simplified ? 6 : 12);
	const { newsLoading, news } = useSelector((state) => state.news);
	const [NewsData, setNewsData] = useState(news);
	useEffect(() => {
		dispatch(newsFetchInitiate(Count));
	}, [dispatch]);
	useEffect(() => {
		setNewsData(news);
	}, [news]);
	if (newsLoading) {
		return <Loading />;
	}
	return (
		<Container className={classes.container}>
			<Grid container spacing={5} justifyContent="center">
				{NewsData &&
					NewsData.map((news, index) => (
						<Grid item key={index}>
							<Paper className={classes.paper}>
								<div className={classes.header}>
									<Typography variant="h6" className={classes.name}>
										{news?.name.substring(0, 40)}
									</Typography>
									<img
										src={
											news?.image?.thumbnail?.contentUrl ||
											"https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News"
										}
										alt={"thumbnail"}
										className={classes.img}
									/>
								</div>
								<div className={classes.dispcription}>
									<Typography variant="body2">
										{news?.description.substring(0, 100)}...
									</Typography>
								</div>
								<div className={classes.footer}>
									<img
										src={news?.provider?.image?.thumbnail?.contentUrl}
										alt={"publisher"}
									/>
									<Typography variant="overline">Time</Typography>
								</div>
							</Paper>
						</Grid>
					))}
			</Grid>
		</Container>
	);
};

export default News;
