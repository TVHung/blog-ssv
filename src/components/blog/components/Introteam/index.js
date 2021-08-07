import React, { useEffect } from "react";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";
import team from "../../assets/images/team.jpg";

export default function IntroTeam() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item xs={12}>
                    <img src={team} alt="team" className={classes.imgTeam} />
                </Grid>
                <Grid item className={classes.nameTeam} xs={12}>
                    <h2>Team SSV</h2>
                </Grid>

                <Grid item xs={12}>
                    <hr style={{ width: 120 }} />
                    <p>
                        Tớ là Tuân, có xu hướng đẹp trai dần lên, thích long
                        nhong vs viết lách chém gió, là người hay cười, hay hát
                        nhưng không phải khùng. Tất cả bài viết trên blog Cuồng
                        Chân đều do tớ hoặc người khác đi rồi chia sẻ lại, với
                        tính chất tham khảo. Các bạn nên tìm hiểu từ nhiều nơi
                        để có chuyến đi tốt đẹp.
                    </p>
                </Grid>
            </Grid>
        </div>
    );
}
