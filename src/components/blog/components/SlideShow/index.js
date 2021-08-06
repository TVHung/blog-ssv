import React, { useEffect } from "react";
import useStyles from "./styles";
import { Zoom, Fade, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Grid } from "@material-ui/core";

export default function SlideShow({ dataSlides }) {
    const classes = useStyles();

    // const fadeProperties = {
    //     duration: 3000,
    //     transitionDuration: 1000,
    //     infinite: true,
    //     indicators: true,
    // };

    const properties = {
        duration: 5000,
        transitionDuration: 1000,
        infinite: true,
        indicators: true,
        arrows: true,
    };

    return (
        <div className={classes.container}>
            <Slide {...properties}>
                {dataSlides.map((data) => (
                    <div key="{data.id}">
                        <div
                            style={{
                                backgroundImage: `url(${data.image})`,
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                            }}
                            className={classes.div}
                        >
                            <span className={classes.span}>
                                <h1 className={classes.titleTeam}>
                                    <b>{data.tite}</b>
                                </h1>
                                <h2 className={classes.bioTeam}>
                                    <b>{data.bio}</b>
                                </h2>
                            </span>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
        // <Fade {...fadeProperties}>
        //     <div className={classes.eachFade}>
        //         <div className={classes.imageContainer}>
        //             <img className={classes.img} src={slideImg} />
        //         </div>
        //         <span className={classes.span}>
        //             <h1 className={classes.titleTeam}>
        //                 <b>WE ARE TEAM SSV</b>
        //             </h1>
        //             <h2 className={classes.bioTeam}>
        //                 <b>
        //                     Blog chia sẻ về những thông tin của nhóm và những
        //                     kiến thức bổ ích khác
        //                 </b>
        //             </h2>
        //         </span>
        //     </div>
        //     <div className={classes.eachFade}>
        //         <div className={classes.imageContainer}>
        //             <img className={classes.img} src={avt} />
        //         </div>
        //         <span className={classes.span}>
        //             <h1 className={classes.titleTeam}>
        //                 <b>WE ARE TEAM SSV</b>
        //             </h1>
        //             <h2 className={classes.bioTeam}>
        //                 <b>
        //                     Blog chia sẻ về những thông tin của nhóm và những
        //                     kiến thức bổ ích khác
        //                 </b>
        //             </h2>
        //         </span>
        //     </div>
        //     <div className={classes.eachFade}>
        //         <div className={classes.imageContainer}>
        //             <img className={classes.img} src={slideImg} />
        //         </div>
        //         <span className={classes.span}>
        //             <h1 className={classes.titleTeam}>
        //                 <b>WE ARE TEAM SSV</b>
        //             </h1>
        //             <h2 className={classes.bioTeam}>
        //                 <b>
        //                     Blog chia sẻ về những thông tin của nhóm và những
        //                     kiến thức bổ ích khác
        //                 </b>
        //             </h2>
        //         </span>
        //     </div>
        // </Fade>
    );
}
