import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import './Card.css';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

class Card extends React.Component {
    render() {
        if (this.props === undefined) {
            return null;
        }

        const { employee } = this.props;
        return (
            <div className="card">
                <div className="card__portrait">
                    <img src={employee.imagePortraitUrl} className="card__img" alt={employee.name} />
                </div>
                <div className="card-info">
                    <div className="card-details__wrapper">
                        <div className="card-info__text">
                            <div className="name">{employee.name}</div>
                            <div className="location"><FontAwesomeIcon icon={faMapMarker} size={'1x'} color="grey" /> {employee.office}</div>
                        </div>
                        <div className="card-info__links">
                            { employee.linkedIn && <a className="social-icon-svg" target="_blank" rel="noreferrer" href={ "http://www.linkedin.com/" + employee.linkedIn }><FontAwesomeIcon icon={faLinkedin} size={'2x'} color="black" className="font-icon" /></a> }
                            { employee.gitHub && <a className="social-icon-svg" target="_blank" rel="noreferrer" href={ "http://www.github.com/" + employee.gitHub }><FontAwesomeIcon icon={faGithub} size={'2x'} color="black" className="font-icon" /></a> }
                            { employee.twitter && <a className="social-icon-svg" target="_blank" rel="noreferrer" href={ "http://www.twitter.com/" + employee.twitter }><FontAwesomeIcon icon={faTwitter} size={'2x'} color="black" className="font-icon" /></a> }
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Card;