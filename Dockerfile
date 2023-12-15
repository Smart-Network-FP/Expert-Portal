FROM node:dubnium AS development

# Install package manager and C compiler dependencies
# RUN apk add --no-cache build-base
# RUN apk update && \
#     apk add --no-cache gcc make musl-dev && \
#     rm -rf /var/cache/apk/*
# RUN apk add --no-cache automake autoconf libtool



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
RUN rm -rf node_modules package-lock.json
RUN npm install
# Copy app files
COPY --chown=node:node . .
# Expose port
EXPOSE 3000
RUN node --version && echo sdfljsdfljksdfljk
RUN rm -rf node_modules package-lock.json
RUN npm install
# Start the app
CMD [ "npm", "start" ]