import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Tab from '@material-ui/core/Tab';
import Tabs from '@mui/material/Tabs';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

import { useState } from "react";
import FirstDivInfo from "./DivInfoComponents/firstDivInfo";
import SecondDivInfo from "./DivInfoComponents/secondDivInfo";
import ThirdDivInfo from "./DivInfoComponents/thirdDivInfo";
import FourthDivInfo from "./DivInfoComponents/fourthDivInfo";
import FifthDivInfo from "./DivInfoComponents/fifthDivInfo";
import SixthDivInfo from "./DivInfoComponents/sixthDivInfo";

function Ourservices() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="our-services">
            <Container>
                <div className="our-services__textarea">
                    <h1 className="our-services__title">Czym się zajmujemy?</h1>

                    <Box sx={{width: '100%', typography: 'body1'}}>
                        <TabContext value={value}>
                            <Box>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    variant="scrollable"
                                    scrollButtons
                                    allowScrollButtonsMobile
                                    aria-label="scrollable auto tabs example"
                                >
                                    <Tab label="Przeglądy i konserwacje" value="1"/>
                                    <Tab label="Usługi specjalistyczne" value="2"/>
                                    <Tab label="Audyty i konsultacje techniczne" value="3"/>
                                    <Tab label="Koncepcja prowadzenia obsługi technicznej" value="4"/>
                                    <Tab label="Pogotowie techniczne" value="5"/>
                                    <Tab label="Narzędzia IT" value="6"/>
                                </Tabs>
                            </Box>
                            <TabPanel value="1"><FirstDivInfo/></TabPanel>
                            <TabPanel value="2"><SecondDivInfo/></TabPanel>
                            <TabPanel value="3"><ThirdDivInfo/></TabPanel>
                            <TabPanel value="4"><FourthDivInfo/></TabPanel>
                            <TabPanel value="5"><FifthDivInfo/></TabPanel>
                            <TabPanel value="6"><SixthDivInfo/></TabPanel>
                        </TabContext>
                    </Box>
                </div>
            </Container>
        </div>
    );
}

export default Ourservices;
