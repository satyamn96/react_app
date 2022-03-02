import React,{forwardRef} from 'react'

function ForwardRef(props , newRef) {  //newRef or Ref or any variable name can use
  return (
    <div className="app">
        <input type="text" ref={newRef} />
    </div>
  )
}
export default forwardRef(ForwardRef);