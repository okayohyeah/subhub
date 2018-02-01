# Subhub - In Development
## A Hybrid React Native App - Web and Mobile

A place for substitute teachers to track and organize assignments. 
* Star/Flag positive or difficult assignments with personal notes on lesson plans, teacher expectations, students, administration, schedule, and extra duty, which would enhance your ability to do your job. 
* A way to filter past assignments quickly because once assignments are posted, one has to decide immediately. 
* This app offsets the time pressure.

<<<<<<< HEAD
## Technologies Used:
* React
* React Native
* React Native Web
* JavaScript
* Node
* Watchman
* Expo
* Jest

## Front-End - In Development

### Development Notes
* Have Xcode installed on Mac and Expo downloaded on Phone
* In Terminal 1: Web App
  * ```
    yarn start-web
    ```
* In Terminal 2: Mobile App
  * ```
    yarn ios
    ```

## Write code in React Native code
## This Hybrid App runs on the Web, iOS and Android

---

### Source:
[Write once, run anywhere with Create React (Native) App and react-native-web by @Yannick Spark](https://sparkyspace.com/write-once-run-anywhere-with-create-react-native-app-and-react-native-web/#comment-3688417951)
---
#### Notes:
##### From comments by "KajiTetsushi":

Here's my package install as of 02 Jan 2018:

<code>create-react-app my-hybrid-app && cd my-hybrid-app</code>

* create-react-app installs react@^16.2.0 react-dom@^16.2.0 as of 02 Jan 2018.
  * We need to downgrade to satisfy react-native's "absolute version" requirement: react@16.0.0.
  * npm uninstall --save
    - ```
      yarn remove react react-dom
      ```

* npm install --save-dev
  * ```
    yarn add --dev babel-plugin-transform-object-rest-spread babel-plugin-transform-react-jsx-source babel-preset-expo jest-expo flow-bin react-native-scripts react-test-renderer@16.0.0
    ```

* npm install --save
  * ```
    yarn add expo@^23.0.4 react@16.0.0 react-dom@16.0.0 react-native@0.50.3 react-native-web
    ```
The rest of the steps is more or less the same. I generated the latest create-react-native-app code, then copied the files from there, as the tutorial says.

* Copy these from the latest create-react-native-app:

  * .babelrc
  * .flowconfig       
    - important! code was updated recently 
  * .watchmanconfig
  * app.json          
    - important! code was updated recently
  * App.js
  * App.test.js 
=======
## Back-End - In Development
### Technologies Used:
* Express
* Body-Parser
* Sequelize
* Jest
* Supertest
* Nodemon
* Postgres SQL 

>>>>>>> subhub-back-end/master
