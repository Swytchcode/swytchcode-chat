import axios from "axios";
import { NextResponse } from 'next/server';


export async function POST(req: Request) {
    const body = await req.json();

    const endpoint = `${process.env.BASE_URL}/mcp-agent-list`;
    const payload = { param: body.type, service:"lyrid", version:"v0.0.1", regex_input:"" };


    try {
        const response = await axios.post(endpoint, payload, {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.MCP_API_KEY
          },
        });
    
        console.log(response.data)
        return NextResponse.json({ success: true, data: response.data });
      } catch (error) {
        console.error("Error in POST request:", error);
        return NextResponse.json(
          { success: false, message: "Internal Server Error" },
          { status: 500 }
        );
      }
}
