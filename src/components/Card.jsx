export default function Cart (props) {
    return (
        <div className="card-container">
            <div className="card-icon"> {props.icon}</div>
            <h1 className="card-title">{props.title}</h1>
            <p className="card-description">{props.description}</p>
        </div>
    )
}