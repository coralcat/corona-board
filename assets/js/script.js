let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
})
document.documentElement.addEventListener('touchstart', function (event) {
  if (event.touches.length > 1) {
    event.preventDefault()
  }
}, false)



document.addEventListener('DOMContentLoaded', function () {

  // 환자현황: 선택한 병원 대시보드 화면 띄우기
  const subMenus = document.querySelectorAll('.sub-menu li')
  const sections = document.querySelectorAll('.dashboard section')

  const init = (n) => {
    sections.forEach((section) => {
      section.style.display = "none"
      subMenus.forEach((subMenu) => {
        subMenu.classList.remove("active")
      })
    })
    sections[n].style.display = "flex"
    subMenus[n].classList.add("active")
  }

  subMenus.forEach((subMenu, index) => {
    subMenu.addEventListener("click", () => {
      init(index)
    })
    init(0)
  })



  // 환자조회: 내역조회
  const iconMore = document.querySelector('.ico-more');

  function activeSubRow(e) {
    var elems = document.querySelectorAll(".active-sub-row");

    Array.from(elems).forEach(el => {
      el.classList.remove('active-sub-row');
    });

    const row = e.target.parentNode
    console.log(row)
    row.classList.add("active-sub-row");
  }

  if (iconMore) {
    iconMore.addEventListener('click', activeSubRow)
  }



  //환자조회: 체크박스
  function check(checked = true) {
    const cbs = document.querySelectorAll('input[name="check-patient"]');
    cbs.forEach((cb) => {
      cb.checked = checked
    })
  }

  function checkAll() {
    check();
    this.onclick = uncheckAll
  }

  function uncheckAll() {
    check(false);
    this.onclick = checkAll
  }

  const btnCheckAll = document.querySelector('#check-all');
  if(btnCheckAll) {
    btnCheckAll.onclick = checkAll;
  }



  // 임상시험 대상환자 조회: 환자상세정보 열기
  const clinicalTrialPatientList = document.querySelector('.clinical-trials');
  const patientDetail = document.querySelector('.clinical-trials-detail');

  // 임상시험 대상환자 조회: 환자상세정보
  const patientDetailMenu = document.querySelector('.clinical-trials-detail-menu');

  function activeClass2(e) {
    const menus = document.querySelectorAll('.active-patient-menu');

    Array.from(menus).forEach(menu => {
      menu.classList.remove('active-patient-menu')
    });
    e.target.classList.add('active-patient-menu')
  }

  if (clinicalTrialPatientList) {
    clinicalTrialPatientList.addEventListener('click', () => {
      patientDetail.classList.add('active');
      window.location.hash='visited'
    })
    patientDetailMenu.addEventListener('click', activeClass2)
  }



  // 임상시험대상환자 CSV 파일 업로드

  const fileAttachment = document.getElementById("FileAttachment")

  if(fileAttachment) {
    fileAttachment.onchange = function () {
      document.querySelector(".upload-file").innerHTML =  document.getElementById("FileAttachment").value.replace(/C:\\fakepath\\/i, '');
    };
  }



  // 로그인
  const loginContainer = document.querySelector(".login-container")

  if (loginContainer) {
    loginContainer.addEventListener("mouseover", () => {
      loginContainer.style.boxShadow = "inset 0 0 30px rgba(255,255,255,.2)"
    })

    loginContainer.addEventListener("mouseout", () => {
      loginContainer.style.boxShadow = null
    })
  }
})

