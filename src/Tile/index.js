import "./style.css";

const Tile = ({ title, extraHeaderContent, body }) => (
    <div className="tile">
        <div className="tile__headerContainer">
            <h2 className="tile__header">{title}</h2>
            {extraHeaderContent}
        </div>
        {body}
    </div>
);

export default Tile;