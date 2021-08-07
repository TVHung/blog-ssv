import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import useStyles from "./styles";
import teamssv from "../../assets/images/team.jpg";

export default function Error() {
    const classes = useStyles();

    return (
        <Grid container className={classes.container}>
            <Grid item xs={12}>
                <img src={teamssv} alt="teamssv" className={classes.imgTeam} />
            </Grid>
            <Grid item xs={12} className={classes.nameTeam}>
                <h2>Team SSV</h2>
            </Grid>
            <Grid>
                <hr style={{ width: 120 }} />
                <p>
                    Tớ là Tuân, có xu hướng đẹp trai dần lên, thích long nhong
                    vs viết lách chém gió, là người hay cười, hay hát nhưng
                    không phải khùng. Tất cả bài viết trên blog Cuồng Chân đều
                    do tớ hoặc người khác đi rồi chia sẻ lại, với tính chất tham
                    khảo. Các bạn nên tìm hiểu từ nhiều nơi để có chuyến đi tốt
                    đẹp.
                </p>
            </Grid>
        </Grid>
    );
}
