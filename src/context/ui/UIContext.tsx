import { createContext } from 'react';

export interface contextProps {
    sideBarOpen: boolean;
    isAdding: boolean;
    isDragging: boolean;
    laRonda:number;
    elPick:number;
    //Methods
    openSideMenu: () => void;
    closeSideMenu: () => void;
    setIsAddingEntry: (isAdding: boolean) => void;
    startDragging: () => void;
    stopDragging: () => void;
    setRonda:(laRonda:number)=>void;
    setPick:(elPick:number)=>void;
}

export const UIContext = createContext({} as contextProps);