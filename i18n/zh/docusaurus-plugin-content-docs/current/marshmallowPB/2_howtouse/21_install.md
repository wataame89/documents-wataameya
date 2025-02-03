
# 引入方法

### 当头像是受支持的情况

<iframe width="100%" height="480" src="https://www.youtube.com/embed/17p4SnL1kus?si=og9SA6Ef8Rwkg3_-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

#### 引入套件

1. 在 VRChat Creator Companion（VCC）中打开项目。
2. 在 VCC 中导入 [Modular Avatar](https://modular-avatar.nadena.dev/ja/) 套件。（[套件链接](vcc://vpm/addRepo?url=https://vpm.nadena.dev/vpm.json)）
3. 在 VCC 中打开 “Manage Project”，添加 “**Gesture Manager**”、“**Modular Avatar**”、“**Non-Destructive Modular Framework**” 这三项。
4. 再次打开项目确认已成功导入。

:::caution
如果已经导入了 **ver1.7.0 之前的 Marshmallow PB**，请把 “marshmallow_PB/Setup/FX” 内已生成的 FX 移走并删除 marshmallow_PB 文件夹。（若不删除，可能会出错）
:::

#### 导入 Marshmallow PB

5. 导入 [最新版的 Marshmallow PB](https://wataame89.booth.pm/items/4511536)。
6. 右键点击头像，选择 “wataameya → MarshmallowPB”。
7. 在生成的 marshmallow_PB_Setup 中设置头像预设。
8. 在顶部菜单中打开 “Tools → Gesture Manager Emulator”。
9. 运行 Gesture Manager，若 Marshmallow PB 正常晃动，设置就完成了。

:::caution
若没有正常工作，请先查看 [“当遇到问题时”](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition) 或 [“Q&A”](https://wataame89.github.io/documents-wataameya/marshmallowPB/qa)。  
:::

<br/>
<br/>

### 当头像是不支持的情况

<iframe width="100%" height="480" src="https://www.youtube.com/embed/BYJZBUt0f_w?si=W9nI2fAhSIp5ubg8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

#### 导入 Marshmallow PB

5. 导入 [最新版的 Marshmallow PB](https://wataame89.booth.pm/items/4511536)。
6. 右键点击头像，选择 “wataameya → MarshmallowPB”。
7. 在生成的 marshmallow_PB_Setup 中先不选择预设，手动指定胸部骨骼。
8. 删除头像中原有的胸部 PhysBone 组件。（视频中因操作失误未删除）  
   要注意，可能在胸部骨骼之外的部位也有 PhysBone，需要全部删除。
9. 在 marshmallow_PB_Setup 下，将 “For Unsupported Avatar/marshmallow_PB_L” 打开。
10. 检查绿色胶囊碰撞体的位置。如果看不到，请点击 Scene 顶部的 Gizmos。
11. 将胶囊碰撞体移动、缩放到头像的左胸部附近。建议从侧面视角观察，使其旋转枢轴（XYZ 方向移动点）落在胸部轮廓弧线（红线）的中心附近。
12. 通过缩放让胶囊碰撞体恰好包住胸部。
13. 运行 Gesture Manager，若能正常晃动则设置成功。  
    （运行后，胶囊碰撞体会消失，并生成其它碰撞体。位置略有变动是正常现象。）

:::caution
若无法正确设置，请查看 “常见问题” 或 “当遇到问题时”。  
尤其要注意，**若未删除头像原本的胸部 PhysBone 组件**，很容易出现异常。
:::

<img
src={require('/img/marshmallowPB/hitaioou2.png').default}
style={{ width: '100%' }}
/>

<br/>
<br/>

### 旧方式（不使用 Modular Avatar）

:::danger 不推荐的方式
此方式会复制头像及 FX Layer，现已不推荐。  
除非有特殊原因，否则请使用新方式。

<iframe width="280" height="158" src="https://www.youtube.com/embed/739tyxA7PKo?si=FkVczSvkKsqLBcV9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

因为需使用 Gesture Manager 进行测试，故只支持 VRChat Creator Companion（VCC）。  
（虽不推荐，但若在 VRChat 中直接测试也能工作，只是 VCC 更方便）

[此处为旧方式的说明书（日文）](https://docs.google.com/document/d/1dvbHSSSIGPoFFt5rA9RUba8309XX7bLs-4dKND2Bam0/edit?usp=sharing)

