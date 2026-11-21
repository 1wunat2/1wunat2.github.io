---
layout: default
title: Publications
---

{% for pub in site.data.publications %}
<article class="pub">
  <div class="title">{{ pub.title }}</div>
  <div class="meta">{{ pub.authors | markdownify | remove: "<p>" | remove: "</p>" | strip }}. <em>{{ pub.venue }}</em>, {{ pub.year }}.{% if pub.status %}<span class="status">{{ pub.status }}</span>{% endif %}</div>
  <details>
    <summary>Abstract and links</summary>
    <p>{{ pub.abstract }}</p>
    <p>{% for l in pub.links %}<a href="{{ l.url | relative_url }}">{{ l.label }}</a>{% unless forloop.last %} · {% endunless %}{% endfor %}</p>
  </details>
</article>
{% endfor %}
