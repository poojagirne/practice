import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { fas } from '@fortawesome/free-brands-svg-icons'

function Contactform()
{
    
    return(
        <div>
            contact form
            <form autoComplete="off">
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                        <li className="fas fa-user"></li>
                        
                        </div>
                    </div>
                    <input  className="form-control" placeholder="full name"/>
                </div>

                <div className="form-row">
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                        <li className="fas fa-user"></li>
                        </div>
                    </div>
                    <input  className="form-control" placeholder="email id" />
                </div>
                
                <div className="form-row">
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                        <li className="fas fa-user"></li>
                        </div>
                    </div>
                    <input  className="form-control" placeholder="phone number" />
                </div>
                </div>

                <div className="form-row">
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                        <li className="fas fa-user"></li>
                        </div>
                    </div>
                    <input  className="form-control" placeholder="home number" />
                </div>
                </div>


                <div className="form-row">
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                        <li className="fas fa-user"></li>
                        </div>
                    </div>
                    <input  className="form-control" placeholder="address" />
                </div>
                </div>
                </div>
            </form>
        </div>
    )
}
export default Contactform;