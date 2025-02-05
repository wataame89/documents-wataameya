
# 遇到问题时

:::info 页面说明
如果认为「もっちりシェーダー」未能正常运作，可参考此页面。  
（如果确认正常运作，请参见 [「使用方法/进阶篇」](https://wataame89.github.io/documents-wataameya/motchiriShader/howtouse/addition) 或 [「Q&A」](https://wataame89.github.io/documents-wataameya/motchiriShader/qa)）
:::

### 着色器未正常工作

首先请在 Unity（Gesture Manager）以及 VRChat 中分别进行动作品质确认，确定在何时出现不正常现象。

#### 在 Unity（Gesture Manager） 上无法运作时：

若 Unity 上无法正常运作，可能是头像本身存在问题。

- 如果有对网格的材质球进行动画切换，则无法运作。
- 如果 FX 动画图层中 WriteDefault 未统一，可能会导致无法运作，请务必统一。
- 如果出现材质错误，可尝试右键点击 motchiri_shader 文件夹后执行 Reimport，或许能修复。
- 若仍无法运作，请尝试在新项目中导入，并重新进行头像的设置。
  - 如果是兼容的头像，其官方 prefab 的默认版本应可以正常运作。请检查在改动时何处与本着色器产生了冲突。若能确定与哪些改动相冲突，或许有可能通过「もっちりシェーダー」一侧进行对应，请随时联系作者。
  - 若默认头像都无法运作，则有可能是系统本身设置异常，请联系作者。

#### 在 VRChat 上无法运作时：

如果在 Unity 上运作正常，而在 VRChat 上无法运作，则可能是 VRChat 端的设置出现了问题。

- 若 VRChat 中 Avatar Intaract 设置的 Self Intaract（关闭时会导致自己无法触碰到自身 PhysBone）被关闭，则无法与自己模型交互。（参考：[官方文档](https://docs.vrchat.com/docs/permissions-and-settings)）
- 若使用了 VRChat 的 Avatar 缩放功能，则不会正常工作。请在默认大小下使用。

### 自己可以触碰但好友无法触碰

从规格上看，一次只能允许距离最近的一名玩家进行触碰。若试图多人同时触碰，或周围同时存在多名玩家，则有可能无法正常运作。此外，根据 Contact 的设置也有可能导致无法触碰。

简单的判定方法：若能触碰到对方的 PhysBone（如耳朵或尾巴），理论上就能触碰到「もっちりシェーダー」。当 PB 可以触发但「もっちりシェーダー」不触发时，可尝试重置或更换头像，往往能恢复。若 PhysBone 也无法触碰，请查看 VRChat 的 Avatar Intaract 设置。（参考：[官方文档](https://docs.vrchat.com/docs/permissions-and-settings)）

### 食指判定偏移导致无法触碰

在 VRChat 中，食指的默认碰撞体是胶囊形状，其判定会在该胶囊体内最靠近身体中心（motchiri 对象）的点上，因此判定可能出现在指尖和指根处。若无法触碰，可尝试用指根接触身体，会产生弹软效果。解决方法可以修改默认指碰撞体，使其变为球形，从而消除偏移。

### 连裤袜等网格出现穿插

由于身体被高多边形化，而连裤袜依旧是原本多边形，导致边界错位。有时可通过也将连裤袜进行细分来对齐身体多边形即可解决。但由于 lilToon 的更新导致细分方式改变，目前使用细分已无法解决此问题。可在删除身体网格的变形蒙皮形状键上做一点微量设定（如 5 左右），可在不破坏整体外观的情况下防止穿插。

<!-- <img
src={require('/img/MotchiriShader/taitu.png').default}
style={{ width: '800px' }}
/> -->

### 脸颊不易捏出弹软

由于食指碰撞体判定在 motchiri 预制体的中心方向，会发生当尝试触碰脸颊时，判定点偏移到指根而导致难以触碰。解决方法是让手指从下方向上去触碰，或者修改默认指碰撞体为不产生偏移的设置。

### 弹软部分的网格裂开

请将在遮罩上对应裂开的区域直接填充为黑色。如果 Blender 中该 Avatar 某条边被设为尖锐（Sharp），也会导致网格不匹配，请清理不必要的部分。

### 与身体用的“なでなでシェーダー”（shadowdepth_body）无法同时使用

shadowdepth_body 是通过参考高多边形化前的身体网格来进行阴影加深处理，若身体被高多边形化后会导致阴影位置错乱。目前可通过使用 lilToon 自带的距离衰减功能来替代 shadowdepth_body 的功能。只需移除 shadowdepth_body，并在もっちりシェーダー的材质球中按下图设置即可实现与 shadowdepth_body 类似的功能。
<img
src={require('/img/MotchiriShader/shadow.png').default}
style={{ width: '800px' }}
/>

### 与 blackbody shader 并用时，弹软部分会变黑

取消下图最底部的勾选即可恢复正常。
<img
src={require('/img/MotchiriShader/black.png').default}
style={{ width: '400px' }}
/>

---

### 各 Avatar 的异常

（施工中）

---

### 已知问题

#### 当多个 Contact 元件密集时无法运作的问题

如果同时存在多个加载了「もっちりシェーダー」等联系点较多的头像，或碰撞区过于密集时，「もっちりシェーダー」可能无法正常运作。  
这是由于 VRChat 端的 bug 引起，会导致联系点参数被初始化。

---

:::caution 如果该页面内容无法解决问题
请参照 [联系我们](https://wataame89.github.io/documents-wataameya/motchiriShader/howtocontact)。
:::

