---
layout: page
permalink: /talks/
title: talks
description: Invited talks, conference presentations and posters.
nav: true
nav_order: 2
---

{% assign by_year = site.data.talks | group_by_exp: "t", "t.date | slice: 0, 4" %}
{% for year in by_year %}
<h2 class="year">{{ year.name }}</h2>
<ul class="list-unstyled talk-list">
{% for t in year.items %}
<li class="mb-3">
  <div class="font-weight-bold">{{ t.title }}</div>
  <div class="text-muted small">{{ t.type }} · {{ t.venue }}{% if t.location != "" %} · {{ t.location }}{% endif %} · {% if t.date.size > 4 %}{{ t.date | date: "%B %-d, %Y" }}{% else %}{{ t.date }}{% endif %}</div>
  {% if t.slides or t.poster or t.event %}<div class="small mt-1">
    {% if t.slides %}<a class="btn btn-sm z-depth-0" role="button" href="{{ t.slides }}">Slides</a>{% endif %}
    {% if t.poster %}<a class="btn btn-sm z-depth-0" role="button" href="{{ t.poster }}">Poster</a>{% endif %}
    {% if t.event %}<a class="btn btn-sm z-depth-0" role="button" href="{{ t.event }}">Event</a>{% endif %}
  </div>{% endif %}
</li>
{% endfor %}
</ul>
{% endfor %}
