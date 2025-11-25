document.addEventListener('DOMContentLoaded', () => {
    // Typing Effect
    const textElement = document.getElementById('typing-text');
    const texts = ["디자인으로 시작해", "마케팅을 거쳐", "데이터로 세상을 이해하는"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            textElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500; // Pause before new word
        }

        setTimeout(type, typeSpeed);
    }

    if (textElement) type();

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Project Data
const projectsData = {
    'gimjepay': {
        title: '김제페이',
        image: 'https://www.hongsinugget.dev/images/gimjepay/gimje_1.png',
        description: '일상회복지원금 사용처를 한눈에! 김제시에서 지원하는 일상회복지원금의 사용처를 한눈에 볼수있게 지도서비스를 제작했습니다. 사용자들이 편리하게 가맹점을 찾을 수 있도록 직관적인 UI를 제공합니다.'
    },
    'jipyeong': {
        title: '지평선 전생테스트',
        image: 'https://www.hongsinugget.dev/images/jipyeong/jipyeong_main.png',
        description: '200년 전으로 돌아가게 된 당신... 5개의 질문을 통해 당신의 전생 모습을 찾아보세요! 재미있는 스토리텔링과 결과 공유 기능을 통해 바이럴 마케팅 효과를 노렸습니다.'
    },
    'nullz': {
        title: 'NULLZ 크리에이터',
        image: 'https://www.hongsinugget.dev/images/nullz/nullz_main.png',
        description: 'Nullz 핫크리에이터 등극 & 널즈(Nulz) 파트너 크리에이터 활동. 다양한 콘텐츠를 기획하고 제작하며 크리에이터로서의 역량을 키웠습니다.'
    },
    'marketer': {
        title: '청년마케터 서포터즈',
        image: 'https://www.hongsinugget.dev/images/marketer/marketer_main.png',
        description: '청년마케터 서포터즈 대외활동. 마케팅 실무를 경험하고 현직자 멘토링을 통해 전문성을 강화했습니다.'
    },
    'silentmonster': {
        title: 'SilentMonster',
        image: 'https://www.hongsinugget.dev/images/silentmonster/silentmonster_main.png',
        description: 'SilentMonster 창업. 초기 스타트업의 브랜딩부터 마케팅 전략 수립까지 전 과정을 주도했습니다.'
    },
    'designer': {
        title: '디자인작업물',
        image: 'https://www.hongsinugget.dev/images/designer/designer_main.png',
        description: '프리랜서 디자인 작업물 모음. 클라이언트의 요구사항을 반영한 다양한 디자인 프로젝트를 수행했습니다.'
    }
};

// Modal Functions
function openModal(projectId) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const project = projectsData[projectId];

    if (project) {
        modalBody.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
        `;
        modal.style.display = "flex";
        document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling
}

// Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('project-modal');
    if (event.target == modal) {
        closeModal();
    }
}
