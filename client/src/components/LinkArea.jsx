import { Link } from "react-router-dom";
import LinkAreaDiv from "./styles/LinkAreaDiv";

const LinkArea = () => {
    return (
    <LinkAreaDiv>
        <Link to="/">Tx Search</Link>
        <Link to="/contract">Contract Search</Link>
        <Link to="/account">Account Search</Link>
    </LinkAreaDiv>);
}

export default LinkArea;