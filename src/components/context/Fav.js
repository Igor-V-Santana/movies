import React, { createContext, useContext, useState } from "react";

const FavContext = createContext();

export default function FavProvider( {children} ) {
    
    const [items, setItems] = useState([]);

    return (
        <FavContext.Provider value={{items, setItems}}>
            {children}
        </FavContext.Provider>
    )
}

export function useFav() {
    const context = useContext(FavContext);
    const {items, setItems} = context;
    return {items, setItems};
}