
# 문제가 생겼을 때

:::info 페이지 설명
모치리 셰이더(Motchiri Shader)가 정상적으로 작동하지 않는다고 여겨질 경우 참고하세요.  
(정상적으로 작동한다면 [“사용법/응용편”](https://wataame89.github.io/documents-wataameya/motchiriShader/howtouse/addition), [“Q&A”](https://wataame89.github.io/documents-wataameya/motchiriShader/qa)를 참조)
:::

### 셰이더가 작동하지 않음

우선 Unity(Gesture Manager)와 VRChat에서 각각 테스트해보고, 어디서 작동이 멈추는지 확인해 보세요.

#### Unity(Gesture Manager)에서 작동하지 않는 경우:

Unity 상에서 작동하지 않을 경우, 아바타에 문제가 있을 가능성이 큽니다.

- 메시의 머티리얼을 변경하는 애니메이션이 있으면 작동하지 않습니다.
- FX 레이어에서 WriteDefault가 통일되어 있지 않으면, 작동이 불안정할 수 있으니 반드시 통일해 주세요.
- 머티리얼 오류가 발생하는 경우, motchiri_shader 폴더 우클릭 → “Reimport”로 해결될 수 있습니다.
- 그래도 작동하지 않으면, 새 프로젝트를 만들어 그 아바타를 세팅해 보세요.
  - 지원 아바타의 프리팹에서 유래한 기본 아바타는 정상적으로 작동해야 합니다. 어느 변환 시점에서 셰이더가 깨지는지 확인하면, 어떤 변환과 충돌하는지 알 수 있으므로 모치리 셰이더 쪽에서 대응할 수도 있습니다. 문제가 있으면 문의해주세요.
  - 기본 아바타에서도 문제가 생긴다면 시스템 자체의 오류 가능성이 있으니, 연락 부탁드립니다.

#### VRChat에서 작동하지 않는 경우:

Unity에서는 작동하지만 VRChat에서만 작동하지 않는 경우, VRChat 측 설정 문제일 수 있습니다.

- VRChat 설정에서 Avatar Intaract > Self Intaract(자기 PB를 만질 수 없게 하는 설정)가 꺼져 있으면 자기 자신은 만질 수 없습니다. ([공식 문서](https://docs.vrchat.com/docs/permissions-and-settings) 참조)
- VRChat의 아바타 스케일링을 사용하면 작동하지 않습니다. 기본 크기로 이용해주세요.

### 본인은 만질 수 있지만 친구가 만질 수 없음

사양상, 자기 자신을 제외하고 가장 가까운 다른 플레이어 한 명만 만질 수 있습니다. 동시에 여러 명이 만지거나 주변에 플레이어가 많으면 제대로 작동하지 않을 수 있습니다. 또한 Contact 설정에 따라 만지지 못할 수도 있습니다.

판단 방법: 친구가 귀나 꼬리 등 PhysBone을 만질 수 있다면 모치리 셰이더도 보통 만질 수 있습니다. 만약 PhysBone은 만져지는데 모치리 셰이더가 작동하지 않는다면 아바타 리셋이나 아바타 변경을 시도해 보세요. 그래도 안되면 VRChat의 Avatar Intaract 설정을 다시 확인하세요. ([공식 문서](https://docs.vrchat.com/docs/permissions-and-settings))

### 검지 손가락 판정이 어긋나서 만지기 어려움

VRChat 기본 손가락 콜라이더는 캡슐 형태라, 콜라이더의 중심(motchiri 오브젝트)과 가장 가까운 위치가 판정 지점이 됩니다. 이 때문에 손끝이 아니라 손가락 뿌리 쪽에서 판정이 일어날 수 있습니다. 만질 수 없다면 손가락 뿌리 쪽으로 시도해보세요. 기본 콜라이더를 구형 콜라이더로 바꾸면 어긋남이 줄어듭니다.

### 타이츠 메시가 관통됨

신체만 하이폴리화돼 있어, 타이츠와 폴리곤이 어긋나 관통이 일어납니다.  
~테셀레이션으로 타이츠도 몸에 맞추면 해결될 수 있지만~ 현재 lilToon 사양 변경으로 분할 방식이 달라져 테셀레이션만으로는 해결이 어렵습니다. 몸 메시를 살짝 숨기는 셰이프 키(약 5 정도)를 주어 겉모습 손상 없이 관통을 막을 수 있습니다.

<!-- <img
src={require('/img/MotchiriShader/taitu.png').default}
style={{ width: '800px' }}
/> -->

### 뺨이 잘 말캉해지지 않음

검지 손가락 콜라이더의 오차가 motchiri 프리팹의 중심 쪽으로 생기므로, 뺨을 만지려 하면 손가락 뿌리 쪽에서 판정되어 만지기가 어려워집니다. 해결책으로는 뺨 아래쪽에서 위로 만지거나, 손가락 기본 콜라이더의 설정을 바꾸어 오차가 생기지 않도록 할 수 있습니다.

### 말캉해진 부분의 메시가 갈라짐

갈라지는 부분은 마스크에서 해당 영역을 검정으로 칠해주세요. Blender에서 샤프 엣지(Sharp Edges)가 설정돼 있는 부분도 메시가 어긋날 수 있으니, 불필요한 곳은 해제하세요.

### 몸에 쓰다듬기 셰이더(shadowdepth_body)와 동시 사용 불가

shadowdepth_body는 하이폴리화 전의 메시를 참조해 어둡게 처리합니다. 따라서 이미 하이폴리 상태에서는 위치가 맞지 않아 정상 동작하지 않습니다. 대신 lilToon에 포함된 거리 페이드(distance fade)를 사용해 비슷한 효과를 낼 수 있습니다. shadowdepth_body를 제거하고, 모치리 셰이더 머티리얼을 아래 그림처럼 설정하면 shadowdepth_body와 유사하게 동작합니다.
<img
src={require('/img/MotchiriShader/shadow.png').default}
style={{ width: '800px' }}
/>

### blackbody shader와 병행 시 말캉해진 부위가 검게 표시됨

아래 그림 맨 아래 체크박스를 해제하면 해결됩니다.
<img
src={require('/img/MotchiriShader/black.png').default}
style={{ width: '400px' }}
/>

---

### 아바타별 문제

(공사 중)

---

### 이미 알려진 문제

#### Contact가 밀집될 때 동작하지 않는 문제

여러 아바타가 밀집하여 Contact가 다수 겹칠 경우, 모치리 셰이더가 정상 작동하지 않는 현상이 보고되었습니다.  
이는 VRChat 측의 버그로, Contact 파라미터가 초기화되는 데 기인합니다.

---

:::caution 이 페이지를 통해 해결되지 않는 경우
[문의하기](https://wataame89.github.io/documents-wataameya/motchiriShader/howtocontact)를 참조해주세요.
:::

