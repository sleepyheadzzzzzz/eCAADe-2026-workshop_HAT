# eCAADe 2026 · Human–AI Teaming workshop

This repository is the participant-facing home for the eCAADe 2026 workshop
**Human–AI Teaming: From Predictive Environmental Models to Explainable,
Design-Coupled Intelligence**.

## Start here

| Area | What it contains |
|---|---|
| [`introduction/`](introduction/) | Workshop description, tutors, curriculum, schedule, expected outcomes and selected overview-slide images. |
| [`materials/`](materials/) | Methodology, teaching cases, participant exercises and the complete model-training exercise. |
| [`website/site/`](website/site/) | Source for the passcode-protected participant website, Q&A and feedback channels. |

## Participant website

The production website is
[ecaade-2026-workshop-hat.netlify.app](https://ecaade-2026-workshop-hat.netlify.app)
and is published from `website/site/`. All participant downloads are bundled
with the web application, so they do not depend on GitHub raw-file links.

The website uses a black-and-white interface. The protected participant hub is
organized as **Setup Guide**, **Slides**, **Codes & Samples**, and
**Discussion**, with interactive Q&A and private feedback channels.

## Model-training exercise

[![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/sleepyheadzzzzzz/eCAADe-2026-workshop_HAT/blob/main/materials/model-training/urban_tree_ml_workshop_2026.ipynb)

The reproducible Python/Colab exercise, sample data, reference figures and ONNX
outputs are in [`materials/model-training/`](materials/model-training/). It
builds one pooled urban-tree carbon-growth model and explains the seven
environmental predictors with beeswarm, dependence, waterfall and spatial SHAP
views.

## Repository status

This is a living workshop repository. The setup guide, environment-check
notebook, updated PDF slides, pooled model-training exercise and Grasshopper
ONNX plugin template are available now. Session-specific Zoom links are shown
only inside the protected participant website. The compiled **Betula** plugin
can be installed through Rhino 8 Package Manager by searching for `Betula`.

## Contributing

Invited contributors are welcome to use a branch and pull request. Please read
[`CONTRIBUTING.md`](CONTRIBUTING.md) before changing the scientific target,
split logic, reference outputs or deployment contract.

## Contributors and attribution

Yichao Shi ([@SHIyichao98](https://github.com/SHIyichao98)) authored the setup
guide, environment-check resources, and Grasshopper ONNX plugin encapsulation
template reused by this workshop. See [`CONTRIBUTORS.md`](CONTRIBUTORS.md) and
[`NOTICE.md`](NOTICE.md) for formal credit and provenance.

## License

See [`LICENSE`](LICENSE). Reused DF_2026 resources retain their original MIT
License in [`materials/licenses/DF_2026_MIT_LICENSE.txt`](materials/licenses/DF_2026_MIT_LICENSE.txt).
