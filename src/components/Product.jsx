import { useState, useEffect } from "react";
import { useFetch } from "../useFetch"
import { FloatingCard } from "./FloatingCard"
import { micro } from "../../lib/micro/src/components";
import { IoMdClose } from "react-icons/io";

const Product = ({ code, addItem }) => {
  const [showInfo, setShowInfo] = useState();
  const handleShowInfo = (info) => {
    if (showInfo) setShowInfo(null);
    if (!showInfo) setShowInfo(info);
  }
  const { data, loading } = useFetch(`https://world.openfoodfacts.org/api/v2/product/${code}.json`)
  //console.log("producto", data, "loading", loading, "code", code)
  let item
  if (data !== null) {
    item = {
      id: code,
      name: data.product.product_name_es ? data.product.product_name_es : data.product.product_name_en,
      available: true,
      info: {
        marca: data.product.brands,
        description: data.product.categories_hierarchy[0],
        nutriscore: data.product.nutriscore_grade,
        fat: data.product.nutriments.fat,
        carbohydrates: data.product.nutriments.carbohydrates,
        protein: data.product.nutriments.proteins,
        fiber: data.product.nutriments.fiber,
        ingredients: data.product.ingredients_hierarchy,
        allergens: data.product.allergens
      }
    }

  }
  if (loading) <p>loading</p>

  useEffect(() => {
    if (!loading) {
      setShowInfo(item.info)
    }
  }, [loading])

  return (
    <>
      {!loading && showInfo && (
        <FloatingCard>
          <micro.button className="close" onClick={() => setShowInfo(null)}><IoMdClose /></micro.button>
          {Object.entries(showInfo).map(([key, value], idx) => {
            if (key === "marca") {
              return (<h3 key={idx}><small>{value}</small> {item.name}</h3>)
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
          <micro.button key="add" onClick={() => { addItem(item) }}>Agregar</micro.button>
        </FloatingCard>
      )}
      
    </>
  );
}

export default Product