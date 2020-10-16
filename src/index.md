---
layout: templates/base.njk
title: Willkommen
color: tiefschwarz
---


# Willkommen bei YOUR ROOT

![YOUR ROOT Logo](/_assets/images/YR-Logo-neg.svg)

---
## Produkte
<nav class="products">
  {% for product in collections.sortedSauce %}
  <a href="{{ product.url }}">
    <i class="bg--{{ product.data.color }}"></i>
    {{ product.data.title }}
  </a>
  {% endfor %}
</nav>

---
