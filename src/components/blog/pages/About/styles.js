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
        marginBottom: 30,
        "&:hover": {
            boxShadow: "0 5px 10px 3px rgba(0, 0, 0, .3)",
        },
    },

    about: {
        paddingBottom: 20,
    },

    aboutItem: {
        width: "100%",
    },
}));
