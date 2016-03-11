---
title: "DigitalOcean Cloud"
date: 2015-3-30
summary: "A simple cloud hosting platform built for developers by developers."
link_copy: "Visit DO"
url: http://cloud.digitalocean.com/
tags: regular
---

##Prologue
The DigitalOcean cloud is a highly complex product, which warrants a series of case studies with singular focus. In the coming months, I will be releasing detailed case studies covering the following aspects of cloud: user onboarding, team accounts, abuse flow, objects and networks, rails to ember conversion, DNS, floating IPs, and the Droplet experience.

Below is a deliberate oversimplification of the product by highlighting the information architecture on a per-page basis. Research, prototyping, flow work, and learnings will be released in future cloud case studies, as outlined above. 

##The early days
When I started working at DigitalOcean in September of 2013, our product had a reputation for being an extremely simple hosting platform. It was known for it's ease-of-use, SSD drives, and quick spin-up time. 

<a class="enlarge border" href="/assets/images/projects/digitalocean/old_cp.jpg">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/old_cp.jpg">
  DigitalOcean control panel in early 2013
</a>

Our competition was comprised of major tech jaugernauts – Amazon, Google, Microsoft, and Rackspace. These companies provided a far more robust feature set, which was believed neccesary to compete in this space. But the competition did not place much of a focus on the UX and aesthetic of the interface. As their product offering grew, the experiences grew more complex.

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
  <p>Without going into the highly technical details of cloud hosting, we can think of a cloud as a combination of compute, networking, and storage resources created on virtualized servers. Servers are provisioned for heavy computation, communication, and storage of assets and databases.</p>

  <p>While DigitalOcean is diligently working to build out storage and networking features today, our current product offering is based on the Droplet - a compute instance. This case study mainly focuses on the Droplet (compute), less networking and storage.</p>
</div>

##Cloud Information Architecture
We will only focus on a few of these areas, most notably, droplet, images, and networking.

<a class="enlarge border" href="/assets/images/projects/digitalocean/ia.jpg">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/ia.jpg">
  Control Panel IA Diagram
</a>

##Droplet Create

<a class="enlarge border" href="/assets/images/projects/digitalocean/droplet_create.jpg">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/droplet_create.jpg">
  Droplet Create Page
</a>

<!-- <a class="enlarge border" href="/assets/images/projects/digitalocean/createB.gif">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/createB.gif">
  Droplet Create Process
</a> -->

##Droplet Management

<a class="enlarge border" href="/assets/images/projects/digitalocean/droplet_index.jpg">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/droplet_index.jpg">
  The cloud home today – a searchable & sortable list of the user's Droplets
</a>

<a class="enlarge border" href="/assets/images/projects/digitalocean/manage_droplet_snapshot.jpg">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/manage_droplet_snapshot.jpg">
  Droplet Management Screen - new Snapshot panel
</a>


##Images

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

##Contextual Menus

<div class="tripletWrap">
  <a class="enlarge triplet border" href="/assets/images/projects/digitalocean/contextual1.jpg">
    <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/contextual1.jpg">
  </a><a class="enlarge triplet border" href="/assets/images/projects/digitalocean/contextual2.jpg">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/contextual2.jpg">
  </a><a class="enlarge triplet border" href="/assets/images/projects/digitalocean/contextual3.jpg">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/contextual3.jpg">
  </a>
</div> 
<span class="Caption--faux">Contextual sliding menus for more actions</span>



##Networking

<div class="tripletWrap">
  <a class="enlarge triplet border" href="/assets/images/projects/digitalocean/networking1.jpg">
    <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/networking1.jpg">
  </a><a class="enlarge triplet border" href="/assets/images/projects/digitalocean/networking2.jpg">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/networking2.jpg">
  </a><a class="enlarge triplet border" href="/assets/images/projects/digitalocean/networking3.jpg">
  <img src="/assets/images/blank.jpg" data-src="/assets/images/projects/digitalocean/networking3.jpg">
  </a>
</div> 
<span class="Caption--faux">Contextual sliding menus for more actions</span>


##Future

something about this is just a small sampling, reiterate this doesnt include flows, research, etc, and is just a taste of the product.