import React from 'react'
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

const nodes = [
    {
      id: '1',
      position: { x: 0, y: 0 },
      data: { label: 'Hello' },
      type: 'input',
    },
    {
      id: '2',
      position: { x: 100, y: 100 },
      data: { label: 'World' },
    },
  ];
const FlowPage = () => {
  return (
    <div className='h-screen'>
      <ReactFlow nodes={nodes}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default FlowPage;