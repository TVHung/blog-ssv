import React, { useEffect } from "react";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";
import team from "../../assets/images/team.jpg";

export default function IntroTeam() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item>
                    <img src={team} alt="team" className={classes.imgTeam} />
                </Grid>
                <Grid item>
                    <p>Team gồm 5 thành viên chơi thân với nhau</p>
                </Grid>
            </Grid>
        </div>
    );
}
