const videos = [
    document.getElementById('video0'),
    document.getElementById('video1'),
    document.getElementById('video2'),
    document.getElementById('video3'),
    document.getElementById('video4')
];

const texts = [
    "공간과 디자인, <br>그리고 일상을 담은 스토리로 새로운 경험을 선사합니다",
    "전문성과 신뢰를 담은 <br>정교한 블렌드와 셀렉션",
    "빈티지 감성과 따뜻함이 <br>어우러진 아늑한 공간",
    "작품을 감상하며 <br>커피 한 잔의 여유를 즐길 수 있는 공간",
    "서울 도심 속, <br>일상 속 새로운 즐거움을 만나는 곳"
];

let current = 0;
const textOverlay = document.getElementById('textOverlay');

function playNext() {
    // 현재 비디오
    const currentVideo = videos[current];

    // 모든 비디오 숨김
    videos.forEach((v, i) => {
        v.pause();
        v.classList.remove('active');
        v.currentTime = 0;
    });

    // 텍스트 페이드 아웃
    textOverlay.classList.remove('active');

    // 약간의 여유 시간 후 전환
    setTimeout(() => {
        // 텍스트 변경 및 페이드 인
        textOverlay.innerHTML = texts[current];
        textOverlay.classList.add('active');

        // 비디오 재생 및 표시
        currentVideo.classList.add('active');
        const playPromise = currentVideo.play();

        // 비디오가 끝나기 조금 전에 미리 다음 준비
        currentVideo.onended = () => {
            current = (current + 1) % videos.length;
            playNext();
        };

        // 에러 방지 (브라우저 autoplay 정책 대응)
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Autoplay prevented:", error);
            });
        }
    }, 400); // 페이드 아웃과 간격 맞추기
}

window.onload = () => {
    playNext();
};