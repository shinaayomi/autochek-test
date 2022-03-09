
import '../components/Components.css'
import Navigation from "../components/Navigation";
import Tabled from '../components/Tabled';

function LandingPage() {
   return (      
      <>
         <Navigation />

         <div className="container">
            <div className="row">
               <div className="col">
                  <Tabled />
               </div>
            </div>         
         </div>  
      </>    
   )
}

export default LandingPage
