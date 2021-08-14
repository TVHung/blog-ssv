import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";

export default function Item({ list }) {
    const classes = useStyles();

    const linkId = "/detail/" + list.id;

    return (
        <Link to={linkId} style={{ textDecoration: "none" }}>
            <div className={classes.container}>
                <hr style={{ color: "grey" }} />
                <Grid container>
                    <Grid item xs={12} md={6} className={classes.img}>
                        <img
                            src={list.image}
                            alt="teamssv"
                            className={classes.imgTeam}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.content}>
                        <div className={classes.containerContent}>
                            <p className={classes.category}>VLOG DU LỊCH</p>
                            <p className={classes.title}>{list.title}</p>
                            <p className={classes.byAndTime}>
                                By <b>Team SSV</b> | 22/06/2020
                            </p>
                            <p className={classes.chisaiContent}>
                                Đây là một đoạn content của bài viết và nó sẽ
                                được viết ở đây để người đọc đọc qua và lalalala
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Link>
    );
}
