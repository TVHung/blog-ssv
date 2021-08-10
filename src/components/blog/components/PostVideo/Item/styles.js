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
        transition: "all .2s ease-out",
        maxWidth: "100%",
        zIndex: 1,
        margin: 3,
        boxShadow: "inset 0em -2em 2em rgba(0, 0, 0, 0.5)",
        "&:hover": {
            cursor: "pointer",
            boxShadow: "inset 0em -6em 2em rgba(0, 0, 0, 0.5)",
        },
    },

    inlineImage: {
        width: "100%",
        height: 300,
        zIndex: 2,
        position: "relative",
    },

    titleTeam: {
        fontSize: 20,
        color: "white",
        position: "absolute",
        paddingLeft: 20,
        paddingRight: 20,
        bottom: 0,
        left: 0,
        maxWidth: "100%",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "inline-block",
    },

    time: {
        fontSize: 15,
        color: "white",
    },
}));
