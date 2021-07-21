import React from "react";
import useStyles from "./styles";
import { Helmet } from "react-helmet";

export default function Review() {
    const classes = useStyles();
    const title = "Review";
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <p>Trang review</p>
        </>
    );
}
