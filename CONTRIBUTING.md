# Contributing to eCAADe 2026 workshop_HAT

Thank you for improving the workshop. Use a short-lived branch and submit a pull request to `main` so changes can be reviewed before they alter the teaching workflow.

## Local setup

```bash
python -m venv .venv
python -m pip install -r requirements-colab.txt
python urban_tree_ml_workshop_2026.py
```

Generated files are written to `outputs/`, which is intentionally ignored by Git.

## Scientific safeguards

- Keep every repeated period from the same `Original_Tree_RowID` in one partition.
- Keep the 70% training, 15% validation, and 15% locked-test roles distinct.
- Use validation results—not repeated locked-test inspection—to compare editable XGBoost settings.
- Preserve the target definition documented in the README unless the change is explicit and fully regenerated.
- Keep the primary model pooled; species remains a categorical predictor rather than a numeric ordinal code.
- Display only the seven environmental predictors in the teaching SHAP outputs.
- Describe SHAP values as fitted model associations, not causal environmental effects.
- Back-transform log-SGR before reporting percentage-point or kg C errors.

## Before opening a pull request

1. Run the complete Python workflow with the supplied defaults.
2. Confirm the validation-selected tree count and reference metrics, or explain why they changed.
3. Confirm the dependence contact sheet contains all seven environmental variables.
4. Confirm ONNX parity passes for log-SGR, annual percentage growth, and kg C gain.
5. Keep notebook code cells synchronized with the Python module and explain every executable cell.
6. If outputs change, update `reference_outputs/` and `reference_outputs/RUN_LOG.md` in the same pull request.

Do not commit private source data, credentials, local absolute paths, notebook checkpoints, or the generated `outputs/` directory.
