import axios from "axios";
import { NextResponse } from 'next/server';
import { SWYTCHCODE_BASE_URL } from "../contants";



export async function POST(req: Request) {
    const body = await req.json();

    const endpoint = `${SWYTCHCODE_BASE_URL}/chat-list`;
    const payload = { param: body.type };


    try {
        const response = await axios.post(endpoint, payload, {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.SWYTCHCODE_API_KEY
          },
        });
    
        return NextResponse.json({ success: true, data: response.data });
      } catch (error) {
        console.error("Error in POST request:", error);
        return NextResponse.json(
          { success: false, message: "Internal Server Error" },
          { status: 500 }
        );
      }
}
