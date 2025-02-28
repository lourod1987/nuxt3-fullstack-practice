---
title: 'TEST!!!'
description: 'meta description of the page'
head:
  meta:
    - name: 'keywords'
      content: 'nuxt, vue, content'
    - name: 'robots'
      content: 'index, follow'
    - name: 'author'
      content: 'Luis R.'
    - name: 'copyright'
      content: '© 2025 Luis R.'
    - name: 'og:title'
      content: 'This is an OpenGraph title'
---

<!-- Content of the page -->
# The Title is {{ $doc.title }} and the description is {{ $doc.description }}
# First post on our website
## Introduction
This is some text. *This is italic*.

## Second Part
Something more. **This is bold**.

## Also try lists
Unordered lists:
- Do the work
- Collect benefits

Numbered lists:

1. Pay taxes
2. Die

Todo list:
- [ ] Buy groceries
- [ ] Pay bills

Tables:
| Name | Surname |
|--|--|
| Luis | Rodriguez |

```html
<html>
  <div>Hello!</div>
</html>
```

[Go to the second article](/blog/second)
