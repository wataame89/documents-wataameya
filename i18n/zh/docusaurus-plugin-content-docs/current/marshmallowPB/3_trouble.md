
# 当遇到问题时

:::info 页面说明
如果您觉得 Marshmallow PB 似乎没有正常工作，请参阅本页面。  
（如果它运作正常，请参阅 [“使用方法 / 应用篇”](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition) 或 [“Q&A”](https://wataame89.github.io/documents-wataameya/marshmallowPB/qa)）
:::

### 当服装出现穿透时

由于 Marshmallow PB 的规格，在某些服装上难免会产生穿透。以下是一些应对方法：

- **稍微减小身体模型的胸部形状键。**
  - 将身体模型的胸部大小形状键相对于服装的形状键略微调小。
  - 大多数情况下，这样就能解决问题。
- **让胸部压缩深度变得较浅。**
  - 在 PhysBone 的设定中增大 “[LimitColliderPosition](https://wataame89.github.io/documents-marshmallowPB/setup#limitcolliderposition)” 的数值，或者减小 “[MaxSquish](https://wataame89.github.io/documents-marshmallowPB/setup#maxsquish)” 的数值来设定。
  - 当仰卧时的挤压程度可通过将 “[胸部的挤压灵敏度（仰卧）](https://wataame89.github.io/documents-marshmallowPB/setup#%E8%83%B8%E3%81%AE%E3%81%A4%E3%81%B6%E3%82%8C%E3%82%84%E3%81%99%E3%81%95%EF%BC%88%E4%BB%B0%E5%90%91%E3%81%91%EF%BC%89)” 的数值减小来设定。
- **减少挤压时的变形。**
  - 通过降低 “[挤压动画强度](https://wataame89.github.io/documents-marshmallowPB/setup#%E3%81%A4%E3%81%B6%E3%82%8C%E3%82%A2%E3%83%8B%E3%83%A1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E5%BC%B7%E3%81%95)” 来调整。
- **关闭挤压功能。**
  - 打开 “[关闭挤压功能（穿透对策）](https://wataame89.github.io/documents-marshmallowPB/setup#%E3%81%A4%E3%81%B6%E3%82%8C%E6%A9%9F%E8%83%BD%E3%82%AA%E3%83%95%E8%B2%AB%E9%80%9A%E5%AF%BE%E7%AD%96)” 即可。
  - 这样将不再有挤压效果，但也不会再发生穿透。

### 当 Marshmallow PB 未被应用时

如果在使用 Gesture Manager 或进入播放模式后，marshmallow_PB_setup 依然存在，那么有可能某些原因导致 Marshmallow PB 未被正常应用。

#### 如果在窗口中显示提示信息：

请重新确认引入方法，并根据信息进行修正。

#### 如果在 Console 中发生错误：

说明某些问题中断了处理，请将错误代码的详细内容发送至 [Booth](https://wataame89.booth.pm) 或 [Twitter](https://twitter.com/wataameya_vr)。  
但是，**退出播放模式时出现的错误与 Marshmallow PB 无关**，因此请将 **进入播放模式时** 出现的错误发送给我们。

#### 如果在 Console 中没有错误信息：

请确认菜单栏 “Tools → NDM Framework → Apply on Play” 是否被勾选。如果没有，请勾选它。若已勾选但仍然无效，请再次检查是否有错误，然后再咨询我们。

<!-- ### 当晃动幅度很大时
在按压 Marshmallow PB 时，可能会产生一定程度的抖动。基本上提高 Stiffness（不易变形的程度）即可缓解。

### 当弹出错误窗口时
大多数情况下是设置有误，请参考引入方法的视频重新进行配置。 -->

### 当胸部会莫名挤压时

如果 “和其他玩家的胸部干涉” 处于开启状态，可能由于某些 bug 导致其自动触发，胸部被挤压。通常只要关闭 “和其他玩家的胸部干涉” 就能解决。

### 当 Marshmallow PB 的晃动出现异常时

如果头像拥有多个 PB（如 Velle 等），默认设置下可能无法完全移除所有 PB，从而导致动作异常。在这种情况下，可启用 “移除本骨骼下所有 PB” 来解决。

### 当 Marshmallow PB 的位置设置异常（移动时网格破坏）

可能是 Marshmallow PB 的位置出现偏移。可按照不支持的头像那样进行设置，或者开启 “[使用此对象的 Transform 作为偏移](https://wataame89.github.io/documents-marshmallowPB/setup#%E3%82%AA%E3%83%95%E3%82%BB%E3%83%83%E3%83%88%E3%81%A8%E3%81%97%E3%81%A6%E3%81%93%E3%81%AE%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AEtransform%E3%82%92%E4%BD%BF%E7%94%A8)”  
并调整偏移量进行修正。

---

### 各头像的注意事项

#### “しなの (Shinano)”：胸部晃动异常・左右晃动不同

原因不明，但疑似因某个应该删除的胸部 PB 却未被删除导致。  
预先删除胸部 PB，应该就能解决。

#### “くろなつ (Kuronatu)”：Marshmallow PB 不工作

如果 “くろなつ” 的胸部尺寸为普通，FX Layer 中的动画会设定为阻止 PB 动作。  
在 “くろなつ” 的 FX Layer 中删除 “Breast_DB”，应该就能生效。

#### “ルルネ (Rurune)”：进入 AFK 时会出现奇怪的物体

Rurune 的 AFK 动作会压缩 Armature，与 Marshmallow PB 的 Constraint 发生冲突导致网格残留。  
可以通过把 AFK 动画埋入地面以下来规避。如果您通过私信联系我们，我们可以提供一个动画修正补丁。

---

### 已知问题

#### 抓住 Marshmallow PB 时碰撞体判定无法消失的问题

当抓住 Marshmallow PB 时，有时碰撞体的判定会一直存在。  
只要往外拽，使角色远离碰撞体，判定就会消失。尚未得到验证，但推测是 VRChat 方面的 Bug。

#### 与其他玩家的距离变化导致胸部大小不断微调的问题

当有多个接触（如 “もっちり (mocchiri)” 着色器等）共同作用时，胸部大小会出现细微抖动现象。  
这应是 VRChat 方面的 Bug，由于接触的参数被重置所引起。

---

:::caution 如果本页面无法解决问题
请参阅 [联系我们](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtocontact)。
:::

