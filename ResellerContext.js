import React from "react";
export const ResellerProvider=React.createContext();
export const ResellerContext = (props) => {
   const [contactInfo, setContactInfo] = React.useState({});
  return (
    <ResellerProvider.Provider value={[contactInfo, setContactInfo]}>{props.children}</ResellerProvider.Provider>
  );
};
