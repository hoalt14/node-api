FROM node:12.14-alpine

# 1. Expose port and set work dir
EXPOSE 3000
WORKDIR /app

# 2. Sometime you need to install os package here to build dependencies

# 3. Copy and install node dependencies
ADD src/package.json src/yarn.lock /app/
RUN yarn --pure-lockfile

# 4. Copy source code
ADD ./src /app

# 5. Start my application
CMD ["yarn", "start"]
