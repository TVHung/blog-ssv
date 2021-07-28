import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    container: {
        backgroundColor: "#dce8e0",
        borderRadius: 5,
        "&:hover": {
            boxShadow: "0 5px 10px 3px rgba(0, 0, 0, .3)",
        },
    },

    avtContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    avatar: {
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        padding: 20,
    },

    inforContainer: {
        paddingTop: 20,
    },

    name: {
        color: "coral",
    },

    work: {
        color: "#286fe0",
    },

    bio: {
        marginRight: 10,
    },

    socialIcon: {
        marginRight: 10,
        transition: "all .1s ease-in-out",
        "&:hover": {
            cursor: "pointer",
            transform: "scale(1.1)",
        },
    },
}));
