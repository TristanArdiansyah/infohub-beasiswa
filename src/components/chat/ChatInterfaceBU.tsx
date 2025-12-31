'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { BU_CHAT_NODES } from '@/data/bu';
import { ChatOption } from '@/types/chat';
import { RichText, getTheme } from './utils'; 
import { motion, AnimatePresence } from 'framer-motion';
import { Undo, Send, Search, Sparkles, CornerDownRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

// NEW: Import the Hook and Type
import { useKnowledgeSearch } from '@/hooks/useKnowledgeSearchBU';
import { SearchResult } from '@/data/bu/searchIndex';

type Message = {
  id: string;
  nodeId: string;
  text: string;
  sender: 'bot' | 'user';
  requirements?: string[];
  type?: string; 
};

export default function ChatInterfaceBU() {
  const [currentNodeId, setCurrentNodeId] = useState<string>('bu_start');
  const [history, setHistory] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  // NEW: Use the Custom Hook
  const { query, setQuery, results: globalResults } = useKnowledgeSearch();
  
  const bottomRef = useRef<HTMLDivElement>(null);
  const hasInitialized = useRef(false); 

  // Initialize
  useEffect(() => {
    if (!hasInitialized.current && history.length === 0) {
      hasInitialized.current = true;
      processNode('bu_start');
    }
  }, []);

  // Auto-scroll logic (triggers on typing or new results)
  useEffect(() => {
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [history, isTyping, currentNodeId, query, globalResults]);

  // --- CORE CHAT LOGIC ---

  const processNode = (nodeId: string) => {
    const node = BU_CHAT_NODES[nodeId as keyof typeof BU_CHAT_NODES];
    if (!node) return; // Guard clause if ID is wrong

    setIsTyping(true);
    setQuery(''); // Reset search on new node
    
    const delay = Math.min(1200, Math.max(600, node.message.length * 15));

    setTimeout(() => {
      setIsTyping(false);
      setHistory((prev) => [
        ...prev,
        { 
          id: `${node.id}-${Date.now()}`, 
          nodeId: node.id,
          text: node.message, 
          sender: 'bot',
          requirements: node.requirements,
          type: node.type
        }
      ]);
      setCurrentNodeId(node.id);
    }, delay);
  };

  const handleOptionClick = (option: ChatOption) => {
    setHistory((prev) => [
      ...prev, 
      { id: `user-${Date.now()}`, nodeId: 'user', text: option.label, sender: 'user' }
    ]);

    if (option.action === 'reset') {
      setTimeout(() => {
        setHistory([]);
        processNode(option.nextId);
      }, 500);
    } else {
      processNode(option.nextId);
    }
  };

  // NEW: Handle clicking a Search Result (Jump)
  const handleSearchResultClick = (result: SearchResult) => {
    setHistory((prev) => [
      ...prev, 
      { 
        id: `user-${Date.now()}`, 
        nodeId: 'user', 
        text: `Jump to: ${result.title}`, // Explicitly show it's a jump
        sender: 'user' 
      }
    ]);
    processNode(result.targetNodeId);
  };

  // --- FILTERING LOGIC ---

  const currentNode = BU_CHAT_NODES[currentNodeId as keyof typeof BU_CHAT_NODES];
  const activeTheme = getTheme(currentNodeId, currentNode?.type);

  // 1. Contextual Matches (Prioritized)
  const currentOptions = useMemo(() => {
    if (!currentNode?.options) return [];
    if (!query) return currentNode.options; // Show all if no query
    return currentNode.options.filter(opt => 
      opt.label.toLowerCase().includes(query.toLowerCase())
    );
  }, [currentNode, query]);

  // 2. Decide what to render
  // If user is searching and finds NO current options, we show Global Results
  const showGlobal = query.length >= 2 && currentOptions.length === 0;
  
  // Handle "Enter" key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (currentOptions.length > 0) {
        handleOptionClick(currentOptions[0]);
      } else if (showGlobal && globalResults.length > 0) {
        handleSearchResultClick(globalResults[0]);
      }
    }
  };

  return (
    <div className={`relative flex flex-col h-screen w-full max-w-xl mx-auto rounded-xl shadow-2xl overflow-hidden border border-white-200 transition-colors duration-500 backdrop-blur-md bg-slate-50`}>
      
      {/* HEADER */}
      <div className={`${activeTheme.accent} transition-colors duration-500 p-4 text-white flex items-left justify-between shadow-md z-10 shrink-0`}>
        <div className="flex items-center gap-3">
          <Link href={'/'} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-sm shadow-inner hover:bg-white/30 transition">
            <Undo size={18} />
          </Link>
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-xl shadow-inner">
            {activeTheme.icon}
          </div>
          <div>
            <h2 className="font-bold tracking-wide text-sm md:text-base">Asisten Beasiswa Unggulan</h2>
            <p className="text-xs text-blue-50 opacity-90">Pusat Layanan Pembiayaan Pendidikan</p>
          </div>
        </div>
        
        {/* Reset Button */}
        {history.length > 1 && (
          <button 
            onClick={() => { setHistory([]); processNode('bu_start'); }}
            className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition"
          >
            Ulangi
          </button>
        )}
      </div>

      {/* CHAT STREAM */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 scroll-smooth bg-white/50 pb-32">
        <AnimatePresence>
          {history.map((msg) => {
            const isBot = msg.sender === 'bot';
            const msgTheme = isBot ? getTheme(msg.nodeId, msg.type) : null;
            
            return (
              <motion.div 
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`flex ${!isBot ? 'justify-end' : 'justify-start'}`}
              >
                {/* Avatar */}
                {isBot && (
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm mr-2 mt-1 shadow-sm shrink-0 ${msgTheme?.bg} border ${msgTheme?.border}`}>
                    {msgTheme?.icon}
                  </div>
                )}

                <div className={`max-w-[85%] md:max-w-[75%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm relative group pb-5
                  ${!isBot 
                    ? 'bg-blue-600 text-white rounded-br-none shadow-blue-200' 
                    : `${msgTheme?.bg} ${msgTheme?.text} ${msgTheme?.border} border rounded-bl-none`
                  }
                `}>
                  <RichText text={msg.text} />
                  
                  {msg.requirements && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 bg-white/60 p-3 rounded-lg border border-black/5"
                    >
                      <p className="text-xs font-bold opacity-70 uppercase mb-2 flex items-center gap-1">
                        <span className="text-base">📂</span> Dokumen Wajib:
                      </p>
                      <ul className="space-y-2">
                        {msg.requirements.map((req, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2 text-xs font-medium">
                            <div className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 text-[10px]">✓</div>
                            <span className="mt-0.5">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                  
                  <span className={`text-[10px] absolute bottom-1 ${!isBot ? 'left-2 text-blue-200' : 'right-2 opacity-40'}`}>
                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' })}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
        
        {/* Typing Bubble */}
        {isTyping && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start ml-10">
            <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 flex gap-1 items-center">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75"></span>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></span>
            </div>
          </motion.div>
        )}

        {/* OPTIONS AREA */}
        {!isTyping && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-2 ml-10 pb-4 items-end" 
          >
            {/* 1. Show Context Options (if they match) */}
            {currentOptions.length > 0 ? (
               currentOptions.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(opt)}
                  className={`
                    px-5 py-3 text-sm font-medium rounded-xl transition-all duration-200 shadow-sm border w-full sm:w-auto text-left max-w-[90%] flex justify-between items-center group
                    hover:-translate-y-0.5 hover:shadow-md active:translate-y-0
                    ${activeTheme.accent === 'bg-red-500' 
                      ? 'border-red-200 text-red-700 bg-red-50 hover:bg-red-100' 
                      : 'bg-white border-blue-100 text-gray-700 hover:bg-blue-50 hover:border-blue-300'
                    }
                  `}
                >
                  <span>{opt.label}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 pl-2">
                     <Send size={14} />
                  </span>
                </button>
              ))
            ) : (
              /* 2. Show Global Results (if context didn't match) */
              showGlobal && globalResults.length > 0 ? (
                <>
                  <div className="w-full text-right mb-2">
                     <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded flex items-center justify-end gap-1 ml-auto w-fit border border-purple-100">
                       <Sparkles size={12} /> Hasil Pencarian Global
                     </span>
                  </div>
                  {globalResults.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => handleSearchResultClick(result)}
                      className="px-5 py-3 text-sm font-medium rounded-xl transition-all duration-200 shadow-sm border w-full sm:w-auto text-left max-w-[90%] flex justify-between items-center group
                        hover:-translate-y-0.5 hover:shadow-md active:translate-y-0
                        bg-gradient-to-r from-purple-50 to-white border-purple-200 text-purple-900"
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold text-xs text-purple-500 mb-0.5 flex items-center gap-1">
                          <BookOpen size={10} /> {result.category}
                        </span>
                        <span className="truncate pr-2">{result.title}</span>
                      </div>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-purple-400 pl-2">
                         <CornerDownRight size={14} />
                      </span>
                    </button>
                  ))}
                </>
              ) : (
                /* 3. No Results State */
                query.length > 1 && (
                  <div className="text-sm text-gray-400 italic bg-white px-4 py-2 rounded-lg border">
                    Tidak ditemukan info tentang "{query}"
                  </div>
                )
              )
            )}
          </motion.div>
        )}

        <div ref={bottomRef} className="h-4" />
        <br />
      </div>

      {/* INPUT BAR */}
      <div className="absolute bottom-0 left-0 w-full bg-white/80 backdrop-blur-md border-t border-gray-200 p-4 z-20">
        <div className="relative flex items-center gap-2 max-w-full">
          {/* Input Wrapper */}
          <div className="relative flex-1">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Search size={18} />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isTyping}
              // Conditional Placeholder
              placeholder={
                currentNode?.options 
                ? "Pilih opsi atau cari topik lain (mis: 'Biaya')..." 
                : "Ketik untuk mencari bantuan..."
              }
              className="w-full pl-10 pr-4 py-3 bg-gray-100 border-transparent focus:bg-white focus:border-blue-300 focus:ring-4 focus:ring-blue-100 rounded-2xl text-sm transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <button 
            disabled={!query || (currentOptions.length === 0 && (!showGlobal || globalResults.length === 0))}
            onClick={() => {
              if (currentOptions.length > 0) handleOptionClick(currentOptions[0]);
              else if (showGlobal && globalResults.length > 0) handleSearchResultClick(globalResults[0]);
            }}
            className={`
              p-3 rounded-xl transition-all duration-200 shrink-0
              ${query && (currentOptions.length > 0 || globalResults.length > 0)
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 hover:scale-105 active:scale-95' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            <Send size={20} />
          </button>
        </div>
        <div className="text-[10px] text-center text-gray-400 mt-2">
          Pusat Bantuan Digital ADEM &bull; AI Powered Interface
        </div>
      </div>

    </div>
  );
}