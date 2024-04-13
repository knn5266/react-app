import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faFilePen,
  faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ isAuth }) => {
  return (
    <nav>
      <Link to='/'>
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      {!isAuth ? (
        <Link to='/Login'>
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          ログイン
        </Link>
      ) : (
        <>
          <Link to='/CreatePost'>
            <FontAwesomeIcon icon={faFilePen} />
            記事投稿
          </Link>
          <Link to='/Logout'>
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            ログアウト
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
