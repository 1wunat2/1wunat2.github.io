# Personal research website

A Jekyll site for GitHub Pages. No build step needed: push to GitHub and it deploys.

## Add a new page
1. Create a file in the main folder, for example `teaching.md`.
2. Start it with this header, then write in Markdown:

   ---
   layout: default
   title: Teaching
   nav_order: 6
   ---

3. Commit it. The page appears in the sidebar automatically, ordered by `nav_order`.
   Leave out `nav_order` to publish a page without listing it in the sidebar.

## Add a paper
Copy a block in `_data/publications.yml`.

## Change your name, links, or affiliation
Edit `_config.yml`.
