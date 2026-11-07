# yusufbrima.github.io

Personal academic website of Yusuf Brima, built with Jekyll and the [al-folio](https://github.com/alshedivat/al-folio) theme (v0.16.3).
On every push to `master`, GitHub Actions (`.github/workflows/deploy.yml`) builds the site and publishes it to the `gh-pages` branch, which GitHub Pages serves (Settings → Pages → Deploy from a branch: `gh-pages` / root). Never edit `gh-pages` by hand.

## Where things live
| What | File(s) |
|---|---|
| Homepage text, photo, contact | `_pages/about.md`, `assets/img/prof_pic.jpg` |
| News items (newest six on the homepage) | `_news/YYYY-MM-DD-NN.md`, one short item per file |
| Publications | `_bibliography/papers.bib` (`selected={true}` puts a paper on the homepage) |
| Talks | `_data/talks.yml` |
| Teaching | `_teaching/*.md`; the AIMS 2027 course (`_teaching/2027-aims-computer-vision.md`, `published: false`) is paused: to go live, set `published: true` and run `build_site.py --deploy` from the course materials to restore `teaching/aims-computer-vision-2027/` |
| Mentorship guides | `_mentorship/*.md` (PDF resources in `files/`) |
| Blog posts | `_posts/*.md` |
| Research gallery | `_pages/research.md`, media in `assets/media/` (videos as MP4, images ≤ 1400 px) |
| CV | `_pages/cv.md` |
| Social profiles | `_data/socials.yml` |
| Old URLs | `redirects/` (each file forwards one old address) |

## Preview locally
```bash
bundle install          # once
bundle exec jekyll serve   # http://127.0.0.1:4000
```
Keep media lean: convert animations to MP4 (`ffmpeg -i in.gif -movflags +faststart -pix_fmt yuv420p -vf "scale='min(900,iw)':-2" -crf 30 out.mp4`) and resize images before adding them.
