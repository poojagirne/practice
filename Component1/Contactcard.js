import image from '../images/image.jpeg'
import { Link } from 'react-router-dom';
function Contactcard(props)
{
    const{id,name,email}=props.contact;
    return(
        <div className="item">
            <img className="ui avatar image" src={image} alt="user"/>
            <div className="content">
                <Link  to={{pathname:`/contact/${id}`,state:{contact:props.contact}}}>
             <div className="header">{name}</div>
                <div>{email}</div>
                </Link>
                </div>
                <i className="trash alternate outline icon" onClick={()=>{props.clickhamdler(id)}}></i>
        </div>
    )
}
export default Contactcard;