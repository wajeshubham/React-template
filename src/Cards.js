import React from 'react';

const Card = ({ link }) => (
    <div className="col-4">
        <div className="card" style={{ width: '20rem', margin: '4rem' }}>
            <img src={link} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the cards content.
                </p>
                <a href="/" className="btn btn-success">
                    Go somewhere
                </a>
            </div>
        </div>
    </div>
);

export default Card;
