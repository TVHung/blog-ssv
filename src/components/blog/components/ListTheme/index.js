import { Grid } from "@material-ui/core";
import React from "react";
import ItemTheme from "./ItemTheme";

export default function ListTheme({ listTheme }) {
    return (
        <div style={{ paddingTop: 10, paddingBottom: 10 }}>
            <Grid container spacing={3} alignItems="stretch">
                {listTheme.map((item) => (
                    <Grid key={item.id} item xs={12} sm={6} md={3}>
                        <ItemTheme item={item} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
