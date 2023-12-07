FROM node:14-alpine AS development

# Install package manager and C compiler dependencies
RUN apk add --no-cache build-base
RUN apk update && \
    apk add --no-cache gcc make musl-dev && \
    rm -rf /var/cache/apk/*
RUN apk add --no-cache automake autoconf libtool



RUN mkdir -p /app && chown -R node:node /app
ENV NODE_ENV development
ENV PROFILE_SERVICE node-app-dev
# Add a work directory
WORKDIR /app
USER node
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
COPY internals internals
RUN npm install
# Copy app files
COPY --chown=node:node . .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "npm", "start" ]