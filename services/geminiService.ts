
import { GoogleGenAI, Type } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getPoeticCuration(mood: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Provide a short, 2-sentence poetic recommendation for a lifestyle brand called 'Monet'. 
        The mood is: ${mood}. 
        The tone should be quiet, luxurious, and impressionist. 
        Do not use bold sales language. 
        Focus on textures, light, and atmosphere.`,
        config: {
          temperature: 0.8,
          maxOutputTokens: 100,
        }
      });

      return response.text || "May your space be filled with the soft light of a quiet afternoon.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "An invitation to pause and find beauty in the subtle details of your day.";
    }
  }
}

export const geminiService = new GeminiService();
