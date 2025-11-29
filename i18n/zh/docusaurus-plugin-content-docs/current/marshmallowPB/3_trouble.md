# 出现问题时

:::info 页面说明
当你怀疑 Marshmallow PB 没有正常工作时，请参考本页面。  
（如果运行正常，请参阅[「使用方法/进阶篇」](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition)或[「Q&A」](https://wataame89.github.io/documents-wataameya/marshmallowPB/qa)。）
:::

### 衣服发生穿模时

由于 Marshmallow PB 的特性，对某些服装来说，胸部不可避免会发生穿模。可以尝试以下对策：

- **在 VRChat 中限制 Marshmallow PB 的功能**
  - 通过 EX 菜单，可以关闭 Squish、切换为普通 PB、或完全关闭 Marshmallow PB。
  - 虽然每次都需要手动选择，但由 Marshmallow PB 引起的穿模会消失。
- **略微减小身体网格的胸部形状键**
  - 将身体网格的“胸部大小”形状键设置得比服装侧的形状键稍小（例如：身体 90、服装 100）。
  - 在很多情况下，仅此一项就能有效减少穿模。
- **减小 Inertia 与 Parallel Bone 的影响**
  - 将 Inertia 的 Immobile 值调高到接近 1，将 Parallel Bone 的“平行度”调低到接近 0，可以减小各系统的影响。
  - 对于上下大幅晃动时发生的穿模特别有效。
- **限制胸部骨骼的旋转角度**
  - 在 PhysBone 设置中，将「[LimitAngle（角度限制）](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup)」的值调小，降低最大弯曲角度。
  - 对于大幅晃动时发生的穿模有效。
- **减小胸部被压扁的深度**
  - 在 Anti-Penetration Setting（防穿透设置）中调大「[LimitColliderPosition（压缩限制碰撞体的位置）](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup)」的值，使其更难被压得太深。
  - 在 PhysBone Setting 中调小「[MaxSquish](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup)」的值，减小默认站姿时的压扁程度。
  - 在 Gravity Setting（重力设置）中调小「[Chest Squish Ease（仰卧时的易压缩程度）](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup)」，减弱仰卧时的压扁。
  - 「LimitColliderPosition」的优先级高于上述两个参数，通常只调整它就足够了。
  - 特别适用于“只有在被压扁时会穿模”的情况。
- **关闭压扁（Squish）功能**
  - 打开「[关闭压扁功能（防穿模对策）](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup)」。
  - 也可以在 VRChat 中通过 EX 菜单切换。
  - 当你只在压扁时出现穿模，而且不介意完全失去形变时，这个选项是最有效的。

### Marshmallow PB 未被应用时

如果通过 Gesture Manager 进入 Play 模式后，场景中仍残留 `marshmallow_PB_setup` 对象，则说明 Marshmallow PB 没有正确应用。

#### 如果窗口中显示了错误／提示信息

请重新确认安装步骤，并按照信息中的指示修正设置。

#### 如果 NDMF Console 中出现错误

说明在处理过程中发生了一些问题而中断。请将错误代码复制后，通过 [Booth](https://wataame89.booth.pm) 或 [Twitter](https://twitter.com/wataameya_vr) 联系作者。  
但请注意，**退出 Play 模式时**出现的错误与 Marshmallow PB 无关，请只发送**进入 Play 模式时**在 NDMF 控制台中出现的错误。

#### 如果 NDMF Console 中没有错误

请确认 Unity 顶部菜单中的「Tools → NDM Framework → Apply on Play」是否已勾选。  
若已勾选但仍然无法工作，请再次确认是否有其它错误，如有需要请联系作者。

<!--
### 晃动过大时
按压 Marshmallow PB 时，有时会出现抖动。一般可通过提高 Stiffness（不易变形）来减轻抖动。

### 弹出错误窗口时
大多数情况下是因为安装工具中的设置有误。请参考安装视频重新检查并修正设置。
-->

### 胸部会自己被压扁时

当「Chest Interference with Other Players（与其他玩家胸部互相干涉）」为 ON 时，可能因为 Bug 导致即使没有接触，胸部也会自己被压扁。  
大多数情况下，只要将这个选项设为 OFF 即可解决。

### 压扁动画不播放时

若头像上另有分配其它 FX 图层，则压扁动画可能无法播放。  
将 FX 图层设为一个空的 Animator Controller 后，压扁动画会恢复正常。

### 觉得 Marshmallow PB 的晃动不自然时

如果头像下有多个 PB 组件，默认设置可能无法完全删除旧的 PB，从而导致运动怪异（例如 Velle）。  
此时可以启用「Remove All PB Under This Bone（删除该骨骼下所有 PB）」来修复。  
对于非支持头像，如果仍保留了操控相同骨骼的 PhysBone 或 Constraint，则可能与 Marshmallow PB 冲突，因此建议尽可能删除后再安装。  
另外，请注意有些组件可能不是挂在胸部骨骼下，而是直接挂在头像根节点下，请一并检查。

### Marshmallow PB 的位置不正确（移动时胸部网格破裂）

如果 Marshmallow PB 对象由于某种原因发生了偏移，移动头像时胸部网格可能会严重破裂。  
此时可以像处理非支持头像那样重新调整位置，或者打开「[Use This Object’s Transform as Offset（将此对象的 Transform 作为偏移）](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup)」，并调整偏移值。

### 头像的胸部网格扭曲或破裂

**如果头像的动画直接操控了胸部骨骼**，可能会与 Marshmallow PB 冲突，导致胸部扭曲或网格破裂（例如 Lasyusha、Nepherisa）。  
若将 FX 图层替换为空的 Controller 后恢复正常，则说明问题很可能来自这些动画。请查找并删除或修改操作胸部骨骼的动画。

### 只有服装胸部网格扭曲或破裂

当使用 VRCFury 的 Armature Link 时，有时只有服装胸部网格会扭曲。  
此时建议改用 Modular Avatar 的换装功能。

---

### 各头像特有问题

#### 「しなの（Shinano）」——晃动异常／左右不一致

推测是原本应该被删除的胸部 PB 仍然残留所致。  
预先删除胸部 PB 后即可恢复正常。

#### 「くろなつ（Kuronatu）」——Marshmallow PB 不工作

在 Kuronatu 的默认胸部尺寸下，FX 图层动画会阻止 PB 运动。  
在 Kuronatu 的 FX 图层中删除名为「Breast_DB」的图层或动画，即可恢复正常。

#### 「ルルネ（Rurune）」——进入 AFK 时出现奇怪物体

Rurune 的 AFK 动画会压缩 Armature，因此会与 Marshmallow PB 的 Constraint 冲突，从而残留网格。  
可通过将 AFK 动画整体移动到地面以下来规避。作者也提供了动画修正补丁，可在[此处](https://drive.google.com/file/d/1GFAQwwUsCjFp7VGXelsKM6SXsQ75dpNT/view?usp=sharing)获取。

#### 「ラシューシャ（Lasyusha）」——胸部扭曲

在 Lasyusha 中，FX 图层动画会改变胸部骨骼的位置，从而与 Marshmallow PB 冲突并导致扭曲。  
此时，可将「BreastPB Control」图层的 Weight 设为 0，或在不需要时删除该图层。

#### 「ネフェリサ（Nepherisa）」——胸部扭曲

Nepherisa 同样通过 FX 图层动画操控胸部骨骼位置，因此也可能与 Marshmallow PB 冲突并导致扭曲。  
此时，可将「Bust Size」图层的 Weight 设为 0，或在不需要时删除该图层。

---

### 已知问题

#### 抓住 Marshmallow PB 时碰撞体判定不消失

有时在抓住 Marshmallow PB 后，碰撞体的判定不会消失。  
将其拉远，脱离碰撞体后，判定最终会正常消失。  
虽然尚未确认，但很可能是 VRChat 端的 Bug。  
※在 ver2.0 中，此功能默认已被禁用。

---

:::caution 若本页面无法解决问题
请参阅[「联系方式」](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtocontact)获取进一步支持。
:::

