import React, { useState, useEffect } from "react";
import "./styles.css";
import ReactFlow, {
  removeElements,
  updateEdge,
  addEdge,
  Background,
  MiniMap,
  Controls, ReactFlowProvider
} from "react-flow-renderer";
import map from './map.png';
import check from './check.png';
import engine from './engine.png';
import mail from './mail.png';
import uparrow from './up_arrow.png';
import downarrow from './down_arrow.png';
import del from './delete.png';

import { nodeTypes } from "./Nodes";
import {Layout} from "antd";

export default function ReactFlowRenderer  ()  {
  const [elements, setElements] = useState([]);

  const [name, setName] = useState("");
  const [activeNode, setActiveNode] = useState();
  const [newName, setNewName] = useState("");
  const [instance, setInstance] = useState();

  useEffect(() => {
    if (activeNode) setNewName(activeNode.data.label);
  }, [activeNode]);

  const elementRemoveHandler = (elementTobeRemoved) => {
    setElements((prev) => removeElements(elementTobeRemoved, prev));
  };

  const connectHandler = (params) => {
    setElements((prev) => addEdge(params, prev));
  };

  const addRectangleHandler = () => {
    const newNode = {
      id: `${Date.now()}`,
      data: { label: `${name}` , background:"#62b7ed", icon:map},
      type: "rectangle",
      position: {
        x: 0,
        y: 0
      }
    };
    newNode.data = { ...newNode.data, id: `${newNode.id}` };

    setElements((prev) => {
      return [...prev, newNode];
    });
    setName("");
  };

  const addRectangle2Handler = () => {
    const newNode = {
      id: `${Date.now()}`,
      data: { label: `${name}` , background:"#7ccf60" , icon:check},
      type: "rectangle",
      position: {
        x: 0,
        y: 0
      }
    };
    newNode.data = { ...newNode.data, id: `${newNode.id}` };

    setElements((prev) => {
      return [...prev, newNode];
    });
    setName("");
  };

  const addRectangle7Handler = () => {
    const newNode = {
      id: `${Date.now()}`,
      data: { label: `${name}` , background:"#5fcc64" , icon:engine},
      type: "rectangle",
      position: {
        x: 0,
        y: 0
      }
    };
    newNode.data = { ...newNode.data, id: `${newNode.id}` };

    setElements((prev) => {
      return [...prev, newNode];
    });
    setName("");
  };

  const addRectangle3Handler = () => {
    const newNode = {
      id: `${Date.now()}`,
      data: { label: `${name}` , background:"#54c473" , icon:mail},
      type: "rectangle",
      position: {
        x: 0,
        y: 0
      }
    };
    newNode.data = { ...newNode.data, id: `${newNode.id}` };

    setElements((prev) => {
      return [...prev, newNode];
    });
    setName("");
  };

  

  const addRectangle4Handler = () => {
    const newNode = {
      id: `${Date.now()}`,
      data: { label: `${name}` , background:"#f87d76" , icon:uparrow},
      type: "rectangle",
      position: {
        x: 0,
        y: 0
      }
    };
    newNode.data = { ...newNode.data, id: `${newNode.id}` };

    setElements((prev) => {
      return [...prev, newNode];
    });
    setName("");
  };

  const addRectangle5Handler = () => {
    const newNode = {
      id: `${Date.now()}`,
      data: { label: `${name}` , background:"#eb687f", icon:downarrow},
      type: "rectangle",
      position: {
        x: 0,
        y: 0
      }
    };
    newNode.data = { ...newNode.data, id: `${newNode.id}` };

    setElements((prev) => {
      return [...prev, newNode];
    });
    setName("");
  };

  const addRectangle6Handler = () => {
    const newNode = {
      id: `${Date.now()}`,
      data: { label: `${name}` , background:"#d95879" , icon:del },
      type: "rectangle",
      position: {
        x: 0,
        y: 0
      }
    };
    newNode.data = { ...newNode.data, id: `${newNode.id}` };

    setElements((prev) => {
      return [...prev, newNode];
    });
    setName("");
  };
  

  const addCircleHandler = () => {
    const newNode = {
      id: `${Date.now()}`,
      data: { label: `${name}` },
      type: "circle",
      position: {
        x: 0,
        y: 0
      }
    };
    newNode.data = { ...newNode.data, id: `${newNode.id}` };

    setElements((prev) => {
      return [...prev, newNode];
    });
    setName("");
  };

  const addTriangleHandler = () => {
    const newNode = {
      id: `${Date.now()}`,
      data: { label: `${name}` },
      type: "triangle",
      position: {
        x: 0,
        y: 0
      }
    };
    newNode.data = { ...newNode.data, id: `${newNode.id}` };

    setElements((prev) => {
      return [...prev, newNode];
    });
    setName("");
  };

  const addTextHandler = () => {
    const newNode = {
      id: `${Date.now()}`,
      data: { label: `${name}` },
      type: "text",
      position: {
        x: 0,
        y: 0
      }
    };
    newNode.data = { ...newNode.data, id: `${newNode.id}` };

    setElements((prev) => {
      return [...prev, newNode];
    });
    setName("");
  };

  const edgeUpdateHandler = (oldEdge, newConnection) =>
    setElements((els) => updateEdge(oldEdge, newConnection, els));

  const clickHandler = (e) => {
    var htmlString = e.target.outerHTML.toString();
    var index = htmlString.indexOf(` id="`);
    index += 5;
    const currentId = htmlString.substr(index, 13);

    elements.forEach((_current) => {
      if (_current.id === currentId) {
        setActiveNode(_current);
      }
    });
    // setNewName(activeNode.data.label)
  };

  const updateNodeHandler = () => {
    if (!activeNode) return;
    setElements(
      elements.map((_current) => {
        if (_current.id === activeNode.id) {
          return {
            ..._current,
            data: { label: newName, id: _current.data.id }
          };
        }

        return _current;
      })
    );
  };

  const onLoad = (reactFlowInstance) => {
    setInstance(reactFlowInstance);
    reactFlowInstance.fitView();
  };

  const saveChangesHandler = () => {
    console.log("current state", instance.getElements());
  };

  return (

     <Layout>

      <div style={{ height: 300 ,  border: "1px solid black",
       }}>
         <ReactFlowProvider>
        <ReactFlow
          elements={elements}
          onElementsRemove={elementRemoveHandler}
          onConnect={connectHandler}
          deleteKeyCode={8 || 46}
          onEdgeUpdate={edgeUpdateHandler}
          nodeTypes={nodeTypes}
          snapToGrid={true}
          snapGrid={[16, 16]}
          connectionLineStyle={{ stroke: "black", strokeWidth: 2 }}
          onDoubleClick={clickHandler}
          onLoad={onLoad}
        >
        <Background variant="dots" gap={15} size={2} color="#ffffff" />

        <MiniMap
          nodeColor={(node) => {
            switch (node.type) {
              case "rectangle":
                return "red";
              case "circle":
                return "#00ff00";
              case "triangle":
                return "rgb(0,0,255)";
              default:
                return "#eee";
            }
          }}
        />

        <Controls />
      </ReactFlow>
      </ReactFlowProvider>
      </div>
      <div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Node name"
        />

        <button type="button" onClick={addRectangleHandler}>
          Create Step
        </button>
        <button type="button" onClick={addRectangle2Handler}>
          Create Decision
        </button>
        <button type="button" onClick={addRectangle7Handler}>
          Create Operator
        </button>
        <button type="button" onClick={addRectangle3Handler}>
          Create Message
        </button>
        <button type="button" onClick={addRectangle4Handler}>
          Create Load
        </button>
        <button type="button" onClick={addRectangle5Handler}>
          Create Save
        </button>
        <button type="button" onClick={addRectangle6Handler}>
          Create Delete
        </button>

        <button type="button" onClick={addCircleHandler}>
          Create Circle
        </button>

        <button type="button" onClick={addTriangleHandler}>
          Create Triangle
        </button>


      </div>

      <div>
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          type="text"
        />

        <button type="button" onClick={updateNodeHandler}>
          Update
        </button>
      </div>

      <button type="button" onClick={saveChangesHandler}>
        Save changes
      </button>
    </Layout>
  );
};
