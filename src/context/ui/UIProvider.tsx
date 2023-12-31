import { PropsWithChildren, useReducer } from 'react';
import { uiReducer, UIContext } from '.';

export interface UIState {
   sideBarOpen: boolean,
   isAdding: boolean,
   isDragging:boolean,
   laRonda:number,
   elPick: number
}

const UI_INITIAL_STATE: UIState = {
   sideBarOpen: false,
   isAdding:false,
   isDragging:false,
   laRonda:0,
   elPick:1,
}

export const UIProvider = ({ children }: PropsWithChildren) => {

   const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

   const openSideMenu = () => {
      dispatch({ type: 'UI - Open Sidebar' })
   }

   const closeSideMenu = () => {
      dispatch({ type: 'UI - Close Sidebar' })
   }

   const setIsAddingEntry = (isAdding:boolean)=>{
      dispatch ({type:'UI - AddingEntry',payload:isAdding})
   }

   const startDragging =() =>{
      dispatch({type: 'UI - StartDragging'})
   }

   const stopDragging =() =>{
      dispatch({type: 'UI - StopDragging'})
   }

   const setRonda =(laRonda:number) =>{
      dispatch({type: 'UI - SetRonda',payload:laRonda})
   }

   const setPick =(elPick:number) =>{
      dispatch({type: 'UI - SetPick',payload:elPick})
   }

   return (
      <UIContext.Provider value={{
         ...state,
         openSideMenu,
         closeSideMenu,
         setIsAddingEntry,
         startDragging,
         stopDragging,
         setRonda,
         setPick,
      }}>
         {children}
      </UIContext.Provider>
   )
}
