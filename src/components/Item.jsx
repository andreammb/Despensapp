import { useState } from "react";
import { micro } from "../../lib/micro/src/components";
import { FaCheck } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";
import { FloatingCard } from "./FloatingCard";

const Item = ({ name, id, available, deleteItem, unavailable, info }) => {
  const [showInfo, setShowInfo] = useState();
  const handleShowInfo = (info) => {
    if (showInfo) setShowInfo(null);
    if (!showInfo) setShowInfo(info);
  } 
  return (
    <>
    <ItemCard>
      <micro.group $row $gap $fill $xcenter onClick={() => { unavailable(id) }} className={`${!available ? "line-through" : ""}`}>
        {/* <img src={available ? check : not} alt='disponible' className='w-7' /> */}
        <FaCheck />
        {name}
      </micro.group>
      {info && (<micro.button onClick={() => handleShowInfo(info)}>i</micro.button>)}
      <micro.button onClick={() => { deleteItem(id) }} className="remove">
        <FaTrashAlt />
      </micro.button>
    </ItemCard>
    {showInfo && (
      <FloatingCard>
        <micro.button className="close" onClick={() => setShowInfo(null)}><IoMdClose /></micro.button>
        {Object.entries(showInfo).map(([key, value], idx) => {
          if (key === "marca") {
            return (<h3 key={idx}><small>{value}</small> {name}</h3>)
          }
          if (key !== "ingredients" && key !== "marca" && key !== "description" && value) {
            return (
              <dl key={idx}>
                <dt>{key}</dt>
                <dd>{value}</dd>
              </dl>
            )
          }
          if (key === "ingredients") {
            return (
              <micro.group as="details" key={idx}>
                <summary><p>Ingredients</p></summary>
                <ul>
                  {value.map(i => <li><b>{i.replace("en:","").replace("es:","").replaceAll("-", " ")}</b></li>)}
                </ul>
              </micro.group>
            )
          }
        })}
      </FloatingCard>
    )}
    </>
  )
}

const ItemCard = styled.div`
  display: flex;
  flex-direction: row;
  margin: var(--small) 0;
  background-color: var(--secondary-50); 
  padding: var(--xxxsmall);
  border-radius: var(--normal);
  border: 0.2rem solid var(--secondary);
  .remove {
    --button-background: white;
    --button-foreground: #e27474;
    border-color: var(--primary-200);
  }
`;

export default Item