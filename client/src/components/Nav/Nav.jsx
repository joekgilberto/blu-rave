import './Nav.css';

import { useContext } from "react";
import { PageContext } from '../../data';

export default function Nav() {

  const { page } = useContext(PageContext);

  return (
    <nav>
      {page !== "home" ?
        <a href='/'>
          <p>HOME</p>
        </a>
        : null}

      {page !== "new" ?
        <a href='/new'>
          <p>ADD BLU-RAY</p>
        </a>
        : null}

      {page !== "index" ?
        <a href='/index'>
          <p>VIEW COLLECTION</p>
        </a>
        : null}
    </nav>
  );
}