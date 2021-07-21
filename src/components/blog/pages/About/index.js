import React from "react";
import useStyles from "./styles";
import { Helmet } from "react-helmet";

export default function About() {
    const classes = useStyles();
    const title = "Về chúng tôi";
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <p>Trang about</p>
        </>
    );
}
