(()=>{
  const files=['app.part1.js','app.part2.js','app.part3.js'];
  Promise.all(files.map(file=>fetch(file,{cache:'no-store'}).then(r=>{if(!r.ok) throw new Error(`${file}: ${r.status}`); return r.text();})))
    .then(parts=>{ new Function(parts.join(''))(); })
    .catch(err=>{ console.error('App loader failed',err); document.body.insertAdjacentHTML('afterbegin','<div style="padding:12px;background:#30151a;color:#ffd2d7;font:14px system-ui">Failed to load calculator scripts. Refresh the page.</div>'); });
})();
