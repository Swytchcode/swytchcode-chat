import axios from "axios";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Define the endpoint and payload for your API call
    const endpoint = `${process.env.BASE_URL}/mcp-agent-workflow-request`;
    const payload = {
      workflow: `${messages[messages.length - 1].text} for "lyrid". Ignore the 'Logical' library.`,
      code_context: "",
    };

    // Make the POST request to the endpoint
    const response = await axios.post(endpoint, payload, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.MCP_API_KEY,
      },
    });

    // Assuming the response contains base64 encoded text data
    let finalResponse = atob(response.data.data);

    console.log("Decoded Response:", finalResponse);

    // If you want to stream this response, you can use `streamText` here
    // Assuming that `streamText` takes a string or stream as an argument and returns a response
    return new Response(
      JSON.stringify({
        text: finalResponse,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    )

  } catch (error) {
    console.error("Error in POST request:", error);
    return new Response(JSON.stringify({ error: "Failed to process request" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
