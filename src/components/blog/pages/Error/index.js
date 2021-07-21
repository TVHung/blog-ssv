import React from "react";
import useStyles from "./styles";
import { Helmet } from "react-helmet";

export default function Error() {
    const classes = useStyles();
    const title = "Lỗi";
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <p>Trang error</p>
        </>
    );
}
