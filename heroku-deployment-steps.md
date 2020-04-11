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

This will show 2 endpoints - first one is where our code is deployed in heroku snd 2nd one is the git repo where Heroku deploys our code.
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
const PORT = process.env.port || 5000;
app.listen(PORT);
```

Specify the node environment in the package.json file

```
  "engines": {
    "node": "10.16.3",
    "npm": "6.9.0"
  }
```

Also specify the start script

```
  "scripts": {
    "start": "node index.js",
    "server": "nodemon index.js",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  }
```
