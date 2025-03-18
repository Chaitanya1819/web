// import componentsimg from './assets/components.png'
// import jsximg from './assets/jsx-ui.png'
// import propimg from './assets/config.png'
// import stateimg from './assets/state-mgmt.png'

import Header from './components/Header/Header.jsx'


import Coreconcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';


function App() {
  

  return (
    

    <div>
      <Header> </Header> 
      <main>
        
        
        <Coreconcepts />
        <Examples />
        
      </main>
    </div>
  );
}

export default App;
