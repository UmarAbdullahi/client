import React from "react";
import Styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";

import PurchaseHistory from "../../components/PurchaseHistory/PurchaseHistory";
import MyService from "../../components/MyService/MyService";
import Order from "../../components/Order/Order";
import { Button } from "reactstrap";
// ---Styled components---
const Jumbotron = Styled.div`
width: 100vw;
background-color: #b83b5e;
height: 35vh;
`;
const Profile = Styled.div`
position: relative;
top: -100px;
margin: auto 5em;
`;
const Image = Styled.img`
border-radius: 50%;
width: 40%


`;
const About = Styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-between;
margin-bottom: 50px;

`;
const Wrap = Styled.div`
margin: 20px 100px;
padding: 20px 50px 0 10px;

`;
// ---Styled components---
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));
function MemberFeed() {
    const classes = useStyles();
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Jumbotron></Jumbotron>
            <About>
                <Profile>
                    <Image src="https://www.w3schools.com/w3images/avatar2.png" />
                </Profile>
                <Wrap>
                    <Button color="danger">danger</Button>{" "}
                </Wrap>
            </About>
            <div>
                <TabContext value={value}>
                    <AppBar position="static">
                        <TabList
                            onChange={handleChange}
                            aria-label="simple tabs example"
                        >
                            <Tab label="Purchase History" value="1" />
                        </TabList>
                    </AppBar>
                    <TabPanel value="1">
                        <PurchaseHistory />
                    </TabPanel>
                </TabContext>
            </div>
        </div>
    );
}

export default MemberFeed;
