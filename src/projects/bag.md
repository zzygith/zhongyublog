---
title: Recognition and Classification of Paper-Plastic Bags
stack: Python & OpenCV & SIFT & FLANN & CART tree
slug: Recognition and Classification of Paper-Plastic Bags
date: 2021-01-03T00:00:00+00:00
thumb: ../images/thumbs/bag.png
featuredImg: ../images/featured/bag-banner.png
type: project
---

### Abstract

Paper-plastic composite printed matter is a common packaging material, with good strength and waterproof, safe, non-toxic and environmentally friendly. It is widely applied in the packaging of various products. Seed packing bags are one of them. In some enterprises, different kinds of seed bags are sorted and the printing quality are checked by artificial means, which is inefficient and costly.

In my undergraduate thesis, a machine vision based paper-plastic printed matter classification and printing quality inspection system is proposed. The system is based on the Python language and OpenCV, which allows image acquisition of the actual seed bags produced, uses the SIFT algorithm and FLANN fast matching to achieve the classification of different seed bags. Hough transform linear detection is used to detect rectangles to identify the stacking, followed by graphic segmentation and identification. For printing defects such as leaks, ink marks, scratches, etc., which tend to occur during the production process, after correcting the image by perspective transform, combining Gamma transform and dynamic thresholds to eliminate uneven lighting, the defect outline is extracted and judged by the shape detection algorithm, and the defects are classified by CART decision tree for feedback to the upstream production line. The human-computer interaction interface has been developed based on these features.

<!-- ### Lorem ninja ipsum dolor

Lorem ninja ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut ninja wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit ninja lobortis nisl ut aliquip ex ea commodo consequat. Duis ninja autem vel eum iriure dolor in hendrerit in vulputate ninja velit esse molestie consequat, vel illum dolore eu feugiat nulla ninja facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam ninja ipsum liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi ninja non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes ninja demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas ninja est etiam processus dynamicus, qui ninja sequitur mutationem consuetudium lectorum. Mirum ninja est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem ninja ipsum modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in ninja futurum. -->
