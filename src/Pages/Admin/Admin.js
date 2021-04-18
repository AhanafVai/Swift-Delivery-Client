import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Orderlist from "./Orderlist";
import AddService from "./AddService";
import MakeAdmin from "./MakeAdmin";
import ManageService from "./ManageService";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100vh",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    paddingTop: "2rem",
  },
}));

export default function Admin() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        style={{ width: "20rem", backgroundColor: "black", color: "white" }}
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Order list" {...a11yProps(0)} />
        <Tab label="Add Service" {...a11yProps(1)} />
        <Tab label="Make Admin" {...a11yProps(2)} />
        <Tab label="Manage Service" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Orderlist />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddService />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MakeAdmin />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ManageService />
      </TabPanel>
    </div>
  );
}
