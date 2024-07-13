import { Link } from "react-router-dom";
import SvgIcon from "./SvgIcon";

function CodePreview({ code, isFavorite, updateUser }) {
    // console.log(isFavorite);
    // console.log(code);
    // TODO: add hint to the code 

    return (
        <li className="code-preview grid grid-dir-col">
            <button className="icon favorite" onClick={(ev)=> updateUser(ev,'favorites', code._id)}>
                <SvgIcon iconName={isFavorite ? 'book_mark_fill' : 'book_mark'} />
            </button>
            <div>

            <Link to={`/code/${code._id}`}>
                <h4>{code.title}</h4>
                <small>{code.language}</small>
            </Link>
            </div>
        </li>
    );
}

export default CodePreview;