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

FontReach was born from a problem of not having enough information about font usage. In trying to choose a font for a project, a factor I consider is how 'trendy' it is, or how often it is seen on the web. Until the release of FontReach, we could not assess the uniqueness of a particular font on the web.

<!-- <a class="enlarge border" href="/assets/images/projects/fontreach/loader.gif">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/fontreach/loader.gif">
  FontReach CSS Isometric loader
</a> -->

<div class="Cube-wrap">
  <div class='Cube'>
    <div class='cube-face cube-face-front'>fr</div>
    <div class='cube-face cube-face-back'>o2</div>
    <div class='cube-face cube-face-left'>O</div>
    <div class='cube-face cube-face-right'>N</div>  
    <div class='cube-face cube-face-bottom'>T</div>
    <div class='cube-face cube-face-top'>#</div>
  </div>
</div>
<span class="Caption--faux">FontReach's css Isometric loader (using this site's colors)</span>

FontReach crawls the top million websites (based on Alexa), and surfaces data about font usage across the web. It allows us to answer questions like, How many sites use Proxima Nova? What is it’s rank? I can now say that Proxima is ranked as the 26th most utilized webfont; over 22,000 sites in the top million, most notably Instagram, Buzzfeed, and Flickr use it.

<div class="Note">
<h4>Update</h4>
Feb 23 - FontReach API was updated in February, 2016. In the three months since I launched FontReach, Proxima Nova is now ranked 25th most utilized webfont and over 31,470 sites in the top million. That is a 57% increase in usage over three months!
</div>

Having this type of data helps designers make more informed font decisions, but also allows us to follow font usage trends on the web. If Hoefler & Co were to release a new typeface, we can accurately track the adoption of it over the course of time.

<a class="enlarge border" href="/assets/images/projects/fontreach/home.jpg">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/fontreach/home.jpg">
  FontReach Homepage
</a>

##FontReach’s Design

**FontReach is simple.** Users are presented with a simple UI composed of input, directions, and one-click access to top fonts — only the bare minimum that allows for a user to start consuming data in seconds. Copy is concise and without distraction. The simple nature invites continued browsing.

<a class="enlarge border" href="/assets/images/projects/fontreach/search.jpg">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/fontreach/search.jpg">
  Search results for 'tre'
</a>

**Searching can be fun.** When a user types in a query, we assume that they are ready to submit their request after an 800ms period of inactivity (throttled query). In other words, if a user types in ‘Pro’ and stops for a split second, the query is submitted, and continuous, ongoing modification of the search query is allowed. The user can complete their query at their own pace, while results are updated on pause. It is surprisingly fun and rewarding.

<a class="enlarge border" href="/assets/images/projects/fontreach/fontreach-search.gif">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/fontreach/fontreach-search.gif">
  Searching for 'Proxima Nova'
</a>

**Fontreach is colorful.** Part of FontReach’s appeal is its use of gradients. Every time a font is viewed, two panels with different gradients crossfade into one another. The gradients are randomly generated based on an array of colors I curate.

<ul class="swatches">
  <li class="gradientA"><span></span></li>
  <li class="gradientB"><span></span></li>
  <li class="gradientC"><span></span></li>
  <li class="gradientD"><span></span></li>
  <li class="gradientE"><span></span></li>
</ul>

<span class="Caption--faux">FontReach Gradient Swatches</span>

**FontReach is an infinite experience.** If a user has nowhere to go, they generally leave. While FontReach is a simple search tool, it invites exploration through continuous querying. For example, let’s say a user comes to FontReach with the goal of identifying usage for the font ‘Helvetica Neue.’ After seeing the list of domains that use it, the user clicks on a domain to see the complete stack of fonts it uses, which leads to additional insights. Keyboard contorls throughout also invite continued browsing. Creating experiences that encourage continued browsing leads to a highly enjoyable, almost addictive experience. 

<a class="enlarge" href="/assets/images/projects/fontreach/helvetica-neue.jpg">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/fontreach/helvetica-neue.jpg">
  Each search query is run through the myfonts.com API in an effort to pull an actual font specimen.
</a>

##FontReach is a Domain Explorer
Outside of exploring font usage, it becomes quite interesting to see what other fonts different brands are using. In some cases, it is shocking to see the quantity of fonts loaded on certain sites. The FontReach domain interface allows for quick toggling of domains to explore brand usage. 

<a class="enlarge" href="/assets/images/projects/fontreach/domain-switch.gif">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/fontreach/domain-switch.gif">
  Quick switching of domains. (gradient removed for gif sake)
</a>

<div class="halfWrap">
  <a class="enlarge half" href="/assets/images/projects/fontreach/circular-results.jpg">
    <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/fontreach/circular-results.jpg">
    Circular being used on spotify.com
  </a><a class="enlarge half" href="/assets/images/projects/fontreach/circular-resultsB.jpg">
    <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/fontreach/circular-resultsB.jpg">
    Circular being used on mint.com
  </a>
</div>

##Getting Technical

Without delving too deeply into the technical details of FontReach, certain features should be understood. In the world of web colors, red is red and blue is blue– there is no variance in how colors are referenced. This is far from the truth when referencing fonts on the web. When embedding a font with @font-face we can name Proxima Nova ‘Fraggle Rock’ if we wanted to. With web services such as Google Fonts or Typekit, font names tend to vary from one service to the next.

As FontReach crawls the top million sites, it does its very best to look for variation in font names and intelligently combines similar font names into groups. FontReach only looks at the first font in the font-family stack in an effort to provide us with a list of fonts that are truly being used, versus aggregating fallback font data as well.

##Moving Forward
The growth of apps and digital products is staggering, and we — designers and developers — are the ones building them. Having certain information at our fingertips can better prepare us in making decisions that shape the web of the future. Be it a library, a font, or other usage information, <em>we should have the tools necessary to identify trends in how we build the modern web.</em>