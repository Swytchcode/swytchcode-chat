import axios from "axios";

export async function POST(req: Request) {
    const endpoint = `${process.env.BASE_URL}/mcp-agent-generate`;
    const payload = { service: "value", type:"", version:"", method_workflow:"", language:"" };

    console.log("ENDPOINT",endpoint, req)

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
