import React, { useEffect } from "react";
import useStyles from "./styles";

export default function About() {
    const classes = useStyles();
    const title = "Về chúng tôi";

    useEffect(() => {
        document.title = title;
    }, []);

    return (
        <div>
            
        </div>
    );
}
