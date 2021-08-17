import React, {useState} from "react"
import data from "../data"
import MenuItem from "./MenuItem"

function Homepage(){
    const [dataToDisplay, setDataToDisplay] = useState(data)
    const [isFilterByStockActive, setIsFilterByStockActive] = useState(false)

    const filterByStock = () => {
        setIsFilterByStockActive(!isFilterByStockActive)
    }

    const filterByCategory = (e) => {
        setDataToDisplay(
            e.target.value !== "" ? data.filter(i => i.category === e.target.value) : data 
        )
    }

    return(
        <div>
            <h1>Welcome to Foodie Club</h1>
            <div>
                <label>Category:</label>
                <select onChange={filterByCategory}>
                    <option value="">All categories</option>
                    <option value="veg-sandwich">Veg Sandwich</option>
                    <option value="non-veg-sandwich">Non-veg Sandwich</option>
                    <option value="milk-shake">Milk Shakes</option>
                </select>          
            </div>
            <div>
                <input type="checkbox" onClick={filterByStock}/>
                <label>Show only items in stock</label>
            </div>
            <div>
                {dataToDisplay.map(i =>
                    <MenuItem
                        key = {i.category} 
                        category = {i.category}
                        items = {
                            isFilterByStockActive ? i.items.filter(i => i.inStock === true) : 
                            i.items
                        }
                        isFilterByStockActive = {isFilterByStockActive}
                    />    
                )}
            </div>
        </div>
    )
}

export default Homepage