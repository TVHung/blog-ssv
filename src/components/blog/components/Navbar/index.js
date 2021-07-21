import React from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import logo from "../../assets/images/logopersonal2.png";

export default function Navbar() {
    const classes = useStyles();

    return (
        <nav className={classes.container}>
            <Grid container className={classes.gridContainer}>
                <Grid item classNam={classes.logoArea}>
                    <Link to="/" className={classes.linkStyle}>
                        <img src={logo} alt="logo" className={classes.logo} />
                    </Link>
                </Grid>
                <Grid item>
                    <ul className={classes.ul}>
                        <li className={classes.li}>
                            <Link to="/" className={classes.linkStyle}>
                                Trang chủ
                            </Link>
                        </li>
                        <li className={classes.li}>
                            <Link to="/review" className={classes.linkStyle}>
                                Du ký
                            </Link>
                        </li>
                        <li className={classes.li}>
                            <Link to="/about" className={classes.linkStyle}>
                                Chia sẻ
                            </Link>
                        </li>
                        <li className={classes.li}>
                            <Link to="/about" className={classes.linkStyle}>
                                About
                            </Link>
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </nav>
    );
}
