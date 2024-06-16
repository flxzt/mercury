# Mercury

Modern and minimalistic blog theme powered by [Zola](https://www.getzola.org/).  
See a live preview [here](https://mercury.flxzt.net).

Fork of the [Apollo](https://github.com/not-matthias/apollo) theme.

<sub><sup>Named after the greek god of trickery and thieves</sup></sub>

![screenshot](./screenshot.png)

## Installation

- Download the theme

```bash
git submodule add https://github.com/flxzt/mercury themes/mercury
```

- Add `theme = "mercury"` to your `config.toml`

- Copy the example content

```bash
cp -r themes/mercury/content content
```

## Features

### Site configuration

Enable analytics with [Goatcounter](https://www.goatcounter.com/):

```toml
[extra.analytics]
enabled = true
goatcounter_user = "your_user"
goatcounter_host = "goatcounter.com"    # default: goatcounter.com

```

Add a website favicon:

```toml
[extra]
favicon = "/images/favicon.png"
```

Set a color scheme:

```toml
[extra]
theme = "auto"      # either `auto`, `dark` or `light`
```

Use CDN for fonts:

```toml
[extra]
use_cdn = true
```

Enable math rendering inline with `$` and blocks with `$$` pairs through [Temml](https://temml.org/):

```toml
[extra]
temml = true
```

Enable the elevator:

```toml
[extra]
elevator = true
```

Social buttons can be added. The available icon names are the file names without `.svg` in `static/social_icons/`.

```toml
[extra]
socials = [
    { name = "rss", url = "https://mercury.flxzt.net/atom.xml", icon = "rss" },
    { name = "github", url = "https://github.com/flxzt/mercury", icon = "github" },
]
```

Add stylesheets to override the theme. The file paths are from the root of the generated site.
In this example, the two CSS files would be in the `static` folder.

```toml
[extra]
stylesheets = [
    "override.css",
    "something_else.css"
]
```

Add a footer:

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

Or a tldr at the start:

```toml
[extra]
tldr = "This page is way too long!"
```

Pages can have a banner image:

```toml
[extra]
banner_image = "/absolute/path/to/image.png"
```

Specify that a page is an URL link instead of content.

```toml
[extra]
link_to = "https://project.page.com"
```

### Sections

Specify that a section is a direct child of the index and its pages should appear there:

```toml
[extra]
show_in_index = true
```

If this is set, it is possible to specify how many pages should be shown:
```toml
[extra]
index_n_pages = 7
```

To display the subsection as cards instead of a pages list, use:
```toml
index_cards = true
```


The order of the subsections is determined by the weight specified in the subsection:
```toml
weight = 0
```

### Templates

Use custom templates by adding this: `template = "<name>.html` to the page or section frontmatter.

**cards**

The `cards.html` section template to display projects with cards.

When using this template pages can have a card image with:

```toml
template = "cards.html"
[extra]
card_image = "/absolute/path/to/image.png"
```

**webapps**

There is a `webapp.html` page template for embedding web apps in an iframe.

Specify the path to the webapp in the page frontmatter:

```toml
template = "webapp.html"
[extra]
webapp = "/path/to/webapp/index.html
```


### Shortcodes

To be able to write pages in raw HTML, use the `raw` shortcode:

```markdown
{% raw() %}
<ul>
    <li>Write</li>
    <li>raw</li>
    <li>HTML</li>
</ul>
{% end %}
```

There is a gallery shortcode which searches the page directory for images and displays them as a foto gallery:

```markdown
{{ gallery() }}
```

To display a right-aligned floating text, use the `aside(width="<value>")` shortcode. Any valid css width value with its
unit can be passed as a parameter.
The shortcode has a body, so it has to be terminated with `{% end %}`. Usage:

```markdown
{% aside(width="50%") %}
Some related info
{% end %}
```

It can be useful to then break the flowing text manually. For this there is the `clear()` shortcode:

```markdown
{{ clear() }}
```

To help with alignment, any content can be resized to be a specific width with `with_width(width="<value>")`:

```markdown
{% with_width(width="50%") %}
Content is maximum 50 percent!
{% end %}
```

Write a caption with:

```markdown
{{ caption(text="This is the caption text") }}
```

## Update NPM dependencies

Run the following from the root theme directory:

```bash
npm install
npm run post-update
```

### License

<sup>
Licensed under either of <a href="LICENSE-APACHE">Apache License, Version
2.0</a> or <a href="LICENSE-MIT">MIT license</a> at your option.
</sup>

### Contribution

<sub>
Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in this crate by you, as defined in the Apache-2.0 license, shall
be dual licensed as above, without any additional terms or conditions.
</sub>
