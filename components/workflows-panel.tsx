"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import {Workflow} from "./types"



interface WorkflowsPanelProps {
  isOpen: boolean
  theme: "light" | "dark"
  themeClasses: {
    panel: string
    [key: string]: string
  }
  customBgColor?: string
  customTextColor?: string
  methodsList: any
  workflowsList: Workflow[]
  onItemSelect: (description: string) => void
  onLanguageSelect: (newLanguage: string) => void
  onUserdefined: (userdefined: boolean) => void
  onMethod: (isMethod: boolean) => void

}


// Add this array of programming languages after the sampleWorkflows array
const programmingLanguages = [
  { value: "node.js", label: "Node.js" },
  { value: "typescript", label: "TypeScript" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "c#", label: "C#" },
  { value: "c++", label: "C++" },
  { value: "php", label: "PHP" },
  { value: "ruby", label: "Ruby" },
  { value: "golang", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "swift", label: "Swift" },
  { value: "kotlin", label: "Kotlin" },
  { value: "scala", label: "Scala" },
  { value: "c", label: "C" },
]



// Update the WorkflowsPanel component to include state for the dropdown
const WorkflowsPanel: React.FC<WorkflowsPanelProps> = ({
  isOpen,
  theme,
  themeClasses,
  customBgColor,
  customTextColor,
  methodsList,
  workflowsList,
  onItemSelect,
  onLanguageSelect,
  onUserdefined,
  onMethod
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

  // Add these pagination-related state variables after the other state variables
  const [workflowsPage, setWorkflowsPage] = useState(1)
  const [methodsPage, setMethodsPage] = useState(1)
  const itemsPerPage = 5

  // Add these state variables for search functionality after the existing state variables:
  const [workflowSearchTerm, setWorkflowSearchTerm] = useState("")
  const [methodSearchTerm, setMethodSearchTerm] = useState("")

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


  const setMethodWorkflowCall = (description: string) => {
    onItemSelect(description) // Call the prop function to update messages
  }

  const setLanguage = (language: string) => {
    onLanguageSelect(language)
  }

  const setUserdefined = (userdefined: boolean) => {
    onUserdefined(userdefined)
  }
  
  const setIsMethod = (isMethod: boolean) => {
    onMethod(isMethod)
  }

  // Add this to filter languages based on search term
  const filteredLanguages = programmingLanguages.filter((lang) =>
    lang.label.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Add this to filter languages based on methods search term
  const filteredMethodsLanguages = programmingLanguages.filter((lang) =>
    lang.label.toLowerCase().includes(methodsSearchTerm.toLowerCase()),
  )

  // Add these filter functions after the existing filter functions:
  // Filter workflows based on search term
  const filterWorkflows = (workflows: Workflow[]) => {
    if (!workflowSearchTerm) return workflows
    return workflows.filter((workflow) => workflow.description.toLowerCase().includes(workflowSearchTerm.toLowerCase()))
  }

  // Filter methods based on search term
  const filterMethods = (methods: any[]) => {
    if (!methodSearchTerm) return methods
    return methods.filter((method) => method.description.toLowerCase().includes(methodSearchTerm.toLowerCase()))
  }

  // Add this pagination function after the existing filter functions
  const paginateItems = (items: any[], page: number, perPage: number) => {
    const startIndex = (page - 1) * perPage
    return items.slice(startIndex, startIndex + perPage)
  }

  // Modify the workflowsByCategory code to handle pagination
  // This should replace the existing workflowsByCategory code
  // Group workflows by category and apply filtering
  const workflowsByCategory = workflowsList.reduce(
    (acc, workflow) => {
      if (!acc[workflow.category]) {
        acc[workflow.category] = []
      }
      acc[workflow.category].push(workflow)
      return acc
    },
    {} as Record<string, Workflow[]>,
  )

  // Apply filtering to each category
  const filteredWorkflowsByCategory = Object.entries(workflowsByCategory).reduce(
    (acc, [category, workflows]) => {
      const filtered = filterWorkflows(workflows)
      if (filtered.length > 0) {
        acc[category] = filtered
      }
      return acc
    },
    {} as Record<string, Workflow[]>,
  )

  // Convert to array for pagination
  const allWorkflowCategories = Object.entries(filteredWorkflowsByCategory)

  // Do the same for methods
  // Apply filtering to methods
  const filteredMethodsByCategory = Object.entries(methodsList).reduce(
    (acc, [category, methods]) => {
      const filtered = filterMethods(methods as any[])
      if (filtered.length > 0) {
        acc[category] = filtered
      }
      return acc
    },
    {} as Record<string, any[]>,
  )

  // Convert to array for pagination
  const allMethodCategories = Object.entries(filteredMethodsByCategory)


  // Paginate the categories
  const paginatedWorkflowCategories = paginateItems(allWorkflowCategories, workflowsPage, itemsPerPage)

  // Do the same for methods
  const paginatedMethodCategories = paginateItems(allMethodCategories, methodsPage, itemsPerPage)

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
            onClick={() => {
              setActiveTab("workflows")
            }}
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
            onClick={() => {
              setActiveTab("methods")
            }}
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
                              setLanguage(language.value)
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

            {/* Search bar for workflows */}
            <div className="mb-4">
              <input
                type="text"
                className={`w-full px-3 py-2 text-sm border rounded-md ${
                  theme === "dark"
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-700 placeholder-gray-500"
                }`}
                placeholder="Search workflows..."
                value={workflowSearchTerm}
                onChange={(e) => {
                  setWorkflowSearchTerm(e.target.value)
                  setWorkflowsPage(1) // Reset to first page when searching
                }}
              />
            </div>

            <div className="space-y-6 mb-4">
              {paginatedWorkflowCategories.map(([category, workflows]) => (
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
                    {workflows.map((workflow:any) => (
                      <li key={workflow.id}>
                        <button
                          className={`w-full text-left p-2 rounded-md text-sm transition-colors ${
                            theme === "dark" ? "text-gray-200 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-200"
                          }`}
                          onClick={() => {
                            setMethodWorkflowCall(workflow.description)
                            setIsMethod(false)
                          }}
                        >
                          <div
                            className={`${customTextColor ? "" : theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
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

            {/* Add pagination controls for workflows */}
            <div className="flex justify-between items-center mt-4 pt-2 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setWorkflowsPage((prev) => Math.max(prev - 1, 1))}
                disabled={workflowsPage === 1}
                className={`px-2 py-1 rounded text-sm ${
                  workflowsPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                Previous
              </button>
              <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                Page {workflowsPage} of {Math.ceil(allWorkflowCategories.length / itemsPerPage)}
              </span>
              <button
                onClick={() =>
                  setWorkflowsPage((prev) =>
                    prev < Math.ceil(allWorkflowCategories.length / itemsPerPage) ? prev + 1 : prev,
                  )
                }
                disabled={workflowsPage >= Math.ceil(allWorkflowCategories.length / itemsPerPage)}
                className={`px-2 py-1 rounded text-sm ${
                  workflowsPage >= Math.ceil(allWorkflowCategories.length / itemsPerPage)
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                Next
              </button>
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
                              onLanguageSelect(language.value)
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

            {/* Search bar for methods */}
            <div className="mb-4">
              <input
                type="text"
                className={`w-full px-3 py-2 text-sm border rounded-md ${
                  theme === "dark"
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-700 placeholder-gray-500"
                }`}
                placeholder="Search methods..."
                value={methodSearchTerm}
                onChange={(e) => {
                  setMethodSearchTerm(e.target.value)
                  setMethodsPage(1) // Reset to first page when searching
                }}
              />
            </div>

            <div className="space-y-6 mb-4">
              {paginatedMethodCategories.map(([category, methods]) => (
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
                    {methods.map((method:any) => (
                      <li key={method.id}>
                        <button
                          className={`w-full text-left p-2 rounded-md text-sm transition-colors ${
                            theme === "dark" ? "text-gray-200 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-200"
                          }`}
                          onClick={() => {
                            setMethodWorkflowCall(method.description)
                            setIsMethod(true)
                          }}
                        >
                          <div
                            className={`${customTextColor ? "" : theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
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

            {/* Add pagination controls for methods */}
            <div className="flex justify-between items-center mt-4 pt-2 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setMethodsPage((prev) => Math.max(prev - 1, 1))}
                disabled={methodsPage === 1}
                className={`px-2 py-1 rounded text-sm ${
                  methodsPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                Previous
              </button>
              <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                Page {methodsPage} of {Math.ceil(allMethodCategories.length / itemsPerPage)}
              </span>
              <button
                onClick={() =>
                  setMethodsPage((prev) =>
                    prev < Math.ceil(allMethodCategories.length / itemsPerPage) ? prev + 1 : prev,
                  )
                }
                disabled={methodsPage >= Math.ceil(allMethodCategories.length / itemsPerPage)}
                className={`px-2 py-1 rounded text-sm ${
                  methodsPage >= Math.ceil(allMethodCategories.length / itemsPerPage)
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default WorkflowsPanel
