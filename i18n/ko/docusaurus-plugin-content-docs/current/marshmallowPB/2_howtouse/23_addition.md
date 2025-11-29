# 응용편

:::info 페이지 설명
마시멜로 PB가 정상 동작하는 상태에서, 더 고급 사용법을 알고 싶을 때 참고하는 페이지입니다.  
(일반적인 문제 해결은 [「문제가 생겼을 때」](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition)와 [「Q&A」](https://wataame89.github.io/documents-wataameya/marshmallowPB/qa)를 확인해 주세요.)
:::

### 마시멜로 PB의 흔들림을 튜닝하기

마시멜로 PB의 흔들림은 주로 아래 세 가지 파라미터 그룹에 의해 결정됩니다.

- **PhysBone**
- **Inertia(관성 / 의사 멀티 본)**
- **Parallel Bone(평행 본)**

**PhysBone**은 본의 기본적인 동작을 제어하며, **가슴이 어떻게 흔들리는지**를 결정합니다.  
**Inertia**는 관성에 관련된 파라미터로, **가슴의 말랑말랑함과 여운(딜레이)**를 결정합니다.  
**Parallel Bone**은 가슴 본의 각도 유지에 관련된 파라미터로, **가슴의 무게감**을 결정합니다.

마시멜로 PB는 일반 PhysBone에 Inertia와 Parallel Bone 기능을 더해, 보다 자연스러운 말캉한 움직임을 구현합니다.

<div
  style={{
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  }}
>

  <div>
    <p><strong>왼쪽: Inertia・Parallel Bone 없음</strong></p>
    <img
      src={require('/img/marshmallowPB/PhysBone_NoInertiaNoParallel.gif').default}
      style={{ width: '100%' }}
    />
  </div>

  <div>
    <p><strong>오른쪽: Inertia・Parallel Bone 있음</strong></p>
    <img
      src={require('/img/marshmallowPB/Physbone.gif').default}
      style={{ width: '100%' }}
    />
  </div>
</div>

위 파라미터들을 조정함으로써, 흔들림을 아주 세밀하게 튜닝할 수 있습니다.  
각 항목의 상세 설명은 [설정 패널](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup)을 참고해 주세요.

PhysBone과 Inertia를 미세 조정하고 싶을 때는, 셋업 실행 시 아바타 하위에 생성되는  
`marshmallow_PB/PhysBone_L,R`, `marshmallow_PB/Inertia_L,R` 컴포넌트의 값을 직접 수정하면, 재생 중에 바로 결과를 확인할 수 있습니다.  
Parallel Bone의 값은 시스템 패널 쪽에서 조정해 주세요.

<img
src={require('/img/marshmallowPB/PhysboneSetting.png').default}
style={{ width: '80%' }}
/>

### 마시멜로 PB의 흔들림을 저장・공유하기

마시멜로 PB의 PB 프리셋을 저장하고 공유할 수 있습니다.

- **코드 형식**  
  현재 프리셋을 코드 문자열로 내보낼 수 있으며, 이 코드를 SNS 등으로 공유해 동일한 흔들림 설정을 쉽게 재현할 수 있습니다.
- **파일 형식**  
  프리셋을 파일로 저장해 둘 수도 있으며, 저장된 프리셋은 PB Preset 목록에 표시되어 언제든지 다시 불러올 수 있습니다.

<img
src={require('/img/marshmallowPB/PBPresetSetting.png').default}
style={{ width: '80%' }}
/>

### 마시멜로 PB의 콜라이더를 추가하기

임의의 콜라이더를 추가한 뒤, PhysBone 설정의 Collider 목록에 등록하면 마시멜로 PB와 상호 작용하게 됩니다.  
상완(위팔)이나 허벅지 등에 콜라이더를 추가해 가슴과 자연스럽게 부딪히도록 설정하는 것을 추천합니다.

### 마시멜로 PB의 위치・각도・크기를 조정하기

대응 아바타를 프리셋으로 설정하면, 마시멜로 PB의 본 위치・각도・크기는 기본적으로 고정됩니다.  
이후 가슴 크기를 크게 바꾸는 등 조정이 필요해졌다면, 해당 아바타를 “비대응 아바타”로 취급해 수동 셋업을 수행하면, 마시멜로 PB의 본을 자유롭게 이동・스케일 조정할 수 있습니다.

### 다른 플레이어의 마시멜로 PB와 상호 작용시키기

마시멜로 PB 설정에서 **Chest Interference with Other Players** 옵션을 ON으로 하면, 서로의 가슴이 맞닿을 때 함께 눌리는 연출이 가능합니다.  
이 기능은 양쪽 플레이어 모두 해당 옵션을 ON으로 해야 동작합니다.  
VRC 상에서도 EX 메뉴에서 ON/OFF 할 수 있습니다.

### 다른 플레이어의 기본 콜라이더와 상호 작용시키기

**Chest Interference with Other Players**가 ON인 상태에서는, 조건에 따라 다른 플레이어의 기본 콜라이더(머리・몸통 등)와도 상호 작용시킬 수 있습니다.  
기본 머리 콜라이더는 보통 작게 설정되어 있으므로, Avatar Descriptor의 Colliders 항목에서 머리 콜라이더 크기를 키우면 마시멜로 PB와의 접촉이 더 잘 잡히게 됩니다.

<img
src={require('/img/marshmallowPB/head.png').default}
style={{ width: '100%' }}
/>

### 아바타의 기존 PhysBone을 활용하기

아바타에 원래 붙어 있던 PB 움직임은 그대로 두고, 마시멜로 PB의 스퀴시 기능만 사용하고 싶은 경우에는 설정 패널에서  
**Apply Only Squish Function (Use Original PB)** 옵션을 ON으로 설정해 주세요.  
이 모드에서는 기본적으로 기존 PB의 흔들림이 그대로 사용되며, 누르면 마시멜로 PB의 눌림 효과만 추가됩니다.  
마시멜로 PB의 잡기 기능을 같이 쓰고 싶다면, 기존 PB 쪽의 **Allow Grabbing**을 OFF로 해 두는 것을 권장합니다.

<!--
### 자작 아바타 프리셋 추가하기

마시멜로 PB에는 아바타별 설정을 저장해 두는 프리셋 기능이 있습니다.  
비대응 아바타에 여러 번 같은 설정을 적용하고 싶을 때는, 자작 아바타 프리셋을 만들어 두면 편리합니다.

#### 아바타 프리셋 추가 방법

1. 가슴 블렌드셰이프 값이 0인 아바타와 100인 아바타, 두 개를 준비한 뒤 비대응 아바타와 같은 절차로 설정하고, 이때의 `marshmallow_PB_L` position/rotation/scale 값을 각각 기록합니다.
2. Preset 폴더 안의 `Preset0` 파일을 복사하여 이름을 바꿉니다. (숫자 한 자리 이름 등은 에러가 날 수 있으니 피해주세요.)
3. 새 파일의 `avatarName`, `Path`, `breast_L_position`, `breast_L_rotation`, `breast_L_scale` 등을 편집합니다.  
   (`_0`에는 가슴 0 상태 아바타의 값, `_100`에는 가슴 100 상태 아바타의 값을 넣습니다.)  
   그 밖의 파라미터는 기본값을 그대로 두어도 대개 문제 없습니다.
4. 셋업 툴을 열어 프리셋 목록에 새 프리셋이 추가된 것을 확인하면 완료입니다.

#### 아바타 프리셋 설정 항목

<img
src={require('/img/marshmallowPB/preset.png').default}
style={{ width: '80%' }}
/>

아바타 프리셋 설정 파일은 `marshmallow_PB/Setup/Preset` 폴더에 있습니다.

- **Path** – 아바타 루트에서 가슴 본 및 콜라이더까지의 상대 경로입니다.
- **breast_L_position / breast_L_scale** – `marshmallow_PB_L`의 로컬 위치/스케일입니다.  
  오른쪽(`marshmallow_PB_R`)은 이 값을 반전하여 자동으로 설정합니다.
- **(Parameter)_0 / (Parameter)_100** – 가슴 블렌드셰이프가 0일 때와 100일 때의 값입니다.  
  중간 값은 이 두 값에서 보간되며, 각 파라미터는 [설정 패널](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup)에 설명된 PhysBone 항목에 대응합니다.
-->

