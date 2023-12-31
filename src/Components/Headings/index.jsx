import './index.css';

export const Heading = ({ text }) => {
    return <h1 className="heading">{text}</h1>;
};
export const Heading1 = ({ text }) => {
    return <h1 className="heading-1">{text}</h1>;
};
export const Heading2 = ({ text }) => {
    return <h2 className="heading-2">{text}</h2>;
};
export const Heading3 = ({ text }) => {
    return <h3 className="heading-3">{text}</h3>;
};
export const Heading4 = ({ text }) => {
    return <h4 className="heading-4">{text}</h4>;
};
export const Heading5 = ({ text }) => {
    return <h5 className="heading-5">{text}</h5>;
};
export const Heading6 = ({ text }) => {
    return <h5 className="heading-6">{text}</h5>;
};
export const Heading7 = ({ text }) => {
    return <h5 className="heading-7">{text}</h5>;
};
export const Subheading = ({ text , onClick, classnames, styles, span}) => {
    return <p className={`subheading ${classnames}`} onClick={onClick} style = {styles}>{text}{span}</p>;
};
export const Subheading1 = ({ text, onClick , style}) => {
    return <p className="subheading-1" style={style} onClick={onClick}>{text}</p>;
};
export const Subheading2 = ({ text }) => {
    return <p className="subheading-2">{text}</p>;
};

export const Subheading3 = ({ text }) => {
    return <p className="subheading-3">{text}</p>;
    };

export const Subheading4 = ({ text }) => {
    return <p className="subheading-4">{text}</p>;
};