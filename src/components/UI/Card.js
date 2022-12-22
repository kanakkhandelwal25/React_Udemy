import './Card.css';

function Card(props){
    const classes = 'card ' + props.className;
    return <div className = {classes}>{props.children}</div>;
}

export default Card;  //props.children contains whatever is between the opening and closing tags

