import { Link } from "react-router-dom";
import SvgIcon from "./SvgIcon";

function CodePreview({ code, isFavorite }) {
    // console.log(isFavorite);
    // console.log(code);
    // TODO: add hint to the code 

    return (
        <li className="code-preview">
            <SvgIcon iconName={isFavorite? 'book_mark_fill' : 'book_mark'} />
            <Link to={`/code/${code._id}`}>
                <h4>{code.title}</h4>
                <p>{code.language}</p>
            </Link>
        </li>
    );
}

export default CodePreview;