import React from 'react';
import { Link } from 'react-router-dom';

import '../ui/StartPage.scss';

const StartPage = () => {
  return (
    <div className="welcome">
      <h2 className="welcome__header">Чтобы открыть приложение нажмите на кнопку.</h2>
      <Link to="/app" className="welcome__goto-app">Открыть</Link>
    </div>
  );
}

export default StartPage;
