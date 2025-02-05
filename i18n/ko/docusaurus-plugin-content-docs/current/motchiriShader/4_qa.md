
# Q&A

:::info 페이지 설명
모치리 셰이더가 정상적으로 작동하더라도 불만 혹은 궁금증이 있을 때 참고하세요.  
(더 고급 사용법을 알고 싶다면 [“사용법/응용편”](https://wataame89.github.io/documents-wataameya/motchiriShader/howtouse/addition), 정상 작동하지 않는다면 [“문제 해결”](https://wataame89.github.io/documents-wataameya/motchiriShader/howtouse/addition)을 참조)
:::

### 얼굴 마스크가 제공되지 않았나요?

일부 아바타만 얼굴 마스크를 지원합니다. 얼굴 마스크가 포함되지 않은 아바타는…

### Unity 게임에서 사용하고 싶어요

URP에 대응하는 별도의 모치리 셰이더를 개발 중입니다.  
장차 공개할 예정이나, 개발에 활용하고 싶으시다면 문의해주세요.

사용 예시: [ミスター秘密侵入 VR](https://www.dlsite.com/maniax/work/=/product_id/RJ01266526.html/?utm_medium=affiliate&utm_campaign=sns_link&utm_content=RJ01266526&utm_source=mr-vr-jp.github.io%2F)

### Poiyomi 지원 계획이 있나요?

Poiyomi로는 커스텀 셰이더를 작성할 수 없어, 현재로서는 지원 계획이 없습니다.

### 모치리 셰이더가 적용된 아바타를 원래 상태로 되돌리고 싶습니다

#### 신방식:

신방식은 비파괴 방식으로, 아바타 아래에 생긴 marshmallow_PB_Setup만 삭제하면 도입 전 상태로 복귀합니다.

#### 구방식:

아바타에 모치리 셰이더가 적용된 상태라면, 셰이더를 lilToon으로 변경하고 motchiri 오브젝트를 삭제한 뒤 FX 레이어를 원상 복구하세요.

