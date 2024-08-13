---
title: "publications Collection"
description: "How to add publications to your portfolio."
date: "Mar 20 2024"
---

The `publications` collections is found in `src/content/publications`.

Working with the `publications` collection:

```
📁 /src/content/publications
└── 📁 publication-1
      └── 📄 index.md
└── 📁 publications-2
      └── 📄 index.mdx
```

In the above example, two static pages will be generated, based on the existence of a classic markdown `.md` file or a jsx compatible markdown `.mdx` file. The folder name represents the slug:

- `https://example.com/publications/publication-1`
- `https://example.com/publications/publication-2`


All content must be preceded by required metadata in the markdown file in `yaml` format, and be enclosed by triple dashes. --- ---

```mdx
---
title: "My awesome publication"
description: "A description of my publication."
date: "Mar 22 2024"
draft: false
---
```

Metadata fields

| Field       | Req | Type    | Remarks                                          |
| :---------- | :-- | :------ | :----------------------------------------------- |
| title       | Yes | string  | Title of the content. Used in SEO and RSS.       |
| description | Yes | string  | Description of the content. Used in SEO and RSS. |
| date        | Yes | string  | Must be a valid date string (able to be parsed). |
| draft       | No  | boolean | draft: true, content will not be published.      |
| demoURL     | No  | string  | Link to live publication demo, if applicable.        |
| repoURL     | No  | string  | Link to publication repo, if applicable.             |

All that's left to do is write your content under the metadata.

```mdx
---
title: "My awesome publication"
description: "A description of my publication."
date: "Mar 22 2024"
draft: false
---

### Woot

This is a paragraph about my publication.
```

🎉 Congrats, you are now a blogger, _and_ developer.