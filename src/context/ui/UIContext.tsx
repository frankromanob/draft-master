import { createContext } from 'react';

export interface contextProps {
    sideBarOpen: boolean;
    isAdding: boolean;
    isDragging: boolean;
    laRonda:number;
    //Methods
    openSideMenu: () => void;
    closeSideMenu: () => void;
    setIsAddingEntry: (isAdding: boolean) => void;
    startDragging: () => void;
    stopDragging: () => void;
    setRonda:(laRonda:number)=>void;
}

export const UIContext = createContext({} as contextProps);