# Caculator

This is a simple calculator app developed using React Native

And this is the HKU CompSc COMP7506 Smart phone apps development  - Individual Project

## Function

1. Perform basic addition, subtraction, multiplication, and division operations
2. Consecutive calculations can be performed with multiple operators display calculation results

## Requirements

- Node.js (v12 or higher)
- Expo CLI

## Installation 

1. First of all, please make sure you have installed the development environment of Node.js and React Native
2. Clone the repository `git clone https://github.com/daizeyi0109/Smart-phone-apps-development----Individual-Project.git`
3. Install dependencies: `npm install` 
4. Start the application: `expo start`

## Configuration

Before running the application, you will need to configure the Google Maps API key in the `app.json` file. 

```json
{
  "expo": {
    "name": "IndividualProject",
    "slug": "IndividualProject",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}
```



Follow the guidelines to start developing your application. You may find the following resources handy:

- [React Navite ](https://reactnative.dev/)
- [Expo Doc](https://docs.expo.dev/)

## How to use

Using the application is very simple:

- Press the number buttons on the screen to enter numbers
- Press the operator buttons (such as +, -, *, /) on the screen to enter the operator
- Press the equal  button on the screen to display the calculation result

## Version

Version 1.0

## License

TThis software is for learning and communication only.

## Contact Us

If you have any questions or feedback, please send an email to daizy109@connect.hku.hk
