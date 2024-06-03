import PropTypes from 'prop-types';
import { IoMdMail } from "react-icons/io";
import { FaRegAddressCard } from "react-icons/fa";
import { LiaCitySolid } from "react-icons/lia";
import './User.css';

const User = ({ user }) => {
    return (
        <div className="detail-card">
            <h2>{user.name}</h2>
            <p className='contact-email'>
                <IoMdMail className = ' icon '/>{user.email} </p>

            <p className='contact-address'>
                <FaRegAddressCard className='icon'/>{user.address.street}</p>

            <p className='contact-city'>
                <LiaCitySolid className='icon'/>{user.address.city}</p>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        address: PropTypes.shape({
            street: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default User;
