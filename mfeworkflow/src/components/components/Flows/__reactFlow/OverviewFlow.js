import React, { useCallback, useState, useRef } from "react";
import ReactFlow from "react-flow-renderer";
import {List} from "antd";
import CardFlow from "../../CardFlow/CardFlow";
import {Table, Slider,Input, Button,Card, Tooltip,Col, Tabs, Tag, Space, Popover,notification, Layout, Menu, Breadcrumb, Upload, message, Checkbox} from 'antd';

class ReactFlowComponent extends React.Component {

  constructor(props) {
    super(props);

    const els = [{
      id: "1",
      type: "input", // input node
      data: { label: "Input Node" },
      position: { x: 100, y: 0 }
    }]
    this.yPos = React.createRef();


    this.state = {
      els,

    };



  }


  addNode =  () => {
    this.yPos.current += 50;
    var { els } = this.state;

    els.push({
      id: Math.random(),
      position: { x: 100, y: this.yPos.current },
      data: { label: "yo" }
    })

    console.log('clicking')

    this.setState({ els });
  } ;

  addEdge =({ source, target }) => {

    var { els } = this.state;

    els.push({
      id: Math.random(),
      source,
      target
    })

    this.setState({ els });

  };


  render() {
    return (
        <>
          <div style={{ height: 300 }}>
            <ReactFlow elements={this.els}  onConnect={this.addEdge} />

          </div>
          <Button onClick={this.addNode}>Add</Button>
        </>

    );
  }
}


export default () => <ReactFlowComponent />;