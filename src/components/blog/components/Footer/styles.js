import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    container: {
        width: "100%",
        height: 130,
        backgroundColor: "#192122",
        zIndex: 3,
    },

    author: {
        width: "100%",
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },

    ul: {
        padding: 0,
        margin: 0,
        height: "100%",
        alignItems: "center",
        justify: "center",
        display: "flex",
    },

    li: {
        listStyle: "none",
        float: "left",
        textAlign: "center",
        paddingLeft: 20,
        paddingRight: 20,
    },

    a: {
        color: "#cfccc6",
        fontSize: 20,
    },

    nocopyright: {
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },
}));
