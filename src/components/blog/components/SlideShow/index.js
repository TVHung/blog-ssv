import React, { useEffect } from "react";
import useStyles from "./styles";
import { Zoom, Fade, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slideImg from "../../assets/images/team.jpg";
import slideImg2 from "../../assets/images/team2.jpg";
import slideImg3 from "../../assets/images/song.jpg";

export default function SlideShow() {
    const classes = useStyles();

    const fadeProperties = {
        duration: 3000,
        transitionDuration: 1000,
        infinite: true,
        indicators: true,
    };

    const datas = [
        {
            tite: "We are team ssv",
            bio: "Blog chia sẻ về những thông tin của nhóm và những kiến thức bổ ích khác",
            image: slideImg,
        },
        {
            tite: "We are team ssv",
            bio: "Blog chia sẻ về những thông tin của nhóm và những kiến thức bổ ích khác",
            image: slideImg2,
        },
        {
            tite: "We are team ssv",
            bio: "Blog chia sẻ về những thông tin của nhóm và những kiến thức bổ ích khác",
            image: slideImg3,
        },
    ];

    const properties = {
        duration: 3000,
        transitionDuration: 1000,
        infinite: true,
        indicators: true,
        arrows: true,
    };

    return (
        <Slide {...properties}>
            {datas.map((data) => (
                <div>
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
