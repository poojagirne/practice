import Contactcard from './Contactcard'
import { Link } from 'react-router-dom';
const Contactlist=(props)=>
{
    const deletecontacthandler=(id)=>
    {
        props.getcontactid(id);
    }
    const rendercontactlst=props.contacts.map((contact)=>{
        return(<div>
          
              <div> <Contactcard contact={contact} clickhamdler={deletecontacthandler}/></div>
            </div>
        )
    })
return(
    <div>
    <h2>contact list<Link to="/add">
    <button className="ui button blue right">add to contact</button>
    </Link></h2>
              <div>{rendercontactlst}</div>
    </div>
    
)
}
export default Contactlist;