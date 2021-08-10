import React, { useEffect } from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";

export default function ItemTheme({ item }) {
    const classes = useStyles();
    const linkId = "/detail/" + item.id;
    return (
        <Link to={linkId} style={{ textDecoration: "none" }}>
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
                        <h2 className={classes.titleTeam}>
                            Đây là chuyến đi phượt về Nam Định, quê của giáo sư
                            Mai Ngọc Khang
                            <h3 className={classes.time}>20/06/2020</h3>
                        </h2>
                    </div>
                </div>
            </div>
        </Link>
    );
}
