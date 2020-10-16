---
layout: templates/base.njk
title: Willkommen
---

# Willkommen

## Produkte
<ul>
  {% for product in collections.product %}
  <li>
    <a href="{{ product.url }}">{{ product.data.title }}</a>
  </li>
  {% endfor %}
</ul>
