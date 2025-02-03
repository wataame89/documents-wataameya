
# 应用篇

:::info 页面说明
当 Marshmallow PB 运作正常，但想了解更高级的用法时可参阅此页面。  
（若想解决常见问题，请查看 [“当遇到问题时”](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition)、[“Q&A”](https://wataame89.github.io/documents-wataameya/marshmallowPB/qa)）
:::

### 利用头像原本的 PhysBone

若想保留头像原本 PB 的晃动，仅使用 Marshmallow PB 的挤压功能，请开启 “仅应用挤压功能（使用原本 PB）”。在这种状态下，原 PB 的运动将保持原样，但按压时会发生挤压。如果还想启用 Marshmallow PB 的抓取功能，需将原 PB 的 Allow Grabbing 关闭。

### 调整 Marshmallow PB 的晃动

Marshmallow PB 的晃动由多个参数共同决定。  
PB 预设会设定 PhysBone 的 “Pull”、“Momentum”、“Stiffness”、“Gravity”、“GravityFalloff”、“Immobile”。

除此之外，还有两个对晃动影响较大的参数：“StretchMotion” 和 “胸部骨骼旋转贡献度”。

- **“StretchMotion”**：与胸部挤压方向相关的惯性参数，决定 **移动时的软硬度**。
- **“胸部骨骼旋转贡献度”**：与胸部骨骼角度、重量感相关的参数。
  - 设为 1 时与普通 PB 相同；数值越接近 0，胸部骨骼越倾向平行移动，从而在视觉上稍向后移动，可能显得更自然。
  - 默认值是 0.8，略带一些平行移动效果。

通过调整这两个参数，可对晃动进行更细致的调控。具体请参考 [设定项目](http://localhost:3000/documents-wataameya/marshmallowPB/howtouse/setup)。

### 调整 Marshmallow PB 的位置和角度

若通过预设配置了受支持的头像，则 Marshmallow PB 的骨骼位置和角度是固定的；若为不支持的头像，则会使用您手动设定的值。若您增加了胸部大小等，可再次进行位置或角度调整。

### 与其他玩家的 Marshmallow PB 进行干涉

在 Marshmallow PB 的设定中开启 “和其他玩家的胸部干涉” 后，双方都开了该选项的玩家间才会发生胸部相互干涉。默认是关闭状态。

### 与头部碰撞体进行干涉

~~当开启 “和其他玩家的胸部干涉” 时，即使对方没有 Marshmallow PB，也可与默认的头部碰撞体产生干涉。不过默认的头部碰撞体较小，可在 Avatar Descriptor 的 Coliders 里调大碰撞体大小，以便更容易干涉。~~  
Marshmallow PB 在启用 “和其他玩家的胸部干涉” 时，会与具有 head_tag 的 VRC Contact Sender 进行干涉。若在头部等处设置了 VRC Contact Sender，则可以与对方的 Marshmallow PB 进行碰撞。

<img
src={require('/img/marshmallowPB/head.png').default}
style={{ width: '100%' }}
/>

### 调整挤压动画

Marshmallow PB 通过动画拉伸胸部骨骼，营造蓬松感。如果想修改挤压动画，可编辑 “marshmallow_PB/Animation/MPB_L_Scale_squish” 和 “MPB_R_Scale_squish” 两个动画的 Scale x, y 参数。

### 添加自制的头像预设

Marshmallow PB 提供了记录各头像配置的预设功能。  
若需要为多个相同类型的不支持头像进行重复设置，可考虑添加自制的头像预设，使用起来会很方便。

#### 添加自制头像预设的方法

1. 准备两个头像：胸部形状键分别为 0 和 100 的版本。按不支持的头像方式分别配置，并记录下 marshmallow_PB_L 的 position、rotation、scale。
2. 在 Preset 文件夹内复制 “Preset0”，改个合适的名字。（仅使用数字名可能会出错）
3. 编辑该文件中的 avatarName、Path、breast_L_position、breast_L_rotation、breast_L_scale 等信息。  
   （“\_0” “\_100” 分别对应胸部形状键为 0 和 100 的数值）  
   其他参数保持默认一般也不影响使用。
4. 在设置工具中确认该预设已出现即完成。

#### 头像预设的设定项目

<img
src={require('/img/marshmallowPB/preset.png').default}
style={{ width: '80%' }}
/>
头像的预设配置位于 “marshmallow_PB/Setup/Preset” 文件夹下。

#### Path

从头像到胸部骨骼或碰撞体的相对路径。

#### breast_L_position, breast_L_scale

分别为 marshmallow_PB_L 的局部坐标和缩放。marshmallow_PB_R 会自动根据 L 的坐标镜像生成。

#### (Parameter)\_0, (Parameter)\_100

胸部形状键为 0 和 100 时的各参数值。中间值会自动插值。各参数与 [设定项目](http://localhost:3000/documents-wataameya/marshmallowPB/howtouse/setup) 中 PhysBone 的参数相对应。

<!-- 如果愿意将自制的不支持头像预设分享给官方，可通过[此 Google Form](https://forms.gle/9qfEqBHDyiEisy4G9)提交。 -->

<!-- ### 手动导入（例如 Prefab）
若想不使用工具而手动引入 Marshmallow PB（不推荐），可参考以下视频。
<iframe width="280" height="158" src="https://www.youtube.com/embed/pKpk3hQhihc?si=trFn__bA0hqWF_76" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> -->

