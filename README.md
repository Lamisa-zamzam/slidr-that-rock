# slidr-that-rock

### Carousel mobile application in React Native using Expo

To run the app locally -

```
git clone https://github.com/Lamisa-zamzam/slidr-that-rock
cd slidr-that-rock
npm i
expo start
```

<br/>
<br/>

### Demo Video : https://youtu.be/BrQ0CUG-PGg

[![Slidr That Rock Demo](http://img.youtube.com/vi/BrQ0CUG-PGg/0.jpg)](https://youtu.be/BrQ0CUG-PGg)

<br/>
<br/>

##### Description

-   This app contains a carousel with 4 blocks.
-   For each block, there is an image selected randomly from the multiple images fetched from the server endpoint and the title of that block.
-   Navigation is made with next and previous buttons and also with scrolling by touch.
-   Next button is disabled, if the user is at the very end of the carousel.
-   Previous button is disabled, if the user is at the very beginning of the carousel.
-   The server endpoint used to fetch slider data is: https://aqueous-gorge-11678.herokuapp.com/ .\
    This server is made by me for this app and you can find my code here: https://github.com/Lamisa-zamzam/slidr-that-rock-server

-   The app persists the last position of the carousel with AsyncStorage, and when the app closes and opens again, the carousel starts from the stored position.
