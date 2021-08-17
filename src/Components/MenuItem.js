import React from "react"
import Products from "./Products"

function MenuItem(props){
    return(
        <div>
            <h2>{props.category}</h2>
            <div>
                <Products 
                    items = {props.items}
                    isFilterByStockActive = {props.isFilterByStockActive}
                />
            </div>
        </div>
    )
}

export default MenuItem