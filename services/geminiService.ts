
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getSmartPricing = async (itemTitle: string, description: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `بناءً على هذا المنتج في السوق اليمني: "${itemTitle}" والوصف التالي: "${description}"، ما هو النطاق السعري العادل بالريال اليمني (YER) أو بالدولار الأمريكي إذا كان المنتج عقاراً أو سيارة؟ يرجى مراعاة الفروق السعرية بين صنعاء وعدن.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            minPrice: { type: Type.NUMBER },
            maxPrice: { type: Type.NUMBER },
            recommendedPrice: { type: Type.NUMBER },
            currency: { type: Type.STRING, description: "YER or USD" },
            reasoning: { type: Type.STRING }
          },
          required: ["minPrice", "maxPrice", "recommendedPrice", "currency"]
        }
      }
    });
    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("AI Pricing Error:", error);
    return null;
  }
};

export const optimizeAdContent = async (title: string, currentDesc: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `قم بتحسين عنوان ووصف الإعلان التالي لزيادة فرص البيع في اليمن. استخدم مصطلحات جذابة محلياً مثل "عرطة" أو "نظيف كرت". العنوان الحالي: "${title}"، الوصف الحالي: "${currentDesc}".`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            newTitle: { type: Type.STRING },
            newDescription: { type: Type.STRING },
            tips: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["newTitle", "newDescription"]
        }
      }
    });
    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("AI Content Error:", error);
    return null;
  }
};
