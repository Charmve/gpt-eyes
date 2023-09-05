# GPT Eyes

I gave GPT-4 eyes. "眼观六路，耳听八方"

<video src="https://github.com/Charmve/gpt-eyes/raw/main/src/ssstwitter.com_1693805997510.mp4" controls="controls" style="max-width: 730px;"></video>

Here’s what I did:
- added some data to a vision model
- gave the AI camera access
- asked it questions about the scene
- it identified objects
- it searched web for info
- used that info to accurately answer

Watch it get 3 questions 100% correct!

- Twitter https://twitter.com/mckaywrigley/status/1651291367224807424?s=20
- YouTube https://www.youtube.com/watch?v=w-wxguIs-0I

## This Package Is Sponsorware 💰💰💰

[![](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/Charmve?frequency=one-time&sponsor=Charmve) https://github.com/sponsors/Charmve?frequency=one-time&sponsor=Charmve

This repo was only available to my sponsors on GitHub Sponsors until I reached 15 sponsors.

Learn more about **Sponsorware** at [github.com/sponsorware/docs](https://github.com/sponsorware/docs) 💰.

## Technologies Used

- Frontend: React
- Image Analysis API: TensorFlow Models - MobileNet
- Text Generation API: GPT API

## Installation

1. Clone the repository: `git clone https://github.com/Charmve/gpt-eyes.git`
2. Navigate to the project directory: `cd gpt-eyes`
3. Install dependencies: `npm install`

## Configuration

1. Create an account and obtain API keys for TensorFlow Models - MobileNet and GPT API.
2. Update the configuration file with your API keys:
   - TensorFlow Models - MobileNet: `/path/to/config.js`
   - GPT API: `/path/to/config.js`

## Usage

1. Start the development server: `npm start`
2. Open your browser and visit: `http://localhost:3000`

## How it Works

1. Device camera analyses an image.
2. The application uses TensorFlow Models - MobileNet API to analyze the image and extract object information.
3. The application sends the analyzed object information to the GPT API.
4. The GPT API generates text describing the analyzed object.
5. The application displays the analyzed image and the generated text.
