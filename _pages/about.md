---
layout: home
permalink: /
title: "Weiyu Guo | Brain-Inspired Embodied Intelligence"
excerpt: "Research on brain-inspired embodied intelligence, vision-language-action models, neural interfaces, and robotics. Principal Investigator (PI), XLab at AI² Robotics (智平方), leading embodied foundation models and frontier embodied AI research. Postdoctoral Fellow at MMLab, CUHK."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section id="about-me" class="hero section">
  <div class="hero-copy">
    <p class="hero-eyebrow">Brain-inspired embodied intelligence</p>
    <h1>Weiyu Guo <span class="chinese-name" lang="zh">郭伟钰</span></h1>
    <div class="hero-leadership">
      <p class="hero-role"><strong>Head of Embodied Foundation Models</strong></p>
      <p class="hero-role"><strong>Principal Investigator (PI), XLab</strong></p>
      <a class="hero-company" href="https://www.ai2robotics.com/" target="_blank" rel="noopener noreferrer">AI² Robotics <span class="company-name" lang="zh">智平方</span></a>
      <p class="hero-responsibility">Leading company-wide embodied foundation model development and frontier embodied AI research.</p>
    </div>
    <p class="hero-bio">I build models that connect perception, memory, and control. My research brings insights from the brain into embodied AI, for robots that understand the world and act within it.</p>
    <p class="hero-affiliation"><a href="https://mmlab.ie.cuhk.edu.hk/" target="_blank" rel="noopener noreferrer">Postdoctoral Fellow, MMLab, CUHK.</a></p>
    <div class="hero-links"><a href="#xlab">Explore XLab ↗</a><a href="https://scholar.google.com/citations?hl=en&user=ES-56HMAAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar ↗</a><a href="https://github.com/guoweiyu" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
  </div>
  <aside class="hero-profile" aria-label="Research profile">
    <img class="profile-portrait" src="{{ site.author.avatar | relative_url }}" alt="Portrait of Weiyu Guo" width="204" height="256" fetchpriority="high">
    <p class="profile-caption">Embodied AI / Video Understanding / Neural Interfaces<span lang="zh">具身智能 / 视频理解 / 神经接口</span></p>
    <p class="profile-stats"><span><strong>50+</strong> publications</span><span><strong>16</strong> patent applications</span></p>
  </aside>
</section>

<div class="research-overview">
  <section id="research" class="research-section">
    <div class="section-heading"><h2>Research</h2><p>Perception, memory, and control in the physical world.</p></div>
    <article class="featured-research">
      <figure class="feature-media"><video class="feature-video" muted loop playsinline controls preload="none" poster="{{ '/assets/media/publications/neurovla-lab-poster.jpg' | relative_url }}" aria-label="NeuroVLA real-robot laboratory demonstration, AlphaBrain scene 3 video 3"><source src="{{ '/assets/media/publications/neurovla-lab-demo.mp4' | relative_url }}" type="video/mp4"><a href="https://www.alphabrain-platform.com/#demos">Watch NeuroVLA on AlphaBrain</a></video></figure>
      <div class="feature-copy">
        <p class="feature-kicker">Featured research</p>
        <h3>NeuroVLA</h3>
        <p>Brain-inspired control that connects semantic planning with fast local feedback.</p>
        <p class="feature-status">Preprint, 2026</p>
        <div class="inline-links"><a href="https://arxiv.org/abs/2601.14628" target="_blank" rel="noopener noreferrer">Paper ↗</a><a href="https://github.com/guoweiyu/NeuroVLA" target="_blank" rel="noopener noreferrer">Code ↗</a></div>
      </div>
    </article>
    {% include home/open-source.html %}
    <details class="research-disclosure philosophy">
      <summary>Research perspective <span aria-hidden="true">＋</span></summary>
      <div class="research-motto"><p lang="zh">沿着生物进化的神奇蓝图，推动物理智能前进。</p><p lang="en">Guided by evolution’s remarkable blueprint, advancing physical intelligence.</p></div>
      <div class="research-grid">
        <article><h3>Human-like sensing</h3><p>Neural interfaces, surface electromyography, and event-driven vision for robust perception.</p><span class="research-keywords">sEMG / Event cameras / Neural decoding</span></article>
        <article><h3>Brain-inspired architecture</h3><p>Spiking neural networks and hierarchical neural architectures that link understanding with real-time control.</p><span class="research-keywords">SNNs / Neuromorphic computing / Hierarchy</span></article>
        <article><h3>Action-grounded learning</h3><p>Vision-Language-Action models, spatial memory, continual skill learning, and humanoid robotic control.</p><span class="research-keywords">VLA / World models / Robot manipulation</span></article>
      </div>
    </details>
  </section>
  <section id="news" class="news-section" aria-labelledby="news-heading">
    <h2 id="news-heading">Latest updates</h2>
    <div class="news-content">
      <article class="news-item"><time datetime="2026-09-28">Sep 28, 2026</time><p><a href="https://arxiv.org/abs/2607.10206" target="_blank" rel="noopener noreferrer">Updated SL-FM preprint</a> on intervenable multimodal imitation.</p></article>
      <article class="news-item"><time datetime="2026-09-23">Sep 23, 2026</time><p><a href="https://arxiv.org/abs/2609.28811" target="_blank" rel="noopener noreferrer">DeltaWAM:</a> incremental visual memory for bimanual manipulation.</p></article>
      <article class="news-item"><time datetime="2026-08">Aug 2026</time><p>Joined MMLab, CUHK as a Postdoctoral Fellow.</p></article>
      <details class="news-archive"><summary>Earlier updates <span aria-hidden="true">＋</span></summary><div class="academic-prose">{% capture news %}{% include home/news-archive.md %}{% endcapture %}{{ news | markdownify }}</div></details>
    </div>
  </section>
</div>

{% include home/xlab.html %}
{% include home/publications.html %}

<section id="experience" class="section experience-section">
  <span id="-xl" class="legacy-anchor"></span>
  <div class="section-heading"><h2>Experience</h2></div>
  <p class="experience-intro">I received my Ph.D. in Artificial Intelligence from <strong>HKUST (Guangzhou)</strong> in 2026, supervised by <a href="https://scholar.google.com/citations?user=cVDF1tkAAAAJ" target="_blank" rel="noopener noreferrer">Prof. Hui Xiong</a> (AAAS / IEEE / AAAI / ACM Fellow, Founding Editor-in-Chief of <em>Nature npj AI</em>).</p>
  <div class="academic-prose experience-content">{% capture experience %}{% include home/experience.md %}{% endcapture %}{{ experience | markdownify }}</div>
  <details class="archive-disclosure"><summary>Selected milestones <span aria-hidden="true">＋</span></summary><div class="academic-prose">{% capture milestones %}{% include home/milestones.md %}{% endcapture %}{{ milestones | markdownify }}</div></details>
</section>

<section id="community" class="section community-section">
  <span id="-jxfw" class="legacy-anchor"></span>
  <div class="section-heading"><h2>Teaching &amp; community</h2></div>
  <div class="academic-prose community-content">{% capture service %}{% include home/service.md %}{% endcapture %}{{ service | markdownify }}</div>
</section>

<section id="contact" class="section contact-section">
  <div><h2>Let’s connect.</h2><p>I welcome conversations about embodied AI, brain-inspired computing, and academic collaboration.</p></div>
  <div class="contact-links"><a href="mailto:guoweiyu96@gmail.com">guoweiyu96@gmail.com</a><a href="https://github.com/guoweiyu" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://scholar.google.com/citations?hl=en&user=ES-56HMAAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar ↗</a></div>
</section>
