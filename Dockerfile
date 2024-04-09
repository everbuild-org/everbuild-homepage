FROM node:21-bookworm as builder

RUN npm i -g pnpm
COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml
RUN pnpm i
COPY . .
RUN pnpm run sync
RUN pnpm run build

FROM node:21-alpine3.19 as runner

WORKDIR /app
USER 1000:1000

COPY --from=builder package.json package.json
COPY --from=builder node_modules node_modules
COPY --from=builder build build

LABEL org.opencontainers.image.title=EverbuildHomepage

HEALTHCHECK --interval=5m --timeout=3s CMD curl -f http://localhost:3000/ || exit 1

EXPOSE 3000

ENTRYPOINT [ "node", "build" ]