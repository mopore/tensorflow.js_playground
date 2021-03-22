import * as tf from "@tensorflow/tfjs-node-gpu";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as fs from "fs";

export async function testme(): Promise<boolean> {
    console.log('Testing Tensorflow image detection...');

    
    const model = await cocoSsd.load();

    const imageContent = fs.readFileSync("/home/jni/Dev/git_rep/tensorflow.js_playground/airplane.jpg");
    const imageTensorConvert = tf.node.decodeImage(imageContent, 3);

    const imageTensor: any = imageTensorConvert;
    const predictions = await model.detect(imageTensor);

    for (const prediction of predictions){
        console.log(`Object is: ${prediction.class}`);
    }
    return Promise.resolve(true);
}