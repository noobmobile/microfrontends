import React, {useCallback, useState, useRef, useEffect} from "react";
import ReactFlow, {Background, Controls, MiniMap, ReactFlowProvider} from "react-flow-renderer";
import ReactFlowRenderer from '../react-flow-renderer'
const initialElements = [
  {
    id: "1",
    type: "input", // input node
    data: { label: "Input Node" },
    position: { x: 100, y: 0 }
  }

];


export default function Flow(props){
  const [els, setEls] = useState(initialElements);
  const yPos = useRef(0);
  const [instance, setInstance] = useState();

  useEffect(() => {
    setEls(els)
    // setReactFlowProps( prevState  =>    ({  ...prevState,   reactFlowProps }));
  }, [])

  const addNode =  () => {
    yPos.current += 50;
    setEls((els) => {
      console.log(els);
      return [
        ...els,
        {
          id: Math.random(),
          position: { x: 100, y: yPos.current },
          data: { label: "yo" }
        }
      ];
    });
  } ;

  const addEdge =({ source, target }) => {
    setEls((els) => {
      console.log(source, target);
      return [
        ...els,
        {
          id: Math.random(),
          source,
          target
        }
      ];
    });
  };

  const printNodes = () => {
    console.log(els);
  }

  const onLoad = (reactFlowInstance) => {
    setInstance(reactFlowInstance);
    reactFlowInstance.fitView();
  };

  var BasicFlow = () => <ReactFlow elements={els}  onConnect={addEdge} />

  return (
      <div className="Flow" onClick={printNodes}>


        <ReactFlowRenderer/>


        <button onClick={addNode}>Add {props.buttonName}</button>
      </div>

  );
}
