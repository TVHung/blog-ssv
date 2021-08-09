import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import useStyles from "./styles";
import img from "../../assets/images/team2.jpg";
import Item from "./Item";

export default function Error() {
    const classes = useStyles();

    const styles = {
        paperContainer: {
            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        },
    };

    const item = {
        id: 1,
        tite: "Kinh nghiệm",
        image: img,
    };

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={6} md={7}>
                    <Item item={item} />
                </Grid>
                <Grid item xs={12} sm={6} md={5}>
                    <Item item={item} />
                </Grid>
                <Grid item xs={12} sm={6} md={5}>
                    <Item item={item} />
                </Grid>
                <Grid item xs={12} sm={6} md={7}>
                    <Item item={item} />
                </Grid>
            </Grid>
        </div>
    );
}
