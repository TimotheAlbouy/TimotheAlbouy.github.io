#import "@preview/citegeist:0.2.1": load-bibliography

#import "../utils/talb-web.typ": talb-web, footer-img
#show: talb-web

#let biblio-dir = "biblio/"

#let print-bib(bib-path) = {
  let bib-dict = load-bibliography(read(bib-path))
  let bib-array = bib-dict.values().rev()
  for entry in bib-array {
    let authors = entry.parsed_names.author.map(author => [#author.given.at(0). #author.family]).join(", ")
    let year = entry.fields.year
    let title = entry.fields.title

    let venue = none
    if "journal" in entry.fields { venue = entry.fields.journal }
    if "booktitle" in entry.fields { venue = entry.fields.booktitle }
    let doi = none
    if "doi" in entry.fields { doi = entry.fields.doi }
    [
    - #authors (#year) \
      #if doi != none { link("https://doi.org/" + doi, title) } else { title } \
      #if venue != none [_ #venue _]
    
    ]
  }
}

== Publications in International Journals

#print-bib(biblio-dir + "journ-pr.bib")

== Peer-Reviewed Publications in International Conferences

#print-bib(biblio-dir + "conf-pr.bib")

== Invited Publications in International Conferences

#print-bib(biblio-dir + "conf-inv.bib")

== Articles under Submission

#print-bib(biblio-dir + "preprint.bib")

== Invited Talks

- Foundations of reliable cooperation under asynchrony, Byzantine faults, and message adversaries \
  November 2024 – IMDEA Networks Institute, Leganés, Spain

- AMECOS: a modular specification framework for concurrent objects and consistency \
  June 2024 – NPA team of LIP6, Paris, France

- Churn-tolerant consensus-free money transfer \
  March 2024 – ACES team of Télécom Paris, Palaiseau, France

- Distributed computing: a guided tour \
  September 2023 – IMDEA Networks Institute, Leganés, Spain

== PhD Thesis

#print-bib(biblio-dir + "theses.bib")

#footer-img("/img/templo-debod.jpg", "Templo de Debod")