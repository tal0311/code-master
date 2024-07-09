import { Link } from "react-router-dom";

function CodePreview({ code }) {
    console.log(code);
    return (
        <li className="code-preview">
            <Link to={`/code/${code._id}`}>
                <h4>{code.title}</h4>
                <p>{code.language}</p>
            </Link>
        </li>
    );
}

export default CodePreview;