FROM node:20-alpine

WORKDIR /app

COPY package.* .
RUN npm install

ENV DATABASE_URL=postgresql://postgres:mysecretpassword@postgres:5432/postgres

COPY . .
RUN npm install typescript
RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "docker:prisma" ]