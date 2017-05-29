import React from 'react';
import InputField from '../../containers/InputField';
import Filter from '../../containers/Filter';
import TasksList from '../../containers/TasksList';
import SearchingField from '../../containers/SearchingField';

import '../../ui/App.scss';

const App = () => {
  return (
    <div className="container">
      <div className="todolist">
        <InputField />
        <SearchingField />
        <TasksList />
        <Filter />
      </div>
    </div>
  );
}

export default App;
