import React, { createContext, useContext, useState, useEffect } from 'react';
import { SAMPLE_CONTRACTS } from '../data/sampleContracts';

const ScanShieldContext = createContext();

export function ScanShieldProvider({ children }) {
  // Theme state: dark mode default with clean slate option
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('scanshield_theme') || 'dark';
  });

  // Custom precision laser cursor toggle
  const [customCursor, setCustomCursor] = useState(true);

  // Selected contract & active line highlight
  const [activeContract, setActiveContract] = useState(SAMPLE_CONTRACTS[0]);
  const [activeLine, setActiveLine] = useState(null);
  const [riskFilter, setRiskFilter] = useState('all');
  const [playbook, setPlaybook] = useState('standard');

  // Collapsible AI Chat drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'ai',
      text: "ScanShield AI legal assistant ready. Ask any question about indemnification, liability caps, or termination rights in this contract."
    }
  ]);

  useEffect(() => {
    localStorage.setItem('scanshield_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleCursor = () => {
    setCustomCursor(prev => !prev);
  };

  const highlightLine = (lineNumber) => {
    setActiveLine(lineNumber);
    const element = document.getElementById(`doc-line-${lineNumber}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const selectContract = (contractId) => {
    const found = SAMPLE_CONTRACTS.find(c => c.id === contractId);
    if (found) {
      setActiveContract(found);
      setActiveLine(null);
    }
  };

  const sendChatMessage = (query) => {
    if (!query.trim()) return;

    const userMsg = { sender: 'user', text: query };
    const newHistory = [...chatMessages, userMsg];
    setChatMessages(newHistory);

    setTimeout(() => {
      let aiReply = "Under Section 4.1 [Source: Line 13], Client shall defend and indemnify Provider. However, Section 4.2 [Source: Line 14] limits Provider liability to $1,000.";
      const qLower = query.toLowerCase();

      if (qLower.includes('indemn') || qLower.includes('liability')) {
        aiReply = "Section 4.1 [Source: Line 13] contains an uncapped indemnification clause requiring Client to hold Provider harmless. Section 4.2 [Source: Line 14] caps Provider liability at $1,000.";
      } else if (qLower.includes('terminat')) {
        aiReply = "Section 5.1 [Source: Line 16] allows termination upon 30 days prior written notice. Client must pay for services rendered up to the effective termination date.";
      } else if (qLower.includes('ip') || qLower.includes('intellectual')) {
        aiReply = "Section 2.1 [Source: Line 7] assigns all deliverables to Client, but fails to explicitly reserve Provider's pre-existing Background IP.";
      }

      setChatMessages(prev => [...prev, { sender: 'ai', text: aiReply }]);
    }, 450);
  };

  return (
    <ScanShieldContext.Provider value={{
      theme,
      toggleTheme,
      customCursor,
      toggleCursor,
      activeContract,
      selectContract,
      activeLine,
      highlightLine,
      riskFilter,
      setRiskFilter,
      playbook,
      setPlaybook,
      isDrawerOpen,
      setIsDrawerOpen,
      chatMessages,
      sendChatMessage
    }}>
      {children}
    </ScanShieldContext.Provider>
  );
}

export function useScanShield() {
  return useContext(ScanShieldContext);
}
