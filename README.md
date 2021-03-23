# What is this?

This is a project to get a feeling on how to work with sample/Tensorflow.js.
ObjectDetectionSample.ts uses the Coco SSD model for object detection to find and classify objects found in the images of the folder "test-images"


# Installation
Just run npm install and use VS Code to launch App.ts

```
npm install
```

# Known issues
- An warning is thrown: "Platform node has already been set...". This can't be avoided at the moment. Setting the backend manually (tf.setBackend('tensorflow')) did not work.
- The Coco SSD model does not accecpt the Image Tensor type produced by Tensorflow on TypeScript level and needs to be downgraded to an any-Type.

# Release History

## v0.1.0
- Working images detection.