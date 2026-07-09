import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home as HomeIcon, 
  Code2, 
  FileCode, 
  FolderOpen, 
  Settings as SettingsIcon, 
  Play, 
  Sparkles, 
  Plus, 
  Search, 
  X, 
  ChevronRight, 
  Copy, 
  Check, 
  Terminal, 
  Smartphone, 
  Share2, 
  RotateCcw, 
  Info,
  ChevronDown
} from 'lucide-react';
import { MobileFile, MobileTemplate } from '../types';

export default function DeviceMockup() {
  // Navigation states inside the simulated app
  const [activeTab, setActiveTab] = useState<'home' | 'code' | 'templates' | 'files' | 'settings'>('home');
  const [activeView, setActiveView] = useState<'tabs' | 'editor' | 'preview'>('tabs');
  
  // Editor and preview states
  const [currentFile, setCurrentFile] = useState<MobileFile | null>(null);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [isCompiling, setIsCompiling] = useState(false);
  const [showTerminal, setShowTerminal] = useState(true);
  const [previewTab, setPreviewTab] = useState<'preview' | 'console'>('preview');

  // Tic Tac Toe State for the interactive preview simulator
  const [tttBoard, setTttBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [tttIsXNext, setTttIsXNext] = useState(true);
  const [tttWinner, setTttWinner] = useState<string | null>(null);
  const [tttScores, setTttScores] = useState({ x: 1, o: 0, draws: 0 });
  const [tttAgainstAI, setTttAgainstAI] = useState(true);

  // Settings states (that dynamically affect the simulated editor)
  const [fontSize, setFontSize] = useState<number>(14);
  const [syntaxHighlighting, setSyntaxHighlighting] = useState<boolean>(true);
  const [wordWrap, setWordWrap] = useState<boolean>(true);
  const [lineNumbers, setLineNumbers] = useState<boolean>(true);
  const [autoSave, setAutoSave] = useState<boolean>(true);
  const [selectedFont, setSelectedFont] = useState<'Default' | 'Fira Code' | 'JetBrains Mono'>('JetBrains Mono');

  // Search states for templates and files
  const [templateSearch, setTemplateSearch] = useState('');
  const [templateLangFilter, setTemplateLangFilter] = useState<string>('All');
  const [templateLevelFilter, setTemplateLevelFilter] = useState<string>('All');
  const [fileSearch, setFileSearch] = useState('');
  const [fileLangFilter, setFileLangFilter] = useState<string>('All');

  // Copied states
  const [copiedTemplate, setCopiedTemplate] = useState<string | null>(null);

  // Default Files inside RunCoder
  const [filesList, setFilesList] = useState<MobileFile[]>([
    { 
      name: 'Tic_Tac_Toe_Game.js', 
      language: 'javascript', 
      recentlyOpened: true, 
      timeOpened: 'Just now',
      content: `// Tic Tac Toe game simulator\nfunction checkWinner(board) {\n  const lines = [\n    [0, 1, 2], [3, 4, 5], [6, 7, 8],\n    [0, 3, 6], [1, 4, 7], [2, 5, 8],\n    [0, 4, 8], [2, 4, 6]\n  ];\n  for (let line of lines) {\n    const [a, b, c] = line;\n    if (board[a] && board[a] === board[b] && board[a] === board[c]) {\n      return board[a];\n    }\n  }\n  return null;\n}`
    },
    { 
      name: 'Binary_Search.java', 
      language: 'java', 
      recentlyOpened: true, 
      timeOpened: '2m ago',
      content: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int[] arr = {10, 20, 30, 40, 50};\n        System.out.print("Enter search element: ");\n        int search = 40;\n        System.out.println(search);\n        \n        int left = 0, right = arr.length - 1;\n        boolean found = false;\n        while (left <= right) {\n            int mid = left + (right - left) / 2;\n            if (arr[mid] == search) {\n                System.out.println("Element found at index " + mid);\n                found = true;\n                break;\n            } else if (arr[mid] < search) left = mid + 1;\n            else right = mid - 1;\n        }\n        if (!found) System.out.println("Element not found");\n    }\n}`
    },
    { 
      name: 'Shopping_Cart_Simulation.js', 
      language: 'javascript', 
      recentlyOpened: true, 
      timeOpened: '3m ago',
      content: `const cart = [\n  { name: 'Android Book', price: 29.99, qty: 2 },\n  { name: 'USB-C Cable', price: 9.99, qty: 1 }\n];\nconst total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);\nconsole.log(\`Total Bill: $\${total.toFixed(2)}\`);`
    },
    { 
      name: 'Student_Database_Demo.js', 
      language: 'javascript', 
      recentlyOpened: true, 
      timeOpened: '3m ago',
      content: `const students = [\n  { id: 101, name: 'Alex Johnson', gpa: 3.8 },\n  { id: 102, name: 'Samantha Smith', gpa: 3.9 }\n];\nstudents.forEach(s => console.log(\`Student ID: \${s.id}, Name: \${s.name}, GPA: \${s.gpa}\`));`
    },
    { 
      name: 'Swap_Using_Pointers.c', 
      language: 'c', 
      recentlyOpened: true, 
      timeOpened: '4m ago',
      content: `#include <stdio.h>\n\nvoid swap(int *xp, int *yp) {\n    int temp = *xp;\n    *xp = *yp;\n    *yp = temp;\n}\n\nint main() {\n    int a = 10, b = 25;\n    printf("Before swap: a = %d, b = %d\\n", a, b);\n    swap(&a, &b);\n    printf("After swap: a = %d, b = %d\\n", a, b);\n    return 0;\n}`
    },
    {
      name: 'Polymorphism.py',
      language: 'python',
      recentlyOpened: true,
      timeOpened: 'Just now',
      content: `class Animal:\n    def speak(self):\n        pass\n\nclass Dog(Animal):\n    def speak(self):\n        return "Woof!"\n\nclass Cat(Animal):\n    def speak(self):\n        return "Meow!"\n\nanimals = [Dog(), Cat()]\nfor animal in animals:\n    print(animal.__class__.__name__ + ": " + animal.speak())`
    },
    {
      name: 'index.html',
      language: 'html',
      recentlyOpened: true,
      timeOpened: '10m ago',
      content: `<!DOCTYPE html>\n<html>\n<head>\n  <title>RunCoder App</title>\n  <style>\n    body { background: #0f172a; color: white; font-family: sans-serif; }\n  </style>\n</head>\n<body>\n  <h1>Welcome from Android!</h1>\n  <p>RunCoder makes coding easy and simple.</p>\n</body>\n</html>`
    }
  ]);

  // Coding templates mock database
  const templates: MobileTemplate[] = [
    {
      title: 'Employee Management System',
      language: 'cpp',
      description: 'Vector of employee objects with filtering capabilities.',
      level: 'Advanced',
      code: `#include <iostream>\n#include <vector>\n#include <string>\n\nclass Employee {\npublic:\n    std::string name;\n    double salary;\n    Employee(std::string n, double s) : name(n), salary(s) {}\n};\n\nint main() {\n    std::vector<Employee> list = {\n        Employee("Alice", 75000),\n        Employee("Bob", 62000)\n    };\n    for (const auto& emp : list) {\n        std::cout << emp.name << " earns $" << emp.salary << "\\n";\n    }\n    return 0;\n}`,
      output: "Alice earns $75000\nBob earns $62000"
    },
    {
      title: 'Binary Search Algorithm',
      language: 'java',
      description: 'Highly optimized logarithmic element matching algorithm.',
      level: 'Intermediate',
      code: `public class BinarySearch {\n    public static int search(int[] arr, int target) {\n        int l = 0, r = arr.length - 1;\n        while (l <= r) {\n            int m = l + (r - l) / 2;\n            if (arr[m] == target) return m;\n            if (arr[m] < target) l = m + 1;\n            else r = m - 1;\n        }\n        return -1;\n    }\n}`,
      output: "Array index matched successfully."
    },
    {
      title: 'Polymorphism Demonstration',
      language: 'python',
      description: 'Abstract bases and dynamic class overrides in Python.',
      level: 'Beginner',
      code: `class Animal:\n    def speak(self): pass\n\nclass Dog(Animal):\n    def speak(self): return "Woof!"\n\nprint(Dog().speak())`,
      output: "Woof!"
    },
    {
      title: 'Database Quick Connection',
      language: 'java',
      description: 'JDBC helper configuration structure for learners.',
      level: 'Advanced',
      code: `// JDBC setup block\nimport java.sql.Connection;\nimport java.sql.DriverManager;\n\npublic class DB {\n    public static void connect() throws Exception {\n        String url = "jdbc:sqlite:runcoder.db";\n        Connection conn = DriverManager.getConnection(url);\n        System.out.println("Connection established.");\n    }\n}`,
      output: "Connection established."
    },
    {
      title: 'Tic Tac Toe Grid Renderer',
      language: 'javascript',
      description: 'Quick arrays initialization & validation mapping.',
      level: 'Intermediate',
      code: `const board = Array(9).fill(null);\nboard[4] = 'X'; // Center piece\nconsole.log("Middle move placed: " + board[4]);`,
      output: "Middle move placed: X"
    },
    {
      title: 'Simple Responsive Canvas',
      language: 'html',
      description: 'Centering structural coordinates natively.',
      level: 'Beginner',
      code: `<!DOCTYPE html>\n<html>\n<body>\n  <canvas id="stage" width="300" height="300"></canvas>\n</body>\n</html>`,
      output: "Canvas rendered."
    }
  ];

  // Helper: Open a file in the editor
  const handleOpenFile = (file: MobileFile) => {
    setCurrentFile(file);
    setActiveView('editor');
    // Set default initial console output
    setConsoleLogs([
      `✔ Connected to RunCoder Cloud Environment`,
      `☕ Selected SDK/Runtime: ${file.language.toUpperCase()}`,
      `💡 Press the "▶ Run" button to execute this program.`
    ]);
  };

  // Helper: Compile/Run code simulation
  const handleRunCode = () => {
    if (!currentFile) return;
    setIsCompiling(true);
    setConsoleLogs(prev => [...prev, `⏳ Compiling & packing codebase...`, `📡 Requesting secure execution cloud sandbox...`]);
    
    setTimeout(() => {
      setIsCompiling(false);
      let runOutput = '';
      
      // Determine simulated output based on file language and code contents
      if (currentFile.name === 'Tic_Tac_Toe_Game.js') {
        runOutput = `✅ Program Executed Successfully\n\n[Launch Simulator]\nInitializing Tic Tac Toe visual canvas...\nLoading dynamic assets...\nDevice Frame matches: PORT 3000\nClick "Preview App" in the top bar to play the game!`;
        // Automatically suggest preview button
        setConsoleLogs(prev => [
          ...prev, 
          `🚀 Running environment server on internal port 3000`,
          `✔ Done in 450ms.`,
          `🎉 Visual preview available! Click the 'Preview' tab.`
        ]);
        setActiveView('preview');
        return;
      } else if (currentFile.language === 'java') {
        runOutput = `✔ Program Executed Successfully\n\nEnter number of elements: 5\nEnter 5 sorted elements: 10 20 30 40 50\nEnter search element: 40\n\nElement found at index 3.`;
      } else if (currentFile.language === 'c') {
        runOutput = `✔ Program Executed Successfully\n\nBefore swap: a = 10, b = 25\nAfter swap: a = 25, b = 10`;
      } else if (currentFile.language === 'python') {
        runOutput = `✔ Program Executed Successfully\n\nDog: Woof!\nCat: Meow!`;
      } else if (currentFile.language === 'html') {
        runOutput = `✅ Web preview compiled.\n\nViewport: Mobile Device\nStyles: Default CSS Applied.\nClick the "Preview" button in top toolbar.`;
        setActiveView('preview');
        return;
      } else {
        runOutput = `✔ Program Executed Successfully\n\nTotal Bill: $69.97\nDone.`;
      }

      setConsoleLogs(prev => [
        ...prev, 
        `🚀 Executing binary inside cloud terminal...`,
        `\n${runOutput}`
      ]);
    }, 1200);
  };

  // Tic-Tac-Toe Simulated Logic
  const handleTttClick = (index: number) => {
    if (tttBoard[index] || tttWinner) return;
    
    const newBoard = [...tttBoard];
    newBoard[index] = 'X';
    setTttBoard(newBoard);
    
    const winner = checkTttWinner(newBoard);
    if (winner) {
      setTttWinner(winner);
      if (winner === 'X') setTttScores(s => ({ ...s, x: s.x + 1 }));
      else if (winner === 'O') setTttScores(s => ({ ...s, o: s.o + 1 }));
      return;
    }
    
    if (newBoard.every(cell => cell !== null)) {
      setTttWinner('Draw');
      setTttScores(s => ({ ...s, draws: s.draws + 1 }));
      return;
    }

    setTttIsXNext(false);

    // AI Move
    if (tttAgainstAI) {
      setTimeout(() => {
        const aiBoard = [...newBoard];
        // simple minimax/random choice: find empty slots
        const emptyIndices = aiBoard.map((c, i) => c === null ? i : null).filter(c => c !== null) as number[];
        if (emptyIndices.length > 0) {
          // simple AI rule: prefer center (4) if empty, else random
          const chosenIndex = emptyIndices.includes(4) ? 4 : emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
          aiBoard[chosenIndex] = 'O';
          setTttBoard(aiBoard);
          
          const aiWinner = checkTttWinner(aiBoard);
          if (aiWinner) {
            setTttWinner(aiWinner);
            if (aiWinner === 'O') setTttScores(s => ({ ...s, o: s.o + 1 }));
          } else if (aiBoard.every(cell => cell !== null)) {
            setTttWinner('Draw');
            setTttScores(s => ({ ...s, draws: s.draws + 1 }));
          }
        }
        setTttIsXNext(true);
      }, 500);
    }
  };

  const checkTttWinner = (board: (string | null)[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const resetTtt = () => {
    setTttBoard(Array(9).fill(null));
    setTttIsXNext(true);
    setTttWinner(null);
  };

  // Filter lists
  const filteredTemplates = templates.filter(t => {
    const matchSearch = t.title.toLowerCase().includes(templateSearch.toLowerCase()) || 
                        t.description.toLowerCase().includes(templateSearch.toLowerCase());
    const matchLang = templateLangFilter === 'All' || t.language.toLowerCase() === templateLangFilter.toLowerCase();
    const matchLevel = templateLevelFilter === 'All' || t.level.toLowerCase() === templateLevelFilter.toLowerCase();
    return matchSearch && matchLang && matchLevel;
  });

  const filteredFiles = filesList.filter(f => {
    const matchSearch = f.name.toLowerCase().includes(fileSearch.toLowerCase());
    const matchLang = fileLangFilter === 'All' || f.language.toLowerCase() === fileLangFilter.toLowerCase();
    return matchSearch && matchLang;
  });

  // Time ticker in Status Bar
  const [phoneTime, setPhoneTime] = useState('13:14');
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes().toString().padStart(2, '0');
      setPhoneTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto max-w-[340px] md:max-w-[360px] w-full" id="interactive-device">
      {/* Device frame container */}
      <div className="relative border-[10px] border-[#1e2235] bg-[#0c0d12] rounded-[48px] shadow-2xl shadow-blue-900/20 overflow-hidden ring-4 ring-[#292e47] select-none h-[640px] flex flex-col">
        
        {/* Punch-hole Camera */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#111111] rounded-full z-50 flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-[#0e172a] rounded-full border border-blue-900/30"></div>
        </div>

        {/* Status Bar */}
        <div className="bg-[#0c0d12] text-slate-400 text-[11px] px-6 pt-3 pb-1 flex justify-between items-center z-40 shrink-0 font-sans">
          <span className="font-medium tracking-tight text-white">{phoneTime}</span>
          <div className="flex items-center space-x-1.5">
            {/* Cell Signal */}
            <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
              <path d="M2 22h20V2z" />
            </svg>
            {/* Wifi Icon */}
            <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
              <path d="M12 21l-12-18h24z" />
            </svg>
            {/* Battery */}
            <div className="w-5 h-2.5 border border-white/60 rounded-sm p-0.5 flex items-center">
              <div className="h-full w-4 bg-emerald-400 rounded-2xs"></div>
            </div>
          </div>
        </div>

        {/* Core Screen Area */}
        <div className="flex-1 overflow-hidden relative flex flex-col bg-[#0d0e15] text-[#f8fafc]">
          
          <AnimatePresence mode="wait">
            {/* MAIN APP TABS VIEW */}
            {activeView === 'tabs' && (
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.15 }}
                className="flex-1 flex flex-col h-full overflow-y-auto pb-16 scrollbar-none"
              >
                
                {/* 1. HOME TAB */}
                {activeTab === 'home' && (
                  <div className="p-4 space-y-4">
                    {/* Header */}
                    <div className="flex justify-between items-center pt-1">
                      <span className="text-lg font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">RunCoder</span>
                      <button 
                        onClick={() => setActiveTab('settings')}
                        className="flex items-center space-x-1 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white text-[10px] font-bold py-1.5 px-3 rounded-full shadow-lg shadow-indigo-900/30 border border-indigo-400/20 active:scale-95 transition-all"
                      >
                        <Sparkles className="w-3 h-3 text-amber-300" />
                        <span>Go Pro</span>
                      </button>
                    </div>

                    {/* Greeting card */}
                    <div className="text-center py-2">
                      <span className="text-xs text-slate-400">Welcome 👋</span>
                      <h2 className="text-xl font-extrabold text-white tracking-tight mt-0.5">Learn. Code. Execute.</h2>
                      <p className="text-[10px] text-slate-500 mt-0.5">Built for Students & Engineers</p>
                    </div>

                    {/* Create New Project banner */}
                    <div 
                      onClick={() => {
                        const defaultCFile = filesList.find(f => f.name === 'Swap_Using_Pointers.c');
                        if (defaultCFile) handleOpenFile(defaultCFile);
                      }}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl relative overflow-hidden shadow-lg shadow-indigo-950/40 border border-indigo-400/20 cursor-pointer hover:brightness-110 active:scale-98 transition-all group"
                    >
                      <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-white/5 rounded-full blur-xl group-hover:scale-125 transition-all"></div>
                      <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                          <Plus className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-white">Create New Project</h3>
                          <p className="text-[10px] text-indigo-200 mt-0.5">Start building with your favorite language</p>
                        </div>
                      </div>
                    </div>

                    {/* Split Quick Actions */}
                    <div className="grid grid-cols-2 gap-3">
                      <div 
                        onClick={() => setActiveTab('files')}
                        className="bg-[#131520] hover:bg-[#1c1e2e] active:scale-98 transition-all p-3 rounded-xl border border-slate-800/60 cursor-pointer flex items-center space-x-2.5"
                      >
                        <FolderOpen className="w-4 h-4 text-sky-400 shrink-0" />
                        <div>
                          <h4 className="text-[11px] font-bold text-white">Workspace</h4>
                          <p className="text-[9px] text-slate-500">35 files open</p>
                        </div>
                      </div>
                      <div 
                        onClick={() => setActiveTab('templates')}
                        className="bg-[#131520] hover:bg-[#1c1e2e] active:scale-98 transition-all p-3 rounded-xl border border-slate-800/60 cursor-pointer flex items-center space-x-2.5"
                      >
                        <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
                        <div>
                          <h4 className="text-[11px] font-bold text-white">Templates</h4>
                          <p className="text-[9px] text-slate-500">Use a starter</p>
                        </div>
                      </div>
                    </div>

                    {/* Start Coding In Languages */}
                    <div>
                      <span className="text-[9px] font-semibold text-slate-500 tracking-wider block mb-2">START CODING IN...</span>
                      <div className="flex flex-wrap gap-1.5">
                        {['C', 'C++', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript'].map((lang, idx) => {
                          const langKey = lang === 'CSS' ? 'css' : lang === 'JavaScript' ? 'javascript' : lang.toLowerCase();
                          return (
                            <button 
                              key={idx}
                              onClick={() => {
                                const matchedFile = filesList.find(f => f.language === langKey || f.name.endsWith('.' + langKey));
                                if (matchedFile) handleOpenFile(matchedFile);
                              }}
                              className="bg-[#131520] hover:bg-slate-800 border border-slate-800 text-[10px] text-slate-300 py-1 px-2.5 rounded-full flex items-center space-x-1 active:scale-95 transition-all cursor-pointer"
                            >
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                              <span>{lang}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* App Guide Banner */}
                    <div className="bg-[#131520] border border-blue-900/25 p-2.5 rounded-xl flex items-center space-x-2">
                      <Info className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span className="text-[9px] text-slate-400 leading-normal">
                        <strong>New here?</strong> Secure cloud compilers run your scripts instantly on click.
                      </span>
                    </div>

                    {/* Active Workspace Files list */}
                    <div>
                      <span className="text-[9px] font-semibold text-slate-500 tracking-wider block mb-2">YOUR WORKSPACE</span>
                      <div className="bg-[#131520] rounded-xl border border-slate-800/60 overflow-hidden divide-y divide-slate-800/40">
                        {filesList.slice(0, 3).map((file, idx) => (
                          <div 
                            key={idx}
                            onClick={() => handleOpenFile(file)}
                            className="p-2.5 flex justify-between items-center hover:bg-slate-800/40 active:bg-slate-800 transition-all cursor-pointer"
                          >
                            <div className="flex items-center space-x-2.5 overflow-hidden">
                              <div className="w-6 h-6 bg-slate-800 rounded-lg flex items-center justify-center font-mono text-[9px] font-bold text-slate-300">
                                {file.name.split('.').pop()?.toUpperCase() === 'JS' ? 'JS' : file.name.split('.').pop()?.toUpperCase()}
                              </div>
                              <span className="text-[11px] font-medium text-slate-200 truncate">{file.name}</span>
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                          </div>
                        ))}
                      </div>
                      
                      <button 
                        onClick={() => setActiveTab('files')}
                        className="w-full mt-3 bg-[#1e2132] hover:bg-indigo-900/30 text-indigo-300 font-bold text-[11px] py-2 px-4 rounded-xl border border-indigo-900/30 transition-all active:scale-95 cursor-pointer"
                      >
                        Resume Workspace
                      </button>
                    </div>

                  </div>
                )}

                {/* 2. CODE TAB */}
                {activeTab === 'code' && (
                  <div className="p-4 space-y-4">
                    <h2 className="text-base font-bold text-white tracking-tight pt-1">Code Workspace</h2>
                    
                    {/* Continue Coding banner */}
                    <div className="bg-[#131520] border border-slate-800 p-3 rounded-xl flex justify-between items-center">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                          <Play className="w-4 h-4 text-blue-400" />
                        </div>
                        <div>
                          <span className="text-[9px] text-slate-500 block">CONTINUE CODING</span>
                          <span className="text-[11px] font-bold text-white">Swap_Using_Pointers.c</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => {
                          const file = filesList.find(f => f.name === 'Swap_Using_Pointers.c');
                          if (file) handleOpenFile(file);
                        }}
                        className="bg-blue-600 hover:bg-blue-500 active:scale-95 text-[9px] font-bold text-white py-1.5 px-3 rounded-lg transition-all cursor-pointer"
                      >
                        Open Workspace
                      </button>
                    </div>

                    {/* Quick Creation Split Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      <button 
                        onClick={() => {
                          const newFileObj: MobileFile = {
                            name: `Untitled_${filesList.length + 1}.py`,
                            language: 'python',
                            content: `print("Hello from Android RunCoder!")`
                          };
                          setFilesList([newFileObj, ...filesList]);
                          handleOpenFile(newFileObj);
                        }}
                        className="bg-[#131520] hover:bg-[#1a1c29] border border-slate-800 text-left p-3 rounded-xl active:scale-98 transition-all flex flex-col justify-between h-[75px] cursor-pointer"
                      >
                        <Plus className="w-4 h-4 text-indigo-400" />
                        <div>
                          <h4 className="text-[11px] font-bold text-white">New File</h4>
                          <p className="text-[8px] text-slate-500">Start coding immediately</p>
                        </div>
                      </button>
                      <button 
                        onClick={() => setActiveTab('files')}
                        className="bg-[#131520] hover:bg-[#1a1c29] border border-slate-800 text-left p-3 rounded-xl active:scale-98 transition-all flex flex-col justify-between h-[75px] cursor-pointer"
                      >
                        <FolderOpen className="w-4 h-4 text-indigo-400" />
                        <div>
                          <h4 className="text-[11px] font-bold text-white">Open File</h4>
                          <p className="text-[8px] text-slate-500">Browse app files</p>
                        </div>
                      </button>
                    </div>

                    {/* Language Filters Title */}
                    <div>
                      <span className="text-[9px] font-semibold text-slate-500 tracking-wider block mb-2">QUICK FILTER FILES</span>
                      <div className="flex space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
                        {['All', 'C', 'C++', 'Java', 'Python', 'HTML'].map((lang, idx) => (
                          <button 
                            key={idx}
                            onClick={() => {
                              setFileLangFilter(lang);
                              setActiveTab('files');
                            }}
                            className="bg-[#131520] border border-slate-800 text-[9px] text-slate-400 py-1 px-3 rounded-full shrink-0 whitespace-nowrap active:scale-95 cursor-pointer"
                          >
                            {lang}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Open Files list count */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[9px] font-semibold text-slate-500 tracking-wider">OPEN FILES (35)</span>
                        <button 
                          onClick={() => {
                            if (confirm("Are you sure you want to close all workspace files?")) {
                              setFilesList([]);
                            }
                          }}
                          className="text-[9px] text-indigo-400 font-bold hover:underline cursor-pointer"
                        >
                          Close All
                        </button>
                      </div>
                      <div className="bg-[#131520] rounded-xl border border-slate-800/60 overflow-hidden divide-y divide-slate-800/40 max-h-[180px] overflow-y-auto">
                        {filesList.map((file, idx) => (
                          <div 
                            key={idx}
                            className="p-2.5 flex justify-between items-center hover:bg-slate-800/30 transition-all cursor-pointer"
                          >
                            <div 
                              onClick={() => handleOpenFile(file)}
                              className="flex-1 flex items-center space-x-2 overflow-hidden"
                            >
                              <div className="w-5 h-5 bg-slate-800 rounded flex items-center justify-center font-mono text-[8px] font-bold text-slate-400">
                                {file.name.split('.').pop()?.toUpperCase().slice(0, 3)}
                              </div>
                              <span className="text-[11px] font-medium text-slate-200 truncate">{file.name}</span>
                            </div>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setFilesList(filesList.filter((_, fIdx) => fIdx !== idx));
                              }}
                              className="p-1 hover:bg-slate-800 rounded-md"
                            >
                              <X className="w-3 h-3 text-slate-500 hover:text-white" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

                {/* 3. TEMPLATES TAB */}
                {activeTab === 'templates' && (
                  <div className="p-4 space-y-3">
                    <h2 className="text-base font-bold text-white tracking-tight pt-1">Programming Templates</h2>
                    
                    {/* Search Field */}
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input 
                        type="text"
                        placeholder="Search templates..."
                        value={templateSearch}
                        onChange={(e) => setTemplateSearch(e.target.value)}
                        className="w-full bg-[#131520] border border-slate-800 rounded-xl py-2 pl-9 pr-4 text-[11px] text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    {/* Language chips filters */}
                    <div className="flex space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
                      {['All', 'C', 'C++', 'Java', 'Python', 'HTML', 'CSS'].map((lang, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setTemplateLangFilter(lang)}
                          className={`py-1 px-3 rounded-full text-[9px] font-bold tracking-tight transition-all shrink-0 cursor-pointer ${
                            templateLangFilter === lang 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-[#131520] border border-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>

                    {/* Difficulty level filters */}
                    <div className="flex space-x-1 border-b border-slate-800/60 pb-1.5">
                      {['All', 'Beginner', 'Intermediate', 'Advanced'].map((level, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setTemplateLevelFilter(level)}
                          className={`py-1 px-2.5 rounded-lg text-[9px] font-medium transition-all cursor-pointer ${
                            templateLevelFilter === level 
                              ? 'bg-indigo-900/40 text-indigo-300 border border-indigo-800' 
                              : 'text-slate-500 hover:text-slate-300'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>

                    {/* Template list */}
                    <div className="space-y-3 overflow-y-auto max-h-[300px]">
                      {filteredTemplates.length > 0 ? (
                        filteredTemplates.map((item, idx) => (
                          <div key={idx} className="bg-[#131520] border border-slate-800 rounded-xl p-3 space-y-2.5">
                            <div className="flex justify-between items-start">
                              <span className="bg-slate-800/80 text-blue-400 font-mono text-[8px] font-bold px-2 py-0.5 rounded uppercase">
                                {item.language}
                              </span>
                              <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded ${
                                item.level === 'Beginner' ? 'bg-emerald-500/10 text-emerald-400' :
                                item.level === 'Intermediate' ? 'bg-amber-500/10 text-amber-400' :
                                'bg-purple-500/10 text-purple-400'
                              }`}>
                                {item.level}
                              </span>
                            </div>
                            <div>
                              <h3 className="text-xs font-bold text-white leading-snug">{item.title}</h3>
                              <p className="text-[9px] text-slate-400 leading-normal mt-0.5">{item.description}</p>
                            </div>
                            <div className="flex space-x-2 pt-1">
                              <button 
                                onClick={() => {
                                  // Open in editor
                                  const tempFile: MobileFile = {
                                    name: item.title.replace(/\s+/g, '_') + '.' + (item.language === 'cpp' ? 'cpp' : item.language === 'javascript' ? 'js' : item.language),
                                    language: item.language,
                                    content: item.code
                                  };
                                  setFilesList([tempFile, ...filesList]);
                                  handleOpenFile(tempFile);
                                }}
                                className="flex-1 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-[10px] font-bold text-white py-1.5 px-2 rounded-lg transition-all cursor-pointer text-center"
                              >
                                Open Editor
                              </button>
                              <button 
                                onClick={() => {
                                  navigator.clipboard.writeText(item.code);
                                  setCopiedTemplate(item.title);
                                  setTimeout(() => setCopiedTemplate(null), 2000);
                                }}
                                className="bg-[#1e2132] hover:bg-[#282d44] text-slate-300 py-1.5 px-3 rounded-lg text-[10px] active:scale-95 transition-all flex items-center justify-center cursor-pointer"
                              >
                                {copiedTemplate === item.title ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                                ) : (
                                  <Copy className="w-3.5 h-3.5" />
                                )}
                              </button>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-[10px] text-slate-500 text-center py-4">No matching templates found.</p>
                      )}
                    </div>

                  </div>
                )}

                {/* 4. FILES TAB */}
                {activeTab === 'files' && (
                  <div className="p-4 space-y-3">
                    <h2 className="text-base font-bold text-white tracking-tight pt-1">File Explorer</h2>

                    {/* Search Field */}
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input 
                        type="text"
                        placeholder="Search files..."
                        value={fileSearch}
                        onChange={(e) => setFileSearch(e.target.value)}
                        className="w-full bg-[#131520] border border-slate-800 rounded-xl py-2 pl-9 pr-4 text-[11px] text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    {/* Quick filter chips */}
                    <div className="flex space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
                      {['All', 'C', 'C++', 'Java', 'Python', 'HTML', 'JavaScript'].map((lang, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setFileLangFilter(lang)}
                          className={`py-1 px-3 rounded-full text-[9px] font-bold tracking-tight transition-all shrink-0 cursor-pointer ${
                            fileLangFilter === lang 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-[#131520] border border-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>

                    {/* Recently opened title */}
                    <span className="text-[9px] font-semibold text-slate-500 tracking-wider block pt-2">RECENTLY OPENED</span>

                    {/* File list */}
                    <div className="space-y-1.5 overflow-y-auto max-h-[300px]">
                      {filteredFiles.length > 0 ? (
                        filteredFiles.map((file, idx) => (
                          <div 
                            key={idx}
                            onClick={() => handleOpenFile(file)}
                            className="bg-[#131520] hover:bg-[#1a1c29] border border-slate-800/40 p-2.5 rounded-xl flex justify-between items-center cursor-pointer transition-all active:scale-99"
                          >
                            <div className="flex items-center space-x-2.5 overflow-hidden">
                              <div className="w-7 h-7 bg-indigo-950/40 rounded-lg flex items-center justify-center border border-indigo-900/30">
                                <FileCode className="w-4 h-4 text-indigo-400" />
                              </div>
                              <div className="overflow-hidden">
                                <h4 className="text-[11px] font-bold text-white truncate leading-snug">{file.name}</h4>
                                <span className="text-[8px] text-slate-500 block uppercase mt-0.5">{file.language}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2 shrink-0">
                              <span className="text-[8px] text-slate-600">{file.timeOpened || '5m ago'}</span>
                              <ChevronRight className="w-3.5 h-3.5 text-slate-700" />
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-[10px] text-slate-500 text-center py-4">No matching files found.</p>
                      )}
                    </div>

                  </div>
                )}

                {/* 5. SETTINGS TAB */}
                {activeTab === 'settings' && (
                  <div className="p-4 space-y-4">
                    <h2 className="text-base font-bold text-white tracking-tight pt-1 font-display">Editor Settings</h2>

                    {/* PRO CTA Banner */}
                    <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 p-3.5 rounded-xl border border-indigo-500/20 flex justify-between items-center">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-8 h-8 bg-amber-400/10 rounded-full flex items-center justify-center border border-amber-400/20">
                          <Sparkles className="w-4 h-4 text-amber-300" />
                        </div>
                        <div>
                          <h4 className="text-[11px] font-bold text-white">RunCoder Pro</h4>
                          <p className="text-[8px] text-slate-400 leading-normal">Ad-free workspace, unlimited compilation</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500" />
                    </div>

                    {/* Editor Customizer Group */}
                    <div className="space-y-3">
                      <span className="text-[9px] font-bold text-slate-500 tracking-wider block">PREFERENCES</span>
                      
                      <div className="bg-[#131520] rounded-xl border border-slate-800 divide-y divide-slate-800/50">
                        {/* Font size */}
                        <div className="p-3 flex justify-between items-center">
                          <span className="text-[11px] text-slate-300">Font Size</span>
                          <div className="flex items-center space-x-2">
                            <button 
                              disabled={fontSize <= 10}
                              onClick={() => setFontSize(s => Math.max(10, s - 1))}
                              className="w-5 h-5 bg-[#1c1e2d] text-slate-300 text-xs font-bold rounded flex items-center justify-center disabled:opacity-30 cursor-pointer"
                            >
                              -
                            </button>
                            <span className="text-[11px] font-mono font-bold text-white w-8 text-center">{fontSize}sp</span>
                            <button 
                              disabled={fontSize >= 24}
                              onClick={() => setFontSize(s => Math.min(24, s + 1))}
                              className="w-5 h-5 bg-[#1c1e2d] text-slate-300 text-xs font-bold rounded flex items-center justify-center disabled:opacity-30 cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Font selection */}
                        <div className="p-3 flex justify-between items-center">
                          <span className="text-[11px] text-slate-300">Editor Font</span>
                          <select 
                            value={selectedFont}
                            onChange={(e) => setSelectedFont(e.target.value as any)}
                            className="bg-[#1c1e2d] border border-slate-800 text-[10px] text-white rounded-lg p-1 px-2 focus:outline-none"
                          >
                            <option value="Default">Default System</option>
                            <option value="Fira Code">Fira Code</option>
                            <option value="JetBrains Mono">JetBrains Mono</option>
                          </select>
                        </div>

                        {/* Syntax highlighting */}
                        <div className="p-3 flex justify-between items-center">
                          <span className="text-[11px] text-slate-300">Syntax Highlighting</span>
                          <button 
                            onClick={() => setSyntaxHighlighting(!syntaxHighlighting)}
                            className={`w-8 h-4.5 rounded-full p-0.5 transition-colors ${syntaxHighlighting ? 'bg-blue-600' : 'bg-slate-800'}`}
                          >
                            <div className={`w-3.5 h-3.5 rounded-full bg-white transition-transform ${syntaxHighlighting ? 'translate-x-3.5' : 'translate-x-0'}`}></div>
                          </button>
                        </div>

                        {/* Word wrap */}
                        <div className="p-3 flex justify-between items-center">
                          <span className="text-[11px] text-slate-300">Word Wrap</span>
                          <button 
                            onClick={() => setWordWrap(!wordWrap)}
                            className={`w-8 h-4.5 rounded-full p-0.5 transition-colors ${wordWrap ? 'bg-blue-600' : 'bg-slate-800'}`}
                          >
                            <div className={`w-3.5 h-3.5 rounded-full bg-white transition-transform ${wordWrap ? 'translate-x-3.5' : 'translate-x-0'}`}></div>
                          </button>
                        </div>

                        {/* Line Numbers */}
                        <div className="p-3 flex justify-between items-center">
                          <span className="text-[11px] text-slate-300">Line Numbers</span>
                          <button 
                            onClick={() => setLineNumbers(!lineNumbers)}
                            className={`w-8 h-4.5 rounded-full p-0.5 transition-colors ${lineNumbers ? 'bg-blue-600' : 'bg-slate-800'}`}
                          >
                            <div className={`w-3.5 h-3.5 rounded-full bg-white transition-transform ${lineNumbers ? 'translate-x-3.5' : 'translate-x-0'}`}></div>
                          </button>
                        </div>

                        {/* Auto save */}
                        <div className="p-3 flex justify-between items-center">
                          <span className="text-[11px] text-slate-300">Auto Save</span>
                          <button 
                            onClick={() => setAutoSave(!autoSave)}
                            className={`w-8 h-4.5 rounded-full p-0.5 transition-colors ${autoSave ? 'bg-blue-600' : 'bg-slate-800'}`}
                          >
                            <div className={`w-3.5 h-3.5 rounded-full bg-white transition-transform ${autoSave ? 'translate-x-3.5' : 'translate-x-0'}`}></div>
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="text-[9px] text-slate-500 text-center leading-normal">
                      RunCoder Android IDE 1.0.0 Stable<br/>Developed with Google Material Design 3 guidelines.
                    </p>

                  </div>
                )}

              </motion.div>
            )}

            {/* LIVE SIMULATOR ACTIVE EDITOR VIEW */}
            {activeView === 'editor' && currentFile && (
              <motion.div 
                key="editor-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="flex-1 flex flex-col h-full bg-[#090a0f]"
              >
                {/* Editor Header toolbar */}
                <div className="bg-[#0d0e15] border-b border-slate-900 px-3.5 py-2 flex justify-between items-center shrink-0">
                  <div className="flex items-center space-x-2 overflow-hidden">
                    <button 
                      onClick={() => setActiveView('tabs')}
                      className="p-1 hover:bg-slate-800 rounded-lg text-slate-400"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <span className="text-[11px] font-mono font-bold text-slate-200 truncate">{currentFile.name}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 shrink-0">
                    {/* Live Preview Button (only for JS/HTML representing the TicTacToe or DOM renderer) */}
                    {(currentFile.language === 'javascript' || currentFile.language === 'html') && (
                      <button 
                        onClick={() => {
                          if (currentFile.name === 'Tic_Tac_Toe_Game.js') {
                            setTttBoard(Array(9).fill(null));
                            setTttWinner(null);
                          }
                          setActiveView('preview');
                        }}
                        className="bg-indigo-600/30 hover:bg-indigo-500/30 text-indigo-300 font-bold text-[9px] py-1 px-2.5 rounded-lg border border-indigo-500/20 active:scale-95 transition-all cursor-pointer"
                      >
                        Preview App
                      </button>
                    )}
                    
                    <button 
                      onClick={handleRunCode}
                      disabled={isCompiling}
                      className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-[10px] py-1 px-2.5 rounded-lg shadow-md flex items-center space-x-1.5 disabled:opacity-40 active:scale-95 transition-all cursor-pointer shrink-0"
                    >
                      <Play className="w-3 h-3 text-white fill-current shrink-0" />
                      <span>{isCompiling ? 'Running...' : 'Run'}</span>
                    </button>
                  </div>
                </div>

                {/* Editor textarea and code representation */}
                <div className="flex-1 flex overflow-hidden text-left relative min-h-0">
                  {/* Simulated Line numbers gutter */}
                  {lineNumbers && (
                    <div className="bg-[#090a0f] border-r border-slate-900/60 font-mono text-[10px] text-slate-600 py-3 px-2 select-none text-right shrink-0">
                      {currentFile.content.split('\n').map((_, i) => (
                        <div key={i} className="h-5 leading-5 w-4">{i + 1}</div>
                      ))}
                    </div>
                  )}

                  {/* Code editor container */}
                  <textarea 
                    style={{ 
                      fontSize: `${fontSize}px`,
                      fontFamily: selectedFont === 'Default' ? 'sans-serif' : 'var(--font-mono)'
                    }}
                    value={currentFile.content}
                    onChange={(e) => {
                      const updatedFile = { ...currentFile, content: e.target.value };
                      setCurrentFile(updatedFile);
                      // Update main files list list too
                      setFilesList(filesList.map(f => f.name === currentFile.name ? updatedFile : f));
                    }}
                    spellCheck="false"
                    className={`flex-1 bg-[#090a0f] text-slate-300 font-mono py-3 px-3 overflow-auto focus:outline-none resize-none leading-5 scrollbar-none focus:ring-0 ${
                      wordWrap ? 'whitespace-pre-wrap' : 'whitespace-pre'
                    }`}
                  />
                </div>

                {/* Simulated Editor Quick keys bar */}
                <div className="bg-[#0c0d12] border-t border-slate-900/60 p-1 flex space-x-1.5 overflow-x-auto scrollbar-none shrink-0 font-mono">
                  {['Save', 'Rename', 'TAB', '{', '}', '(', ')', ';', '[', ']', '<', '>'].map((key, i) => (
                    <button 
                      key={i} 
                      onClick={() => {
                        if (!currentFile) return;
                        let textToInsert = '';
                        if (key === 'TAB') textToInsert = '    ';
                        else if (key === 'Save') {
                          alert("Code saved successfully to your Android workspace!");
                          return;
                        } else if (key === 'Rename') {
                          const newName = prompt("Enter new filename:", currentFile.name);
                          if (newName) {
                            const updated = { ...currentFile, name: newName };
                            setCurrentFile(updated);
                            setFilesList(filesList.map(f => f.name === currentFile.name ? updated : f));
                          }
                          return;
                        } else {
                          textToInsert = key;
                        }
                        
                        // Append text to current file
                        const updated = { ...currentFile, content: currentFile.content + textToInsert };
                        setCurrentFile(updated);
                        setFilesList(filesList.map(f => f.name === currentFile.name ? updated : f));
                      }}
                      className="bg-[#131520] hover:bg-slate-800 text-[10px] text-slate-400 py-1.5 px-3 rounded-lg active:scale-90 transition-all font-bold shrink-0 cursor-pointer"
                    >
                      {key}
                    </button>
                  ))}
                </div>

                {/* Cloud Execution Console Terminal at bottom */}
                <div className="border-t border-slate-900 bg-[#090b11] shrink-0 font-mono text-[9px] flex flex-col max-h-[170px] min-h-[100px] overflow-hidden text-left">
                  <div className="bg-[#0d0e15] px-3.5 py-1.5 flex justify-between items-center text-slate-400 shrink-0 border-b border-slate-900">
                    <div className="flex items-center space-x-1.5 font-bold">
                      <Terminal className="w-3 h-3 text-emerald-400" />
                      <span className="text-white text-[10px]">Cloud Terminal</span>
                    </div>
                    <button 
                      onClick={() => setShowTerminal(!showTerminal)}
                      className="text-[9px] text-slate-500 hover:text-white flex items-center space-x-1"
                    >
                      <span>{showTerminal ? 'Hide Console' : 'Show Console'}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform ${showTerminal ? '' : 'rotate-180'}`} />
                    </button>
                  </div>
                  
                  {showTerminal && (
                    <div className="flex-1 p-3 overflow-y-auto space-y-1 bg-[#06070a] select-text">
                      {consoleLogs.map((log, i) => (
                        <div key={i} className={`whitespace-pre-wrap leading-relaxed ${
                          log.startsWith('✔') || log.startsWith('✅') ? 'text-emerald-400 font-bold' :
                          log.startsWith('⏳') || log.startsWith('📡') ? 'text-blue-400' :
                          log.startsWith('🚀') ? 'text-purple-400 font-bold' :
                          log.startsWith('☕') ? 'text-slate-400' : 'text-slate-300'
                        }`}>
                          {log}
                        </div>
                      ))}
                      {isCompiling && (
                        <div className="text-slate-400 animate-pulse flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></span>
                          <span>Compiling cloud assets...</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

              </motion.div>
            )}

            {/* LIVE PREVIEW GAME PANEL */}
            {activeView === 'preview' && (
              <motion.div 
                key="preview-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="flex-1 flex flex-col h-full bg-[#0a0a0f]"
              >
                {/* Header back bar */}
                <div className="bg-[#0d0e15] border-b border-slate-900 px-3.5 py-2.5 flex justify-between items-center shrink-0">
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => setActiveView('editor')}
                      className="p-1 hover:bg-slate-800 rounded-lg text-slate-400"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <span className="text-[10px] font-bold text-slate-400 truncate">Previewing Tic_Tac_Toe_Game.js</span>
                  </div>
                  <Share2 className="w-4 h-4 text-slate-500 hover:text-white cursor-pointer shrink-0" />
                </div>

                {/* Preview Tabs: Preview / Console */}
                <div className="bg-[#0d0e15] border-b border-slate-900 flex shrink-0">
                  <button 
                    onClick={() => setPreviewTab('preview')}
                    className={`flex-1 py-2 text-[10px] font-bold transition-all border-b-2 text-center cursor-pointer ${
                      previewTab === 'preview' ? 'border-indigo-500 text-white bg-slate-900/30' : 'border-transparent text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    Live Preview
                  </button>
                  <button 
                    onClick={() => setPreviewTab('console')}
                    className={`flex-1 py-2 text-[10px] font-bold transition-all border-b-2 text-center cursor-pointer ${
                      previewTab === 'console' ? 'border-indigo-500 text-white bg-slate-900/30' : 'border-transparent text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    Console Log
                  </button>
                </div>

                {/* Preview Screen contents */}
                {previewTab === 'preview' ? (
                  <div className="flex-1 p-4 flex flex-col justify-center items-center space-y-4">
                    <div className="text-center">
                      <h1 className="text-base font-extrabold text-white font-display tracking-tight">Tic Tac Toe</h1>
                      <div className="flex justify-center items-center space-x-2 mt-1">
                        <select 
                          className="bg-[#131520] border border-slate-800 text-[8px] text-slate-300 rounded p-0.5 px-1 focus:outline-none"
                          disabled
                        >
                          <option>Easy Mode</option>
                        </select>
                        <span className="text-[8px] text-slate-500">Best of 5 Mode</span>
                      </div>
                    </div>

                    {/* Scores board */}
                    <div className="bg-[#131520] rounded-xl p-2.5 grid grid-cols-3 gap-2 w-full max-w-[240px] text-center border border-slate-800/80">
                      <div>
                        <span className="text-[8px] font-bold text-rose-400 block uppercase">Player X</span>
                        <span className="text-xs font-bold text-white">{tttScores.x}</span>
                      </div>
                      <div>
                        <span className="text-[8px] font-bold text-slate-500 block uppercase">Draws</span>
                        <span className="text-xs font-bold text-white">{tttScores.draws}</span>
                      </div>
                      <div>
                        <span className="text-[8px] font-bold text-sky-400 block uppercase">Computer O</span>
                        <span className="text-xs font-bold text-white">{tttScores.o}</span>
                      </div>
                    </div>

                    {/* Winner announcement */}
                    <div className="h-4 flex items-center justify-center">
                      {tttWinner ? (
                        <span className="text-[10px] font-bold text-indigo-400">
                          {tttWinner === 'Draw' ? '🤝 Game drawn!' : `🎉 Winner is ${tttWinner}!`}
                        </span>
                      ) : (
                        <span className="text-[8px] text-slate-500">
                          {tttIsXNext ? 'Your turn (X)' : 'Computer planning move (O)...'}
                        </span>
                      )}
                    </div>

                    {/* Game Grid */}
                    <div className="grid grid-cols-3 gap-1.5 w-[180px] h-[180px]">
                      {tttBoard.map((cell, idx) => (
                        <button 
                          key={idx}
                          onClick={() => handleTttClick(idx)}
                          className={`w-14 h-14 rounded-xl font-display font-extrabold text-lg flex items-center justify-center transition-all cursor-pointer ${
                            cell === 'X' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                            cell === 'O' ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30' :
                            'bg-[#131520] hover:bg-[#1a1d2c] border border-slate-800 text-transparent active:scale-95'
                          }`}
                        >
                          {cell}
                        </button>
                      ))}
                    </div>

                    {/* Controls */}
                    <div className="flex space-x-2 pt-1">
                      <button 
                        onClick={resetTtt}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-[9px] py-1.5 px-3 rounded-lg flex items-center space-x-1 active:scale-95 transition-all cursor-pointer"
                      >
                        <RotateCcw className="w-3 h-3 text-white" />
                        <span>Play Again</span>
                      </button>
                      <button 
                        onClick={() => setTttScores({ x: 0, o: 0, draws: 0 })}
                        className="bg-[#1c2132] hover:bg-slate-800 text-slate-400 font-semibold text-[9px] py-1.5 px-3 rounded-lg active:scale-95 transition-all cursor-pointer"
                      >
                        Reset Scores
                      </button>
                    </div>

                    {/* Play against AI toggle */}
                    <label className="flex items-center space-x-1.5 cursor-pointer pt-1">
                      <input 
                        type="checkbox"
                        checked={tttAgainstAI}
                        onChange={() => setTttAgainstAI(!tttAgainstAI)}
                        className="rounded border-slate-800 bg-[#131520] text-indigo-600 w-3 h-3 focus:ring-0"
                      />
                      <span className="text-[9px] text-slate-500 select-none">Play against AI (Computer O)</span>
                    </label>

                  </div>
                ) : (
                  /* Live Simulator console logs */
                  <div className="flex-1 p-3 bg-slate-950 font-mono text-[9px] text-slate-300 overflow-y-auto space-y-1.5 text-left">
                    <p className="text-slate-500">--- Web Sandbox Logs ---</p>
                    <p className="text-emerald-400">[info] Port 3000 mapped securely.</p>
                    <p className="text-slate-400">[log] Starting JS environment core...</p>
                    <p className="text-white">[output] Tic Tac Toe visual canvas loaded.</p>
                    <p className="text-slate-400">[info] Event loop active. Frame rate: 60fps</p>
                    <p className="text-indigo-400">[event] Click registered at grid item 4 (Move: X)</p>
                    <p className="text-sky-400">[ai-move] Computer registered turn at grid item 0 (Move: O)</p>
                    {tttWinner && <p className="text-amber-400 font-bold">[winner] Game terminated. Result code: {tttWinner}</p>}
                  </div>
                )}

              </motion.div>
            )}
          </AnimatePresence>

          {/* Core App Navigation Bottom Bar (Material Design 3 style) */}
          {activeView === 'tabs' && (
            <div className="absolute bottom-0 left-0 right-0 bg-[#0c0d12] border-t border-slate-900/60 py-2 px-3 flex justify-around items-center z-40 shrink-0 select-none">
              {[
                { id: 'home', label: 'Home', icon: HomeIcon },
                { id: 'code', label: 'Code', icon: Code2 },
                { id: 'templates', label: 'Templates', icon: Sparkles },
                { id: 'files', label: 'Files', icon: FolderOpen },
                { id: 'settings', label: 'Settings', icon: SettingsIcon },
              ].map((tab, idx) => {
                const IconComp = tab.icon;
                const isSelected = activeTab === tab.id;
                return (
                  <button 
                    key={idx}
                    onClick={() => setActiveTab(tab.id as any)}
                    className="flex flex-col items-center space-y-1 relative cursor-pointer group"
                  >
                    {/* Active highlight background indicator pill */}
                    <div className="relative">
                      {isSelected && (
                        <motion.div 
                          layoutId="activeTabPill"
                          className="absolute inset-0 bg-[#2b2d42] rounded-full -mx-3 -my-0.5 z-0"
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        />
                      )}
                      <IconComp className={`w-4 h-4 relative z-10 transition-colors ${isSelected ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`} />
                    </div>
                    <span className={`text-[9px] relative z-10 font-bold tracking-tight ${isSelected ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`}>
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

        </div>
      </div>

      {/* Floating hints explaining interaction around the mockup */}
      <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap bg-indigo-950/80 backdrop-blur-md text-[10px] text-indigo-300 font-semibold py-1.5 px-4 rounded-full border border-indigo-500/20 shadow-xl flex items-center space-x-1.5 animate-pulse select-none">
        <Smartphone className="w-3.5 h-3.5" />
        <span>Click tabs and run code to test the app!</span>
      </div>
    </div>
  );
}
