import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        display: "block",
        overflow: "hidden",
    },

    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all .4s ease-out",
        maxWidth: "100%",
        zIndex: 1,
        "&:hover": {
            cursor: "pointer",
            transform: "scale(1.1)",
        },
    },

    inlineImage: {
        width: "100%",
        height: 250,
        zIndex: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    titleTeam: {
        fontSize: 20,
        padding: 10,
        color: "black",
        backgroundColor: "white",
        opacity: 0.6,
    },

    firstOverlayLine: {
        display: "block",
        height: "90%",
        width: 2,
        background: "red",
        opacity: 0.5,
    },

    secondOverlayLine: {
        display: "block",
        height: "90%",
        width: 2,
        background: "red",
        opacity: 0.5,
    },

    thirdOverlayLine: {
        display: "block",
        height: 200,
        width: 2,
        background: "red",
        opacity: 0.5,
    },

    fourOverlayLine: {
        display: "block",
        height: 200,
        width: 2,
        background: "red",
        opacity: 0.5,
    },
}));
