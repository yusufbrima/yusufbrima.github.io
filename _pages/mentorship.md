---
layout: page
permalink: /mentorship/
title: mentorship
description: Guides and advice on scholarships and graduate study.
nav: true
nav_order: 7
---

{% assign items = site.mentorship | sort: "date" | reverse %}
<ul class="list-unstyled">
{% for item in items %}
<li class="mb-4">
  <h3 class="h5 mb-1"><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
  <div class="text-muted small">{{ item.description }}</div>
</li>
{% endfor %}
</ul>
