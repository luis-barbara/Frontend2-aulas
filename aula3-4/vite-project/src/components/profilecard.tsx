
const cardStyle = {
    padding: '6px',
    backgroundColor: "blue",
    borderRadius: '10px',
};

const nameStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '4px',
};

const emailStyle = {
    fontSize: '14px',
    color: '#555',
    marginBottom: '8px',
};

const picStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
};

const ProfileCard = ({ 
    name,
    email,
    profilePic
}: {
    name: string;
    email: string;
    profilePic: string;
}) => {
    return (
        <div style={cardStyle}>
            {name? <h2 style={nameStyle}>{name}</h2> : null}
            <div style={emailStyle}>{email}</div>
            <img style={picStyle} src={profilePic} alt="Profile Picture" />
        </div>
    )
        
};

export default ProfileCard;