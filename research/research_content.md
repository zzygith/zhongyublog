# Research Page Content

## Simultaneous outlier-exclusion and distributionally robust learning through partial optimal transport

https://www.sciencedirect.com/science/article/pii/S0098135425004119

**Image file:** `research_images/robust-learning-partial-ot.png`

**One-sentence summary:** Teach robust models to separate truly misleading data from unusual but useful surprises.

**Expanded introduction:** Real industrial data often has two problems at the same time: a few samples may be genuinely misleading, and even the remaining samples may not perfectly represent future conditions. This paper brings those two issues into one learning framework. Partial optimal transport is used to choose the subset of data that the model should trust most, while distributionally robust optimization prepares the model for uncertainty that still remains after this filtering step. The result is a training method that does not simply panic when it sees strange data, but also does not blindly trust every point. The framework is developed for both regression and classification, and is tested on synthetic examples and chemical process datasets.

## Novel Feasible Set Learning and Process Flexibility Analysis Method Using Deep Neural Networks

https://pubs.acs.org/doi/full/10.1021/acs.iecr.4c00838

**Image file:** `research_images/feasible-set-learning.png`

**One-sentence summary:** Design neural networks to find and measure scattered safe operating zones.

**Expanded introduction:** Chemical processes are designed under uncertainty: feed quality, reaction rates, temperatures, and other conditions may all shift during operation. Traditional flexibility analysis often asks how large a box or ellipsoid can be drawn around a nominal condition, but this can be misleading when the true safe region is irregular, nonconvex, disconnected, or high-dimensional. This work instead tries to learn the entire feasible set. A physics-informed neural network first acts as a fast surrogate for the process equations, replacing repeated expensive solves of mass-balance, energy-balance, and other equality constraints. A second neural network then maps uncertain operating conditions into a feature space where feasible points are pulled near a hypersphere center and infeasible points are pushed away. With this learned map, Monte Carlo sampling can estimate the volumetric flexibility index: the fraction of the uncertainty space where the process can still be operated safely. The method is demonstrated on heat-exchanger and reactor-cooler systems, including disconnected and five-dimensional feasible regions.

## Dynamic Process Flexibility Analysis Using Neural Networks and a Volumetric Flexibility Index

https://pubs.acs.org/doi/full/10.1021/acs.iecr.4c04545

**Image file:** `research_images/dynamic-flexibility.png`

**One-sentence summary:** Measure how much breathing room a process has while its safe operating region changes over time.

**Expanded introduction:** Some processes are not safely described by a single snapshot, because their behavior changes as time passes. A system that looks flexible now may become fragile later, especially when uncertain inputs keep moving. This paper extends flexibility analysis to dynamic process systems by combining a physics-informed neural network for control with a convolutional neural network classifier. The first model acts as a fast surrogate for the system dynamics, and the second model learns which uncertain trajectories remain feasible. The proposed dynamic volumetric flexibility index captures the size of the feasible region over time, including nonconvex or discontinuous regions that are hard for conventional methods to handle. The approach is demonstrated on buffer vessel systems.

## Haemoglobin response modelling under erythropoietin treatment: Physiological model-informed machine learning method

https://onlinelibrary.wiley.com/doi/full/10.1002/cjce.24922

**Image file:** `research_images/haemoglobin-pinn-model.png`

**One-sentence summary:** Predict how a patient's hemoglobin will respond by combining clinical data with the body's known biology.

**Expanded introduction:** Patients with renal anaemia often receive erythropoietin, but different people can respond very differently to the same treatment. Purely data-driven models may overfit limited clinical records, while purely physiological models may not capture individual variation. This work combines both strengths using physics-informed neural networks. The neural network learns from patient data, but its training is guided by pharmacokinetic and pharmacodynamic equations that describe how erythropoietin affects red blood cell production and hemoglobin levels. The paper also adapts the equations so the model can handle impulse-like dosing and delayed biological response. The resulting model is more accurate and robust than several baseline approaches, and it provides a foundation for patient-specific treatment planning.

## Model Predictive Control for Renal Anemia Treatment through Physics-informed Neural Network

https://www.sciencedirect.com/science/article/pii/S2405896324011078

**Image file:** `research_images/renal-anemia-zone-mpc.png`

**One-sentence summary:** Turn hemoglobin prediction into a dosing planner that keeps treatment inside a healthy target zone.

**Expanded introduction:** Predicting hemoglobin is useful, but treatment also requires deciding how much erythropoietin to give and when to give it. This paper builds that decision-making step using zone model predictive control. Instead of forcing hemoglobin toward one exact value, the controller aims to keep it within a clinically acceptable range. The prediction model is a physics-informed neural network for control, which can take time, current patient state, and future dosing decisions as inputs. This makes it suitable for rolling treatment optimization. By combining physiology-guided learning with control design, the method provides a simulation-based decision-support tool for individualized renal anaemia treatment.

## Molecular composition reconstruction of naphtha fractions through data-driven modeling and interpretable optimization

https://www.sciencedirect.com/science/article/pii/S0009250925014769

**Image file:** `research_images/naphtha-composition-reconstruction.png`

**One-sentence summary:** From a few routine fuel measurements, rebuild the molecular ingredient list of naphtha.

**Expanded introduction:** Refineries often need molecular-level information about petroleum fractions, but directly measuring every molecular detail is expensive and time-consuming. This work reconstructs the molecular composition of naphtha from a limited set of bulk properties, such as density and boiling point information. A feedforward neural network first learns how molecular composition maps to measurable properties. The trained model is then embedded inside an inverse optimization problem, which searches for a realistic composition that would produce the observed properties. To keep the answer chemically plausible, the method uses database-derived reference compositions, carbon number patterns, compound-type distributions, and entropy-based regularization. Interpretable analysis with SHAP helps explain why selecting key bulk properties improves the reconstruction.

## Database-driven and property-constrained inference of molecular composition of petroleum fractions from routine experimental data

https://www.sciencedirect.com/science/article/pii/S1385894726039094

**Image file:** `research_images/petroleum-composition-inference.png`

**One-sentence summary:** Bring molecular-level petroleum analysis closer to everyday refinery lab tests.

**Expanded introduction:** Heavy petroleum fractions contain highly complex molecular mixtures, and detailed molecular characterization usually requires specialized high-resolution instruments. This paper proposes a faster and more accessible inference framework based on routine industrial measurements, including gas chromatography and elemental analysis. A database of heavy gas oil samples links routine measurements with high-resolution molecular composition data. For a new sample, the method first finds a weighted combination of reference samples whose chromatographic profiles match the target, then refines the inferred molecular composition under property constraints such as elemental composition, density, and saturated-to-aromatic ratio. The final inferred compositions agree well with high-resolution mass spectrometry results, helping bridge ordinary refinery lab data and research-grade molecular insight.
