import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [showSocialMedia, setShowSocialMedia] = useState(false);
    

    return (
        <AppContext.Provider value={{ 
            showSocialMedia, 
            setShowSocialMedia }}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => {
    return useContext(AppContext);
}
export { AppProvider, AppContext };