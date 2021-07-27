import React, { useEffect } from "react";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";
import avt from "../../assets/images/avt.jpg";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";

export default function CardMember({ data }) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item xs={4}>
                    <div className={classes.avtContainer}>
                        <img
                            src={avt}
                            alt="avatar"
                            className={classes.avatar}
                        />
                    </div>
                </Grid>
                <Grid item xs={8} className={classes.inforContainer}>
                    <h2 className={classes.name}>{data.name}</h2>
                    <h4 className={classes.work}>{data.work}</h4>
                    <div className={classes.social}>
                        {data.facebookLink != "" ? (
                            <FacebookIcon
                                className={classes.socialIcon}
                                onClick={() =>
                                    window.open(data.facebookLink, "_blank")
                                }
                            />
                        ) : null}
                        {data.instagramLink != "" ? (
                            <InstagramIcon
                                className={classes.socialIcon}
                                onClick={() =>
                                    window.open(data.instagramLink, "_blank")
                                }
                            />
                        ) : null}
                        {data.email != "" ? (
                            <EmailIcon
                                className={classes.socialIcon}
                                onClick={() =>
                                    window.open(data.email, "_blank")
                                }
                            />
                        ) : null}
                        {data.twitterLink != "" ? (
                            <TwitterIcon
                                className={classes.socialIcon}
                                onClick={() =>
                                    window.open(data.twitterLink, "_blank")
                                }
                            />
                        ) : null}
                    </div>
                    <hr style={{ marginRight: 20 }} />
                    <p>{data.bio}</p>
                </Grid>
            </Grid>
        </div>
    );
}
