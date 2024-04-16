import React, { useState, useMemo, useEffect } from 'react';
import { render } from 'react-dom';
import { Router, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/sub'>Submenu</Link>
        </li>
      </ul>
    </nav>
  </header>
);

const Root = () => {
  const [path, setPath] = useState('my-app');

  const history = useMemo(() => {
    return createBrowserHistory({ basename: path });
  }, [path]);

  useEffect(() => {
    console.log(history);
    if (path !== 'my-app') {
      history.replace('/');
    }
  }, [history, path]);

  return (
    <Router history={history}>
      Current basename – {path}
      <Header />
      <button
        onClick={() => {
          setPath('asif');
        }}
      >
        change base path{' '}
      </button>
    </Router>
  );
};

render(<Root />, document.getElementById('root'));
