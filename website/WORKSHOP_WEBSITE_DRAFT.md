# eCAADe 2026 workshop_HAT - participant website draft

Status: content and architecture draft for review. Nothing in this document is deployed.

## 1. Recommended platform

Use an Astro content site deployed from this GitHub repository to Cloudflare Pages.

Recommended stack:

- Front end: Astro with Markdown/MDX content and a responsive component library.
- Hosting: Cloudflare Pages connected to the GitHub repository.
- Access: a Pages Function middleware that validates a participant passcode and issues a signed, HttpOnly session cookie.
- Q&A channel: a visible, searchable `qa_posts` channel stored in Cloudflare D1.
- Feedback channel: a separate `feedback` form and table; submissions are private to instructors and can be anonymous.
- Materials: stored in the same private GitHub project and served only through protected website routes.
- Updates: each push to `main` deploys the production site; pull requests receive preview deployments.

Important security boundary: the current GitHub repository is public. A website passcode cannot protect files that remain directly downloadable from a public repository. Before restricted slides, plugins, or participant-only files are committed, either make the repository private or store those files in protected private storage. A client-side password screen alone is not security.

The shared passcode is appropriate for low-risk workshop gating, not confidential or licensed data. For stronger access control, replace it with individual email one-time codes.

## 2. Proposed site map

### Public routes

- `/` - concise workshop landing page.
- `/access` - participant passcode form.
- `/privacy` - what Q&A and feedback data are collected and how they are used.

### Passcode-protected routes

- `/workshop` - participant dashboard and announcements.
- `/curriculum` - seven-module curriculum panel and learning sequence.
- `/methodology` - methodology overview, diagrams, and slide downloads.
- `/cases` - workshop case studies and participant examples.
- `/materials` - tutorials, notebooks, scripts, plugins, and downloads.
- `/qa` - public-to-participants questions, answers, tags, search, and solved status.
- `/feedback` - private feedback form, separate from Q&A.
- `/updates` - release notes and newly published materials.

## 3. Navigation model

Follow the reference Notion page's simple narrative rhythm, but add clearer participant operations.

Desktop:

- Sticky left navigation with Introduction, Curriculum, Schedule, Methodology, Cases, Materials, Q&A, Feedback, and Expected Outcomes.
- Main content in one readable column.
- Persistent status card showing workshop day, next session, material update state, and access status.

Mobile:

- Collapsible top navigation.
- Curriculum changes from a seven-column strip into a vertical sequence.
- Schedule becomes stacked time cards.
- Downloads remain large touch targets with file type and size labels.

## 4. Landing page copy

### Hero

**Human-AI Teaming**

**A Paradigm Shift from Predictive Models to Explainable Coupled Intelligence**

Train, interpret, package, and apply surrogate models in computational design.

Two-day hybrid eCAADe 2026 workshop. Day 2 is optional.

Primary actions:

- View the curriculum.
- Enter participant area.
- Check software requirements.

### Quick facts

- Format: two-day hybrid workshop; second day optional.
- Participants: ideally 15-20, maximum 30.
- Dates: 7-8 September 2026 - confirm year, venue, and time zone before publication.
- Required: laptop, Rhinoceros 3D, Grasshopper, and Python or Google Colab.
- Recommended background: basic Python, Rhino/Grasshopper proficiency, and familiarity with urban-environment analysis.

### Introduction

Design optimization needs a new paradigm. High-fidelity environmental simulations are often too slow for the thousands of iterations required in modern design exploration. This workshop connects design generation, simulation, surrogate modelling, explainable AI, and optimization in one participant-centred workflow.

The emphasis is not only faster prediction. Participants will learn how to validate models, understand what drives predictions, package trained models for designers, and retain human judgement when AI supports design decisions.

### Tutors

- Pia Fricker - Professor, Aalto University.
- Chaowen Yao - PhD Candidate, Aalto University.
- Yichao Shi - PhD Candidate, Georgia Institute of Technology.
- Zubin Tan - University Teacher / Lecturer, Aalto University. Confirm the preferred title before publication.

Contact emails should be published only after every tutor approves their inclusion.

## 5. Curriculum panel

The curriculum is displayed as seven connected modules. Each card shows purpose, activity, output, and readiness.

### 1. Surrogate Model Introduction

From simulation to rapid design iteration.

- Understand scalar, spatial-field, and generative surrogate models.
- Identify where a surrogate model can replace or complement slow simulation.
- Define inputs, outputs, training data, validation, and designer control.

Participant output: a one-paragraph surrogate-model brief for a chosen design problem.

### 2. Feature Extraction

Translate space into trainable data.

- Compare geometry, environmental, semantic, topological, and image-based variables.
- Select an appropriate analysis unit: point, grid, block, design scheme, or map.
- Handle missing data, outliers, encoding, normalization, and scale differences.

Participant output: a feature-and-target data schema.

### 3. Model Training

Select, train, validate, and test models.

- Preserve the roles of 70% training, 15% validation, and 15% locked testing.
- Compare OLS, random forest, XGBoost, MLP/ANN, CNN, and generative methods by data type and task.
- Explore editable XGBoost settings without repeatedly selecting from the locked test.
- Choose metrics and loss functions appropriate to continuous, categorical, ordinal, spatial-image, or generative outputs.

Participant output: one validated pooled XGBoost model and a performance table.

### 4. Model Interpretation

Move from black-box prediction to actionable evidence.

- Read environment-only SHAP beeswarm plots.
- Interpret all seven environmental SHAP dependence plots.
- Explain an individual prediction with a SHAP waterfall.
- Map local model contributions using spatial SHAP.
- Distinguish fitted association from causation.

Participant output: a concise interpretation of global, local, interaction, and spatial model behaviour.

### 5. Module Encapsulation

Move the trained model into a designer-facing tool.

- Export the pooled model to ONNX.
- Verify Python-to-ONNX parity on example cases.
- Define Grasshopper inputs, outputs, units, reliability codes, and warnings.

Participant output: an ONNX model package and component interface specification.

Status: detailed encapsulation tutorial to be published soon.

### 6. Design Support

Use interpretable prediction to guide design decisions.

- Connect model output to Rhino/Grasshopper workflows.
- Compare scenarios without claiming causal effects.
- Translate predictions and SHAP diagnostics into defensible design actions.

Participant output: a small design scenario with performance and diagnosis outputs.

Status: example Grasshopper plugin to be published soon.

### 7. Agentic Optimization

Extend computational design toward context-aware AI assistance.

- Translate semantic design requests into structured parameters.
- Connect generation, prediction, simulation, optimization, and memory.
- Discuss human oversight, limits, and responsible use.

Participant output: an optimization concept or optional prototype.

Status: advanced optional module.

## 6. Schedule

Time zone: `[CONFIRM TIME ZONE]`

### Day 1 - 7 September 2026

| Time | Session | Participant focus |
|---|---|---|
| 09:30-12:00 | Self-introductions, workshop overview, break, methodology lecture | Frame a design problem and understand the end-to-end workflow. |
| 12:00-13:30 | Lunch | - |
| 13:30-17:00 | Case study, break, guided case workshop | Prepare data, train the pooled model, and inspect validation results. |

### Day 2 - 8 September 2026 - optional

| Time | Session | Participant focus |
|---|---|---|
| 09:30-12:00 | Discussion panel, self-workshop and Q&A, peer sharing | Continue model explanation, ONNX export, and tool packaging. |
| 12:00-13:30 | Lunch | - |
| 13:30-17:00 | Self-workshop and Q&A, peer sharing, closing and feedback | Apply the workflow to an individual case and document next steps. |

### Hybrid access

- Physical venue: `[TO BE CONFIRMED]`
- Zoom room: `[ADD ZOOM LINK]`
- Meeting ID: `[ADD]`
- Passcode: distribute privately; do not write the actual code in the repository.
- Support hours / contact: `[ADD]`

## 7. Methodology page

### Overview

The methodology page presents one connected pipeline:

`Simulation or measured data -> feature extraction -> leakage-safe processing -> model training -> validation and locked test -> explainability -> ONNX encapsulation -> design support -> optional agentic optimization`

### Slides

- Overall workshop slides - `[DOWNLOAD TO BE ADDED]`
- Methodology lecture slides - `[DOWNLOAD TO BE ADDED]`
- Data-to-decarbonization case slides - `[DOWNLOAD TO BE ADDED]`
- Previous cases and participant-work examples - `[DOWNLOAD TO BE ADDED]`

Every slide download should show version date, file size, accessibility note, and whether it is participant-only.

## 8. Workshop cases

### Primary teaching case: urban-tree carbon growth

The primary exercise uses multi-temporal urban-tree observations to train and explain one pooled XGBoost model. Participants work through leakage-safe splitting, VIF diagnosis, editable model settings, validation, locked testing, environment-only SHAP, spatial SHAP, and ONNX export.

The environmental interpretation covers daytime noise, surrounding-tree density, monoculture rate, sky-view factor, solar radiation, land-surface temperature, and nighttime illumination.

### Previous-case gallery

- Urban thermal comfort - landscape architecture.
- Construction carbon emissions - LLM-driven low-carbon ice-rink design.
- Shared-street vitality - multi-stakeholder performance prediction and optimization.
- Urban-space safety - zoning, crime, street view, and infrastructure analysis.
- Urban forestry - point-cloud extraction, carbon estimation, growth diagnosis, and design optimization.

Each gallery card should distinguish teaching example, published work, work in progress, and external link.

## 9. Materials page

### Available now

| Material | Format | Access | Link |
|---|---|---|---|
| Guided pooled-model workshop | Colab notebook | Participant area | `urban_tree_ml_workshop_2026.ipynb` |
| Reusable training workflow | Python | Participant area | `urban_tree_ml_workshop_2026.py` |
| Teaching sample | CSV | Participant area | `data/tree_carbon_ml_teaching_sample.csv` |
| Verified outputs | Tables, figures, ONNX | Participant area | `reference_outputs/` |
| Model settings experiment | Notebook cell | Participant area | `USER_XGB_SETTINGS` |
| Seven-variable SHAP dependence figure | PNG | Participant area | `reference_outputs/figures/shap_dependence_all_environmental_variables.png` |

### To be published soon

| Material | Planned format | Placeholder action |
|---|---|---|
| Environment-setting tutorial | Web guide + PDF | Notify me when published. |
| Rhino/Grasshopper plugin-encapsulation script | C# / Grasshopper example | Notify me when published. |
| Example packaged plugin | Downloadable ZIP / GH file | Notify me when published. |
| Design-support exercise | Rhino + Grasshopper files | Notify me when published. |
| Agentic-optimization extension | Tutorial + example | Notify me when published. |

“Notify me” should be optional and must explain where the submitted email is stored and how it will be used. If email collection is unnecessary, replace it with a visible release-status label.

## 10. Environment-setting tutorial outline

This placeholder can later become a step-by-step page:

1. Choose Google Colab or local Python.
2. Install Rhino 8 and open Grasshopper.
3. Confirm Python and package versions.
4. Download or clone the workshop repository.
5. Open the notebook and locate the teaching CSV.
6. Run a small environment check.
7. Confirm figures, ONNX Runtime, and example predictions.
8. Troubleshoot common Colab, path, package, and Rhino issues.

Status: to be published soon.

## 11. Q&A channel

The Q&A area is visible to all authenticated participants and is intentionally separate from feedback.

Functions:

- Ask a question with optional display name.
- Tags: Setup, Data, VIF, Model Training, Validation, SHAP, Spatial SHAP, ONNX, Rhino/Grasshopper, Optimization, Other.
- Search and filter.
- Instructor answer badge.
- Mark as solved.
- Upvote an existing question instead of duplicating it.
- Instructor moderation and archival.

Suggested opening prompt:

> Ask technical and methodological questions here. Questions and answers are visible to workshop participants. Do not upload private data, API keys, or copyrighted files.

## 12. Feedback channel

Feedback is private to the teaching team and is not displayed in Q&A.

Suggested fields:

- Workshop day / session.
- Overall usefulness: 1-5.
- Pace: too slow / appropriate / too fast.
- Confidence before and after the session.
- Most useful component.
- Most confusing component.
- Missing material or support need.
- What should change before the next workshop?
- Optional contact email for follow-up.
- Submit anonymously checkbox, selected by default.

Confirmation text:

> Thank you. Your feedback has been recorded separately from the participant Q&A board.

## 13. Expected outcomes

By the end of the workshop, participants should be able to:

1. Build a compact, testable workflow connecting design data, model training, validation, interpretation, and design application.
2. Package a lightweight ONNX-based Rhino/Grasshopper or web-tool prototype.
3. Explain global and local model behaviour without overstating correlation as causation.
4. Develop a conference-ready methodology, prototype, or research direction from the workshop exercise.

Do not promise a conference publication as an automatic workshop outcome. Present it as a possible continuation for sufficiently developed work.

## 14. Visual direction

- Preserve the slide deck's white space, restrained black typography, and technical-diagram character.
- Use one dark charcoal base, one vegetation green accent, and one cool blue accent.
- Use images from the supplied slides only after confirming reuse rights and attribution.
- Keep curriculum cards concise and connected by a visible workflow line.
- Use accessible contrast, keyboard navigation, descriptive link text, and alt text.
- Avoid placing important instructions only inside slide images.

## 15. Repository structure for implementation

```text
eCAADe-2026-workshop_HAT/
  README.md
  CONTRIBUTING.md
  data/
  reference_outputs/
  urban_tree_ml_workshop_2026.ipynb
  urban_tree_ml_workshop_2026.py
  website/
    src/
      content/
        introduction.md
        curriculum.md
        schedule.md
        methodology.md
        cases.md
        materials.md
      pages/
      components/
    functions/
      _middleware.ts
      auth/
      api/qa/
      api/feedback/
    public/
      materials/
      slides/
      images/
    database/
      schema.sql
    wrangler.jsonc
```

The actual passcode must be an environment secret, never a committed string. Protected download routes must be covered by the same middleware as protected pages.

## 16. Decisions required before implementation

1. Confirm date, year, physical venue, and time zone.
2. Provide the Zoom URL and decide whether it should appear only after passcode entry.
3. Confirm tutor titles, biographies, photos, and permission to publish emails.
4. Decide whether to make this repository private before participant-only files are added.
5. Choose shared passcode or stronger individual email access.
6. Decide whether Q&A names are optional or linked to participant identity.
7. Confirm that feedback is anonymous by default and define a retention period.
8. Confirm which PDFs can be distributed and what attribution or internal-use notice they require.
9. Confirm whether the Rhino example may be redistributed as source, binary, or both.
10. Provide a custom domain if desired.

## 17. Suggested implementation phases

### Phase 1 - content prototype

- Build the responsive landing page, curriculum, schedule, methodology, cases, and material placeholders.
- Test desktop, tablet, and mobile layouts locally.

### Phase 2 - access and participation

- Add server-side passcode middleware and signed session cookies.
- Add D1-backed Q&A and private feedback.
- Add moderation, rate limiting, validation, and privacy text.

### Phase 3 - material release

- Add approved PDFs, tutorial pages, scripts, and plugin downloads.
- Confirm that direct asset URLs are protected.
- Run accessibility, download, and access-control tests.

### Phase 4 - deployment

- Connect the private GitHub repository to Cloudflare Pages.
- Configure secrets and D1 bindings.
- Review a preview deployment.
- Publish only after the teaching team approves content, access, and privacy behaviour.
