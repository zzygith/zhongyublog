---
title: Recognition and Classification of Paper-Plastic Bags
stack: Python & OpenCV & SIFT & FLANN & CART tree
slug: Recognition and Classification of Paper-Plastic Bags
date: 2021-01-03T00:00:00+00:00
thumb: ../images/thumbs/bag.png
featuredImg: ../images/featured/bag-banner.png
type: project
---

<a href="https://github.com/zzygith/Recognition-and-Classification-of-Paper-Plastic-Bags" target="_blank">Demo URL: `https://github.com/zzygith/Recognition-and-Classification-of-Paper-Plastic-Bags` </a>

### Abstract

Paper-plastic composite printed matter is a common packaging material, with good strength and waterproof, safe, non-toxic and environmentally friendly. It is widely applied in the packaging of various products. Seed packing bags are one of them. In some enterprises, different kinds of seed bags are sorted and the printing quality are checked by artificial means, which is inefficient and costly.

In my undergraduate thesis, a machine vision based paper-plastic printed matter classification and printing quality inspection system is proposed. The system is based on the Python language and OpenCV, which allows image acquisition of the actual seed bags produced, uses the SIFT algorithm and FLANN fast matching to achieve the classification of different seed bags. Hough transform linear detection is used to detect rectangles to identify the stacking, followed by graphic segmentation and identification. For printing defects such as leaks, ink marks, scratches, etc., which tend to occur during the production process, after correcting the image by perspective transform, combining Gamma transform and dynamic thresholds to eliminate uneven lighting, the defect outline is extracted and judged by the shape detection algorithm, and the defects are classified by CART decision tree for feedback to the upstream production line. The human-computer interaction interface has been developed based on these features.
