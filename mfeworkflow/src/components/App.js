import React from "react";
//import ReactDOM from 'react-dom';
import DemoFlowchart from "./components/Flows/antFlowChart/antDesignFlow";
import "antd/dist/antd.css";
import "@ant-design/flowchart/dist/index.css";
import "./index.css";

export default function App() {
  return (
    <div>
      <DemoFlowchart></DemoFlowchart>
    </div>
  );
}
