import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    container: {
        width: "100%",
    },

    img: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
    },

    imgTeam: {
        width: "100%",
    },

    content: {
        padding: 10,
    },

    containerContent: {
        width: "100%",
        padding: 10,
    },

    category: {
        padding: 0,
        margin: 0,
        fontWeight: "bold",
        color: "coral",
        textTransform: "uppercase",
        fontSize: 18,
    },

    title: {
        textTransform: "uppercase",
        fontSize: 16,
        "&:hover": {
            cursor: "pointer",
            color: "grey",
        },
        color: "#000",
        fontWeight: "bold",
    },

    byAndTime: {
        color: "#000",
    },

    chisaiContent: {
        color: "#000",
        fontSize: 18,
        maxWidth: "100%",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "inline-block",
        lineHeight: "20px",
        height: "40px",
    },
}));
