$(function(){
  let url = window.location.href
  let img = $('.result_img img').attr('src');

  $("meta[property='og\\:url']").attr('content', url);
  $("meta[property='og\\:image']").attr('content', img);
})

const copyBtn = document.querySelector('.copy_btn');
const facebookShare = document.querySelector('.facebook_share');

//카카오 공유 코드
const kakaoShare = document.querySelector('.kakao_share');
Kakao.init('20f9e4545dd128f6135213d85bee82c5')

function copyUrl(){
  let tmp = document.createElement('input');
  let url = location.href;

  document.body.appendChild(tmp);
  tmp.value = url;
  tmp.select();
  document.execCommand("copy");
  document.body.removeChild(tmp);

  alert("URL이 복사되었습니다");
}

function sharefacebook(){
  let url = window.location.href;
  let facebook = 'http://www.facebook.com/sharer/sharer.php?u=';
  let link = facebook + url;
  window.open(link);
}

copyBtn.addEventListener('click',copyUrl);
facebookShare.addEventListener('click',sharefacebook);
