# 进阶用法

:::info 页面说明
当 Marshmallow PB 正常工作时，如果你想进一步细致地控制其行为，请参考本页面。  
（一般性问题请参阅[「出现问题时」](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition)或[「Q&A」](https://wataame89.github.io/documents-wataameya/marshmallowPB/qa)。）
:::

### 调整 Marshmallow PB 的晃动

Marshmallow PB 的晃动主要由以下三类参数决定：

- **PhysBone**
- **Inertia（惯性／伪多重骨骼）**
- **Parallel Bone（平行骨骼）**

**PhysBone** 控制骨骼的基本运动，是决定 **胸部如何晃动** 的主要参数。  
**Inertia** 控制惯性效果，是决定 **胸部柔软度与拖尾感** 的关键。  
**Parallel Bone** 控制胸部骨骼保持角度的能力，从而决定 **胸部的重量感**。

Marshmallow PB 在普通 PhysBone 的基础上加入 Inertia 与 Parallel Bone，从而实现更加自然的“棉花糖式”胸部晃动。

<div
  style={{
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  }}
>

  <div>
    <p><strong>左：无 Inertia / Parallel Bone</strong></p>
    <img
      src={require('/img/marshmallowPB/PhysBone_NoInertiaNoParallel.gif').default}
      style={{ width: '100%' }}
    />
  </div>

  <div>
    <p><strong>右：有 Inertia / Parallel Bone</strong></p>
    <img
      src={require('/img/marshmallowPB/Physbone.gif').default}
      style={{ width: '100%' }}
    />
  </div>
</div>

通过调节这些参数，可以对晃动进行非常精细的调教。  
各参数的详细说明请参阅[「设置面板」](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup)。

若想微调 PhysBone 与 Inertia，可以在生成设置后，直接编辑头像下新建的  
`marshmallow_PB/PhysBone_L,R` 与 `marshmallow_PB/Inertia_L,R` 组件中的参数，进入 Play 模式后效果会立即反映。  
Parallel Bone 相关参数则请在系统设置面板中进行调整。

<img
src={require('/img/marshmallowPB/PhysboneSetting.png').default}
style={{ width: '80%' }}
/>

### 保存与分享 Marshmallow PB 的晃动设置

可以将 Marshmallow PB 的 PB 预设进行保存与分享。

- **代码形式**  
  将当前预设导出为 PB 代码字符串，便于通过 SNS 等方式分享，并在不同项目中快速复用。
- **文件形式**  
  将预设保存为文件。保存后的预设会显示在 PB Preset 列表中，可随时再次调用。

<img
src={require('/img/marshmallowPB/PBPresetSetting.png').default}
style={{ width: '80%' }}
/>

### 为 Marshmallow PB 添加额外的碰撞体

如果你添加了新的碰撞体，并将其注册到 PhysBone 设置中的 Collider 列表，Marshmallow PB 就会与其发生交互。  
推荐在上臂、大腿等部位添加碰撞体，使这些部位在动作中能自然地压到胸部。

### 调整 Marshmallow PB 的位置、角度与大小

对已支持头像应用预设时，Marshmallow PB 的骨骼位置、角度与大小会被固定。  
如果之后更改了胸部尺寸等，希望再次调整位置，可以将该头像视为“未支持头像”，按照未支持头像的安装流程进行设置，从而自由调整 Marshmallow PB 的骨骼位置与缩放。

### 与其他玩家的 Marshmallow PB 产生交互

在 Marshmallow PB 设置中启用 **Chest Interference with Other Players** 后，双方玩家的胸部在靠近时会互相挤压。  
此功能需要双方都启用该选项，才能正确互相作用。  
在 VRChat 中也可以通过 EX 菜单切换该项。

### 与其他玩家的默认碰撞体产生交互

当 **Chest Interference with Other Players** 为 ON 时，Marshmallow PB 也可以在一定条件下与其他玩家的默认碰撞体（头部／身体等）发生交互。  
由于默认头部碰撞体通常较小，若希望交互更容易触发，可以在 Avatar Descriptor 的 Colliders 设置中适当增大头部碰撞体的尺寸。

<img
src={require('/img/marshmallowPB/head.png').default}
style={{ width: '100%' }}
/>

### 仅使用头像原有的 PhysBone 晃动

如果你希望保留头像原有 PB 的晃动，只使用 Marshmallow PB 的压扁功能，可以在设置面板中启用  
**Apply Only Squish Function（Use Original PB）** 选项。  
在这种模式下，晃动依然由原有 PB 提供，而按压时会叠加 Marshmallow PB 的压扁效果。  
若还希望同时使用 Marshmallow PB 的抓取功能，建议将原有 PB 上的 **Allow Grabbing** 设为 OFF。

<!--
### 添加自制头像预设

Marshmallow PB 提供了头像预设功能，可将某个头像的配置记录为预设。  
如果你需要反复为同一型号的未支持头像安装 Marshmallow PB，自制预设会非常方便。

#### 添加头像预设的方法

1. 准备两个头像：一个胸部 blendshape 值为 0，一个为 100，并按未支持头像流程分别完成设置，记录此时 `marshmallow_PB_L` 的 position／rotation／scale。
2. 在 Preset 文件夹中复制 `Preset0` 文件，并重命名。（请避免使用仅一位数的文件名，以免产生错误。）
3. 编辑新文件中的 `avatarName`、`Path`、`breast_L_position`、`breast_L_rotation`、`breast_L_scale`。  
   其中 `_0` 字段对应 blendshape 为 0 的头像，`_100` 对应 blendshape 为 100 的头像。  
   其他参数一般可保持默认值。
4. 打开设置工具，确认预设列表中已出现新的预设，即表示添加成功。

#### 头像预设的配置项

<img
src={require('/img/marshmallowPB/preset.png').default}
style={{ width: '80%' }}
/>

头像预设配置位于 `marshmallow_PB/Setup/Preset` 文件夹中。

- **Path**：从头像根节点到胸部骨骼与碰撞体的相对路径。
- **breast_L_position / breast_L_scale**：`marshmallow_PB_L` 的本地位置与缩放。  
  右侧 `marshmallow_PB_R` 会自动使用左右反转的数值。
- **(Parameter)_0 / (Parameter)_100**：胸部 blendshape 为 0 与 100 时的参数值，中间值会自动进行插值。  
  各参数与[「设置面板」](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup)中对应的 PhysBone 项目相对应。
-->

