const buttonInit = () => {
  const confirmBtn = document.getElementById('confirm-btn');
  const cancelBtn = document.getElementById('cancel-btn');
  const transferBtn = document.getElementById('transfer-btn');
  const modalBody = document.querySelector('.modal_body');
  const firstModal = document.querySelector('.first_modal');
  const secondModal = document.querySelector('.second_modal');
  const passwordBtnList = document.querySelectorAll('.second_modal > .bottom li');
  const passwordDotList = document.querySelectorAll('.second_modal > .top li');
  const third = document.querySelector('.third');
  const openFirstModal = () => {
    // modalBody.style.display = 'block';
    modalBody.style.visibility = 'visible';
    firstModal.style.visibility = 'visible';
    firstModal.style.height = '300px';
  }
  const closeFirstModal = () => {
    modalBody.style.visibility = 'hidden';
    firstModal.style.visibility = 'hidden';
    firstModal.style.height = '0px';
    // modalBody.style.display = 'none';
    // modal.style.display = 'none';
  }
  const openSecondModal = () => {
    secondModal.style.visibility = 'visible';
    console.log(passwordBtnList);
  }
  let passwordCount = 0;
  const passwordPush = () => {
    if ( passwordCount < 6 ) passwordCount += 1;
    if ( passwordCount ===  6 ) {
      third.style.display = 'block';
    }
    passwordDotList.forEach((e, idx) => {
      if ( idx < passwordCount ) {
        passwordDotList[idx].style.backgroundColor = 'black';
      } else {
        passwordDotList[idx].style.backgroundColor = 'white';
      }
    })
  }
  const passwordDelPush = () => {
    if ( passwordCount > 0 ) passwordCount -= 1;
    passwordDotList.forEach((e, idx) => {
      if ( idx < passwordCount ) {
        passwordDotList[idx].style.backgroundColor = 'black';
      } else {
        passwordDotList[idx].style.backgroundColor = 'white';
      }
    })
  }
  confirmBtn.addEventListener('click', (e) => openFirstModal());
  cancelBtn.addEventListener('click', (e) => closeFirstModal());
  transferBtn.addEventListener('click', (e) => openSecondModal());
  passwordBtnList.forEach((el, idx) => {
    if (idx === 10) {
      el.addEventListener('click', (e) => passwordDelPush()); 
    } else {
      el.addEventListener('click', (e) => passwordPush());
    }
  })
}

buttonInit();