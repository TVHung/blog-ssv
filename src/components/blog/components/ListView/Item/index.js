import React from "react";
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import moment from "moment";
import useStyles from "./styles";
import Slide from "@material-ui/core/Slide";
import { Link } from "react-router-dom";
import { LinkedIn } from "@material-ui/icons";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Item({ game }) {
    const classes = useStyles();

    const onLikeBtnClick = React.useCallback(() => {}, []);

    //menulist
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleIconClicks = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleReport = () => {
        handleClose();
        //open screen edit
        //todo

        //save post
        //todo
    };

    const menu = (
        <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
        >
            <MenuItem onClick={handleReport}>Báo cáo game</MenuItem>
        </Menu>
    );

    const onPlayGame = () => {};

    const linkId = "/play-game/" + game.id;

    return (
        <Link to={linkId} style={{ textDecoration: "none" }}>
            <Card className={classes.card} onClick={() => onPlayGame()}>
                <CardMedia
                    image={game.image}
                    className={classes.media}
                    title="Title"
                />
                <CardContent>
                    <Typography
                        variant="body2"
                        component="p"
                        noWrap
                        className={classes.content}
                    >
                        {game.title}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
}
