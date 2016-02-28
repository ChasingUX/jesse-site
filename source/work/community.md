---
title: "DigitalOcean Community"
date: 2015-10-03
summary: "A robust Q&A and content platform for SysAdmins and developers."
link_copy: "Visit Project"
url: https://www.digitalocean.com/community
tags: regular
---

##What is the community

content for devs, comprised of sysadmin and dev tutorials, a robust q&a platform, and DO-projects. Talk a bit about each one.

At the start of the project the community existing in a very basic form, closer to a blog.

Mission: We want to leverage the brand and readership to create something that is not only a developers resource, but a community for devs.

<div class="halfWrap">
  <a class="enlarge half" href="/assets/images/projects/community/home_before.jpg">
    <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/community/home_before.jpg">
    Community homepage before
  </a><a class="enlarge half border" href="/assets/images/projects/community/home_afterB.jpg">
    <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/community/home_afterB.jpg">
    Community homepage after
  </a>
</div>

##What we already know about the site usage
- gets lots of traffic
- quality of writing is revered
- 90% traffic flows through google from amaze SEO
- homepage is almost irrelevant, not yet a destination
- mobile usage is higher than other product, so experience just be optimized for mobile

##Where we want to go (GOALS)
- Create a community (a user-base of involved users to sharing their questions, projects, comments, and tutorials
- same quality tutorials, vastly improved consumption and editorial control.
- Introduction of profiles/accounts,  rich notifications / preferences
- Q&A Platform


##Browsing via Search
- The community holds a TON of content, classified by tags. Best way to find a particular thing is to search for it.
- We built a powerfully tuned search tool that surfaces content accurately and quickly.
- Talk about how the search works / Algolia

<a class="enlarge border" href="/assets/images/projects/community/searchCloseup.gif">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/community/searchCloseup.gif">
</a>

<div class="halfWrap">
  <a class="enlarge half border" href="/assets/images/projects/community/questions-tablet.jpg">
    <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/community/questions-tablet.jpg">
    Community Q&A
  </a><a class="enlarge half border" href="/assets/images/projects/community/projects-tablet.jpg">
    <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/community/projects-tablet.jpg">
    Community Projects
  </a>
</div>

{two smaller images of questions and  projects search, perhaps mobile closeups}

###Filtering
Easily find content that is popular, trending or a part of a series.

{gif of filtering}

###Search Results
Show the results, the metadata

###Tags
During a previous iteration of the community, the tags were available via the search interface, but we found that users had a very particular need and were not using tags. While tags are still a very important part of the search alrithm and tutorial classification, it does not need to be used in locating content. If a user wants to search for `nginx` on `centos 7` then we will deliver them the exact content they need.

<a class="enlarge border" href="/assets/images/projects/community/tags.jpg">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/community/tags.jpg">
</a>

##Consuming Tutorial Content
- distraction-free, easy-to-follow content.
- the nature of the content involves going back and forth from a terminal to the content
- code and examples must look good. This requires a super rich and flexible editorial control (link to that section, 'more on that later’).

{Image of tutorial header and first paragraph}

###Table of Contents
- Tutorials are often very long so a table of contents functionality exists for jumping to relevant sections
{gif of toggling TOC and sliding to section}


###Translate


<div class="halfWrap">
  <a class="enlarge half border" href="/assets/images/projects/community/toc.gif">
    <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/community/toc.gif">
    Table of Contents in action
  </a><a class="enlarge half border" href="/assets/images/projects/community/translate.gif">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/community/translate.gif">
   Translate
  </a>
</div>




###The Heart
Is it a bookmark? Is it appreciation? Both! Because they are typically correlated, we wanted a simple heart to show your love.

<a class="enlarge border" href="/assets/images/projects/community/heart.jpg">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/community/heart.jpg">
  Before and after states of hearts, header and footer
</a>

##Commenting
- Built a commenting system from scratch.
- wysiwyg Goals
     - markdown supported
     - oriented towards code
     - syntax highlighting, with language support
     - instant previewing
     - inline notification of subscribe

{gif of complex wysiwyg markdown translation into preview and publish}

- Commenting Goals
     - Unlimited Threading
     - driven by social identity (profile)
     - Simple Actions: Heart, Reply, Report
     - Clear simple design, high readership for 1 or 1000 comments

{image of good looking comment thread}

##Q&A Platform
-While consuming tutorial content may lead to questions, the q&a section provides functionality that allows users to ask a question for the community of devs and sysadmins to answer. The rate of answer is {get stat from etel}.

-The Questions homepage surfaces the news questions, and the search allows for immediate filtering of relevant questions.

{pic of questions homepage}

###Ask a question
- process is really simple. A user can fully preview using the same wsiwig that powers comments, but with more advanced controls like h1-h3 headers. After submission it is run through akismet spam filter. If it passes, it publishes immediately. If fails, it is held for moderation (more on moderation experience later)

{image of ask question page with content filled out}

###Question Format
- Format is very similar to stack overflow in that there is the question, and a series of answers. A user can comment on the question, answer the question, comment on an answer, or comment on a comment.
 - Unlike SO there is no selected answer, but hearts are given to show appreciation. We are not trying to game it, but rather invite devs to share their perspective and let the community decide on valuable content based on hearting

{image of new image I worked on, sent to jordana of questions page}

{two images of answers and comments on them}

##Projects
- Projects showcase tools that devs build to integrate with the DO platform.
- Split between services, API wrappers, Apps, and other integrations

{image of projects screen}

On the projects page, users can interact with one another using comments, similar to a github project page.

{img of project show page}

## User Management
- As a user, it must be easy to manage your tutorials, questions, comments, and preferences.

{image of header with account dropdown or gif of animation opening}

###Profile
- user information
- keeps track of all your content

{image of profile screen}

### Notifications & Subscriptions
- Notifications are sent to a user if they are subscribed to content and another user has commented or answered it. A user subscribes to content by manually subscribing (via toggle) or by creating content. IE- if a user comments, they are subscribed to all replies. If a user asks a question, they are subscribed to all answers and comments.

{image of subscribe box checked on a tutorial or question}

- Users can update their notification settings in the settings area.

{gif of notifications settings screen, changing frequency}

Interacting with notifications is held within the dropdown. The notifications are considered ‘acknowledged’ if they are viewed by the user. So in a long scrolling list, the background color would fade to white as it scrolls into viewport, affording the acknowledgement.

{image of notifications dropdown}

Subscriptions can always be managed in one place on the subscriptions screen

{image of subscriptions screen}

<!-- ##Moderator Experience
While this is built for the community, it also includes a custom CMS for our community team to manage its content
- Spam management
- User Management
- Content management
- Leaderboards
- Report Generation

{image of moderator dashboard reports tool} -->