import './Nav.css';

export default function Nav({ page }) {
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