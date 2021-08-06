import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import useStyles from "./styles";
import teamssv from "../../assets/images/team.jpg";

export default function Error() {
    const classes = useStyles();

    return (
        <Grid container className={classes.container}>
            <Grid item>
                <img src={teamssv} alt="teamssv" className={classes.imgTeam} />
            </Grid>
            <Grid item></Grid>
        </Grid>
    );
}
