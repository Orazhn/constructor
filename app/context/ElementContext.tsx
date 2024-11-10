'use client'
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import components from '@/components/webcomponents/ComponentsList';
import DbType from '../types/dbType';

interface ElementsContextType {
  elements: ReactNode[];
  addElement: (element: ReactNode, name: string) => void,
  setElements: React.Dispatch<React.SetStateAction<ReactNode[]>>,
  loading: boolean,
  dbBgColor: string,
}

function getShadcnComponent(name: string) { 
  return Object.entries(components).map(entry => entry[0] == name && entry[1])
}

const ElementsContext = createContext<ElementsContextType | undefined>(undefined);

export const ElementsProvider = ({ children }: { children: ReactNode }) => {
  const [elements, setElements] = useState<ReactNode[]>([])
  const [dbBgColor, setDbBgColor] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)

  
  useEffect(() => {
    const fetchElements = async () => {
      try {
        const response = await fetch('/api/dbComponents', { method: 'GET' });  
        if (!response.ok) {
          throw new Error(`Error fetching elements: ${response.statusText}`);
        }
        const data: DbType = await response.json();
        console.log(data)
        const {dbelements, bgColor} = data
        
        console.log(data)
        if (data && Array.isArray(dbelements)) {
          console.log(elements)
          setElements(dbelements.map((name: string) => getShadcnComponent(name)));
          setLoading(false)
          setDbBgColor(bgColor)
        
        } else {
          setLoading(false)
          console.warn("Fetched data is null or not an array");
        }
      } catch (error) {
        console.error("Failed to fetch elements:", error);
        setLoading(false)

      }
    };
    fetchElements();
  }, []);

  const addElement = ( element: ReactNode, name: string) => {
    const data:DbType = JSON.parse(localStorage.getItem('elements') || "[]");
    console.log(data)
    data.dbelements.push(name)
    console.log(data)
    console.log(data.dbelements)
    console.log(data)
    localStorage.setItem('elements', JSON.stringify(data))

    setElements(prev => [...prev, element])
  };

  return (
    <ElementsContext.Provider value={{ elements, addElement, setElements, loading, dbBgColor }}>
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

