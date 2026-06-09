<h1 align="center">Prohor Analytics</h1>

<p align="center">
  <i>Prohor Analytics is a simple, fast, privacy-focused alternative to Google Analytics.</i>
</p>

<p align="center">
  <a href="https://github.com/prohor-analytics/prohor-analytics/releases"><img src="https://img.shields.io/github/release/prohor-analytics/prohor-analytics.svg" alt="GitHub Release" /></a>
  <a href="https://github.com/prohor-analytics/prohor-analytics/blob/master/LICENSE"><img src="https://img.shields.io/github/license/prohor-analytics/prohor-analytics.svg" alt="MIT License" /></a>
</p>

---

## 🚀 Getting Started

A detailed getting started guide can be found at [prohor.ai/docs](https://prohor.ai/docs/).

---

## 🛠 Installing from Source

### Requirements

- A server with Node.js version 18.18+.
- A PostgreSQL database version v12.14+.

### Get the source code and install packages

```bash
git clone https://github.com/prohor-analytics/prohor-analytics.git
cd prohor-analytics
pnpm install
```

### Configure Prohor Analytics

Create an `.env` file with the following:

```bash
DATABASE_URL=connection-url
```

The connection URL format:

```bash
postgresql://username:mypassword@localhost:5432/mydb
```

### Build the Application

```bash
pnpm run build
```

The build step will create tables in your database if you are installing for the first time. It will also create a login user with username **admin** and password **umami**.

### Start the Application

```bash
pnpm run start
```

By default, this will launch the application on `http://localhost:3000`. You will need to either [proxy](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/) requests from your web server or change the [port](https://nextjs.org/docs/api-reference/cli#production) to serve the application directly.

---

## 🐳 Installing with Docker

Prohor Analytics provides Docker images as well as a Docker compose file for easy deployment.

Docker image:

```bash
docker pull docker.prohor.ai/prohor-analytics/prohor-analytics:latest
```

Docker compose (Runs Prohor Analytics with a PostgreSQL database):

```bash
docker compose up -d
```

---

## 🔄 Getting Updates

To get the latest features, simply do a pull, install any new dependencies, and rebuild:

```bash
git pull
pnpm install
pnpm build
```

To update the Docker image, simply pull the new images and rebuild:

```bash
docker compose pull
docker compose up --force-recreate -d
```

---

## 🛟 Support

<p align="center">
  <a href="https://github.com/prohor-analytics/prohor-analytics"><img src="https://img.shields.io/badge/GitHub--blue?style=social&logo=github" alt="GitHub" /></a>
  <a href="https://twitter.com/prohor_analytics"><img src="https://img.shields.io/badge/Twitter--blue?style=social&logo=twitter" alt="Twitter" /></a>
</p>

[release-shield]: https://img.shields.io/github/release/prohor-analytics/prohor-analytics.svg
[releases-url]: https://github.com/prohor-analytics/prohor-analytics/releases
[license-shield]: https://img.shields.io/github/license/prohor-analytics/prohor-analytics.svg
[license-url]: https://github.com/prohor-analytics/prohor-analytics/blob/master/LICENSE
[github-shield]: https://img.shields.io/badge/GitHub--blue?style=social&logo=github
[github-url]: https://github.com/prohor-analytics/prohor-analytics
[twitter-shield]: https://img.shields.io/badge/Twitter--blue?style=social&logo=twitter
[twitter-url]: https://twitter.com/prohor_analytics
