import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    container: {
        width: "100%",
        height: 90,
        backgroundColor: "#1b2527",
        position: "sticky",
        top: 0,
        alignItems: "center",
        justify: "center",
        opacity: 0.9,
        zIndex: 5,
    },

    gridContainer: {
        // height: "100%",
        float: "left",
    },

    page: {
        height: 90,
    },

    logoArea: {
        alignItems: "center",
        justifyContent: "center",
        // paddingLeft: 50,
        display: "flex",
        float: "left",
    },

    logo: {
        width: 60,
        height: 60,
        "&:hover": {
            cursor: "pointer",
        },
    },

    ul: {
        padding: 30,
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
            backgroundColor: "coral",
            cursor: "pointer",
        },
    },

    linkStyle: {
        color: "white",
    },

    containerSearch: {
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        height: 90,
    },

    boxSearch: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        borderRadius: 60,
        marginRight: "10%",
        transition: "all .2s ease-in-out",
        "&:hover": {
            boxShadow: "0 5px 10px 3px rgba(0, 0, 0, .3)",
            transform: "scale(1.05)",
        },
        "&:focus-within": {
            boxShadow: "0 5px 10px 3px rgba(0, 0, 0, .3)",
            transform: "scale(1.05)",
        },
    },

    input: {
        width: "100%",
        height: 50,
        backgroundColor: "#f4f4f4",
        borderTopLeftRadius: 60,
        borderBottomLeftRadius: 60,
        paddingLeft: 20,
        border: "none",
        outline: "none",
    },

    button: {
        width: 60,
        height: 50,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        backgroundColor: "#2e5fd8",
        border: "none",
        outline: "none",
        cursor: "pointer",
    },

    iconSearch: {
        color: "white",
        fontSize: 25,
        transition: "all .1s ease-in-out",
        "&:hover": {
            transform: "scale(1.2)",
        },
    },
}));
