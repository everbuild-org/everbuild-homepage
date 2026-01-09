FROM node:21-bookworm AS builder

RUN npm i -g pnpm
WORKDIR /app

COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml
RUN pnpm i
COPY . .
RUN pnpm run build

FROM nginx:1.29.3-alpine AS runner

COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80