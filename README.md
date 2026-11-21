# Personal research website

A Jekyll site for GitHub Pages. No build step needed: push to GitHub and it deploys.

## The menu and the homepage
`about.md` is your homepage. The sidebar menu is built from `_data/home.yml`:
list each page's file name, in the order you want. Delete a line to hide a page.

## Add a new page
1. Create a file in the main folder, for example `teaching.md`:

   ---
   layout: default
   title: Teaching
   ---

   Write in Markdown here.

2. Add `- teaching.md` to `_data/home.yml` to put it in the menu.

## Add course notes
1. Put the PDF in `assets/notes/`.
2. Add it to `_data/notes.yml`: copy a course block for a new course, or add a
   `title` and `file` pair under an existing course.
The Course notes page (`notes.md`) updates itself. Remove `- notes.md`
from `_data/home.yml` to hide it from the menu.

## Add a paper
Copy a block in `_data/publications.yml`.

## Change your name, links, or affiliation
Edit `_config.yml`.
