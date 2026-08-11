---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

<!-- SECTION 1: JOURNAL ARTICLES -->
<h2 class="archive__subtitle">Journal Articles</h2>
{% assign journals = site.publications | where: "category", "journal" %}
{% for post in journals reversed %}
  {% include archive-single.html %}
{% endfor %}

<hr style="border-top: 1px solid #ddd; margin: 2em 0;">

<!-- SECTION 2: CONFERENCE PAPERS -->
<h2 class="archive__subtitle">Conference & Workshop Papers</h2>
{% assign conferences = site.publications | where: "category", "conference" %}
{% for post in conferences reversed %}
  {% include archive-single.html %}
{% endfor %}

<hr style="border-top: 1px solid #ddd; margin: 2em 0;">

<!-- SECTION 3: PREPRINTS & UNDER REVIEW -->
<h2 class="archive__subtitle">Preprints & Working Papers</h2>
{% assign preprints = site.publications | where: "category", "preprint" %}
{% for post in preprints reversed %}
  {% include archive-single.html %}
{% endfor %}
