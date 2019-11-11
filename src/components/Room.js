import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/room-6.jpeg';
import PropTypes from 'prop-types';


export default function Room({ room }) {

    const { name, slug, images, price } = room;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="single-room" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>for night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primaryy room-link">
                    Features</Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    );
}

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        namimagese: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,

    })
}