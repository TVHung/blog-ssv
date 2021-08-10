import { Grid } from "@material-ui/core";
import React from "react";
import Item from "./Item";

export default function ListView({ lists }) {
    return (
        <div style={{ paddingTop: 10, width: "100%" }}>
            <Grid container spacing={3} alignItems="stretch">
                {lists.map((list) => (
                    <Grid key={list.id} item xs={6}>
                        <Item list={list} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
