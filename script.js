//your JS code here. If required.
const status = document.getElementById('status');
const Btn = document.getElementById('enterBtn');

Btn.addEventListener('click', ()=>{
	status.outerHTML = '<h1 id="status">Entered Metaverse</h1>'
})