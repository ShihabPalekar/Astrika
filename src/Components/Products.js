import React from "react"

function Products(props){
    return(
        <div>
            {props.items.map(product =>
                <div className={"items"} key={product.name}>
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}</span>
                </div>
            )}
        </div>
    )
}

export default Products