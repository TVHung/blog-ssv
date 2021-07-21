import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(1),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: 1000,
        backgroundColor: "red",
    },

    itemHome: {
        width: "100%",
        height: 300,
        backgroundColor: "green",
    },

    itemHome2: {
        width: "100%",
        height: 300,
        backgroundColor: "blue",
    },
}));
