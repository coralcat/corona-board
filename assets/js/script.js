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

  var moreButton = document.querySelectorAll('.btn-more');
  var rows = document.querySelectorAll('.rows');

  var initRow = function initRow(n) {
    rows.forEach(function (row) {
      row.classList.remove('active');
    });
    rows[n].classList.add('active');
  };

  moreButton.forEach(function (row, index) {
    row.addEventListener('click', function () {
      initRow(index);
    });
  }); //환자조회: 체크박스

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
  } // 임상시험대상환자 상세정보 입력 - 팝업창


  var overlay = document.querySelector('.overlay');
  var modals = document.querySelectorAll('.modal');
  var inputLocationID = document.querySelector('.input-locationID');
  var modalLocationID = document.querySelector('.modal-locationID');

  if (inputLocationID) {
    inputLocationID.addEventListener('click', function () {
      modalLocationID.classList.add('active');
      overlay.classList.add('active');
    });
  }

  var inputResearchID = document.querySelector('.input-researchID');
  var modalResearchID = document.querySelector('.modal-researchID');

  if (inputResearchID) {
    inputResearchID.addEventListener('click', function () {
      modalResearchID.classList.add('active');
      overlay.classList.add('active');
    });
  }

  var inputBodyPosition = document.querySelector('.input-body-position');
  var modalBodyPosition = document.querySelector('.modal-body-position');

  if (inputBodyPosition) {
    inputBodyPosition.addEventListener('click', function () {
      modalBodyPosition.classList.add('active');
      overlay.classList.add('active');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', function () {
      overlay.classList.remove('active');
      modals.forEach(function (modal) {
        modal.classList.remove('active');
      });
    });
  } // 임상시험대상환자 CSV 파일 업로드


  var csvUpload = document.querySelector('.csv-upload');

  if (csvUpload) {
    csvUpload.addEventListener('click', function () {
      modals.classList.add('active');
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