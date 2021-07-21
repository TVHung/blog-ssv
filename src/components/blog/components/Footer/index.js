import { Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.author}>
                <ul className={classes.ul}>
                    <li className={classes.li}>
                        <a
                            href="https://www.facebook.com/hung.tv99"
                            rel="name noreferrer"
                            target="_blank"
                            className={classes.a}
                        >
                            Trương Văn Hùng
                        </a>
                    </li>
                    <li className={classes.li}>
                        <a
                            href="https://www.facebook.com/maithikhanhvan"
                            rel="name noreferrer"
                            target="_blank"
                            className={classes.a}
                        >
                            Mai Ngọc Khang
                        </a>
                    </li>
                    <li className={classes.li}>
                        <a
                            href="https://www.facebook.com/ngannguyenmythanh"
                            rel="name noreferrer"
                            target="_blank"
                            className={classes.a}
                        >
                            Nguyễn Thị Ngân
                        </a>
                    </li>
                    <li className={classes.li}>
                        <a
                            href="https://www.facebook.com/uninkute.can"
                            rel="name noreferrer"
                            target="_blank"
                            className={classes.a}
                        >
                            Cấn Đức Lợi
                        </a>
                    </li>
                    <li className={classes.li}>
                        <a
                            href="https://www.facebook.com/tichambers99"
                            rel="name noreferrer"
                            target="_blank"
                            className={classes.a}
                        >
                            Nguyễn Văn Khánh
                        </a>
                    </li>
                </ul>
            </div>
            <hr style={{ padding: 0, marginLeft: 100, marginRight: 100 }} />
            <div className={classes.nocopyright}>
                <p style={{ color: "#cfccc6" }}>
                    @2021 - SSV. All Right Reserved. Designed and Developed by{" "}
                    <a
                        href="https://www.facebook.com/hung.tv99"
                        rel="name noreferrer"
                        target="_blank"
                        style={{ color: "coral" }}
                    >
                        SSV
                    </a>
                </p>
            </div>
        </div>
    );
}
