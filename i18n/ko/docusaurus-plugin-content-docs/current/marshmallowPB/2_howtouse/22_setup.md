# 설정 패널

---

<img
src={require('/img/marshmallowPB/setup/Intro.png').default}
style={{ width: '80%' }}
/>

#### Language

인스펙터에서 사용할 언어를 선택합니다. 영어, 한국어, 중국어(간체)에 대응합니다.

#### Reset Parameters

현재 편집 중인 파라미터를 모두 초기화합니다. (아바타 프리셋과 가슴 본 지정은 유지됩니다.)

---

### Basic Setting

<img
src={require('/img/marshmallowPB/setup/BasicSetting.png').default}
style={{ width: '80%' }}
/>

#### Preset

아바타 프리셋을 선택합니다.  
프리셋이 많아서 찾기 어려울 경우, ▼ 버튼을 눌러 목록을 펼쳐 주세요.

#### Chest Bone

아바타의 가슴 본(보통 Upper Chest)을 선택합니다.

#### Chest Size (blendshape)

대응 아바타의 경우, **가슴을 크게 만드는 쉐이프키** 값을 설정합니다.  
프리셋에 쉐이프키 이름이 표기되어 있는 경우에는 그 이름의 쉐이프키 값을 사용합니다.  
비대응 아바타의 경우에도, 가슴 크기 쉐이프키가 있다면 같은 요령으로 설정할 수 있습니다.

#### Chest Bone Y Scale (Transform)

가슴 본의 **Y 스케일 값**만 입력합니다. (X/Z 값은 필요 없습니다.)  
실제 본의 X/Y/Z 스케일이 서로 달라도 괜찮으며, 시스템은 Y 값만 사용합니다.

---

### PhysBone Setting

<img
src={require('/img/marshmallowPB/setup/PhysBoneSetting.png').default}
style={{ width: '80%' }}
/>

#### PB Preset

PB 프리셋을 선택합니다.  
기본으로 “부드럽게(Smooth)”, “말랑말랑하게(Jiggly)”, “무거운 느낌(Heavier Jiggle)” 3종류가 있으며, 각 프리셋마다 3단계의 강도를 선택할 수 있습니다.  
나중에 직접 만든 프리셋을 추가하는 것도 가능합니다.

#### Pull (Restore Shape)

PB가 원래 형태로 돌아가려는 힘의 강도를 조절합니다.

#### Momentum (Spring Strength)

PB의 스프링(탄성) 강도를 조절합니다.

#### Stiffness (Anti-Bend / Anti-Jitter)

PB가 얼마나 잘 꺾이지 않는지, 얼마나 덜 흔들리는지를 조절합니다.

#### Gravity (Strength)

PB에 작용하는 중력의 강도를 조절합니다.  
기본값보다 크게 올리면 가슴이 과도하게 무너지는 등 깨질 수 있으니 주의해 주세요.

#### GravityFalloff (Shape Retention)

PB가 중력에 맞서 원래 형태를 얼마나 유지하려 하는지 조절합니다.  
초기 각도에서 멀어질수록 형태 유지 효과가 약해지고, 중력의 영향이 강해집니다.

#### Immobile (Motion Damping)

PB가 움직이기 어려운 정도를 조절합니다. (움직임을 얼마나 억제할지)  
손으로 콜라이더를 눌렀을 때의 반응에는 영향을 주지 않습니다.

#### ImmobileType

Immobile이 어떤 움직임에 적용될지 결정합니다.

- **AllMotion**: 모든 움직임에 적용됩니다.
- **World**: 이동/점프 등, 아바타가 월드 기준으로 움직일 때만 적용됩니다.

**World**의 경우, 일반적인 작은 동작에서는 Immobile이 사실상 0으로 취급되므로, 기본적으로는 **AllMotion** 사용을 권장합니다.

#### LimitAngle (Angle Limit)

PB가 꺾일 수 있는 최대 각도를 설정합니다.

#### LimitRotation (Angle Offset)

PB의 움직임 중심 각도를 오프셋(기준 각도)으로 조정합니다.  
X/Y/Z 축별로 다른 값을 넣을 수 있으며, 좌우에는 대칭으로 적용됩니다.

#### CollisionRadius (Collider Size)

PB 콜라이더의 반지름(크기)을 설정합니다.  
값을 키우면 가슴을 터치하기 쉬워집니다.

#### AllowCollision (Touch Permission)

마시멜로 PB를 “누가 만질 수 있는지” 권한을 설정합니다. (자기 자신 / 친구 / 모두)

#### StretchMotion (Squish / Elasticity)

아바타 움직임에 따라 가슴이 얼마나 잘 늘어나고 찌그러질지(탄력)를 조절합니다.  
값이 클수록 전진/후퇴 등 이동 시 변형이 강해집니다.

#### MaxStretch (Max Extension)

PB가 늘어날 수 있는 최대 길이를 설정합니다.  
값이 클수록 잡아서 끌어당길 때 더 멀리 늘어납니다. 0으로 하면 늘어나는 기능이 비활성화됩니다.

#### MaxSquish (Max Squish)

PB가 눌릴 수 있는 최대량을 설정합니다.  
값이 클수록 깊게 눌리고, 작을수록 얕게 눌려 옷 관통이 줄어듭니다.  
0으로 하면 스퀴시 기능이 비활성화됩니다.

#### AllowGrabbing (Grab Permission)

마시멜로 PB를 “누가 잡을 수 있는지” 권한을 설정합니다. (자기 자신 / 친구 / 모두)

#### AllowPosing (Pose Lock Permission)

마시멜로 PB를 “누가 포즈 고정할 수 있는지” 권한을 설정합니다. (자기 자신 / 친구 / 모두)

#### GrabMovement (Follow Strength)

잡고 움직일 때, PB가 손을 얼마나 잘 따라오는지(추종성)를 조절합니다.  
값이 클수록 손의 움직임을 더 밀착해서 따라옵니다.

#### SnapToHand (Snap Amount)

잡는 순간, 가슴이 손 위치로 얼마나 강하게 스냅(순간 이동)될지를 조절합니다.  
값이 너무 크면 움직임이 튀는 느낌이 날 수 있으므로, 적당한 값을 권장합니다.

#### GrabCurve (Grab Distance Curve)

잡았을 때 손 위치에 따라 가슴 위치가 어떻게 변할지 정의하는 곡선입니다.  
가슴을 당겼을 때의 감각을 세밀하게 조절하고 싶을 때 사용합니다.

---

### Inertia Setting (Inertia / Pseudo Multi-Bone)

<img
src={require('/img/marshmallowPB/setup/InertiaSetting.png').default}
style={{ width: '80%' }}
/>

Inertia는 여러 개의 가상 보강 본을 추가된 것처럼 동작시켜, 움직임에 추가적인 부드러움과 지연(딜레이)을 더하는 기능입니다.

#### Inertia Strength

Inertia 본이 얼마나 크게 움직일지(세게 흔들릴지)를 조절합니다.  
값이 클수록 가슴이 더 말랑말랑하고 뒤늦게 따라오는 느낌이 강해집니다.

#### Inertia Follow

Inertia 본이 메인 PB 움직임을 얼마나 빨리 따라잡을지 조절합니다.  
값이 클수록 빨리 따라오고(딜레이 감소), 작을수록 여운이 길어집니다.

#### Inertia Immobile

Inertia 본의 움직임에 대한 저항(움직이기 어려움)을 조절합니다.  
PB Immobile과 역할은 비슷하지만, Inertia에만 적용됩니다.

#### Inertia Count

사용할 Inertia 본의 개수를 설정합니다.  
많을수록 부드럽고 복잡한 움직임을 만들 수 있지만, 성능 비용도 증가합니다.

---

### Parallel Bone Setting

<img
src={require('/img/marshmallowPB/setup/ParallelBoneSetting.png').default}
style={{ width: '80%' }}
/>

Parallel Bone은 가슴 본이 일정한 각도를 유지하려는 성질을 강화하여, “무게감”을 표현하는 기능입니다.

#### Parallel Strength

가슴 본이 평행 상태를 유지하려는 힘의 강도를 조절합니다.  
값이 클수록 쉽게 기울어지지 않고, 묵직한 느낌의 움직임이 됩니다.

#### Parallel Degree

얼마나 “완전히 평행한 움직임”에 가까워질지를 조절합니다.  
0에 가까울수록 평행성이 강하고, 1에 가까울수록 보통 PB에 가까운 회전이 됩니다.

#### Parallel Immobile

Parallel Bone 움직임이 얼마나 움직이기 어려운지를 조절합니다.  
값이 너무 크면 가슴이 지나치게 뻣뻣하게 느껴질 수 있습니다.

---

### Gravity Setting

<img
src={require('/img/marshmallowPB/setup/GravitySetting.png').default}
style={{ width: '80%' }}
/>

#### Chest Sag Ease

몸을 앞으로 숙였을 때 가슴이 얼마나 쉽게 아래로 처질지(축 처짐)를 조절합니다.  
값이 클수록 많이 처지고, 0이면 처짐이 비활성화됩니다.

#### Chest Squish Ease (On Back)

仰向으로 누웠을 때 가슴이 얼마나 쉽게 눌릴지(퍼질지)를 조절합니다.  
값이 클수록 많이 눌리고, 0이면 이 효과가 비활성화됩니다.

---

### Interference / Squish Setting

<img
src={require('/img/marshmallowPB/setup/InterferenceSquishSetting.png').default}
style={{ width: '80%' }}
/>

#### Interference Between Left and Right Chest

아바타의 좌/우 가슴이 서로 간섭할 수 있도록 콜라이더를 배치할지 설정합니다.  
ON으로 하면 양쪽 가슴을 서로 맞댔을 때 서로를 밀어내며 눌립니다.

#### Interference Collider Size

좌/우 가슴 간섭에 사용하는 콜라이더의 크기를 조절합니다.

#### Chest Interference with Other Players

다른 플레이어의 마시멜로 PB와 가슴끼리 간섭할지 설정합니다.  
셋업에 따라 머리/몸 콜라이더와도 상호 작용할 수 있습니다.  
이 옵션은 게임 내 EX 메뉴에서도 ON/OFF 전환할 수 있습니다.

#### Floor Collider

바닥 콜라이더와의 간섭 여부를 설정합니다.  
켜 두면 엎드렸을 때 등 상황에서 가슴이 바닥에 눌리는 표현을 할 수 있습니다.

---

### Anti-Penetration Setting

<img
src={require('/img/marshmallowPB/setup/AntiPenetrationSetting.png').default}
style={{ width: '80%' }}
/>

#### LimitColliderPosition (Squish Limit Position)

가슴이 얼마나 깊게 눌릴 수 있는지 제한하는 콜라이더의 위치를 설정합니다.  
값이 클수록 깊게 눌리기 어려워집니다.  
기본 PB 스퀴시와 중력 스퀴시에 더해지는 제한이며, 주로 의상 관통을 막기 위해 사용됩니다.

#### Anti-Penetration System

관통 방지 시스템을 활성화합니다.  
좌우 가슴 본이 서로를 추종하도록 하여, 한 쪽만 움직여서 생기는 관통을 줄입니다.

#### Disable Squish Function

마시멜로 PB의 스퀴시 기능을 완전히 비활성화합니다.  
게임 내 EX 메뉴에서도 ON/OFF 할 수 있습니다.  
변형보다 관통 대책을 우선하고 싶은 경우에 사용합니다.

#### Rotation When Both Chests Interfere

양쪽 가슴이 서로 간섭할 때, 약간 바깥 방향으로 회전시키는 기능을 활성화합니다.  
가슴을 서로 세게 맞댔을 때, 본이 살짝 바깥쪽으로 돌아가도록 하여 관통을 줄입니다.

---

### Menu Setting

<img
src={require('/img/marshmallowPB/setup/MenuSetting.png').default}
style={{ width: '80%' }}
/>

#### Generate Menu for Marshmallow PB

마시멜로 PB용 EX 메뉴를 생성합니다.  
이 메뉴에서는 다음 기능들을 ON/OFF 할 수 있습니다.

- Chest Interference with Other Players
- Anti-Penetration System
- Disable Squish Function
- 일반 PB로 전환
- PB 무효화

#### Menu Install Destination (Optional)

EX 메뉴가 설치될 위치를 변경합니다.  
지정하지 않으면 최상위 계층에 메뉴가 추가됩니다.

---

### Advanced Setting

<img
src={require('/img/marshmallowPB/setup/AdvancedSetting.png').default}
style={{ width: '80%' }}
/>

#### Apply Preset Based on Chest Bone

가슴 본을 기준으로 프리셋을 적용합니다.  
가슴 본으로부터의 상대 위치를 사용하기 때문에, Unity에서 아바타의 체형이나 위치를 바꿔도 올바르게 적용됩니다.  
다만 Blender 등에서 큰 본 구조 변경이 있는 경우에는 비대응 아바타로 보고 수동 설정을 권장합니다.

#### Use This Object’s Transform as Offset

`marshmallow_PB_Setup`의 위치를 마시멜로 PB의 위치/회전/스케일 오프셋으로 사용합니다.  
예를 들어, 하이힐 등으로 인해 아바타 전체가 위로 이동한 경우, 기본 프리셋만 사용하면 마시멜로 PB 위치가 위로 떠버릴 수 있습니다.  
이 옵션을 켜고 `marshmallow_PB_Setup`을 같은 만큼 위로 옮겨 주면 위치를 맞출 수 있습니다.  
대부분의 경우 「Apply Preset Based on Chest Bone」만으로 충분하지만, 그래도 위치가 어긋날 때 이 옵션으로 미세 조정합니다.

#### Remove All PB Under This Bone

지정한 가슴 본 하위에 존재하는 모든 PB 컴포넌트를 삭제합니다.  
기본적으로는 가슴 본 바로 아래의 PB만 삭제하지만, 비대응 아바타처럼 구조가 복잡한 경우에는 이 옵션을 ON으로 해 주세요.

#### Apply Only Squish Function (Use Original PB)

아바타의 기존 PB는 그대로 두고, 마시멜로 PB의 스퀴시 기능만 적용합니다.  
이 모드에서는 마시멜로 PB의 흔들림 기능은 비활성화되고, 기존 PB의 움직임만 사용됩니다.  
이 설정을 사용하는 경우, 기존 PB의 **Allow Grabbing**을 OFF로 두는 것을 권장합니다.

---

### PB Preset Setting

<img
src={require('/img/marshmallowPB/setup/PBPresetSetting.png').default}
style={{ width: '80%' }}
/>

#### Import

PB 코드 문자열을 입력하여, 그 설정을 현재 PB 설정에 반영합니다.  
이 코드에는 흔들림에 관여하는 PhysBone/Inertia/Parallel Bone 설정이 포함되며(각도 제한・권한 등은 제외), 같은 세팅을 손쉽게 재사용할 수 있습니다.

#### Export

현재 PB 설정을 PB 코드 문자열로 변환합니다.  
이 코드를 공유하면, SNS 등으로 마시멜로 PB 설정을 간단하게 공유할 수 있습니다.

#### Save

현재 PB 설정을 PB 프리셋으로 저장합니다.  
저장된 프리셋은 PB Preset 목록에 추가되어 이후에 다시 사용할 수 있습니다.

