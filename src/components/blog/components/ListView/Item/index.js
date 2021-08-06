import React from "react";
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
} from "@material-ui/core";

import useStyles from "./styles";
import Slide from "@material-ui/core/Slide";
import { Link } from "react-router-dom";

export default function Item({ list }) {
    const classes = useStyles();

    const onPostDetail = () => {};

    const linkId = "/detail/" + list.id;

    return (
        <Link to={linkId} style={{ textDecoration: "none" }}>
            <Card className={classes.card} onClick={() => onPostDetail()}>
                <CardMedia
                    image={list.image}
                    className={classes.media}
                    title="Truong Van Hung"
                />
                <CardContent>
                    <Typography
                        variant="body2"
                        component="p"
                        noWrap
                        className={classes.content}
                    >
                        {list.title}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
}
