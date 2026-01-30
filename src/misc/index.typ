#import "../utils/talb-web.typ": talb-web, footer-img
#show: talb-web

My Erdős number is 3 (Paul Erdős → Abraham Zaks → Michel Raynal → Timothé Albouy).

This website was created using #link("https://typst.app/")[Typst] and a minimalist style inspired by #link("https://bearblog.dev/")[ʕ•ᴥ•ʔ Bear Blog].
The website uses the #link("https://indestructibletype.com/Jost.html")[Jost\*] font, a geometric sans-serif and modern successor to Futura.
(There is actually a Jost\* style with the single story "a"!)

To write comments on the blog posts, you need to connect to a Github account (the comments are operated by #link("https://giscus.app/")[Giscus]).
If Javascript is disabled, the comments on the blog posts won't appear, but the rest of the website should work perfectly.

Here are a few projects I developed.

== #link("/marksman")[Marksman]

⚠️ the demo is currently broken, I'm trying to fix it ASAP ⚠️

Marksman in an algorithm which translates random strings of bits (typically public keys, hashes, content identifiers, onion addresses…) into human-readable names.
I'm leaving it at that, as I may write a blog post about it in the near future.

== #link("/apps/memomix")[MemoMix]

⚠️ the demo is currently broken, I'm trying to fix it ASAP ⚠️

In a nutshell, MemoMix is an algorithm for creating randomized groups.
Let's take an example: every wednesday, you invite 20 friends for dinner, but you only have 4 tables of 5 seats each.
But the thing is, some of your friends are mad at each other and do not want to be at the same table.
Conversely, some couples among your friends absolutely want to be together.
Moreover, you want the composition of tables to change randomly from one week to the next, so that each attendee is not always grouped with the same people.

I initially developed MemoMix for this very purpose (managing the table composition for the weekly dinners of a student residence), but I suspect that there may be other applications for this tool.
It seems that this is a special case of SAT problem, and thus it is NP-complete and computationally intensive to solve optimally.
But I still managed to find a satisfactory heuristic that solves it in a good-enough manner.

You can access an online demo of MemoMix using the above link.
The name MemoMix comes from the fact that we mix the groups by accounting for the memory of past group compositions.
This history of past group compositions is stored in the browser's local storage.

== #link("/apps/interfaxim/Saint_Sixte.xml")[Interfaxim]

Interfaxim is a tool capable of transforming digitized ancient manuscripts into interactive webpages.
Technically speaking, Interfaxim provides a XSLT file (called `interfaxim.xsl`) that transforms a XML TEI document (the standard encoding for digital humanities) into an HTML interactive facsimile (hence inter-facsim → interfaxim).
This interactive facsimile can be accessed by opening some XML TEI document integrating Interfaxim on a modern browser.
The above link showcases Interfaxim on an excerpt of the medieval document Vie de saint Sixte.


#footer-img("/img/vannes.jpg", "Jardin de l'Hôtel de Limur")