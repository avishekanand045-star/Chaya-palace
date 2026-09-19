import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory store for enquiries
const enquiriesStore: any[] = [];

// API routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", app: "Chhaya Palace Dumka API" });
});

app.post("/api/enquire", (req, res) => {
  const { fullName, phone, email, eventType, preferredDate, numberOfGuests, message } = req.body;
  if (!fullName || !phone) {
    return res.status(400).json({ error: "Full Name and Phone Number are required." });
  }

  const newEnquiry = {
    id: "enq_" + Date.now(),
    fullName,
    phone,
    email: email || "N/A",
    eventType: eventType || "Other",
    preferredDate: preferredDate || "Flexible",
    numberOfGuests: numberOfGuests || "Not specified",
    message: message || "",
    createdAt: new Date().toISOString()
  };

  enquiriesStore.unshift(newEnquiry);
  console.log("New enquiry received at Chhaya Palace:", newEnquiry);

  return res.json({
    success: true,
    message: "Thank you. Our team will contact you shortly.",
    enquiry: newEnquiry
  });
});

app.get("/api/enquiries", (req, res) => {
  res.json({ success: true, count: enquiriesStore.length, enquiries: enquiriesStore });
});

// Gemini AI Palace Concierge
app.post("/api/concierge", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required." });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.json({
        reply: "Welcome to CHHAYA PALACE Concierge! Our event team is ready to assist you. Please fill out the Enquiry Form or contact us directly on WhatsApp at +91 98012 34567 for instant availability and personalized packages."
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    const systemInstruction = `You are the AI Royal Concierge for CHHAYA PALACE, a premier hotel, marriage hall, and meeting hall located on Baba Mandir Road, Kumhar Para, Dumka, Jharkhand 814101 (Google Rating 4.4 ★).
Key details:
- Property: Hotel stays with Deluxe Rooms & Executive Suites, Grand Marriage Hall for weddings/receptions/engagements, and Corporate Meeting Hall.
- Tone: Extremely polite, hospitable, royal, welcoming, and helpful.
- Rule: Do NOT invent unconfirmed prices, room counts, or exact hall square footage. Direct the guest to use the "Enquire Now" button or WhatsApp for exact quotation.
Keep replies concise, elegant, and structured.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    const reply = response.text || "Thank you for reaching out to Chhaya Palace. We would be honored to host your event or stay in Dumka.";
    return res.json({ reply });
  } catch (error: any) {
    console.error("Concierge AI Error:", error);
    return res.json({
      reply: "Thank you for inquiring about CHHAYA PALACE Dumka. For personalized booking assistance and availability, please send an enquiry form or call us directly at +91 98012 34567."
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Chhaya Palace Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
