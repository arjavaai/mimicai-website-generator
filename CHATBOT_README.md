# Gemini-Powered Website Chatbot

This project includes a chatbot powered by Google's Gemini API that can answer questions about the Three Atoms company and its services.

## Setup Instructions

1. **Get a Gemini API Key**
   - Go to [Google AI Studio](https://ai.google.dev/)
   - Sign in with your Google account
   - Navigate to the "API keys" section in the left sidebar
   - Click "Create API Key" and copy the generated key
   - Note: The free tier includes up to 60 queries per minute, which is sufficient for most website chatbot implementations

2. **Configure the API Key**
   - Create a `.env` file in the root directory (if not already present)
   - Add your Gemini API key to the `.env` file:
     ```
     VITE_GEMINI_API_KEY=your_gemini_api_key_here
     ```
   - Replace `your_gemini_api_key_here` with your actual API key
   - Important: Never commit your actual API key to version control

3. **Start the Development Server**
   - Run `npm install` if you haven't already installed dependencies
   - Run `npm run dev` to start the development server
   - The chatbot will appear as a floating button in the bottom right corner of the website

## Features

- **Context-Aware Responses**: The chatbot has been provided with context about the Three Atoms company, its services, team, and values.
- **Real-Time Interaction**: Users can ask questions and receive immediate responses.
- **Mobile-Friendly Design**: The chatbot is responsive and works well on all device sizes.
- **Error Handling**: The chatbot gracefully handles API errors and provides helpful messages.

## Customizing the Chatbot

### Updating the Website Context

To update the information the chatbot knows about your website, edit the `websiteContext` variable in the `Chatbot.tsx` file:

```tsx
const websiteContext = `
// Your updated website information here
`;
```

### Styling

The chatbot uses Tailwind CSS for styling. You can modify the appearance by editing the CSS classes in the `Chatbot.tsx` file.

### Adding More Features

You can enhance the chatbot with additional features such as:
- Saving chat history
- Adding pre-defined quick responses
- Implementing user feedback collection
- Adding typing indicators
- Supporting file uploads

## Troubleshooting

### API Key Issues

If you see the message "I can't connect to my knowledge base because the API key is not configured", check:
1. That you've created a `.env` file with the correct variable name (`VITE_GEMINI_API_KEY`)
2. That you've replaced the placeholder text with your actual API key
3. That you've restarted the development server after making changes to the `.env` file

### API Response Errors

If the chatbot returns "I'm sorry, I encountered an error connecting to my knowledge base", check:
1. Your API key is valid and has not expired
2. You have sufficient quota remaining in your Gemini API account
3. Your internet connection is stable

### Model Version

This chatbot uses the `gemini-1.5-pro` model, which provides enhanced context understanding and more natural responses. If you need to use a different model version, you can modify the API endpoint in the `handleSendMessage` function in `Chatbot.tsx`.

## API Documentation

For more information about the Gemini API, refer to the official documentation:
- [Gemini API Overview](https://ai.google.dev/docs/gemini_api_overview)
- [API Reference](https://ai.google.dev/api/rest/v1/models/generateContent)
