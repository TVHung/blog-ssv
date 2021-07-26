import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import ListView from "../../components/ListView";

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
            image: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
        },
        {
            id: "2",
            title: "Game Rocket",
            image: "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
        },
        {
            id: "3",
            title: "Game luyện chính tả",
            image: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
        },
        {
            id: "4",
            title: "lam chu tieng nhat trong 300000000000 ngay",
            image: "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
        },
        {
            id: "5",
            title: "sinh vien lam 5 trieu 1 ngay",
            image: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
        },
        {
            id: "6",
            title: "hung day",
            image: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
        },
        {
            id: "7",
            title: "Hung huong dan choi rubik",
            image: "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
        },
        {
            id: "8",
            title: "hoc lap trinh trong 1 ngay",
            image: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
        },
        {
            id: "9",
            title: "lam chu tieng nhat trong 300000000000 ngay",
            image: "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
        },
        {
            id: "10",
            title: "Hung huong dan choi rubik",
            image: "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
        },
        {
            id: "11",
            title: "hoc lap trinh trong 1 ngay",
            image: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
        },
        {
            id: "12",
            title: "lam chu tieng nhat trong 300000000000 ngay",
            image: "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
        },
        {
            id: "13",
            title: "Hung huong dan choi rubik",
            image: "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
        },
        {
            id: "14",
            title: "hoc lap trinh trong 1 ngay",
            image: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
        },
        {
            id: "15",
            title: "lam chu tieng nhat trong 300000000000 ngay",
            image: "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
        },
    ];

    return (
        <>
            <Container className={classes.container}>
                <div className={classes.paper}>
                    <ListView lists={lists} />
                </div>
            </Container>
        </>
    );
}
