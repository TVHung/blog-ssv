import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    container: {},

    slideContainer: {
        width: "70%",
        height: "100%",
        margin: "auto",
    },

    h3: {
        textAlign: "center",
    },

    eachFade: {
        display: "flex",
    },

    imageContainer: {
        width: "75%",
        overflow: "hidden",
    },

    img: {
        width: "100%",
    },

    h2: {
        width: "25%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        background: "#adceed",
    },

    div: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundSize: "cover",
        height: 300,
    },

    span: {
        padding: 20,
        fontSize: 20,
        width: "100%",
        height: "100%",
        textAlign: "center",
    },

    titleTeam: {
        fontSize: 40,
        color: "coral",
        paddingTop: 30,
        textTransform: "uppercase",
        textShadow: "3px 5px 2px rgba(0, 0, 0, .3)", //lech trai, lech duoi, do mo, mau
    },

    bioTeam: {
        fontSize: 30,
        color: "white",
        border: 1,
        margin: 10,
        marginTop: 50,
        textShadow: "2px 2px 1px rgba(0, 0, 0, .3)",
    },
}));
