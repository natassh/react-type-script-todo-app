import React from 'react';
import PropTypes from 'prop-types';
import './ExternalLink.css';

function ExternalLink({ className = '', href, text }) {
  const classes = `${className} link`;
  return (
    <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
}

export default ExternalLink;

ExternalLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string
};