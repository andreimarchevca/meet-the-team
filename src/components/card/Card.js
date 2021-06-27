import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props === undefined) {
            return null;
        }

        const cardStyle = {
            flex: "1 0 21%",
            margin: "5px",
            height: "200px",
            backgroundColor: "#fff",
            boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)"
        };

        const portraitStyle = {
            width: "100px",
            float: "left"
        };

        const { employee } = this.props;
        return (
            <div className="card" style={cardStyle}>
                <img src={employee.imagePortraitUrl} style={portraitStyle} />
                <div className="name">{employee.name}</div>
                <div className="location">{employee.office}</div>
                <div className="linkedin">{employee.linkedIn}</div>
            </div>
        );
    }
}

export default Card;