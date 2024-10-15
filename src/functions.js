import { useRef, useState, useEffect } from "react"



export function addItem(newItem){
  
    setDespensa((prev) => {
        prev.map((item) => {
            if (item.name === inputText) {
              
                const index = prev.indexOf(item)
             
                    prev.splice(index, 1)
             
            }
        });
        return[newItem, ...prev]})
       
}


