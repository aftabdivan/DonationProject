import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Tabs,Table } from "antd";
import Data from "./Data";
import { useState } from "react";
import { useEffect } from "react";

const { TabPane } = Tabs;


const App3 = () => {

  const [dataSource,setDataSource]=useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response=>response.json())
    .then(data=>{
      setDataSource(data);
    }).catch(err=>{
      console.log(err)
    })
  })
  // const dataSource = [
  //   {
  //     key: '1',
  //     name: 'Mike',
  //     age: 32,
  //     address: '10 Downing Street',
  //   },
  //   {
  //     key: '2',
  //     name: 'John',
  //     age: 42,
  //     address: '10 Downing Street',
  //   },
  // ];
  
  // For Tab 2

  // const dataSource2 = [
  //   {
  //     key: '1',
  //     name: 'Joe',
  //     age: 42,
  //     address: '30 Downing Street',
  //   },
  //   {
  //     key: '2',
  //     name: 'Levis',
  //     age: 21,
  //     address: '12 Downing Street',
  //   },
  // ];

// For Tab 3

// const dataSource3 = [
//   {
//     key: '1',
//     name: 'Dalvik',
//     age: 23,
//     address: '31 Downing Street',
//   },
//   {
//     key: '2',
//     name: 'Aiman',
//     age: 25,
//     address: '11 Downing Street',
//   },
// ];


  const columns = [
    {
      key: '1',      
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: '2',
      title: 'User ID',
      dataIndex: 'userId',
      sorter:(a,b)=>a.age-b.age
    },
    {
      key: '3',
      title: 'Status',
      dataIndex: 'completed',
      render:(completed)=>{
        return <p>{completed?'completed':'in complete'}</p>
      }
    },
    {
      key:'4',
      title:'Desc',
      dataIndex:'title',
      // render:sites=>{
      //   return <a>{"www.google.com"}</a>
      // }
    },
  ];
  
  

  return (
    <>
      <div className="main-div">
        <Tabs >
            <TabPane tab="Tab 1" key="1"><h1>Tab 1</h1>
            <Table dataSource={dataSource} columns={columns} />
            </TabPane>
            <TabPane tab="Tab 2" key="2"><h1>Tab 2</h1>
            <Table dataSource={dataSource} columns={columns} />
            </TabPane>
            <TabPane tab="Tab 3" key="3"><h1>Tab 3</h1>
            <Table dataSource={dataSource} columns={columns} />;
            </TabPane>          
        </Tabs>
        
      </div>
    </>
  );
};

export default App3;
