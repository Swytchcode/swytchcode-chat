import axios from "axios";

export async function POST(req: Request) {
    const { service, type, version, method_workflow, language } = await req.json();
    const endpoint = `${process.env.BASE_URL}/mcp-agent-generate`;
    const payload = { service, type, version, method_workflow, language };


    try {
        const response = await axios.post(endpoint, payload, {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.MCP_API_KEY
          },
        });
    
        return response.data; // Return the response data
      } catch (error) {
        console.error("Error in POST request:", error);
        throw error;
      }
}
