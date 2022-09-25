# mercury

**Fork of the [Apollo](https://github.com/not-matthias/apollo) theme.**

---

Modern and minimalistic blog theme powered by [Zola](getzola.org). See a live preview [here](https://mercury.flxzt.net).

<sub><sup>Named after the greek god of eloquence, trickery and thieves</sup></sub>

<details open>
  <summary>Dark theme</summary>
  
  ![blog-dark](https://user-images.githubusercontent.com/26800596/168986771-4ed049e2-e123-4d0e-8a24-7bf43f47551f.png)
</details>

<details>
  <summary>Light theme</summary>
  
![blog-light](https://user-images.githubusercontent.com/26800596/168986766-72a48517-7122-465d-8108-3ae33e1e88b1.png)
</details>

## Features

- [X] Pagination
- [X] Themes (light, dark, auto)
- [X] Analytics using [GoatCounter](https://www.goatcounter.com/)
- [x] Social Links
- [ ] Search
- [ ] Categories

## Installation

1. Download the theme
```
git submodule add https://github.com/flxzt/mercury themes/mercury
```

2. Add `theme = "mercury"` to your `config.toml`
3. Copy the example content

```
cp themes/mercury/content content
```

## Features

### Site configuration

Enable analytics with [Goatcounter](https://www.goatcounter.com/):

```toml
[extra.analytics]
enabled = true
goatcounter_user = "your_user"
goatcounter_host = "goatcounter.com"    # default= goatcounter.com

```

Using a CDN for fonts
```
[extra]
use_cdn = true
```

Add a website favicon and logo before the site the site header
```toml
[extra]
favicon = "/images/favicon.png"
logo = "/images/logo.png"
```

Set a color scheme:
```toml
[extra]
theme = "auto"      # either `auto`, `dark` or `light`
```

Social buttons can be added. The available icon names are the file names without `.svg` in `static/social_icons/`.

```toml
[extra]
socials = [
    { name = "twitter", url = "https://twitter.com/flxzt", icon = "twitter" },
    { name = "github", url = "https://github.com/flxzt/mercury", icon = "github" },
]
```

You can add stylesheets to override the theme.
These filenames are relative to the root of the site. In this example, the two CSS files would be in the `static` folder.

```toml
[extra]
stylesheets = [
    "override.css",
    "something_else.css"
]
```

Adding a footer:

```toml
[extra.footer]
enabled = true
# You can either set the footer text here or overwrite the footer.html template for custom html
text = "John Doe - © 2022"
```

### Pages

To enable a table of contents, add this to the page frontmatter:

```toml
[extra]
toc = true
```

When using the `cards.html` section template, pages can have a card image:
```toml
[extra]
card_image = "absolute/path/to/image.png"
```

### Sections

To specify a different path for a section, add:
```toml
[extra]
section_path = "absolute/section/path/_index.md"
```

### Templates
Use custom templates by adding the `template = "templates/<name>.html` variable to the page or section frontmatter.

- A cards view: The `cards.html` section template.



### Shortcodes

There is a gallery shortcode which searches the page directory for images and displays them as a foto gallery. Usage in markdown:

```markdown
{{ gallery() }}
```