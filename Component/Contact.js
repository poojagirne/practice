import { useState,useEffect,useRef } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './ContactsForm'
function Contactapp1()
{
    const[data,setdata]=useState(getLocalitems())
    const[inputData,setinputData] =useState('');
    const[items,setitmes]=useState(getLocalitems());
    const[set,setval]=useState(true)
   const{name,email,worknumber,homenumber}=inputData;

   function getLocalitems()
   {
       let list=localStorage.getItem('lists');
       console.log(list)
       if(list){
           return JSON.parse(localStorage.getItem('lists'))
       }
       else{
           return [];
       }
   }

   useEffect(()=>
   {
       localStorage.setItem('lists',JSON.stringify(items))
   },[items]);


    const onInputChange=e=>
    {
        setinputData({...inputData,[e.target.name]:e.target.value})
    }

    function onsubmit()
    {

            if(!inputData)
            {
       
            }
            else{
                setitmes([... items,inputData])
            }
    }
   
    const deleteone=(indexofdata)=>
    {
      let contactfilter=items.filter(function(val,index){
      if(indexofdata==index)
           return false;
      return true;
          
      })
      setitmes(contactfilter);
  }
  console.log(items)

  function searchItems(e)
  {
      e.preventDefault()
    let res=data.filter((val)=>
    {
        if(val.name==e.target.search.value)
        {
         return true;
        }
        else
        {
         return false;
        }

    })
    setdata(res);
    console.log(res)
  }
  function show()
  {
setval(false)
  }

    return(
        <div>
            <input type="text" name="name" placeholder="enter contact name" value={name} onChange={e=>onInputChange(e)}/><br/>
            <input type="email" name="email" placeholder="enter contact email" value={email}  onChange={e=>onInputChange(e)}/><br/>
            <input type="number" name="worknumber" placeholder="enter contact work number" value={worknumber}  onChange={e=>onInputChange(e)}/><br/>
            <input type="number" name="homenumber" placeholder="enter contact home number" value={homenumber}  onChange={e=>onInputChange(e)}/><br/>
            <button onClick={onsubmit}>submit</button>
           
            {
               <ContactForm items={items} deleteone={deleteone} data={data} searchItems={searchItems}/>
               
            }
            
           
        </div>
    )
}
export default Contactapp1;