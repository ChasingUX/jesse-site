---
title: "Libscore"
date: 2016-2-22
summary: "FontReach crawls the top million websites and surfaces data about font usage across the web."
link_copy: "Visit Libscore"
url: http://libscore.com/
article: https://medium.com/@Shapiro/introducing-libscore-com-be93165fa497
tags: featured
color: green
---

As a JavaScript developer it is difficult to identify how your libraries are being used across the web. Lets say that you release an open source JavaScript library and months after its release you wish to assess its adoption and usage on the web. Historically, you might look at the number of stars or downloads it has on GitHub. But we are missing some vital information - the sites that are actually using your library on their production code base. Developers are building libraries in a vacuum, as they have no visibility into who <em>who</em> is using their code.

<blockquote>
  Developers are building libraries in a vacuum, as they have no visibility into who is using their code. 
</blockquote>

Libscore aims to solve this problem by identifying which sites are using the most popular JavaScript libraries. Every month, Libscore scans the top million sites on the web to determine which JavaScript libraries are being used on each page. At the end of each crawl, we are left with a heaping pile of valuable data which represents the current state of JavaScript library usage on the web today. Libscore allows us to interact with this data.

<a class="enlarge border" href="/assets/images/projects/libscore/home.jpg">
  ![Alt text](/assets/images/projects/libscore/home.jpg)
  Libscore Homepage & Search UI
</a>

Lets take a look at an example of popular JavaScript animation library, Velocity,js, created by Julian Shapiro (who happens to be a cofounder of Libscore). Prior to Libscore, Julian had not the slightest idea that his library was being used on over 4000 of the top million sites, let alone bohemoth sites such as Tumblr, Forbes, and Gap. If Julian were to look at the Velocity.js libscore page, he would see that his library is being used on one of the top fifty sites on the web (based on Alexa’s ranking) and it has incresed in popularity month over month over the last 6 months!

<a class="enlarge border" href="/assets/images/projects/libscore/velocity.jpg">
  ![Alt text](/assets/images/projects/libscore/velocity.jpg)
  Search results for $.Velocity animation library
</a>

<a class="enlarge border half" href="/assets/images/projects/libscore/velocity-visual.jpg">
  ![Alt text](/assets/images/projects/libscore/velocity-visual.jpg)
  Velocity.js usage over time
</a><a class="enlarge border half" href="/assets/images/projects/libscore/velocity-tooltip.jpg">
  ![Alt text](/assets/images/projects/libscore/velocity-tooltip.jpg)
  Velocity.js monthly penetration
</a>

This information is eye-opening and reports useful information for someone who has spent months sweating over a library they have been developing. As a JavaScript developer, I can now make informed decisions around what to do with my library. Should I continue maintaining it? Should I get in touch with larger adopters and offer my support? Should I focus more of my time and energy on this project? Greater insight into library adoption and usage leads to a stronger open source community and a far more informed developer.

<blockquote>
  Greater insight into library adoption and usage leads to a stronger open source community.
</blockquote>

<!-- ## Libscore’s UI
Before we dive into Libscore’s features, we must understand how it was built. Libscore is a single-page app, driven by queries to the API and -->

# Libscore’s Features

Libscore was designed to be minimal and straightforward, but also extremely flexible in how a user chooses to interact with it. The interface is driven by a search field which accepts different types of inputs: libraries, scripts, and domains. There are also three quick links which display the top libraries, scripts, and fonts on the web today.

## Comprehensive Search
The Libscore API holds the variables that a library exposes itself as e.g. jQuery, Modernizr, $.ui, or $.fn.fancybox. Because Libscore uses the lib variable versus the branded name, it is important that the search helps you find a particular library / variable. For this reason, we built a search API that very quickly returns a list of matched results, be it a script or a library. The dropdown of search results is available throughout the entire experience, and is driven by the arrow keys.

<a class="enlarge border" href="/assets/images/projects/libscore/search.jpg">
  ![Alt text](/assets/images/projects/libscore/search.jpg)
  Libscores Search Dropdown
</a>

## Visualized Data
Lets take a look at David DeSandro’s grid layout library, [Masonry](http://libscore.com/#Masonry). Masonry has been around for years and is used by about 39,000 sites (in the top million). Over the last 6 months, Masonry has climbed in popularity by a few percentage points, month over month. Last month, it increased by 2.05%. This steady growth shows Masonry as a reliable, rock of a library. It has a incredibly high rate of usage, and is seemingly impervious to the many new Masonry alternatives like Salvatorre. If this were a stock, it would be a low-risk, promising investment that I would sink my money into!

<a class="enlarge border" href="/assets/images/projects/libscore/masonry-visual.jpg">
  ![Alt text](/assets/images/projects/libscore/masonry-visual.jpg)
  Masonry.js usage over time
</a>

## Library Usage & Domain Ranking
While seeing the visual growth or decline of a library is an great indicator of general popularity (or lack thereof), it is equally important to see which sites consume a particular library. When we hear of a domain like cnn.com or eBay.com we have a relatively good idea of it’s popularity - obviously massive. Because libscore scans the top million sites and you most definitely have not heard of the top million sites, we display the relative rank. Seing library usage relative to a domain's rank starts to paint a nice picture of how a library is used.

<a class="enlarge border" href="/assets/images/projects/libscore/masonry.jpg">
  ![Alt text](/assets/images/projects/libscore/masonry.jpg)
  Masonry usage trends vs domain usage
</a>

In the case of Masrony, it is used by many of the top 1000 sites.  David DeSandro might take a look at Masonry on Libscore and for the first time ever, see that it is being used by Target, Home Depot, All Recipes, Food Network, Urban Dictionary, etc. As a developer, this feels like a gift after so much effort put forth into building and maintaining a library. David might rest easy and know that his hard work is paying off.

<blockquote>As a developer, this feels like a gift after so much effort put forth into building and maintaining a library.</blockquote>

From this list of domains, I can click into one to see an exhaustive list of libraries that domain uses. As a developer, you can see if you are in good company. And yes, Masonry is in great company :)

<a class="enlarge border" href="/assets/images/projects/libscore/domain.jpg">
  ![Alt text](/assets/images/projects/libscore/domain.jpg)
  Domain explore: target.com
</a>

## Library Comparison
While data specific to a particular library is useful, the real power of Libcore lies in the comparison of one library to the next. As a developer, I might want to see how my library stacks up to a competitor or a new library that has entered market. In the case of Masrony, there are many libraries that claim to have similar functionality. David DeSandro might compare his library Masonry to other libraries like Isotope and Packery. While both of these libraries have been growing month over month, so has Masonry. We might conclude that the general trend of brick-layouts is growing on the web. But from David’s perspective, he now understands that while similar libraries are improving, they are not taking a share away from Masonry’s rate of usage.


<a class="enlarge border" href="/assets/images/projects/libscore/compare.gif">
  ![Alt text](/assets/images/projects/libscore/compare.gif)
  Comparing Isotope to Masonry
</a>

<a class="enlarge border half" href="/assets/images/projects/libscore/masonry-compareA.jpg">
  ![Alt text](/assets/images/projects/libscore/masonry-compareA.jpg)
  Masonry vs. Isotope
</a><a class="enlarge border half" href="/assets/images/projects/libscore/masonry-compareB.jpg">
  ![Alt text](/assets/images/projects/libscore/masonry-compareB.jpg)
  Masonry vs. Isotope vs. Packery
</a>



Libscore offers a UI to compare any library against any library using the same pattern which powers the initial search. After a user selects a library to compare to, the chart draws a new trend line on top of the previous libraries data visualization. It allows for an unlimited amount of comparisons which can be useful for understanding the state of any type of library.

<!-- <a class="enlarge border" href="/assets/images/projects/libscore/compare.jpg">
  ![Alt text](/assets/images/projects/libscore/compare.jpg)
  insert screen of dropdown
</a> -->

## Top Performers
In addition to Libscore’s library-specific data visualization, it also showcases popularity lists for the top domains, scripts, and domains. While the utility of this functionality is limited, this provides us with useful information on the state of the web today. It is no surprise that jQuery takes home the trophy for top library, nor do we expect this list to be eye-opening. The top libraries and scripts should be expected, as they represent proven libraries that have stood the test of time.

<a class="enlarge border" href="/assets/images/projects/libscore/top-libs.jpg">
  ![Alt text](/assets/images/projects/libscore/top-libs.jpg)
  Top JavaScript libraries on the web
</a>

## Future of Libscore
Libscore has a bright future. In early February, we [open sourced](https://medium.com/@jhchen/open-sourcing-libscore-the-javascript-tracker-b41eff3b8e36#.hbezgg58f) the technology powering Libscore, in hopes that developers will branch off of the codebase, and build on top of it. For me, I am excited about forming a much greater understanding of general trends on the web. For instance, creating an experience that showcases data around a particular front-end library pattern, like content sliders. We see sliders all over the web, but rarely do we dive into the source to identify the particular library powering it. If we could see the top 50 slider libraries and how their usage has changed month over month, we would form a thorough understanding of how the web consumes JavaScript sliders. 

Creating ‘microsites’ for each one of these trends could be a highly useful source for any one segment of libraries. If I am developing a new site and have a slider need, I could use my go-to favorite, or I can go to the Libscore slider microsite to form a much greater understanding of trends within this space. This information might persuade me to try something new, or popular within my field. Exciting stuff.