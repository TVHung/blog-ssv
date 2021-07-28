import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import useStyles from "./styles";
import Container from "@material-ui/core/Container";
import CardMember from "../../components/CardMember";
import SlideShow from "../../components/SlideShow";

export default function About() {
    const classes = useStyles();
    const title = "Về chúng tôi";

    useEffect(() => {
        document.title = title;
    }, []);

    const data = [
        {
            avatar: "",
            name: "Trương Văn Hùng",
            work: "Web developer",
            facebookLink: "https://www.facebook.com/hung.tv99",
            instagramLink: "#",
            email: "#",
            twitterLink: "#",
            bio: "Nếu bạn không thích thì dù bạn có làm bao lâu thì bạn cũng sẽ không cảm thấy vui vẻ",
        },

        {
            avatar: "",
            name: "Mai Ngọc Khang",
            work: "Web developer",
            facebookLink: "https://www.facebook.com/maithikhanhvan",
            instagramLink: "#",
            email: "#",
            twitterLink: "",
            bio: "Nếu bạn không thích thì dù bạn có làm bao lâu thì bạn cũng sẽ không cảm thấy vui vẻ",
        },

        {
            avatar: "",
            name: "Nguyễn Thị Ngân",
            work: "Web developer",
            facebookLink: "#",
            instagramLink: "#",
            email: "#",
            twitterLink: "#",
            bio: "Nếu bạn không thích thì dù bạn có làm bao lâu thì bạn cũng sẽ không cảm thấy vui vẻ",
        },

        {
            avatar: "",
            name: "Nguyễn Văn Khánh",
            work: "Web developer",
            facebookLink: "#",
            instagramLink: "#",
            email: "#",
            twitterLink: "",
            bio: "Nếu bạn không thích thì dù bạn có làm bao lâu thì bạn cũng sẽ không cảm thấy vui vẻ",
        },

        {
            avatar: "",
            name: "Cấn Đức Lợi",
            work: "Web developer",
            facebookLink: "#",
            instagramLink: "",
            email: "#",
            twitterLink: "",
            bio: "Nếu bạn không thích thì dù bạn có làm bao lâu thì bạn cũng sẽ không cảm thấy vui vẻ",
        },
    ];

    return (
        <div className={classes.container}>
            <Container>
                {/* <div className={classes.aboutTeam}>
                    <div className={classes.titleAbout}>
                        <h1 className={classes.titleTeam}>
                            <b>WE ARE TEAM SSV</b>
                        </h1>
                        <h2 className={classes.bioTeam}>
                            <b>
                                Blog chia sẻ về những thông tin của nhóm và
                                những kiến thức bổ ích khác
                            </b>
                        </h2>
                    </div>
                </div> */}
                <SlideShow />
                <Grid container spacing={2} className={classes.about}>
                    <Grid item xs={12} md={4} className={classes.aboutItem}>
                        <CardMember data={data[0]} />
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.aboutItem}>
                        <CardMember data={data[1]} />
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.aboutItem}>
                        <CardMember data={data[2]} />
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.aboutItem}>
                        <CardMember data={data[3]} />
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.aboutItem}>
                        <CardMember data={data[4]} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
