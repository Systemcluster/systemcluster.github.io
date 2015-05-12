---
layout: page
title: Categories
permalink: /articles/categories/

---


{% capture categories %}
  {% for category in site.categories %}
    {{ category[0] }}
  {% endfor %}
{% endcapture %}
{% assign sortedtags = categories | split:' ' | sort %}

{% for category in sortedtags %}
  <h2 name="{{ category }}" id="{{ category }}">{{ category }}</h2>
  <ul>
  {% for post in site.categories[category] %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
  </ul>
{% endfor %}
