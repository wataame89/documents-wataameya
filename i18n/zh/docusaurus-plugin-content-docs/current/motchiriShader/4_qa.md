
# Q&A

:::info 页面说明
如果「もっちりシェーダー」能够正常运行，但存在疑问或不满，可参考此页面。  
（若想了解更高级的用法，请参见 [「使用方法/进阶篇」](https://wataame89.github.io/documents-wataameya/motchiriShader/howtouse/addition)，若无法正常运行请参见 [「不具合対応」](https://wataame89.github.io/documents-wataameya/motchiriShader/howtouse/addition)）
:::

### 面部遮罩没有附带吗？

某些 Avatar 会附带面部遮罩，其他则没有。如果未附带，则需要自行制作。

### 想在 Unity 游戏中使用

已另外开发了对应 URP 的「もっちりシェーダー」。  
将来可能会公开，若想在开发中使用可与我联系。

使用示例：[ミスター秘密侵入 VR](https://www.dlsite.com/maniax/work/=/product_id/RJ01266526.html/?utm_medium=affiliate&utm_campaign=sns_link&utm_content=RJ01266526&utm_source=mr-vr-jp.github.io%2F)

### 希望能兼容 Poiyomi

由于无法在 Poiyomi 上制作对应的自定义着色器，目前暂无兼容计划。

### 想让已导入「もっちりシェーダー」的 Avatar 恢复原状

#### 新方式的情况：

新方式为非破坏性导入，因此在 Avatar 下删除 marshmallow_PB_Setup 即可恢复导入前的状态。

#### 旧方式的情况：

若 Avatar 已经替换为「もっちりシェーダー」，请将其材质球着色器改回 lilToon，并删除 motchiri 对象，同时将 FX 动画图层还原到原始状态。

