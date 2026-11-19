const $=s=>document.querySelector(s);let R=matchMedia('(prefers-reduced-motion:reduce)').matches;
const toast=t=>{const e=$('#toast');e.textContent=t;e.classList.add('s');setTimeout(()=>e.classList.remove('s'),2400)};
const W=new Set(),pal=[['#e9c99a','#a7704f'],['#d8c5a5','#6d5340'],['#cfd0c6','#6b6a5c'],['#f0d6b0','#b27f5a'],['#e3cfb2','#7d6048'],['#d9c3a8','#5f4a3a']];
function art(i,k){const[a,b]=pal[i%6];const sh={m:'M0 300L120 130 200 230 300 90 420 260V400H0z',s:'M0 270q60-30 120 0t120 0 120 0 60 0V400H0z',f:'M0 400V250l30-80 30 80 30-90 30 90 40-100 30 100 40-80 30 80 40-90 30 90 40-70V400z',d:'M80 400V260q120-130 240 0v140z'}[k];
return`<svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="g${i}${k}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="400" height="400" fill="url(#g${i}${k})"/><circle cx="${280-i*12}" cy="${110+i*6}" r="46" fill="#fff3d0" opacity=".75"/><path d="${sh}" fill="${b}" opacity=".75"/><path d="${sh}" fill="#2f2822" opacity=".35" transform="translate(70 70) scale(.8)"/></svg>`}
function art(i,k){const[a,b]=pal[i%6],u='x'+i+k,sx=250-i*14,sy=120+i*8,dk='#3b2d24';let s=`<svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="${u}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7b6458"/><stop offset=".55" stop-color="${a}"/><stop offset="1" stop-color="#f6dcae"/></linearGradient><radialGradient id="${u}s"><stop offset="0" stop-color="#fff6dc"/><stop offset=".35" stop-color="#ffe0a0"/><stop offset="1" stop-color="#ffe0a0" stop-opacity="0"/></radialGradient></defs><rect width="400" height="400" fill="url(#${u})"/><circle cx="${sx}" cy="${sy}" r="120" class="gl" fill="url(#${u}s)"/><circle cx="${sx}" cy="${sy}" r="26" fill="#fff6dc"/><g class="cd" fill="#fff" opacity=".4"><ellipse cx="90" cy="${70+i*5}" rx="70" ry="9"/><ellipse cx="130" cy="${62+i*5}" rx="38" ry="8"/><ellipse cx="320" cy="150" rx="55" ry="7"/></g>`;
if(k=='m')s+=`<path d="M0 270L70 160 110 210 170 110 240 215 290 150 400 270V400H0z" fill="${b}" opacity=".6"/><path d="M170 110l-26 40 16-8 14 14 12-12 16 10zM70 160l-18 28 12-6 10 8 10-8z" fill="#fff6e6" opacity=".9"/><path d="M0 330L90 240 150 300 230 220 320 310 400 260V400H0z" fill="${dk}" opacity=".8"/><path d="M0 380q100-30 200-5t200-15V400H0z" fill="#241a14"/>`;
if(k=='s')s+=`<rect y="230" width="400" height="170" fill="${b}"/><rect y="230" width="400" height="170" fill="#2b2119" opacity=".35"/><g class="rf" stroke="#ffe9bd" stroke-width="3" stroke-linecap="round" opacity=".7"><path d="M${sx-40} 250h80M${sx-28} 266h56M${sx-50} 284h100M${sx-20} 304h40"/></g><path d="M0 232h400" stroke="#fff3d0" opacity=".5"/><path d="M60 350l60-6-8 14H70z" fill="${dk}"/><path d="M92 344V300l26 40z" fill="#f5e6c8"/><path d="M0 400V372q60-30 120-8 60 20 100 36z" fill="#241a14"/><path d="M40 372q-4-60 6-96M46 278q-26-4-36 14M46 278q22-10 38 4M46 278q-8-20-30-22" stroke="#241a14" stroke-width="5" fill="none"/>`;
if(k=='f')s+=`<path d="M0 260q100-50 200-10t200-20V400H0z" fill="${b}" opacity=".55"/>`+[20,90,160,240,310,370].map((x,j)=>{const y=230+j%3*20;return`<path d="M${x} 400V${y}" stroke="${dk}" stroke-width="7"/><path d="M${x} ${y}q-40-10-52 22M${x} ${y}q40-10 52 22M${x} ${y}q-20-34-44-30M${x} ${y}q20-34 44-30" stroke="${dk}" stroke-width="6" fill="none" stroke-linecap="round" class="fr"/>`}).join('')+`<path d="M0 372q100-24 200-4t200-12V400H0z" fill="#241a14"/>`;
if(k=='d')s+=`<path d="M0 300q120-40 240-10t160-10V400H0z" fill="${b}" opacity=".6"/><g fill="#f7ecd6"><rect x="40" y="280" width="90" height="120"/><rect x="150" y="250" width="110" height="150"/><rect x="280" y="290" width="90" height="110"/><path d="M150 250a55 55 0 01110 0z" fill="#d8c5a5"/><path d="M40 280a45 45 0 0190 0z"/></g><g fill="${dk}" opacity=".75"><path d="M190 400v-50a15 15 0 0130 0v50zM60 400v-40a10 10 0 0120 0v40zM300 400v-34a10 10 0 0120 0v34z"/></g><path d="M0 400V380h400v20z" fill="#241a14"/>`;
return s+`<g class="bi" fill="none" stroke="#3b2d24" stroke-width="2" style="animation-delay:-${i*3}s"><path d="M0 ${90+i*6}q6-7 12 0q6-7 12 0M30 ${74+i*6}q5-6 10 0q5-6 10 0"/></g></svg>`}
const PH={
 "beach": "Beach Vacation.jfif",
 "cliff": "cliffside villa.jfif",
 "cult": "Cultural experience.png",
 "forest": "Forest retreat.png",
 "bali": "images.jfif",
 "kashmir": "Kashmir.jfif",
 "kerala": "Kerala.jfif",
 "kyoto": "Kyoto.jfif",
 "lagoon": "lagoon resort.jfif",
 "lux": "Luxury stays.jfif",
 "mach": "Machiya Boutique hotel.jfif",
 "maldives": "Maldives.jfif",
 "manali": "Manali.jfif",
 "mtn": "Mountain Adventure.jfif",
 "pine": "pine cabin.jfif",
 "rcot": "Riverside cottage.jfif",
 "resc": "Riverside Escape.jfif",
 "santorini": "Santorini.jfif",
 "switz": "Switzerland.jfif"
},DK=['bali','maldives','switz','santorini','kyoto','kashmir','manali','kerala'],SK=['cliff','rcot','pine','lagoon','mach','forest'],EK=['mtn','resc','beach','forest','cult','lux'],TK=['kyoto','manali','mtn','kerala'];
const im=(k,t)=>`<div class="fi"><div class="ff"><img src="${PH[k]}" alt="" loading="lazy" draggable="false"></div><div class="fk"><p>${t}</p></div></div>`,ph=k=>`<span class="ph"><img src="${PH[k]}" alt="" loading="lazy" draggable="false"></span>`;
const D=[['Bali','Indonesia','Rice terraces, temple mornings and slow surf evenings.',1290,6,'f','Nature'],['Maldives','Maldives','Overwater villas above water the colour of glass.',2450,5,'s','Honeymoon'],['Switzerland','Switzerland','Alpine rail journeys and lakes that mirror the peaks.',2890,7,'m','Adventure'],['Santorini','Greece','Whitewashed cliffs and caldera sunsets.',1980,5,'d','Luxury'],['Kyoto','Japan','Moss gardens, tea houses and lantern-lit lanes.',2150,6,'d','Cultural'],['Kashmir','India','Houseboats on Dal Lake beneath snowy ridges.',690,5,'m','Nature'],['Manali','India','Pine valleys, river rafting and mountain passes.',540,4,'m','Adventure'],['Kerala','India','Backwater drifts, spice trails and Ayurvedic calm.',620,5,'s','Relaxation']];
const S=[['Cliffside Villa','Santorini, Greece',4.9,420,'Pool · Sea view · Breakfast','d'],['Riverside Cottage','Kerala, India',4.8,130,'Garden · Canoe · Kitchen','s'],['Pine Cabin','Manali, India',4.7,95,'Fireplace · Deck · Trails','m'],['Lagoon Resort','Maldives, Maldives',4.9,610,'Spa · Dive centre · Pool','s'],['Machiya Boutique Hotel','Kyoto, Japan',4.8,240,'Onsen · Tea room · Garden','d'],['Forest Retreat','Bali, Indonesia',4.7,160,'Yoga shala · Pool · Meals','f']];
const E=[['Mountain adventures','Kashmir · 5 days','Ridge treks and high meadow camps.','m'],['Riverside escapes','Kerala · 4 days','Slow boats and village mornings.','s'],['Beach vacations','Maldives · 6 days','Reefs, hammocks and warm lagoons.','s'],['Forest retreats','Bali · 5 days','Canopy walks and silent mornings.','f'],['Cultural experiences','Kyoto · 6 days','Tea, calligraphy and temple stays.','d'],['Luxury stays','Santorini · 4 days','Private terraces above the caldera.','d']];
const WY=[['Curated destinations','M12 2l3 7 7 1-5 5 1 7-6-4-6 4 1-7-5-5 7-1z'],['Personalized planning','M4 20l4-1L20 7l-3-3L5 16zM14 6l3 3'],['Easy booking','M5 12l5 5L20 7'],['Unique stays','M3 11l9-7 9 7v9H3zM9 20v-6h6v6'],['Transparent pricing','M12 3v18M7 8h7a3 3 0 010 6H8a3 3 0 000 6h9'],['Dedicated support','M4 14v-2a8 8 0 0116 0v2M4 14h3v5H4zM17 14h3v5h-3z']];
const ST=[['The quiet side of Kyoto','Destination guide · 6 min','d'],['Crossing Rohtang at dawn','Adventure story · 8 min','m'],['Five things to pack lighter','Travel tips · 3 min','f'],['A village the maps forgot','Hidden destinations · 5 min','s']];
const T=[['Aanya R.','Bali',5,'We slept to rain on the roof and woke to rice fields. Everything just worked.'],['Marcus T.','Switzerland',5,'The rail itinerary was perfectly paced. We never felt rushed once.'],['Meera K.','Kerala',4,'Our houseboat host cooked the best meal of the trip. Lovely stay, simple booking.']];
const star=n=>'★'.repeat(n)+'☆'.repeat(5-n),heart='<svg viewBox="0 0 24 24"><path d="M12 20s-8-5-8-11a4.5 4.5 0 018-2.7A4.5 4.5 0 0120 9c0 6-8 11-8 11z"/></svg>';
$('#dr').innerHTML=D.map((d,i)=>`<article class="card" data-i="${i}"><div class="im">${im(DK[i],d[2])}</div><button class="wl" aria-label="Save ${d[0]}" data-w="${d[0]}">${heart}</button><div class="b"><h3>${d[0]}</h3><div class="meta">${d[1]} · ${d[4]} days · ${d[6]}</div><p>${d[2]}</p><div class="row"><span class="pr">from $${d[3]}</span><button class="btn sm" onclick="openBk(${i})">Explore</button></div></div></article>`).join('');
$('#sd').innerHTML+=D.map((d,i)=>`<option value="${i}">${d[0]}, ${d[1]}</option>`).join('');
$('#sr').innerHTML=S.map((s,i)=>`<article class="card"><div class="im">${im(SK[i],'Amenities: '+s[4])}</div><div class="b"><h3>${s[0]}</h3><div class="meta">${s[1]} · ★ ${s[2]}</div><p>${s[4]}</p><div class="row"><span class="pr">$${s[3]}<small style="font:400 .8rem var(--sans)"> /night</small></span><span><button class="btn ghost sm" style="color:var(--esp)" onclick="toast('${s[0]}: demo details only')">Details</button> <button class="btn sm" onclick="openBk(null,${i})">Book Stay</button></span></div></div></article>`).join('');
$('#eg').innerHTML=E.map((e,i)=>`<article class="ex rv0">${ph(EK[i])}<div><h3>${e[0]}</h3><div class="meta" style="color:#eadfcb">${e[1]}</div><p>${e[2]}</p><button class="btn ghost sm" onclick="openBk()">Explore</button></div></article>`).join('');
$('#wg').innerHTML=WY.map(w=>`<div class="rv0"><svg viewBox="0 0 24 24"><path d="${w[1]}"/></svg><h3>${w[0]}</h3><p>Thoughtful details handled for you, from first idea to the day you return.</p></div>`).join('');
$('#sg').innerHTML=ST.map((s,i)=>`<a href="#" class="rv0" onclick="event.preventDefault();toast('Story preview only')">${ph(TK[i])}<div><small>${s[1]}</small><h3>${s[0]}</h3></div></a>`).join('');
$('#tq').innerHTML=T.map(t=>`<blockquote><div class="av">${t[0][0]}</div><p>“${t[3]}”</p><div class="stars">${star(t[2])}</div><small>${t[0]}, visited ${t[1]}</small></blockquote>`).join('');
$('#td').innerHTML=T.map(()=>'<i></i>').join('');
document.querySelectorAll('.wl').forEach(b=>b.onclick=()=>{b.classList.toggle('on');b.classList.contains('on')?W.add(b.dataset.w):W.delete(b.dataset.w)});
/* intro */
const intro=$('#intro');let it;const end=()=>{clearTimeout(it);intro.classList.add('out');setTimeout(()=>intro.remove(),1300)};
$('#skip').onclick=end;if(R)end();else it=setTimeout(end,5600);
/* nav */
const nav=$('#nav');addEventListener('scroll',()=>{nav.classList.toggle('s',scrollY>60);if(!R){const y=scrollY;document.querySelectorAll('.px').forEach(g=>{if(y<900)g.style.transform=`translateY(${y*g.dataset.d/200}px)`})}},{passive:true});
$('#burger').onclick=()=>$('#lk').classList.toggle('o');document.querySelectorAll('#lk a').forEach(a=>a.onclick=()=>$('#lk').classList.remove('o'));
addEventListener('mousemove',e=>{if(R)return;document.querySelectorAll('.px').forEach(g=>{g.style.translate=`${(e.clientX/innerWidth-.5)*-g.dataset.d}px 0`})});
/* scroll animations */
const pgb=document.createElement('div');pgb.id='pg';document.body.append(pgb);const hc=$('.hc'),pxs=document.querySelectorAll('.im,.ex,.st a,#nl'),ix=e=>[...e.parentNode.children].indexOf(e);
document.querySelectorAll('.wg path').forEach(p=>p.setAttribute('pathLength',1));
document.querySelectorAll('.card').forEach(c=>{c.classList.add('sr');c.style.setProperty('--x','60px');c.style.setProperty('--y','0px')});
document.querySelectorAll('.sb,.ctl,.nf,.fg4>div,.lead,#tq').forEach(e=>{e.classList.add('sr');e.style.setProperty('--d',ix(e)%4*.12+'s')});
document.querySelectorAll('.ex,.st a,.wg>div').forEach(e=>e.style.transitionDelay=ix(e)%3*.15+'s');
const io2=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io2.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.sr').forEach(e=>io2.observe(e));
let tk=0;const sc=()=>{tk=0;const y=scrollY,h=innerHeight;pgb.style.transform=`scaleX(${y/Math.max(1,document.documentElement.scrollHeight-h)})`;if(hc&&y<h){hc.style.opacity=Math.max(0,1-y/(h*.7));hc.style.translate=`0 ${y*.25}px`}
if(!R)pxs.forEach(e=>{const r=e.getBoundingClientRect();if(r.bottom>0&&r.top<h)e.style.setProperty('--py',Math.max(-12,Math.min(12,(r.top+r.height/2-h/2)/h*-24)).toFixed(1))})};
addEventListener('scroll',()=>{tk||(tk=requestAnimationFrame(sc))},{passive:true});sc();
/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});document.querySelectorAll('.rv0').forEach(e=>io.observe(e));
/* carousels */
function rail(r,pv,nx,dots){const step=()=>r.querySelector('.card:not(.h)')?.offsetWidth+22||340;pv.onclick=()=>r.scrollBy({left:-step(),behavior:'smooth'});nx.onclick=()=>r.scrollBy({left:step(),behavior:'smooth'});
let d=false,x0,s0;r.onpointerdown=e=>{if(e.target.closest('button'))return;d=true;x0=e.clientX;s0=r.scrollLeft};addEventListener('pointerup',()=>{d=false;r.classList.remove('dr')});
r.onpointermove=e=>{if(!d)return;if(Math.abs(e.clientX-x0)>4)r.classList.add('dr');r.scrollLeft=s0-(e.clientX-x0)};
if(dots){const n=r.querySelectorAll('.card').length;dots.innerHTML='<i></i>'.repeat(n);const u=()=>{const i=Math.round(r.scrollLeft/step());[...dots.children].forEach((c,j)=>c.classList.toggle('a',j===i))};r.addEventListener('scroll',u,{passive:true});u()}}
rail($('#dr'),$('#pv'),$('#nx'),$('#dd'));rail($('#sr'),$('#pv2'),$('#nx2'));
let ti=0;const tb=document.querySelectorAll('#tq blockquote'),tdd=$('#td').children;const tsh=n=>{ti=n;tb.forEach((b,j)=>b.classList.toggle('a',j===n));[...tdd].forEach((c,j)=>c.classList.toggle('a',j===n))};[...tdd].forEach((c,j)=>c.onclick=()=>tsh(j));tsh(0);setInterval(()=>{if(!R)tsh((ti+1)%tb.length)},5500);
/* search */
const iso=d=>d.toISOString().slice(0,10),today=iso(new Date());$('#si').min=$('#so').min=today;
$('#sbtn').onclick=()=>{const i=$('#si').value,o=$('#so').value,t=+$('#st').value,e=$('#se');[$('#si'),$('#so'),$('#st')].forEach(x=>x.classList.remove('bad'));let m='';
if(i&&i<today){m='Check-in can’t be in the past.';$('#si').classList.add('bad')}else if(i&&o&&o<=i){m='Check-out must be after check-in.';$('#so').classList.add('bad')}else if(!(t>=1&&t<=12)){m='Choose between 1 and 12 travelers.';$('#st').classList.add('bad')}
e.textContent=m;if(m)return;const dv=$('#sd').value,c=$('#sc').value;let n=0;
document.querySelectorAll('#dr .card').forEach((k,j)=>{const ok=(dv===''||+dv===j)&&(!c||D[j][6]===c);k.classList.toggle('h',!ok);if(ok)n++});
$('#dn').textContent=n?`${n} destination${n>1?'s':''} match your search.`:'No destinations match. Try a different category or choose Anywhere.';$('#dr').scrollLeft=0;
BK={d:dv===''?0:+dv,i,o,t,s:0};document.getElementById('destinations').scrollIntoView()};
document.querySelectorAll('.im').forEach(m=>m.onclick=()=>{if(!matchMedia('(hover:hover)').matches)m.classList.toggle('fl')});
/* motion toggle */
const mt=document.createElement('button'),rt=document.documentElement.classList,mtl=()=>{mt.textContent='Motion: '+(R?'off':'on');mt.setAttribute('aria-pressed',!R)};mt.id='mt';mt.className='btn sm';document.body.append(mt);mtl();
mt.onclick=()=>{R=!R;rt.toggle('mo',!R);rt.toggle('nm',R);mtl();sc()};
/* newsletter */
$('#nf').onsubmit=e=>{e.preventDefault();const v=$('#ne').value.trim();$('#nm').textContent=/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)?'Thanks, you’re on the list. (Demo – nothing was sent.)':'Enter a valid email address, like name@example.com.'};
/* booking flow */
let BK={d:0,i:'',o:'',t:2,s:0},step=0,F={n:'',e:'',p:''};const N=['Destination','Dates','Travelers','Stay','Review','Your details','Confirm'];
function nights(){return BK.i&&BK.o?Math.round((new Date(BK.o)-new Date(BK.i))/864e5):0}
function price(){const n=nights(),pk=D[BK.d][3]*BK.t,st=S[BK.s][3]*n,tx=Math.round((pk+st)*.12);return{n,pk,st,tx,tot:pk+st+tx}}
function openBk(d,s){BK={d:d??BK.d,i:BK.i,o:BK.o,t:BK.t,s:s??BK.s};step=0;$('#bk').classList.add('o');draw()}
function closeBk(){$('#bk').classList.remove('o')}
$('#bk').onclick=e=>{if(e.target.id==='bk')closeBk()};addEventListener('keydown',e=>{if(e.key==='Escape')closeBk()});
function draw(err=''){const p=price(),m=$('#md');let h=`<button class="x" onclick="closeBk()" aria-label="Close">×</button><h3>Plan your journey</h3><div class="demo">Demonstration booking. No real reservation or payment is made.</div><div class="prg">${N.map((_,i)=>`<i class="${i<=step?'d':''}"></i>`).join('')}</div><strong>Step ${step+1} of 7: ${N[step]}</strong><div style="margin-top:14px">`;
if(step==0)h+=D.map((d,i)=>`<label class="opt"><span><input type="radio" name="d" value="${i}" ${i==BK.d?'checked':''}> ${d[0]}, ${d[1]}</span><span>from $${d[3]}</span></label>`).join('');
if(step==1)h+=`<div class="fg"><label>Check-in<input type="date" id="b1" min="${today}" value="${BK.i}"></label><label>Check-out<input type="date" id="b2" min="${today}" value="${BK.o}"></label></div>`;
if(step==2)h+=`<label>Number of travelers (1–12)<input type="number" id="b3" min="1" max="12" value="${BK.t}"></label>`;
if(step==3)h+=S.map((s,i)=>`<label class="opt"><span><input type="radio" name="s" value="${i}" ${i==BK.s?'checked':''}> ${s[0]} · ${s[1]}</span><span>$${s[3]}/night</span></label>`).join('');
const tbl=`<table class="sum"><tr><td>Destination</td><td>${D[BK.d][0]}</td></tr><tr><td>Dates</td><td>${BK.i} to ${BK.o} (${p.n} nights)</td></tr><tr><td>Travelers</td><td>${BK.t}</td></tr><tr><td>Stay</td><td>${S[BK.s][0]}</td></tr><tr><td>Package ($${D[BK.d][3]} × ${BK.t})</td><td>$${p.pk}</td></tr><tr><td>Stay ($${S[BK.s][3]} × ${p.n})</td><td>$${p.st}</td></tr><tr><td>Taxes and fees (12%)</td><td>$${p.tx}</td></tr><tr><td><strong>Total</strong></td><td><strong>$${p.tot}</strong></td></tr></table>`;
if(step==4)h+=tbl;
if(step==5)h+=`<div class="fg"><label class="full">Full name<input id="f1" value="${F.n}"></label><label>Email<input id="f2" type="email" value="${F.e}"></label><label>Phone<input id="f3" type="tel" value="${F.p}"></label></div>`;
if(step==6)h+=tbl+`<p style="margin-top:12px;font-size:.88rem">Booking for ${F.n} (${F.e}). Confirming creates a demo reference only.</p>`;
h+=`</div><div class="err" role="alert">${err}</div><div class="nv"><button class="btn ghost" style="color:var(--esp)" ${step?'':'disabled style="opacity:.4"'} onclick="go(-1)">Back</button><button class="btn" id="nb" onclick="go(1)">${step==6?'Confirm demo booking':'Continue'}</button></div>`;m.innerHTML=h}
function go(dir){if(dir<0){step--;return draw()}let e='';
if(step==0)BK.d=+(document.querySelector('[name=d]:checked')?.value??BK.d);
if(step==1){BK.i=$('#b1').value;BK.o=$('#b2').value;if(!BK.i||!BK.o)e='Choose both check-in and check-out dates.';else if(BK.i<today)e='Check-in can’t be in the past.';else if(BK.o<=BK.i)e='Check-out must be after check-in.'}
if(step==2){BK.t=+$('#b3').value;if(!(BK.t>=1&&BK.t<=12))e='Enter between 1 and 12 travelers.'}
if(step==3)BK.s=+(document.querySelector('[name=s]:checked')?.value??BK.s);
if(step==5){F={n:$('#f1').value.trim(),e:$('#f2').value.trim(),p:$('#f3').value.trim()};if(F.n.length<2)e='Enter your full name.';else if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(F.e))e='Enter a valid email, like name@example.com.';else if(!/^[+\d][\d\s-]{7,}$/.test(F.p))e='Enter a phone number with at least 8 digits.'}
if(e)return draw(e);
if(step==6){const b=$('#nb');b.disabled=true;b.innerHTML='<span class="sp"></span> Confirming…';return setTimeout(()=>{if(Math.random()<.15){draw('The demo server timed out. Select Confirm to try again.');return}
$('#md').innerHTML=`<button class="x" onclick="closeBk()" aria-label="Close">×</button><div class="ok"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="42"/><path d="M30 52l14 14 27-30"/></svg><h3>You’re all set, ${F.n.split(' ')[0]}.</h3><p>Demo reference <strong>AER-${Math.random().toString(36).slice(2,8).toUpperCase()}</strong></p><div class="demo" style="margin-top:16px;text-align:left">This is a demonstration. No reservation was made and no payment was taken.</div><button class="btn" onclick="closeBk()">Done</button></div>`},1400)}
step++;draw()}