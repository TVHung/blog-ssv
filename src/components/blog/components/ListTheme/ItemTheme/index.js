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
                {/* <hr className={classes.firstOverlayLine}></hr>
                <span className={classes.secondOverlayLine}></span> */}
                <div className={classes.inlineImage}>
                    <span className={classes.titleTeam}>{item.tite}</span>
                </div>
                {/* <span className={classes.thirdOverlayLine}></span>
                <span className={classes.fourOverlayLine}></span> */}
            </div>
        </div>
    );
}
