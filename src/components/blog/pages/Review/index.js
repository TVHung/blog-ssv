import React, {useEffect} from "react";
import useStyles from "./styles";

export default function Review() {
    const classes = useStyles();
    const title = "Review";

    useEffect(() => {
        document.title = title;
    }, []);

    return (
        <>
            <p>Trang review</p>
        </>
    );
}
