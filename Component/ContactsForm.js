function ContactForm({items,deleteone,data,searchItems,show})
{
    return(
        <div>
            { 
                 items.map((val,index)=>
                    {
                        return<tr><td>{val.name}</td><td>{val.email}</td><td>{val.worknumber}</td><td>{val.email}</td>
                        <td><button onClick={()=>deleteone(index)}>delete</button></td>

                        </tr>
                    })
            }
           
             <form onSubmit={searchItems}>
                <input type="text" name="search" placeholder="search"/>
                <button onChange={show}> search</button>
            </form>

            {
                   <div> {(show?"":data.map((val,index)=>
                    {
                        return<tr><td>{val.name}</td><td>{val.email}</td><td>{val.worknumber}</td><td>{val.email}</td>
                        </tr>
                    })
                )}
                
                </div>
            }
          
        </div>
    )

}
export default ContactForm;