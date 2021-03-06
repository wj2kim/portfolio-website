import React from 'react';
import './SocialIcons.scss';

const SocialIcons = () => {
  return (
    <div id="social-icons" className="social-icons nav-wrapper row">
      <a
        title="Instagram"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/pvvjk/"
      >
        <div className="social-name col s12 m4">INSTAGRAM</div>
      </a>
      <a
        title="Github"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/wj2kim"
      >
        <div className="social-name col s12 m4">GITHUB</div>
      </a>
      <a
        title="Tistory"
        target="_blank"
        rel="noopener noreferrer"
        href="https://dont-stay-hungry.tistory.com"
      >
        <div className="social-name col s12 m4">TISTORY</div>
      </a>
      {/* </ul> */}
    </div>
  );
};

export default SocialIcons;
