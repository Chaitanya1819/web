
import {CORE_CONCEPTS} from '../data.js'

import Coreconcept from './CoreConcept.jsx';

export default function Coreconcepts (){
    return(
        <section id= "core-concepts"> 
            <h2>Core Concepts</h2>
            <ul>
              {/* {CORE_CONCEPTS.map((conceptItem)=> 
                <Coreconcepts {...conceptItem}/>
              )} */}
              <Coreconcept 
              title ={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
              />
              <Coreconcept 
              title ={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
              />
              <Coreconcept 
              title ={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
              />
              <Coreconcept {...CORE_CONCEPTS[3]}/>
            </ul>
        </section>
        // {/* <section id = "core-concepts">
        //   <h2>Core Concepts</h2>
        //   <ul>
        //     <Coreconcepts 
        //     title="Components"
        //     description="The core UI building block."
        //     image={componentsimg}
        //     />
        //     <Coreconcepts 
        //     title="JSX"
        //     description="Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered."
        //     image={jsximg}
        //     />
        //     <Coreconcepts 
        //     title="Props"
        //     description="Make components configurable (and therefore reusable) by passing input data to them."
        //     image={propimg}
        //     />
        //     <Coreconcepts 
        //     title="State"
        //     description="React-managed data which, when changed, causes the component to re-render & the UI to update."
        //     image={stateimg}
        //     />
        //   </ul>
        // </section> */}
    )
}