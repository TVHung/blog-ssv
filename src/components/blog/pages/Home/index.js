import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import ListView from "../../components/ListView";
import SlideShow from "../../components/SlideShow";
import ListTheme from "../../components/ListTheme";

export default function Home() {
    const classes = useStyles();
    const title = "Trang chủ";

    useEffect(() => {
        document.title = title;
    }, []);

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

    const dataSlides = [
        {
            tite: "We are team ssv",
            bio: "Blog chia sẻ về những thông tin của nhóm và những kiến thức bổ ích khác",
            image: "https://monkeymedia.com.vn/storage/2020/06/757b505cfd34c64c85ca5b5690ee5293/c/16a17bdd79859ddbc494.jpg-large.jpg",
        },
        {
            tite: "We are team ssv",
            bio: "Blog chia sẻ về những thông tin của nhóm và những kiến thức bổ ích khác",
            image: "https://cn24h.net/uploads/img_nd/dinh-dang-anh-tiff-la-gi-1.jpg",
        },
        {
            tite: "We are team ssv",
            bio: "Blog chia sẻ về những thông tin của nhóm và những kiến thức bổ ích khác",
            image: "http://cdn2.tieudungplus.vn/upload/TgBSumXIHarRW68IEfydSA/files/bst-hinh-anh-phong-canh-thien-nhien-tuyet-dep-lang-man-tho-mong-hung-vi-nhat-the-gioi-1.jpeg",
        },
    ];

    const listTheme = [
        {
            id: 1,
            tite: "Kinh nghiệm",
            image: "https://cdn.tgdd.vn/Files/2019/12/22/1227964/tu-van-chon-mua-ong-kinh-lens-may-anh-de-chup-anh-phong-canh-dep-nhat-9.jpg",
        },
        {
            id: 2,
            tite: "Hình ảnh",
            image: "https://anhdepblog.com/wp-content/uploads/2020/10/anh-phong-canh-thien-nhien-dep-quyen-ru-long-nguoi-2.jpg",
        },
        {
            id: 3,
            tite: "Review",
            image: "https://a-static.besthdwallpaper.com/hinh-anh-phong-canh-ho-bao-quanh-boi-cay-coi-hinh-nen-1280x720-55329_45.jpg",
        },
        {
            id: 4,
            tite: "Du ký",
            image: "https://wikilaptop.com/wp-content/uploads/2021/01/1609893887_430_Hinh-anh-phong-canh-buon-dep-nhat.jpg",
        },
    ];

    return (
        <>
            <Container className={classes.container}>
                <div>
                    <SlideShow dataSlides={dataSlides} />
                </div>
                <div className={classes.paper}>
                    <ListView lists={lists} />
                </div>
                <div>
                    <ListTheme listTheme={listTheme} />
                </div>
            </Container>
        </>
    );
}
