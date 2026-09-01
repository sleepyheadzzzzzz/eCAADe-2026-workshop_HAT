# Grasshopper plugin encapsulation

The included template wraps a single-input, single-output tabular ONNX
regression model as a compiled Grasshopper component for Rhino 8.

- Browse [`DF2026_Plugin_Template/`](DF2026_Plugin_Template/).
- Download [`DF2026_Plugin_Template.zip`](DF2026_Plugin_Template.zip).
- Replace the model in `Model/model.onnx`.
- Edit the component contract in `Plugin/PluginConfig.cs`.
- Build the Visual Studio solution and distribute the complete release folder,
  not only the `.gha` file.

The exact input order and preprocessing must match the exported ONNX model.
Validate at least one Grasshopper prediction against Python before release.

Original template author: Yichao Shi
([@SHIyichao98](https://github.com/SHIyichao98)). The template originates from
[`SHIyichao98/DF_2026`](https://github.com/SHIyichao98/DF_2026) and is reused
under its MIT License.
