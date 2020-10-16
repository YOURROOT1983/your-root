---
layout: templates/base.njk
title: Willkommen
---

# Willkommen
![YOUR ROOT Logo](/_assets/images/YR-Logo-neg.svg)

## Produkte
<ul>
  {% for product in collections.product %}
  <li>
    <a href="{{ product.url }}">{{ product.data.title }}</a>
  </li>
  {% endfor %}
</ul>
