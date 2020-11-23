"use strict";

var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
window.addEventListener('resize', function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
});
document.documentElement.addEventListener('touchstart', function (event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, false);
document.addEventListener('DOMContentLoaded', function () {
  // 환자현황: 선택한 병원 대시보드 화면 띄우기
  var subMenus = document.querySelectorAll('.sub-menu li');
  var sections = document.querySelectorAll('.dashboard section');

  var init = function init(n) {
    sections.forEach(function (section) {
      section.style.display = "none";
      subMenus.forEach(function (subMenu) {
        subMenu.classList.remove("active");
      });
    });
    sections[n].style.display = "flex";
    subMenus[n].classList.add("active");
  };

  subMenus.forEach(function (subMenu, index) {
    subMenu.addEventListener("click", function () {
      init(index);
    });
    init(0);
  }); // 환자조회: 내역조회

  var iconMore = document.querySelector('.ico-more');

  function activeSubRow(e) {
    var elems = document.querySelectorAll(".active-sub-row");
    Array.from(elems).forEach(function (el) {
      el.classList.remove('active-sub-row');
    });
    var row = e.target.parentNode;
    console.log(row);
    row.classList.add("active-sub-row");
  }

  if (iconMore) {
    iconMore.addEventListener('click', activeSubRow);
  } //환자조회: 체크박스


  function check() {
    var checked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var cbs = document.querySelectorAll('input[name="check-patient"]');
    cbs.forEach(function (cb) {
      cb.checked = checked;
    });
  }

  function checkAll() {
    check();
    this.onclick = uncheckAll;
  }

  function uncheckAll() {
    check(false);
    this.onclick = checkAll;
  }

  var btnCheckAll = document.querySelector('#check-all');

  if (btnCheckAll) {
    btnCheckAll.onclick = checkAll;
  } // 임상시험 대상환자 조회: 환자상세정보 열기


  var clinicalTrialPatientList = document.querySelector('.clinical-trials');
  var patientDetail = document.querySelector('.clinical-trials-detail'); // 임상시험 대상환자 조회: 환자상세정보

  var patientDetailMenu = document.querySelector('.clinical-trials-detail-menu');

  function activeClass2(e) {
    var menus = document.querySelectorAll('.active-patient-menu');
    Array.from(menus).forEach(function (menu) {
      menu.classList.remove('active-patient-menu');
    });
    e.target.classList.add('active-patient-menu');
  }

  if (clinicalTrialPatientList) {
    clinicalTrialPatientList.addEventListener('click', function () {
      patientDetail.classList.add('active');
      window.location.hash = 'visited';
    });
    patientDetailMenu.addEventListener('click', activeClass2);
  } // 임상시험대상환자 상세정보 추가


  var overlay = document.querySelector('.overlay');
  var modal = document.querySelector('.modal');
  var modalConfirmationNumber = document.querySelector('.modal-confirmation-number');
  var confirmationNumber = document.querySelector('.col-confirmation-number input');

  if (confirmationNumber) {
    confirmationNumber.addEventListener('click', function () {
      modalConfirmationNumber.classList.add('active');
      overlay.classList.add('active');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', function () {
      overlay.classList.remove('active');
      modal.classList.remove('active');
    });
  } // 임상시험대상환자 CSV 파일 업로드


  var csvUpload = document.querySelector('.csv-upload');

  if (csvUpload) {
    csvUpload.addEventListener('click', function () {
      modal.classList.add('active');
      overlay.classList.add('active');
    });
  }

  var fileAttachment = document.getElementById("FileAttachment");

  if (fileAttachment) {
    fileAttachment.onchange = function () {
      document.querySelector(".upload-file").innerHTML = document.getElementById("FileAttachment").value.replace(/C:\\fakepath\\/i, '');
    };
  } // 로그인


  var loginContainer = document.querySelector(".login-container");

  if (loginContainer) {
    loginContainer.addEventListener("mouseover", function () {
      loginContainer.style.boxShadow = "inset 0 0 30px rgba(255,255,255,.2)";
    });
    loginContainer.addEventListener("mouseout", function () {
      loginContainer.style.boxShadow = null;
    });
  }
});