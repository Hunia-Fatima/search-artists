# Search your favourite artists
### Stack
The project is built on React js with backend in Node and Express js. As the third party API  was used as the data source, no database is configured for the project. The project uses bands In town API for the artists data. Public API available [here.](https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0)

### Run
Clone the [repository](https://github.com/Hunia-Fatima/search-artists) in your system. Navigate to the folder _frontend_  folder and run the commands
```sh
npm install
npm start
```
This will run your frontend on **localhost:3000**. For backend navigate to _backend_folder and run the following commands.
```sh
npm install
node index.js
```
This will start your express js app on **localhost:3001**. 
_If you want to change port you can change it in .env file and restart the app._

### Features
- Search the artist.
- See its upcoming events.
- Using Date Range Picker you can see the artists past events as well.
