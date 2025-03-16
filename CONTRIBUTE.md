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


## Docker Compose Installation Steps