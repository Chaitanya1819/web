import {EXAMPLES} from '../data.js'
import {useState} from 'react';
import TabButton from './TabButton.jsx';
import Tabs from './Tabs.jsx';

export default function Examples(){

    const  [selectedTopic,setSelectedtopic] = useState();
      let tabContent = <p> Please Select A topic.</p>
    
      function handSelect(selectedButton){
        setSelectedtopic(selectedButton);
      
        console.log(selectedTopic);
      }
      if(selectedTopic){
        tabContent = (<div id ="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>);
      }
    return( 
    <section  title ="Examples" id ="examples">
          <h2>Examples</h2>
          <Tabs  buttons ={
            <>
            <TabButton 
              isSelected={selectedTopic ==='components'} 
              onSelect={()=>handSelect('components')}
            >
              Componets
            </TabButton>
            <TabButton 
              isSelected={selectedTopic ==='jsx'} 
              onSelect={()=>handSelect('jsx')} 
            >
              JSX
            </TabButton>
            <TabButton isSelected = {selectedTopic ==='props'}
            onSelect={()=>handSelect('props')}
            >Props
            </TabButton>
            <TabButton isSelected = {selectedTopic ==='state'}
            onSelect={()=>handSelect('state')}
            >State
            </TabButton> 
          </>}
          > 
            {tabContent}
            </Tabs>
            <h2>Time to get started!</h2>
        </section>

          // {/* <menu>
          //   <TabButton isSelected={selectedTopic ==='components'} 
          //              onSelect={()=>handSelect('components')}
          //              >Componets
          //   </TabButton>
          //   <TabButton isSelected={selectedTopic ==='jsx'} 
          //              onSelect={()=>handSelect('jsx')} 
          //              >JSX
          //   </TabButton>
          //   <TabButton isSelected = {selectedTopic ==='props'}
          //              onSelect={()=>handSelect('props')}
          //              >Props
          //   </TabButton>
          //   <TabButton isSelected = {selectedTopic ==='state'}
          //              onSelect={()=>handSelect('state')}
          //              >State
          //   </TabButton>
          // </menu> */}
          // {/* <div id ="tab-content">
          //   <h3>{EXAMPLES[selectedTopic].title}</h3>
          //   <p>{EXAMPLES[selectedTopic].description}</p>
          //   <pre>
          //     <code>
          //       {EXAMPLES[selectedTopic].code}
          //     </code>
          //   </pre>
          // </div> */}
          // {/* {!selectedTopic && <p>Please Select  a Topic.</p>}
          // {selectedTopic && (<div id ="tab-content">
          //   <h3>{EXAMPLES[selectedTopic].title}</h3>
          //   <p>{EXAMPLES[selectedTopic].description}</p>
          //   <pre>
          //     <code>
          //       {EXAMPLES[selectedTopic].code}
          //     </code>
          //   </pre>
          // </div>)} */}
        
        
    );
};
    