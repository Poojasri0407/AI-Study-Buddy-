const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const askAI = async (req, res) => {
    try {
        const { question } = req.body;

        if (!question) {
            return res.status(400).json({
                message: "Question is required"
            });
        }

        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents: question
        });

        res.status(200).json({
            message: "AI response generated successfully",
            question: question,
            answer: response.text
        });

    } catch (error) {
        console.error("AI Error:", error);

        res.status(500).json({
            message: "AI request failed",
            error: error.message
        });
    }
};

module.exports = {
    askAI
};