import React, { useEffect } from "react";
import { Container, Typography, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import millify from "millify";
import useStyles from "./style";
import Crypto from "../crypto/Crypto";
import News from "../news/News";
import { fetchStatsInitiate } from "../../redux/actions/statAction";
// import { newsFetchInitiate } from "../../redux/actions/newsAction";
import Loading from "../../components/laoding/Loading";
const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchStatsInitiate());
		console.log(data);
	}, [dispatch]);
	const classes = useStyles();
	const { data, loading } = useSelector((state) => state.stats);

	const navigate = useNavigate();
	if (loading) {
		return <Loading />;
	}
	return (
		<div className={classes.main}>
			<Container className={classes.container}>
				<Typography variant="h4" className={classes.center}>
					Global Crypto Stats
				</Typography>
				<div className={classes.stats}>
					<div className={classes.stat}>
						<Typography variant="h5">Total Crytocurrencies</Typography>
						<Typography variant="overline" className={classes.bold}>
							{millify(data?.stats?.totalCoins)}
						</Typography>
					</div>
					<div className={classes.stat}>
						<Typography variant="h5">Total Exchanges</Typography>
						<Typography variant="overline" className={classes.bold}>
							{millify(data?.stats?.totalExchanges)}
						</Typography>
					</div>
					<div className={classes.stat}>
						<Typography variant="h5">Total Market Cap</Typography>
						<Typography variant="overline" className={classes.bold}>
							${millify(data?.stats?.totalMarketCap)}
						</Typography>
					</div>
					<div className={classes.stat}>
						<Typography variant="h5">Total 24h Volume</Typography>
						<Typography variant="overline" className={classes.bold}>
							{millify(data?.stats?.total24hVolume)}
						</Typography>
					</div>
				</div>
				<div className={classes.topCrypto}>
					<div className={classes.header}>
						<Typography variant="h4" className={classes.sizing}>
							Top 10 Cryptocurrencies in the world{" "}
						</Typography>
						<Button onClick={() => navigate("/crypto")}>Show More</Button>
					</div>
					<Crypto simplified={true} />
				</div>
				<div className={classes.topNews}>
					<div className={classes.header}>
						<Typography variant="h4" className={classes.sizing}>
							Top crypto News
						</Typography>
						<Button onClick={() => navigate("/news")}>Show More</Button>
					</div>
					<News simplified={true} />
				</div>
			</Container>
		</div>
	);
};
export default Home;
