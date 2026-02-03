

const cardStyle = {
    padding: '12px 16px',
    backgroundColor: "white",
    borderRadius: '10px',
};

const tittleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '4px',
};

const descriptionStyle = {
    fontSize: '14px',
    color: '#555',
    marginBottom: '8px',
};

const buttonStyle = {
    width: '5px',
    height: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
};

const buttonClick = () => {
    alert("Button clicked!");
}

const Card = ({ 
    title,
    description,
    button,
}: {
    title: string;
    description: string;
    button: string;
}) => {
    return (
        <div style={cardStyle}>
            <h2 style={tittleStyle}>{title}</h2>
            <div style={descriptionStyle}>{description}</div>
            <button style={buttonStyle} onClick={buttonClick}>{button}</button>
        </div>
    )
        
};

export default Card;