import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

const Header = () => {
    const name = useSelector(state => state.profile.name )
    return (
        <div className="chat__header">
            <div className="chat__header__name">{ name }</div>
            <div className="chat__header__status">Online</div>
        </div>
    )
}
export default Header;