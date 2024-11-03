'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the context
interface ElementsContextType {
  elements: React.ReactNode[];
  addElement: (newElement: React.ReactNode) => void;
}

// Create context with a default value of undefined
const ElementsContext = createContext<ElementsContextType | undefined>(undefined);

export const ElementsProvider = ({ children }: { children: ReactNode }) => {
  const [elements, setElements] = useState<React.ReactNode[]>([]);

  const addElement = (newElement: React.ReactNode) => {
    setElements(prev => [...prev, newElement]);
  };

  return (
    <ElementsContext.Provider value={{ elements, addElement }}>
      {children}
    </ElementsContext.Provider>
  );
};

export const useElements = () => {
  const context = useContext(ElementsContext);
  
  // Throw an error if used outside of the provider
  if (!context) {
    throw new Error('useElements must be used within an ElementsProvider');
  }

  return context;
};

