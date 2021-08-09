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
        "&:hover": {
            cursor: "pointer",
            boxShadow: "inset 0em -4em 2em rgba(0, 0, 0, 0.5)",
        },
    },

    inlineImage: {
        width: "100%",
        height: 250,
        zIndex: 2,
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "left",
    },

    titleTeam: {
        fontSize: 20,
        color: "white",
    },
}));
