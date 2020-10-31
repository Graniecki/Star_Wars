import React from 'react';
import './PagesNavigation.css';

import { Link } from 'react-router-dom';

//navigation to move to another planet
export const PagesNavigation = ({ planetId }) => {
  return (
    <div className="pages-navigation">

      <button type="button">
        {/*adding routing pathes to move up or down */}
        {/*checking planet id, can not be less than 1or more than 60 */}
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
