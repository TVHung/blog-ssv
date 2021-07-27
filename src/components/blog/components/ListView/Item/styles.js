import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    card: {
        backgroundColor: "white",
        transition: "all .2s ease-in-out",
        borderRadius: 5,
        boxShadow: "0 1px 3px 2px rgba(0, 0, 0, .3)",
        zIndex: 1,
        "&:hover": {
            cursor: "pointer",
            transform: "scale(1.1)",
            boxShadow: "0 5px 10px 3px rgba(0, 0, 0, .3)",
        },
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9,
        marginTop: "30",
    },
    header: {
        fontSize: 20,
    },

    content: {
        // height: 50,
        color: "black",
    },
}));
