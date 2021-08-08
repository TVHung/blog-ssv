import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import useStyles from "./styles";
import img from "../../assets/images/team2.jpg";

export default function Error() {
    const classes = useStyles();

    const styles = {
        paperContainer: {
            // backgroundImage: `url(${img})`,
            // backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",
        },
    };

    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item className={classes.layer}>
                    <Grid container>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={7}
                            className={classes.imgArea}
                        ></Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={5}
                            className={classes.imgArea}
                        ></Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.layer}>
                    <Grid container>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={5}
                            className={classes.imgArea}
                        ></Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={7}
                            className={classes.imgArea}
                        ></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
