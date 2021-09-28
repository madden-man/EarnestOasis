import React from 'react';

import { Link } from 'react-router-dom';

export const HeaderItem = ({ title, items }) =>
  <div className="header__item">
    <span className="header__item-name">{title}</span>
    <div>
      {items.map(({ text, url, isInternal = true }) =>
        isInternal ? <Link to={url}>{text}</Link>
        : <a href={url}>{text}</a>
      )}
    </div>
  </div>;