FROM node:alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i
COPY . .
RUN npx prisma generate
ENV NEXT_TELEMETRY_DISABLED 1
CMD ["npm", "run", "dev"]