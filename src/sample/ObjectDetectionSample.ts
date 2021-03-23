import * as tf from "@tensorflow/tfjs-node-gpu";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as fs from "fs";

const DETECTION_TIMER_LABEL = "Object Detection Time";

const loadImageTensor = ( imageName: string): any => {
    const imageContent = fs.readFileSync(`test-images/${imageName}`);
    const imageTensor = tf.node.decodeImage(imageContent, 3);
    return imageTensor;
}

export async function testme(): Promise<boolean> {
    const imageNames: string[] = [
        "airplane.jpg",
        "cat.jpg",
        "dog.jpg",
        "eagle.jpg"
    ];

    console.log('Testing Tensorflow image detection...');
    console.time(DETECTION_TIMER_LABEL);

    await tf.ready();
    const model = await cocoSsd.load();

    for (const imageName of imageNames){
        const imageTensor = loadImageTensor(imageName);
        const predictions = await model.detect(imageTensor);

        for (const prediction of predictions){
            console.log(`Object is of class: ${prediction.class}`);
        }
    }

    console.timeEnd(DETECTION_TIMER_LABEL);
    return Promise.resolve(true);
}