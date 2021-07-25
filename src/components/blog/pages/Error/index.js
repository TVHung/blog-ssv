import React, {useEffect} from "react";
import useStyles from "./styles";

export default function Error() {
    const classes = useStyles();
    const title = "Lỗi";

    useEffect(() => {
        document.title = title;
    }, []);

    return (
        <>
            <p>Trang error</p>
        </>
    );
}
