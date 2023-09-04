const { Configuration, OpenAIApi } = require("openai");


export const askGpt = async (topic) => {
  try {
    const configuration = new Configuration({
        apiKey: "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",
      });
      const openai = new OpenAIApi(configuration);
      
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. \n\nQ: " + topic + "\nA:",
        temperature: 1,
        max_tokens: 3000,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\n"],
      });

    console.log(response);
  } catch (error) {
    console.error('Error calling GPT:', error);
  }
};
