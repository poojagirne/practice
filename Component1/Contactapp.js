import {BrowserRouter,Switch,Route,NavLink} from 'react-router-dom'
import {uuid} from 'uuidv4'
import Header from './Header'
import Addcontact  from './Addcontact'
import Contactlist from  './Contactlist'
import { useEffect, useState } from 'react';
import Contactdetails from './Contactdetails'
function Contactapp(){
  const LOCAL_STORAGE_KEY="contact";

  const [contacts,setContacts]=useState([]);
  
  useEffect(()=>
  {
   const retrievecontacts= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   if(retrievecontacts) setContacts(retrievecontacts);
  },[]);

    
  useEffect(()=>
  {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);


  const addContactHandler=(contact1)=>
  {
console.log(contact1)
setContacts([...contacts,{id:uuid(),...contact1}])
  }

  const removecontacthandler=(id)=>{
    const newcontactlist=contacts.filter((val)=>{
      return val.id!==id;
    });
    setContacts(newcontactlist)
  }
  return (
    <div>
      <BrowserRouter>
     <Header/>  
     <Switch>

     <Route exact path="/" render={(props)=>(
     <Contactlist {...props}
      contacts={contacts} 
       getcontactid={removecontacthandler}/>)}>
       </Route>

     <Route exact path="/add" 
     render={(props)=>(
     <Addcontact {...props} 
     addContactHandler={addContactHandler}/>)}>
     </Route>

 <Route path="/contact/:id" component={Contactdetails}>
</Route>
     </Switch>
     {/*
       <Route exact path="/" component={()=>
     (<Contactlist contacts={contacts}  getcontactid={removecontacthandler}/>)}></Route>
     <Route exact path="/add" component={()=>(<Addcontact addContactHandler={addContactHandler}/>)}></Route>
     </Switch>
     <Addcontact addContactHandler={addContactHandler}/>    
     <Contactlist contacts={contacts}  getcontactid={removecontacthandler}/>*/}
     </BrowserRouter>
    </div>
  );
}


export default Contactapp;
