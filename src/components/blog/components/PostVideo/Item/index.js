import React, { useEffect } from "react";
import useStyles from "./styles";

export default function ItemTheme({ item }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div
                className={classes.container}
                style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className={classes.inlineImage}>
                    <h2 className={classes.titleTeam}>{item.tite}</h2>
                </div>
            </div>
        </div>
    );
}
