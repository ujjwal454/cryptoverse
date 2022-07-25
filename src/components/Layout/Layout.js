import useStyles from "./style";
import Sidebar from "../sidebar/Sidebar";
const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Sidebar />
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
