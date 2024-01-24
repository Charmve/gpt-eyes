import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';


const analyzeImage = async (image, model) => {
  const img = new Image();
  img.src = image;
  await img.decode(); // Ensure the image is fully loaded
  console.log("start classify...");
  const predictions = await model.classify(img);
  predictions.forEach(prediction => {
    console.log(`Class: ${prediction.className}, Probability: ${prediction.probability}`);
    
    // Optionally, you can also draw the top prediction on the image.
    const topPrediction = prediction;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0);
    context.font = '18px Arial';
    context.fillStyle = 'red';
    context.fillText(`${topPrediction.className} (${Math.round(topPrediction.probability * 100)}%)`, 10, 30);

    // Display the annotated image.
    document.body.appendChild(canvas);
  });
  return predictions;
};

export const runObjectDetection = async (capturedImage) => {
  console.log("start object detection ...");
  try {
    const mobileNetModel = await mobilenet.load();
    const predictions = await analyzeImage(capturedImage, mobileNetModel);
    console.log(predictions);
    return predictions;
  } catch (error) {
    return 'Error running object detection: ' + error;
  }
};