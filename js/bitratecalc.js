function CalcTargetSize() {
  h = document.getElementById('h');
  m = document.getElementById('min');
  s = document.getElementById('sec');
  v = document.getElementById('video');
  a = document.getElementById('audio');
  t = document.getElementById('TargetSize');
  tmb = document.getElementById('ShortSize');
  tgb = document.getElementById('GB');
  t.value = ((h.value * 60 * 60) * 1 + (m.value * 60) * 1 + s.value * 1) * ((v.value * 128) + (a.value * 128));
  tmb.value = parseInt(t.value / 1024 / 1024 * 10) / 10;
  tgb.value = parseInt(t.value / 1024 / 1024 / 1024 * 10) / 10;
}
function CalcTargetBitrate() {
  h = document.getElementById('h2');
  m = document.getElementById('min2');
  s = document.getElementById('sec2');
  v = document.getElementById('vb');
  a = document.getElementById('ab');
  t = document.getElementById('FileSize');
  v.value = parseInt(((t.value * 1) / ((h.value * 60 * 60) * 1 + (m.value * 60) * 1 + s.value * 1) / 128) * 10) / 10 - a.value;
}
function CalcMediaTime() {
  h = document.getElementById('h3');
  m = document.getElementById('min3');
  s = document.getElementById('sec3');
  v = document.getElementById('mvb');
  a = document.getElementById('mab');
  t = document.getElementById('MediaSize');
  bs = (t.value * 1) / ((v.value * 128 + a.value * 128));
  hs = bs / 60 / 60;
  h.value = parseInt(bs / 60 / 60);
  m.value = parseInt(bs / 60 - (parseInt(hs) * 60));
  s.value = parseInt(bs % 60);
}
//以下はお手軽設定
function SetAudio(n) {//AudioBitrateを設定
  a1 = document.getElementById('audio');
  a2 = document.getElementById('ab');
  a3 = document.getElementById('mab');
  a1.value = n;
  a2.value = n;
  a3.value = n;
}
function SetVideo(n) {//VideoBitrateを設定
  a1 = document.getElementById('video');
  a2 = document.getElementById('vb');
  a3 = document.getElementById('mvb');
  a1.value = n;
  a2.value = n;
  a3.value = n;
}
function SetSize(n) {//目標サイズを設定
  s1 = document.getElementById('FileSize');
  s2 = document.getElementById('MediaSize');
  s1.value = n;
  s2.value = n;
}