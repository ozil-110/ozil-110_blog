# Blog At Isomorphic

A blog that uses a server to render.

## Introduction

This is a blog that uses server-side rendering, and for those who want to learn react and redux frameworks, they can understand the idea of reacting redux with a complete project, and use isomorphism to optimize performance, such as the first screen Loading optimization and seo.

## Technology stack

- react
- react-router
- redux
- sass
- webpack
- Koa
- babel
- ES6
- css modules

## Advantage

### Share the code

The server and the client can share some code to avoid duplicate definitions. This makes the structure clearer and increases maintainability.

### First screen loading

The first time the page loads faster. One drawback of client rendering is that when the user first enters the site, there is no cache in the browser, the need to download the code in the local rendering, a long time. And the server rendering is that the user is already in the download is a good page, open faster than the local rendering.

### SEO

Server-side rendering makes it easier for search engines to read page meta information and other SEO-related information, greatly increasing the site's visibility in the search engine.

## Use

```js
git clone https://github.com/ozil-110/ozil-110_blog.git
cnpm install
npm run dev
npm run build
```

## Environment

- node v7.7
- webpack v1.13.1
- Koa v2.0.0

## Link

[https://ozil-110.github.io](https://ozil-110.github.io)
