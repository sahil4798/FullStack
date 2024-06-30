# FROM node:20-alpine

# WORKDIR /app

# COPY . .

# RUN npm install
# RUN npm run build
# RUN npx prisma generate

# EXPOSE 3000

# CMD  ["node" , "dist/index.js"]


FROM node:20

WORKDIR /app

COPY . .

RUN npm install
RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]
