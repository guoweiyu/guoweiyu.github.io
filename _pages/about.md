---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a Ph.D. candidate at the Artificial Intelligence Thrust, Information Hub, The Hong Kong University of Science and Technology, expected to graduate in **July 2026**. I am supervised by [Prof. Hui Xiong](https://scholar.google.com/citations?user=cVDF1tkAAAAJ) (AAAS/IEEE/AAAI/ACM Fellow, Founding Editor-in-Chief of *Nature npj AI*).

My research focuses on **Brain-Inspired Embodied Intelligence**, spanning three interconnected layers:
- **Human-Like Sensing** — Neural interfaces, surface electromyography (sEMG), and event-driven vision for robust perception
- **Brain-Inspired Neural Architecture** — Spiking Neural Networks (SNNs), neuromorphic computing, and cortex-cerebellum-spinal cord hierarchy modeling
- **Action-Grounded Learning** — Vision-Language-Action (VLA) models, hierarchical skill learning, and humanoid robotic control

I have published 40+ papers <a href='https://scholar.google.com/citations?user=ES-56HMAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a> at top international AI conferences including **ICML, NeurIPS, ECCV, CVPR, ICLR, AAAI**, and journals such as **IJCV, JNE, TNSRE, RA-L, THMS**. I also serve as the **VLA Research Lead** at AI&sup2; Robotics.

If you are seeking any form of academic cooperation, please feel free to email me at [guoweiyu96@gmail.com](mailto:guoweiyu96@gmail.com).

<div class="research-tags">
  <span class="research-tag">Embodied AI</span>
  <span class="research-tag">Vision-Language-Action</span>
  <span class="research-tag">Spiking Neural Networks</span>
  <span class="research-tag">Neural Interface</span>
  <span class="research-tag">Neuromorphic Computing</span>
  <span class="research-tag">Robotic Manipulation</span>
</div>

<span class='anchor' id='news'></span>

# 🔥 News
---
- *2026.05*: &nbsp; Released our [**AlphaBrain Platform**](https://www.alphabrain-platform.com/)!
- *2026.04*: &nbsp; Our [StarVLA](https://arxiv.org/abs/2604.05014) report has been published!
- *2026.02*: &nbsp; Our StarVLA reaches **2.6K+ stars** on GitHub!
- *2025.12*: &nbsp; StarVLA selected as one of the **Top 10** Most Influential Open-Source Embodied AI Repositories!
- *2025.10*: &nbsp; One paper accepted at **AAAI 2025**!
- *2025.09*: &nbsp; One paper accepted at **IJCV 2025**! Two papers accepted at **NeurIPS 2025**!
- *2025.01*: &nbsp; One paper accepted at **ICLR 2025**!
- *2024.09*: &nbsp; One paper accepted at **NeurIPS 2024**!
- *2024.07*: &nbsp; One paper accepted at **CVPR 2024**!

<span class='anchor' id='-xl'></span>

# 📚 Achievements
- Published **40+ international papers** at top venues (ICML, NeurIPS, CVPR, ECCV, ICLR, AAAI, IJCV, JNE, THMS, RA-L).
- Applied for **16 patents**, including 2 PCT international patents.
- Co-founded **StarVLA**: open-source VLA framework with **2.6K+ GitHub stars**, adopted by Unitree and Alibaba Qwen, ranked **Top 10** Most Influential Embodied AI Repositories 2025.
- **VLA Research Lead** at AI&sup2; Robotics (valuation exceeding 10 billion RMB).
- Involved in writing one book chapter (*Generalization with Deep Learning*) on **World Scientific** book.
- Reported by **People's Daily** (人民日报), **China Central Television** (央视新闻), and Guangzhou Daily.
- Co-founded a neural-interface company with a valuation of over **70 million RMB**.

# 🎓 Education
- *2022.08 - Present*, <a href="https://www.ust.hk/"><img class="svg" src="/images/HKUST.png" width="30pt"></a> The Hong Kong University of Science and Technology (Guangzhou), Artificial Intelligence, Ph.D. Candidate
- *2019.08 - 2022.06*, <a href="https://www.ucas.ac.cn/"><img class="svg" src="/images/UCAS.png" width="23pt"></a> University of Chinese Academy of Sciences, School of Artificial Intelligence, M.S.
- *2015.09 - 2019.06*, <a href="https://www.dlut.edu.cn/"><img class="svg" src="/images/DLUT.png" width="23pt"></a> Dalian University of Technology, School of Software Engineering, B.S.

# 🤝 Collaboration & Industry

<div class="collab-item">
<strong>VLA Research Lead</strong> — AI&sup2; Robotics &middot; Leading the development and deployment of brain-inspired embodied large models in commercial humanoid robotic products.
</div>

<div class="collab-item">
<strong>Research Associate</strong> — Johns Hopkins University (2021.09 – 2022.06) &middot; Supervised by <a href="https://scholar.google.com/citations?user=FJ-huxgAAAAJ">Prof. <strong>Alan Yuille</strong> (IEEE Fellow)</a>. Published at ECCV.
</div>

<div class="collab-item">
<strong>Long-term Collaboration</strong> — <a href="https://scholar.google.com/citations?user=0JDIQ0wAAAAJ">Prof. <strong>Dario Farina</strong></a>, Imperial College London (2019 – Present) &middot; Published papers in JNE, THMS.
</div>

<span class='anchor' id='-lwzl'></span>

# 📝 Selected Publications

---
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Nature (under review)</div><img src='images/collision.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

-	`Guo, Weiyu`, He Zhang, Pengteng Li, Tiefu Cai, Ziyang Chen, Jinhui Ye, Yandong Guo, He Xiao, Yongkui Yang, Ying Sun and Hui Xiong. "A Brain-like Embodied Intelligence for Fluid and Fast Reflexive Robotics Control" Nature (Under review)
[[Preview]](https://github.com/guoweiyu/NeuroVLA/) 

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Code base</div><img src='images/starVLAFramworks.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

-	`Co-founders and Core Developers`, StarVLA is a modular and flexible codebase for developing Vision-Language Model (VLM) to Vision-Language-Action (VLA) models. **2.6K+ stars**
[[Preview]](https://github.com/starVLA) [[Report]](https://arxiv.org/abs/2604.05014)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2026</div><img src='images/ICML_shiyewai.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

-	`Guo, Weiyu`, et al. "Spatial Memory for Out-of-Vision Manipulation in Vision-Language-Action." ICML 2026.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2025</div><img src='images/ICCV2025.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

-	`Guo, Weiyu`, Ziyang Chen, Shaoguang Wang, Jianxiang He, Yijie Xu, Jinhui Ye, Ying Sun, and Hui Xiong. "Logic-in-Frames: Dynamic Keyframe Search via Visual Semantic-Logical Verification for Long Video Understanding." NeurIPS 2025.
[[Preview]](https://arxiv.org/pdf/2503.13139) 

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2025</div><img src='images/ICML2025.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

-	`Guo, Weiyu`, Ziyue Qiao, Ying Sun, Yijie Xu, and Hui Xiong. "Revisiting Noise Resilience Strategies in Gesture Recognition: Short-Term Enhancement in Surface Electromyographic Signal Analysis" ICML (2025).
[[Preview]](https://arxiv.org/abs/2405.14398) 

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2024</div><img src='images/nips2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

-	`Guo, Weiyu`, Ying Sun, Yijie Xu, Ziyue Qiao, Yongkui Yang, and Hui Xiong. "SpGesture: Source-Free Domain-adaptive sEMG-based Gesture Recognition with Jaccard Attentive Spiking Neural Network." **NeurIPS (2024)**.
[[Preview]](https://arxiv.org/abs/2405.14398) 

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ECCV 2022</div><img src='images/ECCV2022.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

-    `Guo, Weiyu`, Li, Zhaoshuo, Yang, Yongkui, Wang, Zheng, Taylor, Russell H, Unberath, Mathias, Yuille, Alan, Li, Yingwei. "Context-Enhanced Stereo Transformer." ECCV (2022)
 [[Preview]](https://arxiv.org/pdf/2210.11719)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">JNE</div><img src='images/NI_DM_compressed.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

-    `Guo, Weiyu`, Ma, Chenfei, Wang, Zheng, Zhang, Hang, Farina, Dario, Jiang, Ning, Lin, Chuang. "Long exposure convolutional memory network for accurate estimation of finger kinematics from surface electromyographic signals." Journal of Neural Engineering 18(2) 026027 (2021). IOP Publishing

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">THMS 2023</div><img src='images/THMS2023.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

-    `Guo, Weiyu`, Jiang, Ning, Farina, Dario, Su, Jingyong, Wang, Zheng, Lin, Chuang, Xiong, Hui. "Multi-attention feature fusion network for accurate estimation of finger kinematics from surface electromyographic signals." IEEE Transactions on Human-Machine Systems 53(3) 512-519 (2023). IEEE 

</div>
</div>

### Other Publications
---

-    Lu, Yunfan, Xu, Yijie, Ma, Wenzong, `Guo, Weiyu`, Xiong, Hui. "Event camera demosaicing via swin transformer and pixel-focus loss." **CVPR** (2024)

-    `Guo, Weiyu`, Sun, Guoying, He, JianXiang, Shao, Tong, Wang, Shaoguang, Chen, Ziyang, Hong, Meisheng, Sun, Ying, Xiong, Hui. "A Survey of fMRI to Image Reconstruction." arXiv preprint arXiv:2502.16861 (2025)

-    Lu, Yunfan, Xu, Xiaogang, Lu, Hao, Qian, Yanlin, Li, Pengteng, Yao, Huizai, Yang, Bin, Li, Junyi, Cai, Qianyi, `Guo, Weiyu`. "SEE: See Everything Every Time--Adaptive Brightness Adjustment for Broad Light Range Images via Events." arXiv preprint arXiv:2502.21120 (2025)

-    Lin, Chuang, Zhao, Chunxiao, Zhang, Jianhua, Chen, Chen, Jiang, Ning, Farina, Dario, `Guo, Weiyu`. "Continuous Estimation of Hand Kinematics from Electromyographic Signals based on Power-and Time-Efficient Transformer Deep Learning Network." IEEE TNSRE (2024). IEEE

-    Chen, Xingjian, `Guo, Weiyu`, Lin, Chuang, Jiang, Ning, Su, Jingyong. "Cross-subject lifelong learning for continuous estimation from surface electromyographic signal." IEEE TNSRE (2024). IEEE

-    Zhang, Gaomin, `Guo, Weiyu`, Xiong, Xi, Guan, Zhongcheng. "A hybrid approach combining data envelopment analysis and recurrent neural network for predicting the efficiency of research institutions." Expert Systems with Applications 238 (2024). Pergamon

-    Qiao, Ziyue, Xiao, Meng, `Guo, Weiyu`, Luo, Xiao, Xiong, Hui. "Information filtering and interpolating for semi-supervised graph domain adaptation." Pattern Recognition 153 (2024). Pergamon

-    Zhang, He, Sun, Ying, `Guo, Weiyu`, Liu, Yafei, Lu, Haonan, Lin, Xiaodong, Xiong, Hui. "Interactive interior design recommendation via coarse-to-fine multimodal reinforcement learning." ACM MM (2023)

-    Lin, Chuang, Chen, Xingjian, `Guo, Weiyu`, Jiang, Ning, Farina, Dario, Su, Jingyong. "A BERT based method for continuous estimation of cross-subject hand kinematics from surface electromyographic signals." IEEE TNSRE 31 (2022). IEEE

-    Ma, Chenfei, `Guo, Weiyu`, Zhang, Hang, Samuel, Oluwarotimi Williams, Ji, Xiaopeng, Xu, Lisheng, Li, Guanglin. "A novel and efficient feature extraction method for deep learning based continuous estimation." IEEE RA-L 6(4) (2021). IEEE

-    Ma, Chenfei, Lin, Chuang, Samuel, Oluwarotimi Williams, `Guo, Weiyu`, Zhang, Hang, Greenwald, Steve, Xu, Lisheng, Li, Guanglin. "A bi-directional LSTM network for estimating continuous upper limb movement from surface electromyography." IEEE RA-L 6(4) (2021). IEEE

-    `Guo, Weiyu`, Ma, Chenfei, Wang, Zheng, Zhang, Hang, Farina, Dario, Jiang, Ning, Lin, Chuang. "Long exposure convolutional memory network for accurate estimation of finger kinematics from surface electromyographic signals." JNE 18(2) (2021). IOP Publishing

-    Chen, Chao, `Guo, Weiyu`, Ma, Chenfei, Yang, Yongkui, Wang, Zheng, Lin, Chuang. "sEMG-based continuous estimation of finger kinematics via large-scale temporal convolutional network." Applied Sciences 11(10) (2021). MDPI

-    Guo, Linlin, Zhang, Hang, `Guo, Weiyu`, Fang, Jian, Lu, Bingxian, Ma, Chenfei, Li, Guanglin, Lin, Chuang, Wang, Lei. "Deep Learning for Device-free Human Activity Recognition Using WiFi Signals." Generalization With Deep Learning (2021)

-    Guo, Linlin, Zhang, Hang, Wang, Chao, `Guo, Weiyu`, Diao, Guangqiang, Lu, Bingxian, Lin, Chuang, Wang, Lei. "Towards CSI-based diversity activity recognition via LSTM-CNN encoder-decoder neural network." Neurocomputing 444 (2021). Elsevier

-    Wang, Zheng, Wang, Zhuo, Liao, Jian, Chen, Chao, Yang, Yongkui, Dong, Bo, Chen, Weiguang, Chen, Wenxuan, Lei, Ming, `Guo, Weiyu`. "CNN-DMA: a predictable and scalable direct memory access engine for convolutional neural network." GLSVLSI (2021)

-    Chen, Wenxuan, Wang, Zheng, Lei, Ming, Dong, Bo, Wang, Zhuo, Yang, Yongkui, Chen, Chao, `Guo, Weiyu`, Liang, Chen, Zhang, Qian. "Improving system latency of AI accelerator with on-chip pipelined activation preprocessing and multi-mode batch inference." IEEE AICAS (2021). IEEE

-    Wang, Chao, `Guo, Weiyu`, Zhang, Hang, Guo, Linlin, Huang, Changcheng, Lin, Chuang. "sEMG-based continuous estimation of grasp movements by long-short term memory network." Biomedical Signal Processing and Control 59 (2020). Elsevier

-    `Guo, Weiyu`, Wang, Chao, Lin, Chuang, Wang, Chenrui. "Long short term memory model based continuous estimation of human finger joint angles." IEEE RCAR (2019). IEEE

-    Zhang, Hang, Wang, Chao, `Guo, Weiyu`, Guo, Linlin, Lin, Chuang. "DFNN-based gesture recognition with the shift and damage of the HD-sEMG electrodes." IEEE ROBIO (2019). IEEE

-    Chen, Rui, Chen, YuanZhi, `Guo, Weiyu`, Chen, Chao, Wang, Zheng, Yang, Yongkui. "SEMG-based gesture recognition using GRU with strong robustness against forearm posture." IEEE RCAR (2021). IEEE

-    Ma, Chenfei, `Guo, Weiyu`, Xu, Lisheng, Li, Guanglin. "Finger joint angle estimation based on sEMG signals and deep learning method." IEEE RCAR (2021). IEEE

-    Wu, Yaqi, Fan, Zhihao, Chu, Xiaofeng, Ren, Jimmy S, Li, Xiaoming, Yue, Zongsheng, Li, Chongyi, Zhou, Shangcheng, Feng, Ruicheng, Dai, Yuekun. "Mipi 2024 challenge on demosaic for hybridevs camera: Methods and results." CVPR Workshop (2024)

-    Yunfan, LU, Xu, Xiaogang, Hao, LU, Qian, Yanlin, Yang, Bin, Li, Junyi, Cai, Qianyi, `Guo, Weiyu`, Xiong, Hui. "SEE: See Everything Every Time-Broader Light Range Image Enhancement via Events."

### Selected Patents
---
- Training method, training device of continuous motion information prediction model **PCT/CN2020/133443**
- Intelligent interactive glove with AI chip, interactive method and storage medium **PCT/CN2021/107108**
- Power efficiency test method, adjustment method, computer equipment **CN202010389035.4**
- An in-memory computing accelerator and its optimization method **CN202011406904.6**
- An automatic optimization method of graph data processing framework **CN202011358762.0**

<span class='anchor' id='-jxfw'></span>

# 🏫 Teaching & Mentorship

**Teaching Assistant:**
- AIAA 5037: Advanced Algorithms and Data Structures — HKUST(GZ)
- AIAA 5031: Introduction to Computing Using Python — HKUST(GZ)
- HKUST Summer Research Training Program Mentor

**Mentored Students:**
<div class="mentee-grid">
  <div class="mentee-item">Jinhui Ye &rarr; Ph.D., HKUST</div>
  <div class="mentee-item">Pengteng Li &rarr; Ph.D., HKUST</div>
  <div class="mentee-item">Wenzhi Li &rarr; Ph.D., Cornell University</div>
  <div class="mentee-item">Guoying Sun &rarr; Ph.D., HITSZ</div>
  <div class="mentee-item">Shu Chen &rarr; Ph.D., HKUST</div>
  <div class="mentee-item">Xingjian Chen &rarr; Alibaba Group</div>
</div>

<span class='anchor' id='-xsfw'></span>

# 🔬 Academic Service

**Conference Reviewer:** AAAI, NeurIPS, CVPR, ICLR, ICML

**Journal Reviewer:** Scientific Reports, IEEE Robotics and Automation Letters (RA-L)

**Invited Speaker:** Shenzhen Loop Area Institute — *"Brain-Inspired Computing and Embodied Intelligence"*

<span class='anchor' id='-ryjx'></span>

# 🏅 Awards
- National Scholarship for Postgraduates, 2021
- The President Scholarship of CAS, 2021
- Merit Student of UCAS, 2020
- Outstanding Graduates of DUT (top 1%), 2019
- Outstanding Graduates of Liaoning Province (top 1%), 2019
- Merit Student of DUT, 2018


<div style="text-align: center; margin: 0 auto;">
  <script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=_kmyd_k8PNO_FwZEW-CPPsxbwcCgovayd_VI-1PQPYA&w=150&h=150"></script>
</div>
