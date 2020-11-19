
FROM node:alpine AS my-app-build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build-prod

FROM nginx:alpine
COPY --from=my-app-build /app/dist/episen-sca-cme-front /usr/share/nginx/html
EXPOSE 80

LABEL version="0.1"
LABEL release-date="2020-04-05"
