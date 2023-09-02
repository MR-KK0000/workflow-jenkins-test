# workflow-jenkins-test
test repo deploy by jenkins


docker build -t my-express-app .

docker run -d -p 3000:3000 --name myapp my-express-app
