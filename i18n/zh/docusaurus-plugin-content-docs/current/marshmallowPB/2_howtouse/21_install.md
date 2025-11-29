# 安装方法

:::caution
以下视频以 ver1.7.0 为例进行说明，但在 ver2.0 及以后版本中，安装步骤基本相同。
:::

### 已支持头像的情况

<iframe width="100%" height="480" src="https://www.youtube.com/embed/17p4SnL1kus?si=og9SA6Ef8Rwkg3_-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

#### 准备所需包

1. 使用 VRChat Creator Companion（VCC）打开你的项目。
2. 在 VCC 中安装 [Modular Avatar](https://modular-avatar.nadena.dev/ja/) 包。（[包仓库链接](vcc://vpm/addRepo?url=https://vpm.nadena.dev/vpm.json)）
3. 在 VCC 的项目「Manage Project」中，为该项目添加 **Gesture Manager**、**Modular Avatar**、**Non-Destructive Modular Framework** 三个组件。
4. 重新打开项目，确认这些包已经成功导入。

#### 安装 Marshmallow PB

5. 将[最新版 Marshmallow PB](https://wataame89.booth.pm/items/4511536) 导入项目。
6. 在层级视图中右键头像，选择 “wataameya → MarshmallowPB”。
7. 在生成的 `marshmallow_PB_Setup` 对象中选择头像预设。
8. 在 Unity 顶部菜单中选择 “Tools → Gesture Manager Emulator”。
9. 运行 Gesture Manager，如果 Marshmallow PB 能正常晃动，则安装完成。

:::caution
如果头像上已经安装了 **Marshmallow PB ver2.0.0 或更早版本**，请先进行参数初始化。  
若跳过该步骤，系统将无法正常运行。  
若仍然不能正确工作，请参考[「出现问题时」](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition)或[「Q&A」](https://wataame89.github.io/documents-wataameya/marshmallowPB/qa)。
:::

<br/>
<br/>

### 未支持头像的情况

<iframe width="100%" height="480" src="https://www.youtube.com/embed/BYJZBUt0f_w?si=W9nI2fAhSIp5ubg8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

#### 安装 Marshmallow PB

5. 将[最新版 Marshmallow PB](https://wataame89.booth.pm/items/4511536) 导入项目。
6. 在层级视图中右键头像，选择 “wataameya → MarshmallowPB”。
7. 在生成的 `marshmallow_PB_Setup` 对象中，不选择任何预设，手动指定你的胸部骨骼。
8. 删除头像原有的胸部 PhysBone 组件。（演示视频中误操作，仍处于启用状态）  
   请确认关联到胸部区域的 PhysBone 已全部删除，有的头像可能存在多个相关组件。
9. 在 `marshmallow_PB_Setup` 下，启用 “For Unsupported Avatar/marshmallow_PB_L”。
10. 确认绿色胶囊碰撞体的位置。如果不可见，请点击 Scene 视图顶部的 “Gizmos” 按钮。
11. 将该胶囊碰撞体移动/缩放到头像左胸的位置。  
    可以从侧面视角来调整，使其枢轴（XYZ 操作的中心点）大致位于胸部曲线边界（红线）附近。
12. 调整缩放，使胶囊碰撞体恰当地包裹胸部。
13. 运行 Gesture Manager，如果晃动正常，则设置完成。  
    （运行时该胶囊碰撞体会被隐藏，并生成另一组用于运行时的碰撞体；位置轻微偏移属于正常现象。）

:::caution
若仍然无法顺利设置，请先参阅「Q&A」或「出现问题时」。  
特别是**若没有删除头像原本的胸部 PhysBone 组件**，极易导致异常，请务必确认已删除。
:::

<img
src={require('/img/marshmallowPB/hitaioou2.png').default}
style={{ width: '100%' }}
/>

<br/>
<br/>

### 旧方式（不使用 Modular Avatar）

:::danger 不推荐
该方式通过复制头像与 FX 图层进行设置，因此目前已不再推荐使用。  
除非有特殊理由，建议尽量使用新方式。

<iframe width="280" height="158" src="https://www.youtube.com/embed/739tyxA7PKo?si=FkVczSvkKsqLBcV9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

由于验证时使用 Gesture Manager，因此仅正式支持在 VRChat Creator Companion（VCC）环境下使用。  
（虽然并不推荐，但如果仅在 VRChat 中直接测试，不通过 VCC，也能正常运行。）

[旧方式的说明文档（日文）在此](https://docs.google.com/document/d/1dvbHSSSIGPoFFt5rA9RUba8309XX7bLs-4dKND2Bam0/edit?usp=sharing)

