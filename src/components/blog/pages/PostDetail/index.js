import React, { useEffect } from "react";
import useStyles from "./styles";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import IntroTeam from "../../components/IntroTeam";

export default function PostDetail() {
    const classes = useStyles();
    const title = "Trang detail";

    useEffect(() => {
        document.title = title;
    }, []);

    return (
        <Container className={classes.container}>
            <Grid container>
                <Grid item xs={12} md={9} className={classes.content}></Grid>
                <Grid item xs={12} md={3} className={classes.intro_suggest}>
                    <IntroTeam />
                </Grid>
            </Grid>
        </Container>
    );
}
