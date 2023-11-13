import "bootstrap";


function Cart({ item ,handleRemoveItem}) {
  return (
    
    <>
      
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
          <div className="fw-bold">{item.title}</div>
          <span>&#36;{item.newprice}</span> </div>
          <button  onClick={()=>handleRemoveItem(item)} className="btn btn-sm btn-danger">X</button>
        </li>
       
       
      
    </>
  );
}

export default Cart;
