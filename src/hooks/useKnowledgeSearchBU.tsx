import { useState, useMemo } from 'react';
import { BU_KNOWLEDGE_INDEX } from '@/data/bu/searchIndex';

export function useKnowledgeSearch() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    // Return empty if query is too short
    if (!query || query.length < 2) return [];

    const lowerQuery = query.toLowerCase();
    
    // Filter the index
    return BU_KNOWLEDGE_INDEX.filter((item) => {
      // 1. Check title match
      if (item.title.toLowerCase().includes(lowerQuery)) return true;
      
      // 2. Check keyword match
      return item.keywords.some(k => k.toLowerCase().includes(lowerQuery));
    }).slice(0, 4); // Limit to top 4 results to keep UI clean
  }, [query]);

  return { query, setQuery, results };
}