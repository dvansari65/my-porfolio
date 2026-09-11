"use client";

import React from 'react';
import { ReactFlow, Background, Position, type Edge, type Node } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const createLabel = (title: string, items?: string[]) => (
  <div className="flex flex-col items-center gap-1.5 w-full">
    <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#161614]">
      {title}
    </div>
    {items && items.length > 0 && (
      <div className="flex flex-col gap-0.5 text-center text-[12px] text-[#4a4a46]">
        {items.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
    )}
  </div>
);

const baseStyle = {
  background: '#fcfcfa',
  border: '1px solid rgba(22,22,20,0.12)',
  borderRadius: '12px',
  color: '#161614',
  padding: '14px 16px',
  width: 240,
  boxShadow: '0 1px 2px rgba(22,22,20,0.04), 0 8px 24px -12px rgba(22,22,20,0.12)',
};

const steps: { title: string; items?: string[] }[] = [
  { title: 'User App' },
  { title: 'Intent Layer', items: ['Create Intent', 'Sign Intent'] },
  { title: 'Escrow Layer', items: ['Order PDA', 'Vault PDA', 'Lock Funds'] },
  { title: 'Event Emission', items: ['IntentCreated Event'] },
  { title: 'Solver Network' },
  { title: 'Auction Layer', items: ['Bid Collection', 'Winner Selection'] },
  { title: 'Fulfillment Layer', items: ['Solver Pays User', 'On Destination Chain'] },
  { title: 'Settlement Proofs', items: ['Wormhole', 'Optimistic', 'ZK'] },
  { title: 'Escrow Settlement', items: ['Release Funds', 'To Winning Solver'] },
];

// Serpentine 3x3 grid: rows alternate direction so consecutive steps stay
// adjacent and the whole flow fits a readable size inside a 680px column.
const COLS = 3;
const STEP_X = 260;
const STEP_Y = 150;

const initialNodes: Node[] = steps.map((step, i) => {
  const row = Math.floor(i / COLS);
  const colInRow = i % COLS;
  const col = row % 2 === 0 ? colInRow : COLS - 1 - colInRow;
  return {
    id: `n${i + 1}`,
    data: { label: createLabel(step.title, step.items) },
    position: { x: col * STEP_X, y: row * STEP_Y },
    style: baseStyle,
    sourcePosition: row % 2 === 0 ? (colInRow === COLS - 1 ? Position.Bottom : Position.Right) : (colInRow === COLS - 1 ? Position.Bottom : Position.Left),
    targetPosition: row % 2 === 0 ? (colInRow === 0 ? Position.Top : Position.Left) : (colInRow === 0 ? Position.Top : Position.Right),
  };
});

const initialEdges: Edge[] = [];
for (let i = 1; i <= 8; i++) {
  initialEdges.push({
    id: `e${i}-${i + 1}`,
    source: `n${i}`,
    target: `n${i + 1}`,
    animated: true,
    type: 'smoothstep',
    style: { stroke: '#161614', strokeWidth: 1.25, opacity: 0.35 },
  });
}

export default function FluxDiagram() {
  return (
    <div className="h-[440px] w-full overflow-hidden rounded-xl border border-line bg-paper-2/60">
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        fitView
        fitViewOptions={{ padding: 0.08 }}
        minZoom={0.2}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnScroll={false}
        zoomOnDoubleClick={false}
        panOnScroll={false}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#161614" gap={24} size={1} style={{ opacity: 0.35 }} />
      </ReactFlow>
    </div>
  );
}
