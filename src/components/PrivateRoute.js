import { Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const { pathname } = useLocation();

    if (localStorage.getItem("s11g2")) {
        return children;
    } else {
        return <Redirect to={{
            pathname: "/",
            state: { referrer: pathname }
        }}

        />;
    }
}