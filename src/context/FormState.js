import React, { createContext, useContext, useState } from "react";

export const FormStateContext = createContext();

export function FormStateProvider({ children }) {
  const value = useState({});
  return (
    <FormStateContext.Provider value={value}>
      {children}
    </FormStateContext.Provider>
  );
}

export function useFormState() {
  const context = useContext(FormStateContext);
  if (!context) {
    throw new Error("useFormState must be used within the FormStateProvider");
  }
  return context;
}
