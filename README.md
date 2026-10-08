Toli's dating profile and bounty site
[Markdown](/index.markdown)

[Live](https://love.toli.me)

## Curated profile gallery — October 7, 2026

The Jekyll homepage uses `_data/profile_photos.json` and `_includes/profile-gallery.html` for one curated gallery near the introduction. Six photographs appear initially; a native keyboard-accessible disclosure reveals eight more and can collapse them again. The grid has three columns at 600px and wider, and two columns on phones. Images retain meaningful alternate text, original aspect metadata and full-image links; later images load lazily. The existing theme supplies the image viewer.

The 14 selected photographs emphasize a clear portrait, playful personality, activities, friends and Promise. The prior 35-entry lower gallery is removed from the homepage, including repeated photos, phone screenshots, weaker selfies and generated artwork. All original files remain in `photos/` and Git history for reversible future curation; this is display curation, not deletion. The older gallery fragment still targets the new gallery. Profile copy, contact details and bounty terms are unchanged.

Local Jekyll rendering, image availability, desktop/phone layout, disclosure expansion/collapse and image-viewer behavior are checked before publishing through the existing Netlify project. Deployment and canonical live-browser verification are recorded separately from source implementation.

Local verification: Jekyll 3.9.4 renders the curated data/template successfully; the 14 unique image paths exist, the old lower grid and its broken Lightbox2 dependency are absent, and the native disclosure expands by pointer and collapses with Enter. The theme viewer opens the full-size portrait with a 14-photo album. Phone-width rendering has two columns and no horizontal overflow. The local Ruby 3.4 environment uses an external QA Gemfile lock with Nokogiri 1.19.4; the repository production lock remains unchanged at 1.16.2. The connected Netlify build must verify that production dependency set before completion.

## Intro portrait — October 7, 2026

The yellow-coat portrait by a sunny window appears as a circular portrait at the top right of the introduction beside “Meet Toli,” following Toli’s latest photo preference. It reuses the existing toli.me `public/assets/toli-portrait.jpg` bytes as `photos/profile/yellow-coat.jpg`, replacing the earlier laughing-under-a-tree header portrait. The profile stylesheet anchors it to the introductory content and reserves space in the title and text, using 112px on desktop and 76px on phones. The original smiling-under-a-tree photo stays in the 14-photo gallery; its selection and disclosure behavior remain unchanged. Desktop/phone placement, loading and overlap checks precede publication; the live deployment is verified separately.

## Creative profile copy — October 7, 2026

“Creative & Playful” now appears between the introduction and photos, expanding the existing parody-video, playful-ideas, AcroYoga and community-building material into two short paragraphs. Related mentions are removed from the later activities section to avoid repetition. This is editorial adaptation of the existing profile, not new biographical evidence. The ambiguous request to “expand creative and bring it up” was interpreted as the creative-side copy after an unanswered clarification; the portrait is unchanged. The photo gallery, contact links and bounty terms retain their contracts. Jekyll rendering and desktop/phone flow checks precede the existing Netlify publication; live verification is recorded separately.
