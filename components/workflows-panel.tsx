import type React from "react"

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

const WorkflowsPanel: React.FC<WorkflowsPanelProps> = ({ isOpen, theme, themeClasses }) => {
  // Group workflows by category
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

  if (!isOpen) return null

  return (
    <div className={`w-64 flex-shrink-0 overflow-y-auto ${themeClasses.panel} transition-all duration-300 ease-in-out`}>
      <div className="p-4">
        <h2 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>Workflows</h2>

        <div className="space-y-6">
          {Object.entries(workflowsByCategory).map(([category, workflows]) => (
            <div key={category}>
              <h3 className={`text-sm font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
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
                      <div className={`text-xs mt-1 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                        {workflow.description}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkflowsPanel
