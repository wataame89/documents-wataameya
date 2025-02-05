
# 导入方法

### 适配头像的情况

<iframe width="100%" height="480" src="https://www.youtube.com/embed/BnpupxYl1XA?si=242cx5mi2yY1-sgL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

#### 导入相关包

1. 使用 VRChat Creator Companion(VCC) 打开项目。
2. 在 VCC 中导入 [Modular Avatar](https://modular-avatar.nadena.dev/ja/) 包。（[包链接在此](vcc://vpm/addRepo?url=https://vpm.nadena.dev/vpm.json)）
3. 在 VCC 中的 Manage Project 中，添加 "**Gesture Manager**"、"**Modular Avatar**"、"**Non-Destructive Modular Framework**" 三项。
4. 再次打开项目，确认它们已被导入。

:::caution
如果项目中已存在 **ver1.9.0 及之前版本的 もっちりシェーダー** 或者 **beta 版 もっちりシェーダー**，请先删除 motchiri_shader 文件夹。（VGC 文件夹中存有原有的 FX，因此请不要删除）
:::

#### 导入もっちりシェーダー

5. 导入[最新版のもっちりシェーダー](https://wataame89.booth.pm/items/4108136)。
6. 确认头像使用的着色器是 lilToon。
7. 右键点击头像，在菜单中选择 “wataameya → MotchiriShader”。
8. 在生成的 motchiri_shader_Setup 中设置头像的预设。
9. 将 “Asset/motchiri_shader” 文件夹里的 for test prefab 拖入场景。
10. 在菜单栏点击 “Tools→Gesture Manager Emulator”。
11. 运行 Gesture Manager，将 for test 对准皮肤位置，如能正常表现弹软效果即表示设置完成。

:::caution
若无法正常运行，请参见[「不具合対応」](https://wataame89.github.io/documents-wataameya/motchiriShader/howtouse/addition)或[「Q&A」](https://wataame89.github.io/documents-wataameya/motchiriShader/qa)。
:::

<br/>
<br/>

### 非适配头像的情况

<!-- <iframe width="100%" height="480" src="https://www.youtube.com/embed/BYJZBUt0f_w?si=W9nI2fAhSIp5ubg8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> -->

#### 导入もっちりシェーダー

导入方法与适配头像几乎相同。  
只是在选择预设时请选择“無し（无）”，然后手动指定需要应用弹软效果的网格及遮罩。

若没有对应的遮罩，则需要自行创建。

#### 生成遮罩

需要根据头像的 UV，制作一张**不想下陷的部分涂为黑色**的遮罩。

<img
src={require('/img/MotchiriShader/Rindo.png').default}
style={{ width: '50%' }}
/>

在这张遮罩上，UV 对应为白色的部分会产生下陷，黑色部分不会下陷。（灰色等介于中间的颜色会产生介于白与黑之间的下陷力度）  
另外，如果 UV 的分割线所在位置，下陷力度不同，就可能在网格变形处产生崩坏，所以建议在分割线附近让颜色保持一致。（在 Blender 的贴图绘制功能中直接涂抹会比较方便）

可用绘画软件在全白的贴图上，将角色的手部与脚部区域对应的 UV 全部涂黑，并对手腕与脚腕连接处也一并涂成黑色。请在手脚与身体的连接处用柔化处理（模糊）。

:::caution

- 虽然并非绝对必须，但通常也会将头颈、前臂、肘部、膝盖、肚脐及骨盆、胫骨等处涂黑以防止变形过度、看起来更自然。
- 若头像的面部与身体公用同一张纹理，请将面部也涂黑。

:::

:::danger

- 将遮罩导入 Unity 后，请务必在贴图属性中开启 **Mip Streaming**（否则上传时可能会报错）。

:::

#### 参考示例：

以「竜胆」的 UV 图为例，遮罩可如下图制作：

<img
src={require('/img/MotchiriShader/hitaiou1.png').default}
style={{ width: '80%' }}
/>

对于面部遮罩，可先将整张贴图涂为黑色，然后再将脸颊区域改涂为白色并柔化，能更轻松地制作。
<img
src={require('/img/MotchiriShader/hitaiou2.png').default}
style={{ width: '30%' }}
/>

如果您制作了非适配头像的遮罩，欢迎[通过此表单](https://forms.gle/KLTTSqsE4qs8uvfN8)分享。  
（[遮罩共享文件夹在此](https://drive.google.com/drive/folders/1stqqIn21kCK0fb2n-9iuPANs1vyrfCKaCaRX-rHcl3V3LFspC_EzBBgI0mktw_Ot9TtHXLb9?usp=sharing)）

<br/>
<br/>

### 旧方式（不使用 Modular Avatar）

:::danger 不推荐的方法
由于该方式会复制并修改 Avatar 与 FX 动画图层，现已不推荐使用。  
如果没有特别需求，建议使用新方式。

若要使用该方式并在 Unity 中用 Gesture Manager 进行检测，请使用 VRChat Creator Companion(VCC)。  
（虽然不推荐，但若只想在 VRChat 上直接确认，也可以不用 VCC。）

[旧方式的说明可点击此处查看](https://docs.google.com/document/d/12P_FFVJuNOV73QjRfC3pZ4aRZqmnqr281_yjS4hq_uY/edit?usp=share_link)
:::

