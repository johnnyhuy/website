[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">
    <a href="https://github.com/johnnyhuy">
    <img src="https://avatars.githubusercontent.com/u/27847622?v=4" alt="Logo" width="80" height="80">
    </a>
    <h3 align="center">Johnny's Personal Website</h3>
    <p align="center">
    Welcome!
    <br />
    <br />
    <a href="#getting-started">Getting Started</a>
    ·
    <a href="#usage">Usage</a>
    ·
    <a href="#publish">Publish</a>
</div>

It's all possible using the combination of [Jekyll](https://jekyllrb.com/docs/) (for building your website), [GitHub Pages](https://pages.github.com/) (for hosting your website), and [GitHub's API](https://developer.github.com/v3/) (for automatically populating your website with content).

## 🛠 Built With

Notable tools including, but not limited to:

* [Jekyll](https://jekyllrb.com/)

## 🚀 Getting Started

### Prerequisites

- VSCode Dev Containers
- Docker

### Usage

Either setup a local environment ready for [Jekyll development](https://jekyllrb.com/docs/installation/) or use VSCode dev containers to launch a containerised environment to start work.

1. Open this project in VSCode
2. Install VSCode dev containers extension
3. Open the command pane (default: ctrl/cmd + shift + p)
4. Enter `Remote-Containers: Rebuild and Reopen in Container`

> Updating `_config.yml` files will require restarting the server

```bash
# Startup server
make dev
```

Now browse to [localhost:4000](http://localhost:4000)

## Topics

Your website comes pre-configured with three topics (e.g. "Web design" and "Sass") that appear in a section titled "My Interests." These are also stored in your repository's `_config.yml` file, where you can define each topic's name and two other optional details:

- `web_url`: The web address you'd like to your topic to link to (e.g. `https://github.com/topics/sass`).
- `image_url`: The web address of an (ideally square) image that you'd like to appear with your topic.

## Adding pages

To **add a page** to your website (e.g. detailed resume):

1. Create a new `.html` or `.md` file at the root of your repository.
2. Give it a filename that you want to be used in the page's URL (e.g. `http://yoursite.dev/filename`).
3. At the start of your file, include the following [front matter](https://jekyllrb.com/docs/front-matter/):

```
---
layout: default
---
```

## Adding blog posts

To **add a blog post** to your website:

1. Create a new `.md` file in your repository's `/_posts/` directory.
2. Give it a filename using the following format:

```
YEAR-MONTH-DAY-title.MARKUP
```

3. At the start of your file, include the following [front matter](https://jekyllrb.com/docs/front-matter/):

```
---
title: "The title of my blog post"
---
```

Your website comes with a placeholder blog post that you can reference. Notably, its [front matter](https://jekyllrb.com/docs/front-matter/) declares `published` as `false`, so that it won't appear on your website.

While you can define a `layout` in the front matter, your website is pre-configured to assign the `post` layout to all of the posts in your `/_posts/` directory. So you don't have to declare that in your posts.

Jekyll's conventions for authoring and managing blog posts is very flexible. You can [learn more in Jekyll's documentation for "Posts."](https://jekyllrb.com/docs/posts/)

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/johnnyhuy/
