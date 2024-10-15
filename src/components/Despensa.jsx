import Item from "./Item"
import Codescan from "./Codescan"
import despensaicon from '../assets/Food-Pantry-icon.png'
import { useRef, useState, useEffect } from "react"
import searchIcon from '../assets/search.png'
import { addItem } from "../functions"

import { micro } from "../../lib/micro/src/components"
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Despensa = () => {

  const [despensa, setDespensa] = useState(localStorage.getItem("despensa") ?
    JSON.parse(localStorage.getItem("despensa")) : [])

  const searchRef = useRef();
  const inputRef = useRef();

  const addFromInput = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const item = {
      id: Date.now(),
      name: inputText,
      available: true,
    }
    addItem(item)
    inputRef.current.value = "";
  }

  const addItem = (newItem) => {

    setDespensa((prev) => {
      prev.map((item) => {
        if (item.name === newItem.name) {

          const index = prev.indexOf(item)

          prev.splice(index, 1)

        }
      });
      return [newItem, ...prev]
    })
  }

  const deleteItem = (id) => {
    setDespensa((prevItems) => {
      console.log(prevItems, "previtems")
      return prevItems.filter((item) => item.id !== id)
    })
  }

  const unavailable = (id) => {
    setDespensa((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, available: !item.available }
        }
        return item;
      })
    })
  }

  const search = () => {
    const name = searchRef.current.value.trim()
    let itemd
    let index

    setDespensa((prevItems) => {
      prevItems.map((item) => {
        if (item.name === name) {
          itemd = item
          index = prevItems.indexOf(item)
          if (item.id === itemd.id) {
            prevItems.splice(index, 1)
          }
        }
      });

      return [itemd, ...prevItems];
    })
  }

  useEffect(() => {
    localStorage.setItem("despensa", JSON.stringify(despensa))
    console.log(despensa);
  }, [despensa])

  return (
    <DespensaStyles>
      <micro.group $gap>
        <h4><img className="iso" src={despensaicon} /> <b>despensapp</b></h4>
      </micro.group>
      <Codescan addItem={addItem} />
      
      <micro.group $row $gap>
        <p>O puedes escribirlo</p>
        <input ref={inputRef} type="text" placeholder="nuevo item" />
        <micro.button onClick={addFromInput}>
          <FaPlus />
        </micro.button>
      </micro.group>
      <hr />
      <micro.group $row $gap>
        <input ref={searchRef} type="text" placeholder="buscar" />
        <micro.button onClick={search}>
          {/* <img src={searchIcon} className="w-8" /> */}
          <FaSearch />
        </micro.button>
      </micro.group>
      
      <div>
        {despensa.map((item, index) => (
          <Item 
            key={index} 
            name={item.name} 
            id={item.id} 
            available={item.available} 
            deleteItem={deleteItem} 
            unavailable={unavailable}
            info={item.info}
            />
        ))}
      </div>
    </DespensaStyles>
  )
}

const DespensaStyles = styled.div`
  border-radius: var(--normal);
  background-color: var(--secondary-50);
  padding: var(--normal);
  border: var(--border-width) solid var(--secondary);
  width: fit-content;
  margin: 0 auto;
  box-shadow: 0 0 2rem var(--secondary-200);
  .group {
    margin: var(--normal) 0;
  }
  input {
    &::placeholder {
      text-transform: capitalize;
    }
  }
`

export default Despensa