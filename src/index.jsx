import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

const App = () => {
return (
  <div>
    <h1>Hello World</h1>
  </div>
  );
}
root.render(<App />);
