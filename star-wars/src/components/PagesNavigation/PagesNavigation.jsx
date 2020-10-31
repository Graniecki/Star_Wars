import React from 'react';

import { Link } from 'react-router-dom';

export const PagesNavigation = ({ planetId }) => {
  return (
    <div className="pages-navigation">
      <button type="button">
        <Link
          to={`/planet/${(+planetId - 1) <= 0 ? 1 : +planetId - 1}`}
        >
          Previous planet
        </Link>
      </button>
      <button type="button">
        <Link
          to={`/planet/${(+planetId + 1) > 60 ? 60 : +planetId + 1}`}
        >
          Next planet
        </Link>
      </button>
  </div>
  );
};
