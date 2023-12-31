import './style.css';

export const ButtonSmallBlue = ({ text }) => {
    return <button className="ButtonSmallBlue button"> <span>{text}</span></button>;
};

export const ButtonNormalBlue = ({ text, onClick , style,}) => {
    return <button className="ButtonNormalBlue button" style={style} onClick={onClick}> <span>{text}</span></button>;
};

export const ButtonLargeBlue = ({ text, type }) => {
    return <button type={type} className="ButtonLargeBlue button"> <span>{text}</span></button>;
};

export const ButtonSmallWhite = ({ text , onClick }) => {
    return <button className="ButtonSmallWhite button" onClick={onClick}> <span>{text}</span></button>;
}

export const ButtonNormalWhite = ({ text, type, onClick }) => {
    return <button className="ButtonNormalWhite button" type={type} onClick={onClick}  > <span>{text}</span></button>;
}
export const ButtonLargeWhite = ({ text }) => {
    return <button className="ButtonLargeWhite button"> <span>{text}</span></button>;
}

export const ButtonLargeWhiteIcon = ({ text, icon }) => {
    return <button className="ButtonLargeWhiteIcon button"><div className="iconBox">{icon}</div> <span>{text}</span></button>;
}