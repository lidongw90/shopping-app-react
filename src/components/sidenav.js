import React, { useState } from "react";

function Sidenav() {
 const [toggle, setToggle] = useState("false")

    return (
        <div className="sidenav">
            

        <div onClick ={()=>{setToggle(!toggle)}}  >
        <span className ="mr-2">
            
             <i    className= {toggle ?"fas fa-bars" : "fas fa-window-close" }> </i>
             Browse Categories
             </span>
            
        </div>
    
{toggle ? " ":  <ul className="categories">
        {/* <span class="close-cart"><i class="fas fa-window-close"> </i></span> */}
          <li>
            Dresses 
          </li>
          <li>
            Shoes
          </li>
          <li>
           Bags
          </li>
          <li>
            Jewelleries
          </li>
          <li>
            Hair/Wigs 
          </li>
          <li>
            Cosmetics
          </li>
          <li>
            Lingeries
          </li>
          <li>
        Accesories
          </li>
        </ul>
      
    }
    
        </div>
    )
}

export default Sidenav
