import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    container: {
        width: "100%",
        height: 90,
        backgroundColor: "#192122",
        position: "sticky",
        top: 0,
        alignItems: "center",
        justify: "center",
    },

    gridContainer: {
        height: "100%",
    },

    logoArea: {
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },

    logo: {
        width: 60,
        height: 60,
        marginLeft: 40,
        marginTop: 15,
        marginRight: 30,
        "&:hover": {
            cursor: "pointer",
        },
    },

    ul: {
        padding: 0,
        margin: 0,
        height: "100%",
        position: "absolute",
        alignItems: "center",
        justify: "center",
        display: "flex",
    },

    li: {
        listStyle: "none",
        float: "left",
        textAlign: "center",
        padding: 30,
        "&:hover": {
            backgroundColor: "#d5dbe3",
            cursor: "pointer",
        },
    },
}));
