#let header(title, sections) = {
  show: html.header
  // link("/", heading(title))
  heading(title)
  html.nav({
    for (name, path) in sections.pairs() {
      link(path, name)
    }
  })
}

#let footer-img(path, title) = html.div(
  style: "width: 100%; aspect-ratio: 16/9; overflow:hidden; border-radius: 5px; margin-top: 60px",
  html.img(src: path, title: title,
    style: "width: 100%; height: 100%; object-fit: cover",
  )
)

#let giscus-comments(giscus-id) = {
  html.elem("script", attrs: (
    src: "https://giscus.app/client.js",
    data-repo: "TimotheAlbouy/TimotheAlbouy.github.io",
    data-repo-id: "MDEwOlJlcG9zaXRvcnkzNDk4Njc3ODI=",
    data-category: "Announcements",
    data-category-id: "DIC_kwDOFNqPBs4C1md9",
    data-mapping: "specific",
    data-term: giscus-id,
    data-strict: "0",
    data-reactions-enabled: "1",
    data-emit-metadata: "0",
    data-input-position: "top",
    data-theme: "noborder_gray",
    data-lang: "en",
    crossorigin: "anonymous",
    async: "true"
  ))
}

#let talb-web(
  body
) = {
  import "mathyml/lib.typ": to-mathml
  show math.equation: to-mathml

  let config = json("../config.json")
  let title = config.at("title")
  let sections = config.at("sections")

  html.html({
    html.head({
      html.meta(charset: "utf-8")
      html.meta(name: "viewport", content: "width=device-width, initial-scale=1")
      html.link(rel: "icon", type: "image/x-icon", href: "/img/favicon.png")
      html.title(title)
      html.link(rel: "stylesheet", href: "/talb-web.css")
    })
    html.body({
      header(title, sections)
      html.main(body)
    })
  })
}



#let talb-post(
  title, giscus-id, created-date, modified-date: none,
  body
) = {
  show: talb-web

  heading(title)
  
  let date-fmt = "[month repr:short] [day], [year]"
  [_Posted on #created-date.display(date-fmt)_]
  if modified-date != none [_, last modified on #modified-date.display(date-fmt)_]

  body

  giscus-comments(giscus-id)
}
