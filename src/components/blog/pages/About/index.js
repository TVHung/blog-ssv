import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import useStyles from "./styles";
import Container from "@material-ui/core/Container";
import CardMember from "../../components/CardMember";
import SlideShow from "../../components/SlideShow";
import slideImg from "../../assets/images/team.jpg";
import slideImg2 from "../../assets/images/team2.jpg";
import slideImg3 from "../../assets/images/song.jpg";

export default function About() {
    const classes = useStyles();
    const title = "Về chúng tôi";

    useEffect(() => {
        document.title = title;
    }, []);

    const dataMembers = [
        {
            avatar: "",
            name: "Trương Văn Hùng",
            work: "Web developer",
            facebookLink: "https://www.facebook.com/hung.tv99",
            instagramLink: "#",
            email: "truonghungvatvo@gmail.com",
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

    const dataSlides = [
        {
            id: 1,
            tite: "We are team ssv",
            bio: "Blog chia sẻ về những thông tin của nhóm và những kiến thức bổ ích khác",
            image: slideImg,
        },
        {
            id: 2,
            tite: "We are team ssv",
            bio: "Blog chia sẻ về những thông tin của nhóm và những kiến thức bổ ích khác",
            image: slideImg2,
        },
        {
            id: 3,
            tite: "We are team ssv",
            bio: "Blog chia sẻ về những thông tin của nhóm và những kiến thức bổ ích khác",
            image: slideImg3,
        },
    ];

    return (
        <div className={classes.container}>
            <Container>
                <div className={classes.aboutTeam}>
                    <SlideShow dataSlides={dataSlides} />
                </div>
                <Grid container spacing={2} className={classes.about}>
                    <Grid item xs={12} md={4} className={classes.aboutItem}>
                        <CardMember data={dataMembers[0]} />
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.aboutItem}>
                        <CardMember data={dataMembers[1]} />
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.aboutItem}>
                        <CardMember data={dataMembers[2]} />
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.aboutItem}>
                        <CardMember data={dataMembers[3]} />
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.aboutItem}>
                        <CardMember data={dataMembers[4]} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
