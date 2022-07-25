import React, { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  Grid,
  Container,
  TextField,
} from "@material-ui/core";
import useStyles from "./style";
import { useSelector, useDispatch } from "react-redux";
import millify from "millify";
import Loading from "../../components/laoding/Loading";
import { useNavigate } from "react-router-dom";
import { fetchCoinInitiate } from "../../redux/actions/coinsAction";
import { loadingTrue } from "../../redux/actions/coinDetailAction";
import { coinsCleanup } from "../../redux/actions/coinsAction";
import MaximizeOutlinedIcon from "@material-ui/icons/MaximizeOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
const Crypto = ({ simplified }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [Count, setCount] = useState(simplified ? 10 : 50);
  const navigate = useNavigate();
  const [Value, setValue] = useState("");
  useEffect(() => {
    dispatch(fetchCoinInitiate(Count));
    // return () => {
    // 	dispatch(coinsCleanup());
    // };
  }, [dispatch]);
  const { data, loading } = useSelector((state) => state.coins);
  const [Data, setData] = useState([]);
  useEffect(() => {
    setData(data);
  }, [data]);
  const handleClick = (uuid) => {
    dispatch(loadingTrue());
    navigate(`/detail/${uuid}`);
  };
  const handleDelete = (id) => {
    const DeletedData = Data.filter((card) => card.uuid !== id);
    setData(DeletedData);
  };
  useEffect(() => {
    const filteredData = data.filter((cards) =>
      cards.name.toLowerCase().includes(Value.toLowerCase())
    );
    setData(filteredData);
  }, [Value]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className={classes.main}>
      <Container>
        {!simplified && (
          <div className={classes.search}>
            <TextField
              variant="outlined"
              color="primary"
              className={classes.input}
              placeholder="Filter Cryptos"
              value={Value}
              onChange={(e) => setValue(e.currentTarget.value)}
            />
          </div>
        )}
        <Grid container spacing={5} justifyContent="center">
          {Data &&
            Data?.map((card) => (
              <Grid item key={card.uuid} className={classes.cointainer}>
                {/* <Paper
									className={Active ? classes.ActiveMenu : classes.closedMenu}
									elevation={0}
								>
								</Paper> */}
                <Paper
                  className={classes.card}
                  elevation={0}
                  onClick={() => handleClick(card.uuid)}
                >
                  <div className={classes.header}>
                    <Typography variant="h6">
                      {card.rank}.{card.name}
                    </Typography>
                    <img
                      src={card.iconUrl}
                      alt="crypto"
                      className={classes.cardImg}
                    />
                  </div>
                  <div className={classes.stats}>
                    <div className={classes.stat}>
                      <Typography variant="body1">Price:</Typography>$
                      {millify(card.price)}
                    </div>
                    <div className={classes.stat}>
                      <Typography variant="body1">Market Cap:</Typography>
                      {millify(card.marketCap)}
                    </div>
                    <div className={classes.stat}>
                      <Typography variant="body1">DailyChange:</Typography>
                      {millify(card.change)}
                    </div>
                  </div>
                </Paper>
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Crypto;
