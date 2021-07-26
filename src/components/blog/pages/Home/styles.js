import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({

    container: {
        
    },

    paper: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
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
