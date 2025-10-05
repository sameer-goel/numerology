// Educational content - Number guides
const numbersData={"numbers":{"1":{"name":"Sun","planet":"Sun","element":"Fire","characteristics":["Kinglike, kind, royal, disciplined, authoritative, strong, original","Assertive, individualistic, exuberant, proud"],"strengths":["Natural leaders who rise to top positions","Strong builds with more vitality than others"],"weaknesses":["Obstinate and difficult to persuade to change","Dislike criticism but like to criticize others"],"favorableColors":["Orange","Yellow","Golden yellow"],"favorableDays":["Sunday","Monday"],"gemstone":"Ruby","deity":"Sun-god"},"2":{"name":"Moon","planet":"Moon","element":"Water","characteristics":["Queenlike, royal, attractive, everchanging, delicate","Tender, artistic, romantic nature"],"strengths":["Devoted to selfless service","Good peacemakers and arbitrators"],"weaknesses":["Constant worrying","Less courageous"],"favorableColors":["White","Light green","Blue"],"favorableDays":["Monday"],"gemstone":"Pearl","deity":"Shiva"},"3":{"name":"Jupiter","planet":"Jupiter","element":"Ether","characteristics":["Spiritual, counseling, friendly, disciplined","Independent, bold, active, hard working"],"strengths":["Successful in execution","True to their word"],"weaknesses":["Over-ambitious","Extravagant spenders"],"favorableColors":["Yellow","Pink","Blue"],"favorableDays":["Thursday"],"gemstone":"Yellow Sapphire","deity":"Vishnu"},"4":{"name":"Rahu","planet":"Rahu","element":"Air","characteristics":["Rebellious, impulsive, secretive","Sudden changes, ups-and-downs"],"strengths":["Can undergo pain without anxiety","Face opposition boldly"],"weaknesses":["Doubting nature","No clear picture of life"],"favorableColors":["Blue","Grey","Khaki"],"favorableDays":["Saturday","Sunday","Monday"],"gemstone":"Hessonite","deity":"Ganesha"},"5":{"name":"Mercury","planet":"Mercury","element":"Earth","characteristics":["Princely, entertaining, intelligent","Gentle and fragile, elevated thinkers"],"strengths":["Very adaptable","Brilliant logicians"],"weaknesses":["Unstable nature","Not flexible at home"],"favorableColors":["Green","Turquoise","White"],"favorableDays":["Wednesday","Friday"],"gemstone":"Emerald","deity":"Lakshmi"},"6":{"name":"Venus","planet":"Venus","element":"Water","characteristics":["Romantic, sensual, diplomatic","Magnetic, youthful, luxury-loving"],"strengths":["Think before they act","Universal friends"],"weaknesses":["Slow tempo","Hide anger under smiles"],"favorableColors":["White","Light blue","Pink"],"favorableDays":["Friday"],"gemstone":"Diamond","deity":"Lakshmi"},"7":{"name":"Ketu","planet":"Ketu","element":"Fire","characteristics":["Mystical, intuitive, inventive","Philosophical, independent thinkers"],"strengths":["Bring good luck to others","Gift of intuition"],"weaknesses":["Impractical fantasies","Always differ with others"],"favorableColors":["Light green","Light blue","White"],"favorableDays":["Monday"],"gemstone":"Cat's Eye","deity":"Ganesha"},"8":{"name":"Saturn","planet":"Saturn","element":"Air","characteristics":["Wise, laborious, struggling","Quiet, calming, peace-giving"],"strengths":["Strong willpower","Patient and enduring"],"weaknesses":["Face many struggles","Delays in achieving goals"],"favorableColors":["Black","Dark blue","Dark grey"],"favorableDays":["Saturday"],"gemstone":"Blue Sapphire","deity":"Shani"},"9":{"name":"Mars","planet":"Mars","element":"Fire","characteristics":["Warlike, strong, perfectionist","Honest and hard working"],"strengths":["Extraordinary organizational abilities","Hard workers who never give up"],"weaknesses":["Doubting nature","Fighting and argumentative"],"favorableColors":["Red","Pink","Coral"],"favorableDays":["Tuesday"],"gemstone":"Red Coral","deity":"Hanuman"}}};

function displayNumberGuides(){const container=document.getElementById('numbers-guide');let html='';for(let i=1;i<=9;i++){const num=numbersData.numbers[i];html+=`<div id="number-${i}" class="card" style="margin-bottom:2rem"><h3 class="card__title">Number ${i} - ${num.planet}</h3><p><strong>Element:</strong> ${num.element}</p><p><strong>Nature:</strong> ${num.characteristics.join('; ')}</p><div class="grid grid--two"><div><h4>Strengths</h4><ul>${num.strengths.map(s=>'<li>'+s+'</li>').join('')}</ul></div><div><h4>Challenges</h4><ul>${num.weaknesses.map(w=>'<li>'+w+'</li>').join('')}</ul></div></div><p><strong>Favorable Colors:</strong> ${num.favorableColors.join(', ')}</p><p><strong>Favorable Days:</strong> ${num.favorableDays.join(', ')}</p><p><strong>Gemstone:</strong> ${num.gemstone} | <strong>Deity:</strong> ${num.deity}</p></div>`}container.innerHTML=html}

// Active link highlighting on scroll
function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.sidebar-nav__link');
    
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 150) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('.sidebar-nav__link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayNumberGuides();
    initSmoothScroll();
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Initial call
});
