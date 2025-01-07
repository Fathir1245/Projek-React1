import { useState } from 'react';
import Nav from '../component/jsx/navbar.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <div>
        <h1>Welcome to Beranda</h1>
        {/* Add more content for the Beranda page here */}
      </div>
    </>
  );
}

export default App;