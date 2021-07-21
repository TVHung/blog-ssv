import React, { useState } from "react";
import useStyles from "./styles";
import { Helmet } from "react-helmet";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";

export default function Home() {
    const classes = useStyles();
    const title = "Trang chủ";
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
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
