## First time deployment
### First create a git repo & .gitignore file and include what is necessary in that file

```
git init
git add .
git commit -m “first commit”
```
	
### Create a Heroku account

### Install Heroku CLI

### Run following commands in the CLI: 

```
heroku login
```
```
heroku create
```

This will show 2 endpoints - first one is where our code is deployed in heroku (the link where we can see our app in the browser) snd 2nd one is the git repo created by Heroku where it deploys our code.
```
git remote add heroku 2nd URL
git push heroku master
```
	
## Subsequent deployments

```
git add .
git commit -m "second commit"
git push heroku master
```

## Deployment checklist

Make sure the app is listening to the port specified by Heroku

```
const PORT = process.env.PORT || 5000;
app.listen(PORT);
```

Specify the node environment in the package.json file

```
  "engines": {
    "node": "10.16.3",
    "npm": "6.9.0"
  }
```

Also specify the start scripts, with post build script. Give the path to client based on your requirement.

```
  "scripts": {
    "start": "node index.js",
    "server": "nodemon index.js",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\"",
    "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix ../client && npm run build --prefix ../client",
  }
```
