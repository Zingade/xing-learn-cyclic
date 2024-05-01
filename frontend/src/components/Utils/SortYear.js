import React from "react"
import { FormControl, Grid, makeStyles, MenuItem, Select, Typography } from "@material-ui/core";
import { currentSortYear } from "./CommonConstants";

const useStyles = makeStyles((theme) => ({
    controlContainer:{
        flexWrap:"nowrap",
        alignItems:'center',
        justifyContent:'center',
        margin:'8px',
        borderRadius:10,
        overflowX:"auto",    
      },
      sortText:{
        padding:"8px"
      },
    }))

const SortYear = (props) => {

    const classes = useStyles();
    const {refreshPage} = props;
    const [yearValue, setYearValue] = React.useState(currentSortYear.value)

    const handleChange = (event) => {
        setYearValue(event.target.value)
        currentSortYear.value = event.target.value;
        refreshPage();
      }
  
      return (
        <>
        <Grid container spacing={1} className={classes.controlContainer}>
            <Typography>Sort Year: </Typography>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <Select
                labelId="demo-year-select-standard-label"
                id="demo-year-select-standard"
                size="small"
                value={yearValue}
                onChange={handleChange}
                label="Sort Year"
                >
                <MenuItem value={'2021'}>2021</MenuItem>
                <MenuItem value={'2022'}>2022</MenuItem>
                <MenuItem value={'2023'}>2023</MenuItem>
                <MenuItem value={'2024'}>2024</MenuItem>
            </Select>
            </FormControl>
        </Grid>
        </>
    )
}

export default SortYear;