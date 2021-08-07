import React, { useEffect } from "react";
import useStyles from "./styles";
import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import IntroTeam from "../../components/Introteam";

export default function Detail() {
    const classes = useStyles();
    const title = "Detail";

    const lists = [
        {
            id: "1",
            title: "Game Knowledge War",
            image: "https://cn24h.net/uploads/img_nd/dinh-dang-anh-tiff-la-gi-1.jpg",
        },
        {
            id: "2",
            title: "Game Rocket",
            image: "http://cdn2.tieudungplus.vn/upload/TgBSumXIHarRW68IEfydSA/files/bst-hinh-anh-phong-canh-thien-nhien-tuyet-dep-lang-man-tho-mong-hung-vi-nhat-the-gioi-1.jpeg",
        },
        {
            id: "3",
            title: "Game luyện chính tả",
            image: "https://cn24h.net/uploads/img_nd/dinh-dang-anh-tiff-la-gi-1.jpg",
        },
        {
            id: "4",
            title: "lam chu tieng nhat trong 300000000000 ngay",
            image: "http://cdn2.tieudungplus.vn/upload/TgBSumXIHarRW68IEfydSA/files/bst-hinh-anh-phong-canh-thien-nhien-tuyet-dep-lang-man-tho-mong-hung-vi-nhat-the-gioi-1.jpeg",
        },
        {
            id: "5",
            title: "sinh vien lam 5 trieu 1 ngay",
            image: "https://cn24h.net/uploads/img_nd/dinh-dang-anh-tiff-la-gi-1.jpg",
        },
        {
            id: "6",
            title: "hung day",
            image: "http://cdn2.tieudungplus.vn/upload/TgBSumXIHarRW68IEfydSA/files/bst-hinh-anh-phong-canh-thien-nhien-tuyet-dep-lang-man-tho-mong-hung-vi-nhat-the-gioi-1.jpeg",
        },
        {
            id: "7",
            title: "Hung huong dan choi rubik",
            image: "https://cn24h.net/uploads/img_nd/dinh-dang-anh-tiff-la-gi-1.jpg",
        },
        {
            id: "8",
            title: "hoc lap trinh trong 1 ngay",
            image: "http://cdn2.tieudungplus.vn/upload/TgBSumXIHarRW68IEfydSA/files/bst-hinh-anh-phong-canh-thien-nhien-tuyet-dep-lang-man-tho-mong-hung-vi-nhat-the-gioi-1.jpeg",
        },
        {
            id: "9",
            title: "lam chu tieng nhat trong 300000000000 ngay",
            image: "https://cn24h.net/uploads/img_nd/dinh-dang-anh-tiff-la-gi-1.jpg",
        },
    ];

    useEffect(() => {
        document.title = title;
    }, []);

    const { id } = useParams();

    const item = lists.find((list) => list.id == id);

    return (
        <div className={classes.container}>
            <Container>
                <Grid container className={classes.detail}>
                    <Grid
                        item
                        xs={12}
                        md={9}
                        className={classes.content}
                    ></Grid>
                    <Grid item xs={12} md={3} className={classes.aboutTeam}>
                        <IntroTeam />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
