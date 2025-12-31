import React from 'react';

// A lightweight Markdown parser for our specific needs
// Supports: **bold**, *italic*, - list, \n newlines
export const RichText = ({ text }: { text: string }) => {
  const lines = text.split('\n');
  
  return (
    <div className="text-left space-y-1">
      {lines.map((line, i) => {
        // Check for bullet points
        if (line.trim().startsWith('- ')) {
          return (
            <div key={i} className="flex items-start gap-2 ml-1">
              <span className="text-current opacity-60 mt-1.5">•</span>
              <p className="flex-1" dangerouslySetInnerHTML={{ __html: parseInline(line.replace('- ', '')) }} />
            </div>
          );
        }
        // Standard paragraph
        return <p key={i} dangerouslySetInnerHTML={{ __html: parseInline(line) }} />;
      })}
    </div>
  );
};

// Helper to parse bold/italic regex
const parseInline = (text: string) => {
  let parsed = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // **bold**
    .replace(/\*(.*?)\*/g, '<em>$1</em>');           // *italic*
  return parsed;
};

// THEME ENGINE
// Returns color classes based on the Node ID prefix or Type
export const getTheme = (nodeId: string, nodeType?: string) => {
  // 1. Status Overrides
  if (nodeType === 'rejection') return { bg: 'bg-red-50', border: 'border-red-100', text: 'text-red-800', accent: 'bg-red-500', icon: '⚠️' };
  if (nodeType === 'ending') return { bg: 'bg-emerald-50', border: 'border-emerald-100', text: 'text-emerald-800', accent: 'bg-emerald-100', icon: '🎉' };

  // 2. Topic Themes
  if (nodeId.startsWith('dana')) return { bg: 'bg-amber-50', border: 'border-amber-100', text: 'text-slate-800', accent: 'bg-amber-500', icon: '💰' };
  if (nodeId.startsWith('sel_papua') || nodeId.startsWith('jemput_papua')) return { bg: 'bg-green-50', border: 'border-green-100', text: 'text-slate-800', accent: 'bg-black-100', icon: '🌿' };
  if (nodeId.startsWith('sel_repat') || nodeId.startsWith('repat')) return { bg: 'bg-indigo-50', border: 'border-indigo-100', text: 'text-slate-800', accent: 'bg-indigo-500', icon: '✈️' };
  if (nodeId.startsWith('sel_3t') || nodeId.startsWith('3t')) return { bg: 'bg-teal-50', border: 'border-teal-100', text: 'text-slate-800', accent: 'bg-teal-500', icon: '🏝️' };

  // 3. Default (Neutral Blue)
  return { bg: 'bg-white', border: 'border-gray-100', text: 'text-grey-700', accent: 'bg-black backdrop-blur-lg', icon: '🤖' };
};