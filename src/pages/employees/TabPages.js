import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EmployeeCard from "./EmployeeCard";


 

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event ,newValue ) => {
    setValue(newValue);
  };



 

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Today" {...a11yProps(0)} />
          <Tab label="ThisWeek" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <EmployeeCard  name="Konrad Scroggins" appoinmenttype="Outcall appointment" time ="15:00" location="1/2 190 Queen St., G3 5AB, Glasgow"/>
        <EmployeeCard  name="Ivory Gendler" appoinmenttype="Outcall appointment" time ="15:00" location="1/2 190 Queen St., G3 5AB, Glasgow"/>
        <EmployeeCard  name="Almire Wuori" appoinmenttype="Outcall appointment" time ="15:00" location="1/2 190 Queen St., G3 5AB, Glasgow"/>

                </CustomTabPanel>
      
      <CustomTabPanel value={value} index={1}>
      <b>You don’t have any other appointments this week</b>
      </CustomTabPanel>
      
    </Box>
  );
}
