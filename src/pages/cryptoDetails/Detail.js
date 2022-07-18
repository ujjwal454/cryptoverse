import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCoinDetailInitiate } from "../../redux/actions/coinDetailAction";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Container, Grid } from "@material-ui/core";
import millify from "millify";
import useStyles from "./style";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import DirectionsRunOutlinedIcon from "@material-ui/icons/DirectionsRunOutlined";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { MonetizationOnOutlined } from "@material-ui/icons";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import ShowChartOutlinedIcon from "@material-ui/icons/ShowChartOutlined";
import AssignmentReturnOutlinedIcon from "@material-ui/icons/AssignmentReturnOutlined";
import PriorityHighOutlinedIcon from "@material-ui/icons/PriorityHighOutlined";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
// import { cleanup } from "../../redux/actions/coinDetailAction";
import Loading from "../../components/laoding/Loading";
const Detail = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const classes = useStyles();
	useEffect(() => {
		dispatch(fetchCoinDetailInitiate(id));
	}, [dispatch]);
	const data = useSelector((state) => state.details);
	const { loading } = useSelector((state) => state.details);
	const stats = data?.coinDetail?.data?.coin;
	console.log(stats, "detail");
	console.log(id);
	if (loading) {
		return <Loading />;
	}
	return (
		<div className={classes.main}>
			<Container>
				<Typography variant="h4" className={classes.heading}>
					CryptoCurrency ( {stats?.name} ) Price
				</Typography>
				<Typography variant="body1" className={classes.subHeading}>
					{stats?.name} live Price in US dollars,View value,Statistics,market
					cap and Supply.
				</Typography>

				<Grid container justifyContent="center">
					<Grid item md={6} sm={12}>
						<Typography variant="h6">
							{stats.name || 0} value statistics{" "}
						</Typography>
						<Typography variant="body2" className={classes.sheading}>
							An overview showing the stats of {stats?.name}
						</Typography>
						<div className={classes.statContainer}>
							<div className={classes.stat}>
								<div className={classes.title}>
									<MonetizationOnOutlinedIcon />
									<Typography variant="h6" className={classes.spacing}>
										Price To USD:
									</Typography>
								</div>
								<div className={classes.value}>
									<Typography variant="overline">
										$ {millify(stats?.priceAt) || 0}
									</Typography>
								</div>
							</div>
							<div className={classes.stat}>
								<div className={classes.title}>
									<DirectionsRunOutlinedIcon />
									<Typography variant="h6" className={classes.spacing}>
										Rank
									</Typography>
								</div>
								<div className={classes.value}>
									<Typography variant="overline">
										{millify(stats?.rank) || 0}
									</Typography>
								</div>
							</div>
							<div className={classes.stat}>
								<div className={classes.title}>
									<FlashOnIcon />
									<Typography variant="h6" className={classes.spacing}>
										24H Volume
									</Typography>
								</div>
								<div className={classes.value}>
									<Typography variant="overline">
										{millify(2255428489.0824)}
									</Typography>
								</div>
							</div>
							<div className={classes.stat}>
								<div className={classes.title}>
									<MonetizationOnOutlined />
									<Typography variant="h6" className={classes.spacing}>
										Market Cap
									</Typography>
								</div>
								<div className={classes.value}>
									<Typography variant="overline">
										{millify(stats?.marketCap) || 0}
									</Typography>
								</div>
							</div>
							<div className={classes.stat}>
								<div className={classes.title}>
									<TrackChangesIcon />
									<Typography variant="h6" className={classes.spacing}>
										All Time High
									</Typography>
								</div>
								<div className={classes.value}>
									<Typography variant="overline">
										$ {millify(stats?.allTimeHigh?.price) || 0}
									</Typography>
								</div>
							</div>
						</div>
					</Grid>
					<Grid item md={6} sm={12}>
						<Typography variant="h6">
							{stats.name || 0} Other statistics{" "}
						</Typography>
						<Typography variant="body2" className={classes.sheading}>
							An overview showing over all stats of {stats?.name || 0}
						</Typography>
						<div className={classes.statContainer}>
							<div className={classes.stat}>
								<div className={classes.title}>
									<ShowChartOutlinedIcon />
									<Typography variant="h6" className={classes.spacing}>
										Number Of Markets
									</Typography>
								</div>
								<div className={classes.value}>
									<Typography variant="overline">
										{millify(stats?.numberOfMarkets) || 0}
									</Typography>
								</div>
							</div>
							<div className={classes.stat}>
								<div className={classes.title}>
									<AssignmentReturnOutlinedIcon />
									<Typography variant="h6" className={classes.spacing}>
										Number Of Exchange
									</Typography>
								</div>
								<div className={classes.value}>
									<Typography variant="overline">
										{millify(stats?.numberOfExchanges) || 0}
									</Typography>
								</div>
							</div>
							<div className={classes.stat}>
								<div className={classes.title}>
									<PriorityHighOutlinedIcon />
									<Typography variant="h6" className={classes.spacing}>
										Approved Supply
									</Typography>
								</div>
								<div className={classes.value}>
									<Typography variant="overline">
										{" "}
										{stats?.supply?.confirmed ? (
											<DoneOutlinedIcon />
										) : (
											<CancelOutlinedIcon />
										)}
									</Typography>
								</div>
							</div>
							<div className={classes.stat}>
								<div className={classes.title}>
									<PriorityHighOutlinedIcon />
									<Typography variant="h6" className={classes.spacing}>
										Total Supply
									</Typography>
								</div>
								<div className={classes.value}>
									<Typography variant="overline">
										{millify(stats?.supply?.total) || 0}
									</Typography>
								</div>
							</div>
							<div className={classes.stat}>
								<div className={classes.title}>
									<PriorityHighOutlinedIcon />
									<Typography variant="h6" className={classes.spacing}>
										Circulating Supply
									</Typography>
								</div>
								<div className={classes.value}>
									<Typography variant="overline">
										{millify(stats?.supply?.circulating) || 0}
									</Typography>
								</div>
							</div>
						</div>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Detail;
