"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"

interface Workflow {
  id: string
  name: string
  description: string
  category: string
}

interface WorkflowsPanelProps {
  isOpen: boolean
  theme: "light" | "dark"
  themeClasses: {
    panel: string
    [key: string]: string
  }
  customBgColor?: string
  customTextColor?: string
}

const sampleWorkflows: Workflow[] = [
  {
    id: "w1",
    name: "Data Processing",
    description: "Extract, transform and load data from various sources",
    category: "Data",
  },
  {
    id: "w2",
    name: "API Integration",
    description: "Connect to external APIs and process responses",
    category: "Integration",
  },
  {
    id: "w3",
    name: "Image Recognition",
    description: "Analyze and classify images using AI",
    category: "AI",
  },
  {
    id: "w4",
    name: "Document Generation",
    description: "Create PDFs and other documents from templates",
    category: "Automation",
  },
  {
    id: "w5",
    name: "Email Automation",
    description: "Send personalized emails based on triggers",
    category: "Automation",
  },
  {
    id: "w6",
    name: "Social Media Posting",
    description: "Schedule and post content to multiple platforms",
    category: "Marketing",
  },
  {
    id: "w7",
    name: "Form Processing",
    description: "Collect and validate form submissions",
    category: "Web",
  },
  {
    id: "w8",
    name: "Database Backup",
    description: "Automatically backup databases on schedule",
    category: "DevOps",
  },
]

// Add this array of programming languages after the sampleWorkflows array
const programmingLanguages = [
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "csharp", label: "C#" },
  { value: "cpp", label: "C++" },
  { value: "php", label: "PHP" },
  { value: "ruby", label: "Ruby" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "swift", label: "Swift" },
  { value: "kotlin", label: "Kotlin" },
  { value: "scala", label: "Scala" },
  { value: "r", label: "R" },
  { value: "dart", label: "Dart" },
  { value: "sql", label: "SQL" },
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "bash", label: "Bash" },
  { value: "powershell", label: "PowerShell" },
]

// Update the WorkflowsPanel component to include state for the dropdown
const WorkflowsPanel: React.FC<WorkflowsPanelProps> = ({
  isOpen,
  theme,
  themeClasses,
  customBgColor,
  customTextColor,
}) => {
  // Add these state variables
  const [searchTerm, setSearchTerm] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState<{ value: string; label: string } | null>(null)
  const [activeTab, setActiveTab] = useState<"workflows" | "methods">("workflows")
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Add these state variables at the beginning of the WorkflowsPanel component
  const [methodsSearchTerm, setMethodsSearchTerm] = useState("")
  const [isMethodsDropdownOpen, setIsMethodsDropdownOpen] = useState(false)
  const [selectedMethodsLanguage, setSelectedMethodsLanguage] = useState<{ value: string; label: string } | null>(null)
  const methodsDropdownRef = useRef<HTMLDivElement>(null)

  // Add this useEffect to handle clicking outside the dropdown to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Add this useEffect to handle clicking outside the methods dropdown to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (methodsDropdownRef.current && !methodsDropdownRef.current.contains(event.target as Node)) {
        setIsMethodsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Add this to filter languages based on search term
  const filteredLanguages = programmingLanguages.filter((lang) =>
    lang.label.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Add this to filter languages based on methods search term
  const filteredMethodsLanguages = programmingLanguages.filter((lang) =>
    lang.label.toLowerCase().includes(methodsSearchTerm.toLowerCase()),
  )

  // Group workflows by category (keep existing code)
  const workflowsByCategory = sampleWorkflows.reduce(
    (acc, workflow) => {
      if (!acc[workflow.category]) {
        acc[workflow.category] = []
      }
      acc[workflow.category].push(workflow)
      return acc
    },
    {} as Record<string, Workflow[]>,
  )

  // Sample methods data
  const methodsByCategory = {
    Core: [
      { id: "m1", name: "generateText", description: "Generate text from a prompt" },
      { id: "m2", name: "streamText", description: "Stream text generation from a prompt" },
    ],
    Chat: [
      { id: "m3", name: "useChat", description: "React hook for chat interfaces" },
      { id: "m4", name: "createChat", description: "Create a new chat session" },
    ],
    Completion: [
      { id: "m5", name: "useCompletion", description: "React hook for text completion" },
      { id: "m6", name: "createCompletion", description: "Create a text completion" },
    ],
    Tools: [
      { id: "m7", name: "useTool", description: "React hook for tool usage" },
      { id: "m8", name: "callTool", description: "Call a tool with parameters" },
    ],
    Providers: [
      { id: "m9", name: "openai", description: "OpenAI provider integration" },
      { id: "m10", name: "anthropic", description: "Anthropic provider integration" },
    ],
  }

  if (!isOpen) return null

  // Update the return statement to include the dropdown
  return (
    <div
      className={`w-64 flex-shrink-0 overflow-y-auto ${customBgColor ? "" : themeClasses.panel} transition-all duration-300 ease-in-out`}
      style={{
        backgroundColor: customBgColor || "",
        color: customTextColor || "",
      }}
    >
      <div className="p-4">
        {/* Tab Navigation */}
        <div className="flex border-b mb-4">
          <button
            className={`py-2 px-4 font-medium text-sm ${
              activeTab === "workflows"
                ? `border-b-2 border-blue-500 ${customTextColor ? "" : theme === "dark" ? "text-white" : "text-gray-800"}`
                : `${customTextColor ? "" : theme === "dark" ? "text-gray-400" : "text-gray-600"} hover:text-gray-800`
            }`}
            onClick={() => setActiveTab("workflows")}
            style={{ color: activeTab === "workflows" && customTextColor ? customTextColor : "" }}
          >
            Workflows
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm ${
              activeTab === "methods"
                ? `border-b-2 border-blue-500 ${customTextColor ? "" : theme === "dark" ? "text-white" : "text-gray-800"}`
                : `${customTextColor ? "" : theme === "dark" ? "text-gray-400" : "text-gray-600"} hover:text-gray-800`
            }`}
            onClick={() => setActiveTab("methods")}
            style={{ color: activeTab === "methods" && customTextColor ? customTextColor : "" }}
          >
            Methods
          </button>
        </div>

        {activeTab === "workflows" ? (
          <>
            <h2
              className={`text-lg font-semibold mb-4 ${customTextColor ? "" : theme === "dark" ? "text-white" : "text-gray-800"}`}
              style={{ color: customTextColor || "" }}
            >
              Workflows
            </h2>

            {/* Language Dropdown */}
            <div className="mb-4 relative" ref={dropdownRef}>
              <label
                className={`block text-sm font-medium mb-1 ${
                  customTextColor ? "" : theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
                style={{
                  color: customTextColor ? (theme === "dark" ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)") : "",
                }}
              >
                Programming Language
              </label>
              <div className="relative">
                <button
                  type="button"
                  className={`w-full flex items-center justify-between px-3 py-2 border rounded-md text-sm ${
                    theme === "dark"
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-700"
                  }`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="listbox"
                >
                  <span>{selectedLanguage ? selectedLanguage.label : "Select language"}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isDropdownOpen ? "transform rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div
                    className={`absolute z-10 w-full mt-1 rounded-md shadow-lg ${
                      theme === "dark" ? "bg-gray-800" : "bg-white"
                    } ring-1 ring-black ring-opacity-5 max-h-60 overflow-auto`}
                    role="listbox"
                  >
                    <div className="p-2">
                      <input
                        type="text"
                        className={`w-full px-3 py-2 text-sm border rounded-md ${
                          theme === "dark"
                            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            : "bg-white border-gray-300 text-gray-700 placeholder-gray-500"
                        }`}
                        placeholder="Search languages..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                    <ul className="py-1">
                      {filteredLanguages.map((language) => (
                        <li key={language.value}>
                          <button
                            type="button"
                            className={`w-full text-left px-4 py-2 text-sm ${
                              theme === "dark" ? "text-gray-200 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"
                            } ${
                              selectedLanguage?.value === language.value
                                ? theme === "dark"
                                  ? "bg-gray-700"
                                  : "bg-gray-100"
                                : ""
                            }`}
                            onClick={() => {
                              setSelectedLanguage(language)
                              setIsDropdownOpen(false)
                              setSearchTerm("")
                            }}
                            role="option"
                            aria-selected={selectedLanguage?.value === language.value}
                          >
                            {language.label}
                          </button>
                        </li>
                      ))}
                      {filteredLanguages.length === 0 && (
                        <li className={`px-4 py-2 text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                          No languages found
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6">
              {Object.entries(workflowsByCategory).map(([category, workflows]) => (
                <div key={category}>
                  <h3
                    className={`text-sm font-medium mb-2 ${
                      customTextColor ? "" : theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                    style={{
                      color: customTextColor ? (theme === "dark" ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)") : "",
                    }}
                  >
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {workflows.map((workflow) => (
                      <li key={workflow.id}>
                        <button
                          className={`w-full text-left p-2 rounded-md text-sm transition-colors ${
                            theme === "dark" ? "text-gray-200 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          <div className="font-medium">{workflow.name}</div>
                          <div
                            className={`text-xs mt-1 ${
                              customTextColor ? "opacity-70" : theme === "dark" ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {workflow.description}
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2
              className={`text-lg font-semibold mb-4 ${customTextColor ? "" : theme === "dark" ? "text-white" : "text-gray-800"}`}
              style={{ color: customTextColor || "" }}
            >
              API Methods
            </h2>

            {/* Language Dropdown for Methods Tab */}
            <div className="mb-4 relative" ref={methodsDropdownRef}>
              <label
                className={`block text-sm font-medium mb-1 ${
                  customTextColor ? "" : theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
                style={{
                  color: customTextColor ? (theme === "dark" ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)") : "",
                }}
              >
                Programming Language
              </label>
              <div className="relative">
                <button
                  type="button"
                  className={`w-full flex items-center justify-between px-3 py-2 border rounded-md text-sm ${
                    theme === "dark"
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-700"
                  }`}
                  onClick={() => setIsMethodsDropdownOpen(!isMethodsDropdownOpen)}
                  aria-expanded={isMethodsDropdownOpen}
                  aria-haspopup="listbox"
                >
                  <span>{selectedMethodsLanguage ? selectedMethodsLanguage.label : "Select language"}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isMethodsDropdownOpen ? "transform rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {isMethodsDropdownOpen && (
                  <div
                    className={`absolute z-10 w-full mt-1 rounded-md shadow-lg ${
                      theme === "dark" ? "bg-gray-800" : "bg-white"
                    } ring-1 ring-black ring-opacity-5 max-h-60 overflow-auto`}
                    role="listbox"
                  >
                    <div className="p-2">
                      <input
                        type="text"
                        className={`w-full px-3 py-2 text-sm border rounded-md ${
                          theme === "dark"
                            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            : "bg-white border-gray-300 text-gray-700 placeholder-gray-500"
                        }`}
                        placeholder="Search languages..."
                        value={methodsSearchTerm}
                        onChange={(e) => setMethodsSearchTerm(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                    <ul className="py-1">
                      {filteredMethodsLanguages.map((language) => (
                        <li key={language.value}>
                          <button
                            type="button"
                            className={`w-full text-left px-4 py-2 text-sm ${
                              theme === "dark" ? "text-gray-200 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"
                            } ${
                              selectedMethodsLanguage?.value === language.value
                                ? theme === "dark"
                                  ? "bg-gray-700"
                                  : "bg-gray-100"
                                : ""
                            }`}
                            onClick={() => {
                              setSelectedMethodsLanguage(language)
                              setIsMethodsDropdownOpen(false)
                              setMethodsSearchTerm("")
                            }}
                            role="option"
                            aria-selected={selectedMethodsLanguage?.value === language.value}
                          >
                            {language.label}
                          </button>
                        </li>
                      ))}
                      {filteredMethodsLanguages.length === 0 && (
                        <li className={`px-4 py-2 text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                          No languages found
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6">
              {Object.entries(methodsByCategory).map(([category, methods]) => (
                <div key={category}>
                  <h3
                    className={`text-sm font-medium mb-2 ${
                      customTextColor ? "" : theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                    style={{
                      color: customTextColor ? (theme === "dark" ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)") : "",
                    }}
                  >
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {methods.map((method) => (
                      <li key={method.id}>
                        <button
                          className={`w-full text-left p-2 rounded-md text-sm transition-colors ${
                            theme === "dark" ? "text-gray-200 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          <div className="font-medium">{method.name}</div>
                          <div
                            className={`text-xs mt-1 ${
                              customTextColor ? "opacity-70" : theme === "dark" ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {method.description}
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default WorkflowsPanel
