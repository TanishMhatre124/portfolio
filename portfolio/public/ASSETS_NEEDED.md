# Assets you need to add

This sandbox can't download binary images from your old site, so the data files
reference the exact filenames from your original portfolio — drop the real files
into these paths and everything will resolve automatically:

```
public/
  images/
    profilepicture.jpeg       (used in Hero, if you want to add a photo — see note below)
    UM.svg                    University of Mumbai logo
    apni_pathshala_logo.png   Apni Pathshala logo
    proj1.jpeg                Tutor.AI project image
    proj3.jpeg                Used for FitFarm / Zinzraa / Fittify — replace with real per-project screenshots
    cert1.jpeg                Machine Learning & Python certificate
    cert2.jpeg                Full Stack Web Development certificate
    cert3.jpeg                AWS Fundamentals certificate
    drone.jpeg                Event Head photo
    pr.jpeg                   PR Head photo
    perplexity.png            Organization logo used in Leadership section
    blog1.jpeg                Blog post thumbnail
  files/
    Tanish_Mhatre_Resume.pdf  Your resume, linked from the Hero and header "Resume" buttons
```

Notes:
- The current build doesn't render a profile photo in the Hero (the readout panel takes
  that slot) — add an `<img>` there yourself if you'd like your photo front and center.
- `proj3.jpeg` is reused for three projects as a placeholder — swap in real screenshots per
  project for the strongest presentation.
- Update `demoUrl` / `sourceUrl` in `src/data/projects.ts` once you have real links — they're
  `null` right now because the source portfolio's links were broken placeholders.
