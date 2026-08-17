---
permalink: /cosmos-vs-wan/
title: "Cosmos vs. Wan"
excerpt: "A practitioner's comparison of NVIDIA Cosmos and Alibaba Wan as video world models for Physical AI and Vision-Language-Action research."
author_profile: true
---

<span class='anchor' id='cosmos-vs-wan'></span>

# 🌍 Cosmos vs. Wan

Two of the most capable openly-released video model families come from very different places.
**NVIDIA Cosmos** is built as a *world foundation model* for Physical AI — it speaks actions,
predicts dynamics, and is meant to sit inside a robot learning loop. **Alibaba Wan** is built as a
*large-scale video generative model* — it optimizes visual fidelity, motion quality, and creative
controllability, and it runs on hardware researchers actually own.

They are often mentioned in the same breath because both generate video. For embodied-AI work the
distinction matters far more than the similarity, so this page compares them along the axes that
decide which one belongs in your pipeline.

<div class="cmp-hero">
  <div class="cmp-card cmp-card--a">
    <span class="cmp-card-eyebrow">NVIDIA</span>
    <span class="cmp-card-title">Cosmos 3</span>
    <span class="cmp-card-tag">World model for Physical AI</span>
    <ul>
      <li><strong>Super 64B</strong> / <strong>Nano 16B</strong> / <strong>Edge 4B</strong></li>
      <li>Two surfaces: <em>Reasoner</em> + <em>Generator</em></li>
      <li>Native <strong>action</strong> input <em>and</em> output</li>
      <li>Forward / inverse dynamics, policy rollout</li>
      <li>OpenMDW-1.1 license</li>
    </ul>
  </div>
  <div class="cmp-card cmp-card--b">
    <span class="cmp-card-eyebrow">Alibaba</span>
    <span class="cmp-card-title">Wan 2.2</span>
    <span class="cmp-card-tag">Large-scale video generation</span>
    <ul>
      <li><strong>A14B MoE</strong> (27B total, 14B active) + <strong>5B</strong> dense</li>
      <li>T2V · I2V · TI2V · S2V · Animate</li>
      <li>720P @ 24 fps on a single RTX 4090</li>
      <li>Strongest open-video community by far</li>
      <li>Apache 2.0 license</li>
    </ul>
  </div>
</div>

## The one-line version

> If your model needs to **consume or emit actions**, you want Cosmos. If you need the **best-looking
> video per GPU-hour under a permissive license**, you want Wan. A surprising number of embodied
> pipelines end up using both.

## Side-by-side

<div class="cmp-table" markdown="1">

| Dimension | NVIDIA Cosmos | Alibaba Wan |
|---|---|---|
| **Design intent** | World foundation models for Physical AI — robots, AVs, smart infrastructure | Open, general-purpose large-scale video generation |
| **Current generation** | **Cosmos 3**, launched 2026-05-31 | **Wan 2.2** family; newest member Wan-Animate-2 (2026-08-07) |
| **Model sizes** | Cosmos3-Super **64B**, Cosmos3-Nano **16B**, Cosmos3-Edge **4B** | T2V-A14B / I2V-A14B (**27B** total, **14B** active, MoE), TI2V-**5B** dense, S2V-**14B**, Animate-**14B** |
| **Architecture note** | One omni family spanning understanding and generation | Two-expert MoE split by denoising stage: high-noise expert for layout, low-noise expert for detail, switched at an SNR threshold |
| **Surfaces** | *Reasoner* (world understanding) **+** *Generator* (world generation) | Generation only |
| **Inputs** | Text, vision, sound, **action** | Text, image, speech (S2V), driving video (Animate) |
| **Outputs** | Vision, sound, **action**, text | Video |
| **Action conditioning** | Yes — camera motion 9D, AV 9D, egocentric 57D, single-arm robot 10D (DROID / UR) | No |
| **Dynamics & policy modes** | `policy`, `forward_dynamics`, `inverse_dynamics` | — |
| **Spatial control** | Transfer controls: edge, blur, depth, segmentation, world-scenario | Character/pose reference (Animate), speech-driven (S2V) |
| **Audio** | Synchronized stereo AAC @ 48 kHz generated *with* video | S2V is audio → video; no video → audio |
| **Resolution** | 256p / 480p / 720p (default 480p), 6 aspect ratios | 480P / 720P |
| **Clip length** | 5–300 frames, default 189 (≈ 7.9 s @ 24 fps) | ≈ 5 s @ 720P 24 fps |
| **Accessibility** | Edge-4B targets Jetson AGX Orin / Thor; Linux only, Ampere / Hopper / Blackwell | TI2V-5B generates 5 s of 720P in under 9 min on one consumer RTX 4090 |
| **License** | OpenMDW-1.1 (code **and** weights) | Apache 2.0 |
| **GitHub traction** | `NVIDIA/cosmos` ≈ **11.5K** ★ | `Wan2.2` ≈ **17.1K** ★, `Wan2.1` ≈ **16.8K** ★ |
| **Surrounding tooling** | cosmos-framework, cosmos-curator, cosmos-evaluator, cosmos-rl, cosmos-xenna | Diffusers, ComfyUI, DiffSynth-Studio, wan.video |

</div>

## Where they genuinely differ

### 1. Action is a first-class modality in Cosmos — and absent in Wan

This is the decisive difference for VLA research. Cosmos 3's Generator accepts an action array as
conditioning and can emit action values, which gives you three modes out of the box:

<div class="cmp-table" markdown="1">

| Mode | Input | Output |
|---|---|---|
| Policy | image + instruction | action chunk + rollout video |
| Inverse dynamics | video + instruction | action chunk + video |
| Forward dynamics | image + action chunk | video |

</div>

Forward dynamics is a learned simulator; inverse dynamics is a label generator for unlabelled video;
policy mode is a VLA in its own right. Wan offers none of these — it is a text/image/audio → video
model. You can of course bolt an action head onto Wan yourself, but Cosmos ships the embodiment
dimensions (9D camera, 57D egocentric, 10D single-arm) already trained.

### 2. Cosmos bundles a critic; Wan does not

The Cosmos *Reasoner* is a physical-reasoning VLM covering captioning, temporal localization,
embodied reasoning, 2D grounding and — notably — **physical plausibility classification**. That
makes it usable as an automatic reward model or filter over generated rollouts, which is exactly
what you need when generated data feeds policy training. Wan's ecosystem leaves evaluation to you.

### 3. Wan wins on visual quality per GPU-hour, and on community

Wan 2.2 trained on **+65.6% more images and +83.2% more videos** than Wan 2.1, and its VAE reaches a
4×16×16 (64×) compression ratio, rising to 4×32×32 with patchification. That is what lets the 5B
dense model do 720P @ 24 fps on a single consumer card. Combined with Apache 2.0 and roughly twice
Cosmos's GitHub following, Wan is the pragmatic choice when you need aesthetically strong video,
fast iteration, and no licensing conversation with your legal team.

### 4. Licensing changed in Cosmos 3 — for the better

The Cosmos 2.5 generation split its terms: Apache 2.0 for source code, but the **NVIDIA Open Model
License** for weights. Cosmos 3 places both code and models under **OpenMDW-1.1**. Wan has been
Apache 2.0 throughout. If you are planning a commercial deployment, read the actual OpenMDW terms
rather than assuming equivalence with Apache 2.0.

### 5. Release cadence and what is still maintained

NVIDIA moves fast and deprecates fast. The 2.5-generation repositories (`cosmos-predict2.5` 2B/14B,
`cosmos-transfer2.5` 2B, `cosmos-reason2` 2B/8B/32B) are still up and still useful, but
`cosmos-reason2` is explicitly no longer under active development now that Cosmos 3 unifies
reasoning, prediction and action. On the Wan side, the `Wan2.2` repository has been quiet since
March 2026 while active development continues in satellite repositories — Wan-Animate-2, Wan-Dancer,
Wan-skills. Check the actual commit dates before you build on either.

## Choosing, by use case

<div class="cmp-item">
  <div class="cmp-item-key">Action-conditioned world model inside a VLA loop</div>
  <div class="cmp-item-val"><strong>Cosmos 3.</strong> It is the only one of the two with native action I/O and forward/inverse dynamics.</div>
</div>

<div class="cmp-item">
  <div class="cmp-item-key">Sim-to-real augmentation with structural control</div>
  <div class="cmp-item-val"><strong>Cosmos</strong> transfer controls (depth, segmentation, edge, blur) let you re-render a low-fidelity simulator rollout as photorealistic video while preserving geometry.</div>
</div>

<div class="cmp-item">
  <div class="cmp-item-key">Automatic physical-plausibility scoring of generated data</div>
  <div class="cmp-item-val"><strong>Cosmos Reasoner.</strong> Use it as a filter or reward model before generated rollouts reach policy training.</div>
</div>

<div class="cmp-item">
  <div class="cmp-item-key">Highest visual fidelity, human motion, character animation</div>
  <div class="cmp-item-val"><strong>Wan.</strong> The A14B MoE models and Wan-Animate-2 are the stronger generative prior for appearance and motion realism.</div>
</div>

<div class="cmp-item">
  <div class="cmp-item-key">One consumer GPU, permissive license, large community</div>
  <div class="cmp-item-val"><strong>Wan TI2V-5B.</strong> Apache 2.0, 720P @ 24 fps, under 9 minutes on an RTX 4090.</div>
</div>

<div class="cmp-item">
  <div class="cmp-item-key">On-device / embedded deployment</div>
  <div class="cmp-item-val"><strong>Cosmos3-Edge (4B).</strong> Targets Jetson AGX Orin and Thor; nothing in the Wan lineup is aimed at embedded hardware.</div>
</div>

<div class="cmp-item">
  <div class="cmp-item-key">Pretrained backbone to fine-tune into your own VLA</div>
  <div class="cmp-item-val">Either — but for different reasons. Cosmos gives you an embodiment-aware prior; Wan gives you a stronger visual prior with fewer licensing constraints.</div>
</div>

## My reading

The framing I find most useful: **Wan is a better renderer, Cosmos is a better simulator.** Video
quality and physical consistency are correlated but not identical objectives, and the two families
have optimized different ones. A generated clip can look immaculate and still violate contact
dynamics — which is fatal if a policy is going to learn from it, and irrelevant if a human is going
to watch it.

For brain-inspired embodied intelligence work this suggests a division of labour rather than a
choice. Cosmos supplies the action-grounded interface and the plausibility critic; Wan supplies the
visual prior and cheap iteration. The interesting open problem sits between them: neither family
currently offers the **closed-loop, latency-bounded prediction** a reflexive controller actually
needs — Cosmos3-Edge at 480p still takes ~7 s for 121 frames on a B200, which is orders of magnitude
away from control-rate inference. Bridging that gap is where I expect the next round of progress,
and it is unlikely to come from scaling either model up.

---

<p class="cmp-footnote">
Figures verified against the official repositories and model cards on <strong>2026-08-17</strong>;
star counts rounded down. Both projects iterate quickly — treat every number here as a snapshot.
Sources: <a href="https://github.com/NVIDIA/cosmos">NVIDIA/cosmos</a>,
<a href="https://github.com/nvidia-cosmos/cosmos-predict2.5">cosmos-predict2.5</a>,
<a href="https://github.com/nvidia-cosmos/cosmos-transfer2.5">cosmos-transfer2.5</a>,
<a href="https://github.com/nvidia-cosmos/cosmos-reason2">cosmos-reason2</a>,
<a href="https://github.com/Wan-Video/Wan2.2">Wan-Video/Wan2.2</a>,
<a href="https://github.com/Wan-Video/Wan-Animate-2">Wan-Animate-2</a>.
Opinions are my own and not those of any affiliated institution.
</p>
