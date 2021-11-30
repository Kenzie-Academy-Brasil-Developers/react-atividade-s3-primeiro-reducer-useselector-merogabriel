import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFruit } from "../store/modules/fruits/actions";

function FruitsPage() {
  const [fruit, setFruit] = useState("");
  const dispatch = useDispatch();
  const fruits = useSelector((state) => state.fruits);

  const handleAddFruit = () => dispatch(addFruit(fruit));

  return (
    <div>
      <input onChange={(e) => setFruit(e.target.value)} />
      <button onClick={handleAddFruit}>Adicionar fruta</button>

      {fruits.map((fruit) => (
        <p key={fruit}> {fruit} </p>
      ))}
    </div>
  );
}

export default FruitsPage;
