import React, { createContext, useContext, useState } from "react";

const TextContext = createContext();

export default function TextProvider( {children} ) {
    
    const [text, setText] = useState('');

    return (
        <TextContext.Provider value={{text, setText}}>
            {children}
        </TextContext.Provider>
    )
}

export function useText() {
    const context = useContext(TextContext);
    const {text, setText} = context;
    return {text, setText};
}