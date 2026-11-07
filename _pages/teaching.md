---
layout: page
permalink: /teaching/
title: teaching
description: Courses and seminars I have taught.
nav: true
nav_order: 3
---

{% assign items = site.teaching | sort: "date" | reverse %}
<ul class="list-unstyled">
{% for item in items %}
<li class="mb-4">
  <h3 class="h5 mb-1"><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
  <div class="text-muted small">{{ item.description }}</div>
</li>
{% endfor %}
</ul>
