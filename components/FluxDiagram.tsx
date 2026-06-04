"use client";

import React, { useCallback } from 'react';
import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const createLabel = (title: string, items?: string[]) => (
  <div className="flex flex-col items-center gap-1.5 w-full">
    <div className="font-semibold text-[13px] tracking-wide uppercase text-[#1A1A19]">
      {title}
    </div>
    {items && items.length > 0 && (
      <div className="text-[12px] opacity-80 text-center flex flex-col gap-0.5">
        {items.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
    )}
  </div>
);

const baseStyle = {
  background: '#FBFBFB',
  border: '1px solid rgba(26,26,25,0.2)',
  borderRadius: '8px',
  color: '#1A1A19',
  padding: '16px',
  width: 240,
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
};

const initialNodes: Node[] = [
  {
    id: 'n1',
    data: { label: createLabel('User App') },
    position: { x: 250, y: 50 },
    style: baseStyle,
  },
  {
    id: 'n2',
    data: { label: createLabel('Intent Layer', ['Create Intent', 'Sign Intent']) },
    position: { x: 250, y: 160 },
    style: baseStyle,
  },
  {
    id: 'n3',
    data: { label: createLabel('Escrow Layer', ['Order PDA', 'Vault PDA', 'Lock Funds']) },
    position: { x: 250, y: 290 },
    style: baseStyle,
  },
  {
    id: 'n4',
    data: { label: createLabel('Event Emission', ['IntentCreated Event']) },
    position: { x: 250, y: 440 },
    style: baseStyle,
  },
  {
    id: 'n5',
    data: { label: createLabel('Solver Network') },
    position: { x: 250, y: 570 },
    style: baseStyle,
  },
  {
    id: 'n6',
    data: { label: createLabel('Auction Layer', ['Bid Collection', 'Winner Selection']) },
    position: { x: 250, y: 680 },
    style: baseStyle,
  },
  {
    id: 'n7',
    data: { label: createLabel('Fulfillment Layer', ['Solver Pays User', 'On Destination Chain']) },
    position: { x: 250, y: 810 },
    style: baseStyle,
  },
  {
    id: 'n8',
    data: { label: createLabel('Settlement Proofs', ['Wormhole', 'Optimistic', 'ZK']) },
    position: { x: 250, y: 960 },
    style: baseStyle,
  },
  {
    id: 'n9',
    data: { label: createLabel('Escrow Settlement', ['Release Funds', 'To Winning Solver']) },
    position: { x: 250, y: 1110 },
    style: baseStyle,
  },
];

const initialEdges: Edge[] = [];
for (let i = 1; i <= 8; i++) {
  initialEdges.push({
    id: `e${i}-${i + 1}`,
    source: `n${i}`,
    target: `n${i + 1}`,
    animated: true,
    style: { stroke: '#1A1A19', strokeWidth: 1.5, opacity: 0.4 },
  });
}

export default function FluxDiagram() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div style={{ width: '100%', height: '600px', border: '1px solid rgba(26,26,25,0.1)', borderRadius: '12px', background: '#FBFBFB' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        minZoom={0.2}
        attributionPosition="bottom-right"
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#1A1A19" gap={24} size={1} />
      </ReactFlow>
    </div>
  );
}
