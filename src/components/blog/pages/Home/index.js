import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";

export default function Home() {
    const classes = useStyles();
    const title = "Trang chủ";

    useEffect(() => {
        document.title = title;
    }, []);

    return (
        <>
            <Container>
                <div className={classes.paper}>
                    <Grid container>
                        <Grid item xs={7} className={classes.itemHome}></Grid>
                        <Grid item xs={5} className={classes.itemHome2}></Grid>
                        <Grid item xs={5} className={classes.itemHome2}></Grid>
                        <Grid item xs={7} className={classes.itemHome}></Grid>
                    </Grid>
                </div>
            </Container>
        </>
    );
}
