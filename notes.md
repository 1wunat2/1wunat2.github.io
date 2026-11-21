---
layout: default
title: Course notes
---

Coming soon.

Notes I wrote while taking these courses. They reflect my own understanding and may contain mistakes, so please check them against course materials.

{% for course in site.data.notes %}
<section class="course">
  <h3>{{ course.code }}: {{ course.name }}</h3>
  <p class="course-meta">{{ course.term }}{% if course.instructor %}, {{ course.instructor }}{% endif %}</p>
  {%- if course.description %}
  <p>{{ course.description }}</p>
  {%- endif %}
  <ul class="notes-list">
    {%- for n in course.notes %}
    <li><a href="{{ n.file | relative_url }}">{{ n.title }}</a>{% if n.note %}<span class="note-label">{{ n.note }}</span>{% endif %}<span class="note-label">PDF</span></li>
    {%- endfor %}
  </ul>
</section>
{% endfor %}
