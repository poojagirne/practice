import { useState,useEffect } from "react";
import {BrowserRouter,Switch,Route,NavLink} from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Contactform from "./Contactform";

function Contactapp()
{
    const[uservalue,setUservalue]=useState("");
    const[user,setUser]=useState([]);
    const[items,setItems]=useState(getLocalitems())

   
    useEffect(()=>
    {
        localStorage.setItem("lists",JSON.stringify(user))
    },[user]);
    function submit(e)
    {
            e.preventDefault();
            let myobj={
                name:e.target.name.value,
                email:e.target.email.value,
                workno:e.target.workno.value,
                homeno:e.target.homeno.value
            }
            setUservalue(myobj);
            console.log(uservalue);

            console.log(myobj);
            let ans=user.concat(myobj);
           
            setUser(ans);
            console.log(ans);
    }
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
    function additems()

    {
        if(!user)
        {

        }
        else{
            const alluser={id:new Date().getTime().toString(),name:user}
            setItems([...user,alluser])
        }
    }
    console.log(items)

    const deleteone=(indexofdata)=>
      {
        let contactfilter=user.filter(function(val,index){
        if(indexofdata==index)
             return false;
        return true;
            
        })
        setUser(contactfilter);
    }
function EditItem(id)
{
    let newedit=items.find((ele)=>
    {
        return ele.id===id;
    });
    console.log(newedit);
}

    function searchtitle(e)
	{
		e.preventDefault()
		let res=user.filter(function(val){
			if(val.name==e.target.search.value)
			{
			 return true;
			}
			else
			{
			 return false;
			}
		})
		setUser(res)
	}

    return(
        <div>
            
            <form onSubmit={submit}>
            <input type="text" name="name" placeholder="enter contact name"/><br/>
            <input type="email" name="email" placeholder="enter contact email"/><br/>
            <input type="number" name="workno" placeholder="enter contact work number"/><br/>
            <input type="number" name="homeno" placeholder="enter contact home number"/><br/>
            <button onClick={additems}>add</button>
            </form>
            <form onSubmit={searchtitle}>
			<input type="text" name="search"/>
			<button >search</button>
			</form>
            {
                user.map(function(val,index)
                    {
                      return <tr key={val.id}><td>{val.id}</td><td>{val.name}</td><td>{val.email}</td><td>{val.workno}</td><td>{val.homeno}</td>
                      <td><button onClick={()=>deleteone(index)}> delete</button></td>
                      <td><button onClick={()=>EditItem(index)}> edit</button></td>
                      <td></td>
</tr>
                    })
            }
        </div>
    )
}
export default Contactapp;