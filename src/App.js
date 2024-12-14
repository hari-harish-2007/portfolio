import React from 'react';

import Home from './Home';
import About from './About';
import Education from './Education';
import Timeline from './Timeline';
import Serivese from './Serivese';
import Product from './Product';
import Contact from './Contact';
import Autoplay from './Autoplay';
 import Zoom from './Zoom';

// import What from './What';

function App() {
  return (
    <main className='overflow-hidden'>

          <  Home />
          <  About /> 
          {/* <Education/>  */}
          < Timeline />
          < Serivese />
          < Autoplay />
          {/* <Product/> */}
           <Zoom /> 
           {/* <What/> */}
< Contact/>
        
      
    </main>

  );
}

export default App;
