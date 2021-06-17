---
title: 2D Human-Pose Estimation In Realtime
stack: Python & OpenCV & OpenPose
slug: 2D Human-Pose Estimation In Realtime
date: 2021-01-05T00:00:00+00:00
thumb: ../images/thumbs/pose.png
featuredImg: ../images/featured/pose-banner.png
type: project
---

<a href="https://github.com/zzygith/pose-detection" target="_blank">Demo URL: `https://github.com/zzygith/pose-detection` </a>

### Abstract

We detect pose of human (single and multiple people) in 2D image. Human-pose estimation plays an important role in many areas such as camera system, e-games, and even biomedical engineering. Digging up the effective data of human-beings and locating human-being’s pose to achieve interaction between human-beings and machines will have broad prospects.

In this essay, we use OpenPose algorithm in the Python 3.7.2 plus Opencv platform. OpenPose algorithm is one of the most classical method in human-pose estimation. It belongs to bottom-up approaches. The innovative point of the method is that the architecture is designed to predict the part locations and their associations through 2 branches at the same time. The whole process includes locating keypoints, finding valid associations and assembling person-wise keypoints.

Then we apply 2D Human-Pose Estimation in student’s sitting position correction. After getting students’ joints and rigid parts by image-based observations, we calculate the angle between Neck-Nose line and Neck-Crotch line. If the angle is lower than 150 degree, which means student’s head is too low and it will hurt cervical vertebra, the system can detect the situation and warn about it.
