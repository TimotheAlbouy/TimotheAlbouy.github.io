#import "../utils/talb-web.typ": talb-web
#show: talb-web

= Blog Posts

// Replace posts.json by directory walking when it's implemented
// Ref: https://github.com/typst/typst/issues/2123

#let posts = json("../posts.json")
#let date-fmt = "[month repr:short] [day], [year]"

#for post in posts {
  import post + "/index.typ": title, created-date
  
  [#created-date.display(date-fmt) #link(post, title)]
}