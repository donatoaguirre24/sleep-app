# 🛏 Sleep App

## ⏯ Demo

### iOS

https://user-images.githubusercontent.com/20030075/185938122-3c21ee4d-087e-48ba-ba23-29d3e78c3126.mov

### Android


https://user-images.githubusercontent.com/20030075/185941564-961a3b3e-a69f-49e4-9fd1-edda2d4b4553.mov


### Tests & Linters

<img width="658" alt="tests-and-linters demo" src="https://user-images.githubusercontent.com/20030075/185839145-6045c655-5bc7-41bd-a725-753dd226c7f9.png">

## 👨🏻‍💻 Technical Documentation

### Setup

- [Node.js 16](https://nodejs.org)
- [Npm 8](https://www.npmjs.com)
- [Watchman](https://facebook.github.io/watchman)
- [Ruby 3.1](https://www.ruby-lang.org/en/)
- [Cocoapods 1.11.2](https://cocoapods.org)
- [Xcode 13](https://developer.apple.com/xcode)
- [Java JDK 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio Chipmunk](https://developer.android.com/studio)

### Run the App

- Prerequisite: [setup your environment](#development-environment)
- Install dependencies: `yarn && pod install --project-directory=ios`
- Start metro server: `yarn start` (keep it running)
- Launch iOS simulator: `yarn ios`
- Launch Android simulator: `yarn android`

### Core Dependencies

- [@react-navigation](https://reactnavigation.org/) navigation library.
- [@shopify/restyle](https://github.com/Shopify/restyle) a type-enforced system for building UI components.
- [react-native-localization](https://github.com/stefalda/ReactNativeLocalization) to manage localization.
- [react-native-svg](https://github.com/react-native-svg/react-native-svg) and [victory-native](https://formidable.com/open-source/victory/) for charts and graphics.
- [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) and [jest](https://facebook.github.io/jest/) for testing.

### Project Structure

```
├── src              # The main container of all the application's code
│   ├── data         # Any kind of constant that you have
│   ├── localization # Locale files
│   ├── navigation   # Navigation logic and types
│   ├── features     # Application screens/features
│   ├── services     # Business logic and utilities
│   ├── ui           # Shared components and UI elements (such as a button or the app's theme)
│   └── app.ts       # Main app component
├── tests            # The main container of all the application's tests
└── index.js         # Entry point of the application as per React-Native standards
```

---

## 🔎 Research & Product

### Inspiration Sources

- [Apple Health](https://apps.apple.com/us/app/apple-health/id1242545199)
- [Apple Fitness](https://apps.apple.com/us/app/fitness/id1208224953)
- [Pillow](https://apps.apple.com/app/pillow-sleep-cycle-alarm-clock/id878691772)
- [Eight Sleep](https://apps.apple.com/uy/app/eight-sleep/id1086913845)
- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/guidelines/overview)

### Biases

- Being a big consumer of Apple products, I have a predilection for the aesthetics of iOS.
- I decided to focus on polishing the look and feel of the iOS app because the Eight Sleep app seems to be quite iOS-oriented. Also, based on the subscriptions and products they offer, I bet most of their users are on iOS.

### Improvement Ideas

- Add proper icons for the heart and respiratory rate
- Include min and max values for health metrics (heart and respiratory rate)
- Improve charts animations in Android
- Fetch data from the network instead of using static data
- Add app icon and splash screen
- Add skeletons to handle loading states (if network requests were made)
- Add haptic feedback to the overview card tap
- Improve x-axis accuracy and the ticks labels on charts

### Time Management Decisions

I tried to create a rich yet simple visual experience. Since the goal of health/fitness app users is mostly to track and improve their performance, I focused on the charts and visual elements to make it easier.

Given the time constrains and the fact that I was provided just with a detail/show endpoint but not with an overview/index one, I decided to use static data. To take advantage of it, I created an "overview" file combining information from the three users' data and feeds the landing screen of the app.
