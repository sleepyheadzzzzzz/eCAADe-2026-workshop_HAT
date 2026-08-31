# Explainable machine learning for urban-tree carbon growth

[![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/sleepyheadzzzzzz/eCAADe-2026-workshop_HAT/blob/main/materials/model-training/urban_tree_ml_workshop_2026.ipynb)

This exercise turns multi-temporal urban-tree observations into one pooled
XGBoost model and then explains, maps and exports that model. Species remains a
categorical predictor; the workflow does not fit separate species models.

## Lesson stages

1. Environment setting and data preparation
2. Leakage-safe data processing and training-only VIF diagnosis
3. Training, validation, 85% refit and locked testing
4. Environment-only beeswarm, dependence, waterfall and spatial SHAP
5. ONNX export with a reproducible example test set

## Files

| File or folder | Purpose |
|---|---|
| `urban_tree_ml_workshop_2026.ipynb` | Guided Google Colab exercise |
| `urban_tree_ml_workshop_2026.py` | Reusable Python module and command-line workflow |
| `data/tree_carbon_ml_teaching_sample.csv` | Cleaned tree-level teaching sample |
| `requirements-colab.txt` | Python dependencies |
| `reference_outputs/` | Verified metrics, tables, figures, model and ONNX examples |

## Scientific target

For each tree-period observation:

```text
g = [ln(C_end) - ln(C_start)] / years
y = ln(g)
```

`g` is annualized specific carbon growth in year⁻¹; `y` is the model target.
Percentage and kg C outputs are explicitly back-transformed after prediction.

## Run locally

```bash
python -m pip install -r requirements-colab.txt
python urban_tree_ml_workshop_2026.py
```

The script keeps repeated periods from the same tree in one partition, uses
validation for model selection and evaluates the locked test only after the 85%
refit. SHAP outputs display only the seven environmental predictors. SHAP values
describe fitted associations, not causal effects.

## Verified checkpoint

The committed run used seed 2026 and 543 validation-selected boosting rounds.
The locked test achieved R² = 0.431, RMSE = 1.062 and MAE = 0.779 on log-SGR;
back-transformed MAE was 4.41 percentage points and 4.96 kg C tree⁻¹ yr⁻¹.

The exported ONNX package and exact feature contract are in
`reference_outputs/models/`, with raw and engineered examples in
`reference_outputs/examples/`.
