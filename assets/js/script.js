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

  // 환자현황: 병원 선택
  const subMenu = document.querySelector('.sub-menu')

  /*if (document.location.hash == "" || document.location.hash == "#")
    document.location.hash = "#all";*/

  function activeClass(e) {
    var elems = document.querySelectorAll(".active-sub-menu");

    Array.from(elems).forEach(el => {
      el.classList.remove('active-sub-menu');
    })
    // mark as active selected menu item
    e.target.classList.add("active-sub-menu");
  }

  if (subMenu) {
    subMenu.addEventListener('click', activeClass)
    /*subMenu.addEventListener('mouseover', () => {
      document.getElementsByClassName('container').style.backgroundPosition = "100% 0"
    })*/
  }

  // 임상시험환자정보: 환자상세정보 열기
  const clinicalTrialPatientList = document.querySelector('.clinical-trial-patient')
  const patientDetail = document.querySelector('.patient-detail')

  // 임상시험환자정보: 환자상세정보
  const patientDetailMenu = document.querySelector('.patient-detail-menu')

  function activeClass2(e) {
    const menus = document.querySelectorAll('.active-patient-menu');

    Array.from(menus).forEach(menu => {
      menu.classList.remove('active-patient-menu')
    })
    e.target.classList.add('active-patient-menu')
  }

  if (clinicalTrialPatientList) {
    clinicalTrialPatientList.addEventListener('click', () => {
      patientDetail.classList.add('active')
      window.location.hash='visited'
    })
    patientDetailMenu.addEventListener('click', activeClass2)
  }



  // 임상시험환자 CSV 파일 업로드

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

