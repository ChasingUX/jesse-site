---
title: "DigitalOcean Cloud"
date: 2015-3-30
summary: "A simple cloud hosting platform built for developers by developers."
link_copy: "Visit Cloud"
url: http://cloud.digitalocean.com/
tags: regular
---

##Prologue
The DigitalOcean Cloud is a highly complex product, which warrants a series of case studies with singular focus. In the coming months, I will be releasing detailed case studies covering the following aspects of cloud: user onboarding, team accounts, abuse flow, objects and networks, rails to ember conversion, DNS, floating IPs, and the Droplet experience.

Below is a deliberate oversimplification of the product by highlighting the information architecture on a per-page basis. Research, prototyping, flow work, and learnings will be released in future cloud case studies, as listed above. 

##The early days
When I started working at DigitalOcean in September of 2013, our product had a reputation for being an extremely simple hosting platform. It was known for it's ease-of-use, SSD drives, and quick spin-up time. 

<a class="enlarge border" href="/assets/images/projects/digitalocean/old_cp.jpg">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/old_cp.jpg">
  DigitalOcean control panel in early 2013
</a>

Our competition was comprised of major tech jaugernauts – Amazon, Google, Microsoft, and Rackspace. These companies provided a far more robust feature set, which was believed neccesary to compete in this space. But the competition did not place much focus on the UX and aesthetic of the interface. As their product offerings grew, the experiences grew more unwieldy and difficult to use.

##A simple approach, today
DigitalOcean had a pretty outragious opportunity. We could disrupt this space by providing an extremely simple and straightforward experience designed to make the complex task of managing infrastructure easier. While we were already revered for our simple approach, there was much room for streamlining the overall experience and making infrastucture management a much easier pill to swallow. Now, we have climbed the ranks to the second largest hosting company in the world, based on <a href="http://news.netcraft.com/archives/2015/05/01/digitalocean-becomes-the-second-largest-hosting-company-in-the-world.html" target="_blank">NetCraft's data</a>.


<a class="enlarge border" href="/assets/images/projects/digitalocean/onboarding.jpg">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/onboarding.jpg">
  Signing up for DigitalOcean only requires email activation and billing info.
</a>

<blockquote>
Now, we have climbed the ranks to the second largest hosting company in the world.
</blockquote>

<div class="Note">
  <h4>Cloud Hosting 101</h4>
  <p>Without going into the highly technical details of Cloud Hosting, we can think of a cloud as a combination of compute, networking, and storage resources created on virtualized servers. Servers are provisioned for heavy computation, communication, and storage of assets and databases.</p>

  <p>While DigitalOcean is diligently working to build out storage and networking features today, our current product offering is based on the Droplet - a compute instance. This case study focuses mainly on the Droplet, less networking and storage.</p>
</div>

##Cloud Information Architecture
The Cloud's information architecture is designed to be supportive of our primary product – the Droplet. As we build out storage and networking products, the architecture will likely change. Let's break down each section of the control panel:

<a class="enlarge border" href="/assets/images/projects/digitalocean/ia.jpg">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/ia.jpg">
  Control Panel IA Diagram
</a>

1. **Droplets:** Create a new Droplet, or manage & monitor existing Droplets. Each Droplet has its own management page where actions can be performed, servers can be reprovisioned and resized, and users can monitor server performance. This is the core of our product.
2. **Images:** An image is simply a backup of a Droplet at a point in time that can be restored or easily transitioned into a new Droplet. 
3. **Networking:** The networking section allows users to set up Floating IPs, which are IP addresses that can be instantly moved from one Droplet to another. This is generally used for highly available setups. In addition, the networking page allows users to add domains & configure DNS records.
4. **API:** Many large customers configure their app to size up or size down their infrastructure depending on server load using the DigitalOcean API. The API section allows users to create new apps and tokens, and manage their access & permissions.
5. **Support:** The support section attempts to help answer user's questions by surfacing documentation and community tutorials. If the problem persists, a user can open a ticket and await a response from our support staff.
6. **Settings:** User and team settings, billing, referrals, security, and notifications are found here. These settings do not relate to infrastructure, but are user and team-specific settings.

##Droplet Create
The early DigitalOcean marketing language read, "Spin up a Droplet in 55 seconds or less." While this sounded like a salesy hook, it was very much true. The Droplet create process is quick, intuitive, and in my biased opinion, enjoyable! 

<a class="enlarge border" href="/assets/images/projects/digitalocean/droplet_create.jpg">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/droplet_create.jpg">
  Droplet Create page in its entirely
</a>

<h4 class="ribbon">Choose an Image</h4>
The create process starts by askng the developer what they would like to build. A user can select a raw linux distro (and a pertaining version), a one-click app like Wordpress or Drone, or a pre-existing backup or snapshot. After this process, a user selects the size of server, where it lives, and final options such as naming and SSH keys.

<div class="halfWrap">
  <a class="enlarge border half" href="/assets/images/projects/digitalocean/choose_image.jpg">
    <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/choose_image.jpg" >
    Linux Distribution images
  </a><a class="enlarge border half" href="/assets/images/projects/digitalocean/choose_imageB.jpg">
    <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/choose_imageB.jpg">
    Pre-made stacks of popular applications
  </a>
</div>


<!-- <a class="enlarge border" href="/assets/images/projects/digitalocean/createB.gif">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/createB.gif">
  Droplet Create Process
</a> -->

##Droplet Management
Droplets are managed from a central interface that serves as a linear index of a user's entire infrastructure setup. While it does not show relationships, networks, and tagging, these products and features will be shipping soon! For example, if I have an app that uses 2 database servers, 10 load balanced compute servers, and a Floating IP, I want to see a visual interpretation of these relationships.

The index is searchable and filterable, and is primarily used as a dashboard for diving into particular Droplet pages.

<a class="enlarge border" href="/assets/images/projects/digitalocean/droplet_index.jpg">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/droplet_index.jpg">
  The cloud home today – a searchable & sortable list of the user's Droplets
</a>

<h4 class="ribbon">Individual Droplet</h4>
The individual Droplet page allows a user to monitor or take action on their Droplet. The graphs tab is shown by default, so system administrators can quickly and easily monitor the performance and load of their servers. 

Users can also resize, rebuild, backup, access the console, or destroy their Droplet (amongst other possibilities). The centralized Droplet interface makes it relatively easy and quick to take action on a Droplet.

<a class="enlarge border" href="/assets/images/projects/digitalocean/manage_droplet_snapshot.jpg">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/manage_droplet_snapshot.jpg">
  Droplet Management Screen - new Snapshot panel
</a>

##Images
During Droplet creation, we can enable backups which automatically create an image of that Droplet on a routine schedule. On the Images page we can track all of our backups or create new, on-the-fly snapshots of the Droplet.


<a class="enlarge border" href="/assets/images/projects/digitalocean/images.jpg">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/images.jpg">
  Droplet Images - Create or manage snapshots
</a>

<div class="quadWrap">
  <a class="enlarge quad border" href="/assets/images/projects/digitalocean/images1.jpg">
    <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/images1.jpg">
  </a><a class="enlarge quad border" href="/assets/images/projects/digitalocean/images2.jpg">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/images2.jpg">
  </a><a class="enlarge quad border" href="/assets/images/projects/digitalocean/images3.jpg">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/images3.jpg">
  </a><a class="enlarge quad border" href="/assets/images/projects/digitalocean/images4.jpg">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/images4.jpg">
  </a>
</div> 
<span class="Caption--faux noHover">Create a Snapshot from the Images page</span>

The process is simple: we choose a preexisting powered-down Droplet, give it a name, and a copy is asynchronously made and automatially powered back on.

<h4 class="ribbon">Contextual Menus</h4>

After an image is created, we keep the interface simple by tucking away the actions into a contextual menu. Here we can transfer an image to another region or user. 

<div class="halfWrap">
  <a class="enlarge half border" href="/assets/images/projects/digitalocean/contextual1.jpg">
    <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/contextual1.jpg">
  </a><a class="enlarge half border" href="/assets/images/projects/digitalocean/contextual.gif">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/contextual.gif"></a>
</div>
<span class="Caption--faux">Contextual sliding menus for more actions</span>

We chose to use an interaction pattern that animates the menu into the targeted panel. This pattern creates a sense of context by animating the container height and width to that of its new contents, simultaniously sliding in the new panel.

##Future
This is just a small sampling of UI patterns and screens of the DigitalOcean product. While this doesn't include any flow work or heavy product design thinking, as I previously mentioned, I will be creating additional targeted case studies which break down the thought, research, and results of the design decisions.