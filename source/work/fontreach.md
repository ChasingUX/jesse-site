---
title: "FontReach"
date: 2015-10-03
summary: "FontReach crawls the top million websites and surfaces data about font usage across the web."
link_copy: "Search FontReach"
url: http://libscore.com/
article: https://insidedigitalocean.com/fontreach-font-usage-visualized-b6c5b6294787#.bm37436ce
tags: featured
color: blue
---

FontReach was born from a problem of not having enough information about font usage. In trying to choose a font for a project, a factor I consider is how 'trendy' it is, or how often it is seen on the web. Until the release of FontReaech, we could not assess the uniqueness of a particular font on the web.

[Img of ???]

FontReach crawls the top million websites (based on Alexa), and surfaces data about font usage across the web. It allows us to answer questions like, How many sites use Proxima Nova? What is it’s rank? I can now say that Proxima is ranked as the 26th most utilized webfont; over 22,000 sites in the top million, most notably Instagram, Buzzfeed, and Flickr use it.

<div class="Note">
<h4>Update</h4>
Feb 23 - FontReach API was updated in February, 2016. In the three months since I launched FontReach, Proxima Nova is now ranked 25th most utilized webfont and over 31,470 sites in the top million. That is a 57% increase in usage over three months!
</div>

Having this type of data helps designers make more informed font decisions, but also allows us to follow font usage trends on the web. If Hoefler & Co were to release a new typeface, we can accurately track the adoption of it over the course of time.

##FontReach’s Design

**FontReach is simple.** Users are presented with a simple UI composed of input, directions, and one-click access to top fonts — only the bare minimum that allows for a user to start consuming data in seconds. Copy is concise and without distraction. The simple nature invites continued browsing.

[img of homepage]

**Searching can be fun.** When a user types in a query, we assume that they are ready to submit their request after an 800ms period of inactivity (throttled query). In other words, if a user types in ‘Pro’ and stops for a split second, the query is submitted, and continuous, ongoing modification of the search query is allowed. The user can complete their query at their own pace, while results are updated on pause. It is surprisingly fun and rewarding.

[gif of searching]

**Fontreach is colorful.** Part of FontReach’s appeal is its use of gradients. Every time a font is viewed, two panels with different gradients crossfade into one another. The gradients are randomly generated based on an array of colors I curate.

[two rows of gradient swatches]

**Keyboard Controls throughout.** While not a requirement, FontReach is best explored using your keys.

[gif of search results] (can we super impose keys?)

**FontReach is an infinite experience.** If a user has nowhere to go, they generally leave. While FontReach is a simple search tool, it invites exploration through continuous querying. For example, let’s say a user comes to FontReach with the goal of identifying usage for the font ‘Helvetica.’ After seeing the list of domains that use it, the user clicks on a domain to see the complete stack of fonts it uses, which leads to additional insights. Creating experiences that encourage continued browsing leads to a highly enjoyable, almost addictive experience.

[img of dual panel] Search -> Font View -> Domain View -> New Font View -> etc.

##The little big details.
In designing FontReach, I wanted to focus on the small details and microinteractions to make the experience memorable. Here are a few:

FontReach uses a css-driven 3d transformed isometric cube that rotates during the loading experience.

[gif of loader]

Each search query is run through the myfonts.com API in an effort to pull an actual font specimen.

[img of font specimen, comic sans]

##Getting Technical

Without delving too deeply into the technical details of FontReach, certain features should be understood. In the world of web colors, red is red and blue is blue– there is no variance in how colors are referenced. This is far from the truth when referencing fonts on the web. When embedding a font with @font-face we can name Proxima Nova ‘Fraggle Rock’ if we wanted to. With web services such as Google Fonts or Typekit, font names tend to vary from one service to the next.

As FontReach crawls the top million sites, it does its very best to look for variation in font names and intelligently combines similar font names into groups. FontReach only looks at the first font in the font-family stack in an effort to provide us with a list of fonts that are truly being used, versus aggregating fallback font data as well.

##Moving Forward
The growth of apps and digital products is staggering, and we — designers and developers — are the ones building them. Having certain information at our fingertips can better prepare us in making decisions that shape the web of the future. Be it a library, a font, or other usage information, <em>we should have the tools necessary to identify trends in how we build the modern web.</em>