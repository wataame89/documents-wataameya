# 设置面板

---

<img
src={require('/img/marshmallowPB/setup/Intro.png').default}
style={{ width: '80%' }}
/>

#### Language

选择在 Inspector 中使用的语言。支持英文、韩文与简体中文。

#### Reset Parameters

重置当前正在编辑的所有参数。（头像预设与胸部骨骼的指定不会被重置。）

---

### Basic Setting

<img
src={require('/img/marshmallowPB/setup/BasicSetting.png').default}
style={{ width: '80%' }}
/>

#### Preset

选择头像预设。  
如果预设很多，找不到自己的预设，可以点击 ▼ 按钮展开列表。

#### Chest Bone

选择头像的胸部骨骼（通常为 Upper Chest）。

#### Chest Size（blendshape）

对于已支持头像，设置**用于增大胸部的形状键**的数值。  
如果预设中写明了某个形状键名称，请使用该名称的形状键。  
对于未支持头像，如果也存在胸部大小的形状键，则可参照支持头像的方式进行设置。

#### Chest Bone Y Scale（Transform）

仅填写胸部骨骼的 **Y 缩放值**。（X/Z 不必填写）  
即使骨骼的 X/Y/Z 缩放不相同也没有关系，系统只会使用 Y 值。

---

### PhysBone Setting

<img
src={require('/img/marshmallowPB/setup/PhysBoneSetting.png').default}
style={{ width: '80%' }}
/>

#### PB Preset

选择 PB 预设。  
默认提供 “Smooth（柔和）”、“Jiggly（Q 弹）”、“Heavier Jiggle（重量感）” 三种类型，每种又有三档硬度可选。  
之后也可以添加自定义预设。

#### Pull（Restore Shape）

控制 PB 恢复到原始形状的力度。

#### Momentum（Spring Strength）

控制 PB 的弹簧（弹性）强度。

#### Stiffness（Anti-Bend / Anti-Jitter）

控制 PB 不易弯曲、不易抖动的程度。

#### Gravity（Strength）

控制 PB 受重力影响的强度。  
若将其调得远大于默认值，胸部可能会出现严重塌陷等异常，请注意。

#### GravityFalloff（Shape Retention）

控制 PB 在重力作用下保持原始形状的程度。  
骨骼偏离初始角度越多，形状保持效果越弱，重力效果越强。

#### Immobile（Motion Damping）

控制 PB「不容易移动」的程度（阻尼大小）。  
对手动用碰撞体按压时的反应没有影响。

#### ImmobileType

决定 Immobile 作用于哪类运动：

- **AllMotion**：作用于所有运动。
- **World**：仅在头像相对世界移动（行走、跳跃等）时生效。

在 **World** 模式下，普通的小幅动作会被视为 Immobile=0，因此大多数情况推荐使用 **AllMotion**。

#### LimitAngle（Angle Limit）

设置 PB 可弯曲的最大角度。

#### LimitRotation（Angle Offset）

设置 PB 运动的角度偏移。  
可以为 X/Y/Z 分别设置不同数值，左右会镜像对称应用。

#### CollisionRadius（Collider Size）

设置 PB 碰撞体的半径大小。  
值越大，越容易触碰到胸部。

#### AllowCollision（Touch Permission）

设置「谁可以触碰 Marshmallow PB」。可选：仅自己／好友／所有人。

#### StretchMotion（Squish / Elasticity）

控制因头像移动导致的胸部拉伸与压缩（弹性）的强度。  
值越大，前进／后退等移动时胸部变形越明显。

#### MaxStretch（Max Extension）

设置 PB 最大可拉伸长度。  
值越大，被抓住往外拉时可以被拉得越长。设为 0 时，拉伸功能会被禁用。

#### MaxSquish（Max Squish）

设置 PB 最大可压缩（压扁）量。  
值越大，被压得越深；值越小，压扁较浅，衣服穿模也越少。  
设为 0 时，压扁功能会被禁用。

#### AllowGrabbing（Grab Permission）

设置「谁可以抓取 Marshmallow PB」。可选：仅自己／好友／所有人。

#### AllowPosing（Pose Lock Permission）

设置「谁可以对 Marshmallow PB 进行姿势锁定」。可选：仅自己／好友／所有人。

#### GrabMovement（Follow Strength）

控制被抓住时 PB 跟随手部移动的程度。  
数值越大，胸部越紧贴手移动。

#### SnapToHand（Snap Amount）

控制抓取瞬间胸部向手的位置“吸附”得多紧。  
如果设置得太大，动作可能显得生硬、突兀，建议适度调整。

#### GrabCurve（Grab Distance Curve）

定义抓取时，胸部位置相对于手部位置的变化曲线。  
用于更精细地调整拖拽胸部时的手感。

---

### Inertia Setting（惯性／伪多重骨骼）

<img
src={require('/img/marshmallowPB/setup/InertiaSetting.png').default}
style={{ width: '80%' }}
/>

Inertia 会模拟额外的“惯性骨骼”，为运动增加延迟与柔软度。

#### Inertia Strength

控制惯性骨骼的运动幅度。  
值越大，胸部越柔软、拖尾感越明显。

#### Inertia Follow

控制惯性骨骼追随主 PB 运动的速度。  
值越大，追随越快（延迟变小）；值越小，延迟感更明显。

#### Inertia Immobile

控制惯性骨骼不易移动的程度。  
作用类似 Immobile，但只作用于 Inertia。

#### Inertia Count

设置使用的惯性骨骼数量。  
数量越多，效果越柔和、细腻，但性能开销也越大。

---

### Parallel Bone Setting

<img
src={require('/img/marshmallowPB/setup/ParallelBoneSetting.png').default}
style={{ width: '80%' }}
/>

Parallel Bone 主用于保持胸部骨骼的“平行姿势”，以表现重量感。

#### Parallel Strength

控制胸部骨骼保持平行姿态的力度。  
值越大，越不容易倾斜，看起来越有重量、越稳。

#### Parallel Degree

控制运动有多“接近平行”。  
接近 0 时，运动强烈趋向平行；接近 1 时，更接近普通 PB 的旋转行为。

#### Parallel Immobile

控制 Parallel Bone 运动不易移动的程度。  
数值过大时，胸部可能显得过于僵硬。

---

### Gravity Setting

<img
src={require('/img/marshmallowPB/setup/GravitySetting.png').default}
style={{ width: '80%' }}
/>

#### Chest Sag Ease

控制前倾时胸部下垂的容易程度。  
值越大，下垂越明显；设为 0 时，不发生下垂。

#### Chest Squish Ease（On Back）

控制仰卧时胸部被压扁的容易程度。  
值越大，仰卧时胸部越容易塌开；设为 0 时，该效果被禁用。

---

### Interference / Squish Setting

<img
src={require('/img/marshmallowPB/setup/InterferenceSquishSetting.png').default}
style={{ width: '80%' }}
/>

#### Interference Between Left and Right Chest

是否在头像左右胸部之间放置用于相互干涉的碰撞体。  
启用后，当左右胸部互相靠近时会相互挤压。

#### Interference Collider Size

控制左右胸部干涉所用碰撞体的大小。

#### Chest Interference with Other Players

是否与其他玩家的 Marshmallow PB 发生胸部干涉。  
根据设置，还可以与头部或身体碰撞体发生互相作用。  
此选项也可在游戏中的 EX 菜单中切换。

#### Floor Collider

是否与地面碰撞体发生碰撞。  
启用后，趴下等姿势下胸部会被地面压扁。

---

### Anti-Penetration Setting

<img
src={require('/img/marshmallowPB/setup/AntiPenetrationSetting.png').default}
style={{ width: '80%' }}
/>

#### LimitColliderPosition（Squish Limit Position）

设置限制胸部压缩深度的碰撞体位置。  
值越大，越难被压得很深。  
该限制叠加在普通 PB 压缩与重力压缩之上，主要用于防止衣物穿模。

#### Anti-Penetration System

开启防穿透系统。  
左右胸部骨骼会相互追随，从而减少只有一侧移动时导致的穿模。

#### Disable Squish Function

完全禁用 Marshmallow PB 的压扁（Squish）功能。  
也可以从游戏内 EX 菜单中切换。  
当你更看重防穿模而不是形变表现时，可启用此选项。

#### Rotation When Both Chests Interfere

开启“左右胸部同时干涉时的旋转”功能。  
当左右胸部强烈接触时，骨骼会微微向外旋转，以减少穿模。

---

### Menu Setting

<img
src={require('/img/marshmallowPB/setup/MenuSetting.png').default}
style={{ width: '80%' }}
/>

#### Generate Menu for Marshmallow PB

生成用于控制 Marshmallow PB 的 EX 菜单。  
在该菜单中可以切换：

- Chest Interference with Other Players
- Anti-Penetration System
- Disable Squish Function
- 切换为普通 PB
- 禁用 PB

#### Menu Install Destination（可选）

调整 EX 菜单在头像菜单树中的安装位置。  
若不指定，则会添加在最上层。

---

### Advanced Setting

<img
src={require('/img/marshmallowPB/setup/AdvancedSetting.png').default}
style={{ width: '80%' }}
/>

#### Apply Preset Based on Chest Bone

以胸部骨骼为基准应用预设。  
因为使用的是“相对于胸部骨骼的位置”，所以即便在 Unity 中改变头像的体型或整体位置，仍能正确应用。  
如果在 Blender 等工具中对骨骼结构进行了大幅修改，则建议将该头像视为未支持头像，使用手动设置流程。

#### Use This Object’s Transform as Offset

将 `marshmallow_PB_Setup` 对象的位置作为 Marshmallow PB 的位置／旋转／缩放偏移。  
例如，如果头像因为穿高跟鞋等原因整体被抬高，默认预设可能会导致 Marshmallow PB 的位置偏移。  
此时可以启用该选项，并将 `marshmallow_PB_Setup` 按相同幅度移动，以修正位置。  
多数情况下仅使用「Apply Preset Based on Chest Bone」即可，若仍有偏移，可再配合本选项微调。

#### Remove All PB Under This Bone

删除指定胸部骨骼下的所有 PB 组件。  
默认只删除胸部骨骼下方直接挂载的 PB，但对于结构复杂的未支持头像，可启用此选项以全部删除。

#### Apply Only Squish Function（Use Original PB）

保留头像原有 PB 的晃动行为，仅应用 Marshmallow PB 的压扁功能。  
在这种模式下，Marshmallow PB 的晃动功能被禁用，原始 PB 的运动得以保留。  
使用此设置时，建议将原始 PB 的 **Allow Grabbing** 设为 OFF。

---

### PB Preset Setting

<img
src={require('/img/marshmallowPB/setup/PBPresetSetting.png').default}
style={{ width: '80%' }}
/>

#### Import

读取 PB 代码字符串并将其应用到当前 PB 设置中。  
该代码会记录影响晃动的 PhysBone／Inertia／Parallel Bone 参数（不包含角度限制、权限等项目）。

#### Export

将当前 PB 设置导出为 PB 代码字符串。  
可以将此代码分享给他人，以便轻松复用 Marshmallow PB 的参数设置（例如通过 SNS）。

#### Save

将当前 PB 设置保存为 PB 预设。  
保存后，预设会出现在 PB Preset 列表中，供以后再次使用。

