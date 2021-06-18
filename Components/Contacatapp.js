import Header from './Header';
import Contactlist from './Contactlist';
import Addcontact from './Addcontact';
import { useState } from 'react';
function Contacatapp()
{
    const[contacts,setContacts]=useState([]);

    const addcontacthandler=(element)=>
    {
        console.log(element)
        setContacts(element)
    }
    return(
            <div>
               <Header/> 
               <Addcontact  addcontacthandler={addcontacthandler}/>
               <Contactlist contacts={contacts}/>
            </div>
    )
}
export default Contacatapp;