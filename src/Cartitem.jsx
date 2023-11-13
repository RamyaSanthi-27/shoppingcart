import React from 'react'
import Cart from './Cart'

const Cartitems = ({total,cart,handleRemoveItem }) => {
  return (
    <div
    className="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabIndex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="staticBackdropLabel">
            Added Cart Items{cart.length}
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          > </button>
          
        </div>
        {
            cart.length > 0 ? <div className="modal-body">
                <ol className="list-group list-group-numbered">
            {
              cart.map((item,index)=>{
                 return <Cart key={index} item={item} handleRemoveItem={handleRemoveItem}/>
                 
              })
            }</ol>
            </div> : <h3 className="text-center">No items in cart</h3>
          }
           
        <div className="modal-footer"> <h4>Total :{total} &#36; </h4>  </div>
      </div>
    </div>
  </div>
  )
}

export default Cartitems;