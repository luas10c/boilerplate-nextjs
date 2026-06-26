FROM alpine:latest AS builder

WORKDIR /app

RUN apk --no-cache update && apk add nodejs npm

COPY . .

RUN npm ci

RUN npm run build

FROM alpine:latest AS production

WORKDIR /app

RUN apk --no-cache update && apk add nodejs npm

COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "start"]

