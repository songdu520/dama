function scroll () {
  const scroll = document.createElement('div');
  scroll.style = 'width: 0%;height: 4px;background: red;position: fixed;top: 0;left: 0';

  document.body.appendChild(scroll);

  const total = document.body.clientHeight;
  window.onscroll = () => {
    let top = document.documentElement.scrollTop;
    scroll.style.width = top / (total - innerHeight) * 100 + '%';
  }
}

export default scroll;