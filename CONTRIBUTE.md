## Manual Installation
  - Install node.js locally ()
  - Clone the repo
  - Install dependencies (npm install)
  - Start the db locally
    - docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
    - Go to neon.tech and get yourself a new db
  - Change the .env file and update your db credentials
  - npx prisma migrate dev
  - npx prisma generate
  - npm run dev 

## Docker Installation
  - Install docker
  - Create new network (`docker network create app_network`)
  - Start postgres
    - docker run -e POSTGRES_PASSWORD=mysecretpassword --network app_network --name postgres -d -p 5432:5432 postgres
  - Build the image (`docker build -t app_backend .`)
  - Run the image (`docker run -p 3000:3000 --network app_network app_backend`)

## Docker Compose Installation Steps
  - Install docker, docker-compose
  - Run (`docker-compose up`)