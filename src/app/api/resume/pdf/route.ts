import { NextResponse } from "next/server";
import { renderToStream } from "@react-pdf/renderer";
import React from "react";
import ResumePDF from "@/components/ResumePDF";

export async function GET() {
  const stream = await renderToStream(React.createElement(ResumePDF));

  return new NextResponse(stream as unknown as ReadableStream<Uint8Array>, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Jacob-Vazquez-Resume.pdf"',
    },
  });
}
