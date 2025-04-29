import axios from "axios";
import { SWYTCHCODE_BASE_URL } from "../contants";

export async function POST(req: Request) {
    const {type, prompt, language } = await req.json();

    const endpoint = `${SWYTCHCODE_BASE_URL}/chat-fetch-code`;
    const payload = {type, prompt, language };


    try {
        const response = await axios.post(endpoint, payload, {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.SWYTCHCODE_API_KEY
          },
        });
    
        let finalResponse = atob(response.data.data.code);
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
