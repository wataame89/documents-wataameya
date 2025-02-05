
# 도입 방법

### 지원 아바타인 경우

<iframe width="100%" height="480" src="https://www.youtube.com/embed/BnpupxYl1XA?si=242cx5mi2yY1-sgL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

#### 패키지 도입

1. VRChat Creator Companion(VCC)로 프로젝트를 엽니다.
2. [Modular Avatar](https://modular-avatar.nadena.dev/ja/) 패키지를 VCC에 도입합니다 ([링크](vcc://vpm/addRepo?url=https://vpm.nadena.dev/vpm.json)).
3. VCC의 Manage Project에서 “**Gesture Manager**”, “**Modular Avatar**”, “**Non-Destructive Modular Framework**” 이 세 개를 추가합니다.
4. 다시 프로젝트를 열어 정상적으로 임포트되었는지 확인합니다.

:::caution
**ver1.9.0 이전 또는 베타 버전 모치리 셰이더가 존재**한다면 motchiri_shader 폴더를 삭제해주세요. (기존 FX가 들어있는 VGC 폴더는 삭제하지 말 것)
:::

#### 모치리 셰이더 도입

5. [최신 모치리 셰이더](https://wataame89.booth.pm/items/4108136)를 임포트합니다.
6. 아바타가 lilToon 셰이더를 사용 중인지 확인합니다.
7. 아바타를 우클릭 → “wataameya → MotchiriShader”를 선택합니다.
8. 생성된 motchiri_shader_Setup에서 아바타 프리셋을 설정합니다.
9. “Assets/motchiri_shader” 폴더 내 “for test” 프리팹을 씬에 배치합니다.
10. 상단 메뉴바 “Tools → Gesture Manager Emulator” 클릭.
11. Gesture Manager를 실행해 “for test”를 피부 근처로 옮겼을 때 정상적으로 말캉하면 설정 완료입니다.

:::caution
정상 동작하지 않으면 [“문제 해결”](https://wataame89.github.io/documents-wataameya/motchiriShader/howtouse/addition), [“Q&A”](https://wataame89.github.io/documents-wataameya/motchiriShader/qa)를 확인해주세요.
:::

<br/>
<br/>

### 비지원 아바타인 경우

<!-- <iframe width="100%" height="480" src="https://www.youtube.com/embed/BYJZBUt0f_w?si=W9nI2fAhSIp5ubg8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> -->

#### 모치리 셰이더 도입

지원 아바타와 같은 방식으로 진행하면 됩니다.  
프리셋을 “없음”으로 설정한 뒤, 메시와 마스크를 지정해주세요.

마스크가 없으면 만들어야 합니다.

#### 마스크 제작

아바타 UV에서, **움푹 들어가지 않길 원하는 부분을 검정으로 칠한** 마스크를 만들어야 합니다.

<img
src={require('/img/MotchiriShader/Rindo.png').default}
style={{ width: '50%' }}
/>

모치리 셰이더에서 UV 상 흰색 부분은 오목하게(말캉하게) 변형되고, 검정 부분은 변형되지 않습니다(회색은 중간 강도). UV 절단선에서 강도가 다르면 파손이 생길 수 있으므로, 같은 색으로 칠해주세요(Blender의 텍스처 페인트 기능이 편리).

그래픽 툴에서 흰색 바탕에 손, 발 부위를 검정으로 칠하세요. 이때 손발과 이어지는 부분(손목, 발목 경계)도 검정으로 칠해야 합니다. 흰색과 검정 경계는 흐리게 처리해주세요.

:::caution

- 없어도 되긴 하지만, 손발 이외에 목·팔꿈치·무릎·배꼽·골반·정강이 등도 검정으로 칠하면 보다 자연스러운 연출이 가능합니다.
- 얼굴 텍스처도 동일하다면 얼굴 역시 검정으로 칠해야 할 수 있습니다.

:::

:::danger

- Unity에 마스크를 임포트한 뒤에는 반드시 텍스처에서 **Mip Streaming**을 켜주세요.(업로드 시 오류 방지)

:::

#### 제작 예시

예를 들어 Rindo 아바타의 UV 이미지를 기준으로 마스크를 만든다면 다음과 같습니다.

<img
src={require('/img/MotchiriShader/hitaiou1.png').default}
style={{ width: '80%' }}
/>

얼굴 마스크를 만들 때는, 우선 전부 검정으로 칠한 뒤, 뺨 부위만 흰색으로 칠하고 경계를 흐리면 쉽게 제작할 수 있습니다.
<img
src={require('/img/MotchiriShader/hitaiou2.png').default}
style={{ width: '30%' }}
/>

비지원 아바타용 마스크를 만드셨다면 [이 양식](https://forms.gle/KLTTSqsE4qs8uvfN8)을 통해 공유해주시면 감사하겠습니다.  
([마스크 공유 폴더](https://drive.google.com/drive/folders/1stqqIn21kCK0fb2n-9iuPANs1vyrfCKaCaRX-rHcl3V3LFspC_EzBBgI0mktw_Ot9TtHXLb9?usp=sharing))

<br/>
<br/>

### 구방식(Modular Avatar 미사용)

:::danger 권장되지 않는 방식
아바타와 FX 레이어를 복사해 세팅하기 때문에 현재로서는 권장되지 않습니다.  
특별한 사유가 없다면 신방식을 사용해주세요.

Gesture Manager로 동작 확인을 하기 위해 VRChat Creator Companion(VCC)만 대응합니다.  
(물론 추천하진 않지만 VRChat에서 직접 테스트만 한다면 VCC가 아니어도 동작하긴 합니다)

[구방식 설명서](https://docs.google.com/document/d/12P_FFVJuNOV73QjRfC3pZ4aRZqmnqr281_yjS4hq_uY/edit?usp=share_link)
:::

