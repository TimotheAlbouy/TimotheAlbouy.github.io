+++
title = "Misc"
menu = "main"
+++

My Erdős number is 3 (Paul Erdős → Abraham Zaks → Michel Raynal → Timothé Albouy).

This website was created in [Hugo](https://github.com/gohugoio/hugo), using the [ʕ•ᴥ•ʔ Bear Blog template](https://github.com/janraasch/hugo-bearblog).

Here are a few projects I developed.

## [Marksman](/apps/marksman)

⚠️ the demo is currently broken, I'm trying to fix it ASAP ⚠️

Marksman in an algorithm which translates random strings of bits (typically public keys, hashes, content identifiers, onion addresses...) into human-readable names.
I'm leaving it at that, as I may write a blog post about it in the near future.
<!-- This aims to bridge the gap between  -->

<!-- But even though these identifiers may be "human-readable" in the sense that they can be pronounced more easily than the ASCII encoding of the bitstring, we cannot really say that they are very easy to memorize, compared to famous domain names such as wikipedia.org.
The problem is Even though I put  in quotes because, given a long bitstring, the resulting name can be also be quite long.
I see two possibilities to address this problem:

1. **Artificially reducing the size of names:**
For instance, this could be done by converting only the first $n$ bits instead of the whole bitstring. for instance Sacrificing the bijection
In practice, it would mean that we cannot have a two-way translation

However, that seems to be unavoidable, because the name must have at least the same Shannon entropy as the bitstring, otherwise there is loss of information and you don't have a bijection between the names and bitstrings.

if you want to be able to have 
and you cannot have  -->

## [MemoMix](/apps/memomix)

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
The name _MemoMix_ comes from the fact that we _mix_ the groups by accounting for the _memory_ of past group compositions.
This history of past group compositions is stored in the browser's local storage.
  
## [Interfaxim](/apps/interfaxim/Saint_Sixte.xml)

Interfaxim is a tool capable of transforming digitized ancient manuscripts into interactive webpages.
Technically speaking, Interfaxim provides a XSLT file (called `interfaxim.xsl`) that transforms a XML TEI document (the standard encoding for digital humanities) into an HTML interactive facsimile (hence _inter-facsim_ → _interfaxim_).
This interactive facsimile can be accessed by opening some XML TEI document integrating Interfaxim on a modern browser.
The above link showcases Interfaxim on an excerpt of the medieval document _Vie de saint Sixte_.

<br>
<div style="width: 100%; aspect-ratio: 16/9; overflow: hidden; border-radius: 5px;">
	<img style="width: 100%; height: 100%; object-fit: cover;"
		title="Jardin de l'Hôtel de Limur" src="/img/vannes.jpg"/>
</div>
