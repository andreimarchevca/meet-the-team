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
            margin: "15px",
            padding: "10px",
            height: "auto",
            backgroundColor: "#fff",
            boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)"
        };

        const portraitStyle = {
            width: "100%",
            height: "200px"
        };

        const imgStyle = {
            height: "100%"
        };

        const { employee } = this.props;
        return (
            <div className="card" style={cardStyle}>
                <div className="card__portrait" style={portraitStyle}>
                    <img src={employee.imagePortraitUrl} style={imgStyle} />
                </div>
                <div className="card-info">
                    <div className="card-info__text">
                        <div className="name">{employee.name}</div>
                        <div className="location">{employee.office}</div>
                    </div>
                    <div className="card-info__links">
                        <a className="linkedin" target="_blank" href={ "http://www.linkedin.com/" + employee.linkedIn }>{employee.linkedIn}</a>
                        <a className="linkedin" target="_blank" href={ "http://www.github.com/" + employee.gitHub }>{employee.gitHub}</a>
                        <a className="linkedin" target="_blank" href={ "http://www.twitter.com/" + employee.twitter }>{employee.twitter}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;