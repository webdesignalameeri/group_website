#!/usr/bin/env python3
"""
Adds a photo banner slot to every inner page and fixes the "Home" breadcrumb link.

Run it once from your website folder:
    python3 add-banners.py

Safe to run again: pages that already have a banner are skipped.
Banner photos go in images/banners/ (see images/banners/_README.txt after running).
"""
import os, re

root = os.path.dirname(os.path.abspath(__file__))
names, updated = [], 0

for folder, _, files in os.walk(root):
    for f in sorted(files):
        if not f.endswith('.html'):
            continue
        path = os.path.join(folder, f)
        rel = os.path.relpath(path, root).replace(os.sep, '/')
        s = open(path, encoding='utf-8').read()
        if 'class="pagehead"' not in s:
            continue
        parts = rel[:-5].split('/')              # ['about-us'] or ['sectors', 'marine']
        prefix = '../' * (len(parts) - 1)
        name = '/'.join(parts)
        names.append(name)
        new = s
        # 1) fix the "Home" breadcrumb (it used to point at the page itself / a folder)
        new = re.sub(r'(<p class="crumb"><a href=")[^"]*(">Home</a>)', r'\g<1>' + prefix + r'index.html\2', new)
        # 2) add the banner photo (hidden automatically if the file does not exist)
        if 'class="bg"' not in new:
            tag = f'<div class="bg"><img src="{prefix}images/banners/{name}.jpg" alt="" onerror="this.remove()"></div>'
            new = re.sub(r'(<section class="pagehead"[^>]*>)', lambda m: m.group(1) + '\n        ' + tag, new, count=1)
        if new != s:
            open(path, 'w', encoding='utf-8').write(new)
            updated += 1

for n in names:
    os.makedirs(os.path.join(root, 'images', 'banners', os.path.dirname(n)), exist_ok=True)
with open(os.path.join(root, 'images', 'banners', '_README.txt'), 'w') as r:
    r.write('Banner photos, one per page. JPG, landscape, about 1920 x 600 px (keep the main subject in the middle).\n'
            'A page with no photo here shows the dark pattern instead.\n\n')
    for n in sorted(names):
        r.write(f'images/banners/{n}.jpg\n')
print(f'{updated} pages updated, {len(names)} banner slots')
