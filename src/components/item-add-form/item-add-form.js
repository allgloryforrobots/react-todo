import React from "react";


const AddItemButton = ({onClick}) => {
    return <button type="button"
                   onClick={onClick}
                   className="btn btn-primary mt-4">Add ToDo</button>
}

export default AddItemButton