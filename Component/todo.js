import { useEffect, useState } from "react";

function Todoapp()
{
   const[inputData,setinputData] =useState('');
   const[items,setitmes]=useState(getLocalitems());

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
    function submit()
    {
     if(!inputData)
     {

     }
     else{
        const allInputData={id:new Date().getTime().toString(),name:allInputData}

         setitmes([... items,allInputData])
         setinputData('');
     }
    }
    useEffect(()=>
    {
        localStorage.setItem('lists',JSON.stringify(items))
    },[items]);
    
    function deleteone(){
        
    }
    return(
        <div>
            <input type="text" placeholder="enter todo" value={inputData} onChange={(e)=>{setinputData(e.target.value)}}/>
            <button onClick={submit}>submit</button>
            {
                items.map((ele)=>
                    {
                        return <tr key={ele}><td>{ele}</td> <td><button onClick={deleteone}>deletes</button></td> 
                        <td><button>edit</button></td></tr>
                    })
            }
        </div>
    )
}
export default Todoapp;