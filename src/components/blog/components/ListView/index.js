import { Button, Grid } from "@material-ui/core";
import React from "react";
import Item from "./Item";
import icon from "../../assets/images/logopersonal2.png";

export default function ListView({ lists }) {
    const loadMore = (e) => {
        e.preventDefault();
    };

    return (
        <div style={{ paddingTop: 10, width: "100%" }}>
            <Grid container spacing={3} alignItems="stretch">
                {lists.map((list) => (
                    <Grid key={list.id} item xs={12}>
                        <Item list={list} />
                    </Grid>
                ))}
            </Grid>
            <div>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{
                        color: "rgb(66 82 110)",
                        backgroundColor: "#fafafa",
                        marginTop: 20,
                    }}
                    startIcon={<img src={icon} width="20px" height="20px" />}
                    onClick={(e) => loadMore(e)}
                >
                    Load more
                </Button>
            </div>
        </div>
    );
}
