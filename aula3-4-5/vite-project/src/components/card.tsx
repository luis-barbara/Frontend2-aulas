

const cardStyle = {
  padding: '20px',
  backgroundColor: "white",
  borderRadius: '10px',
  minWidth: '300px',  
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',  
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

;

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
            <button onClick={buttonClick}>{button}</button>
        </div>
    )
        
};

export default Card;