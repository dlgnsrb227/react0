import React from 'react';
import ReactDOM from 'react-dom/client';
import Practice from './practice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Practice word="안녕" self="혼자서" react="리액트" do="하는 중" />
  </React.StrictMode>
);