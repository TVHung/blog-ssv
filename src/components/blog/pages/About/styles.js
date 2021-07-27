import { makeStyles } from "@material-ui/core/styles";
import background from "../../assets/images/a.jpg";
import team from "../../assets/images/team.jpg";

export default makeStyles((theme) => ({
    container: {
        margin: 0,
        padding: 0,
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        minHeight: 800,
        zIndex: 1,
    },

    aboutTeam: {
        width: "100%",
        height: 300,
        backgroundColor: "coral",
        marginBottom: 20,
        backgroundImage: `url(${team})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        "&:hover": {
            boxShadow: "0 5px 10px 3px rgba(0, 0, 0, .3)",
        },
    },

    titleAbout: {
        textAlign: "center",
    },

    titleTeam: {
        fontSize: 40,
        color: "coral",
        paddingTop: 30,
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

    about: {
        paddingBottom: 20,
    },

    aboutItem: {
        width: "100%",
    },
}));
