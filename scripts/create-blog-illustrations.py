from pathlib import Path
import json,html
out=Path('public/blog-images');out.mkdir(exist_ok=True)
navy='#172938'; orange='#db742c';teal='#26766e';muted='#657987'
def rect(x,y,w,h,fill=navy,r=10,stroke='none'):
 return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" fill="{fill}" stroke="{stroke}" stroke-width="5"/>'
def line(x,y,a,b,color=navy,width=8):return f'<path d="M{x} {y} L{a} {b}" stroke="{color}" stroke-width="{width}" fill="none" stroke-linecap="round"/>'
def circle(x,y,r,fill=orange,stroke='none'):return f'<circle cx="{x}" cy="{y}" r="{r}" fill="{fill}" stroke="{stroke}" stroke-width="6"/>'
def text(x,y,s,size=24,color=navy):return f'<text x="{x}" y="{y}" font-family="Arial,sans-serif" font-size="{size}" font-weight="600" fill="{color}">{html.escape(s)}</text>'
def door(x=120,y=115,w=400,h=300,color='#c5d8d9'):
 s=rect(x-18,y-18,w+36,h+30,navy)+rect(x,y,w,h,color,1)
 for i in range(1,5):s+=line(x,y+h*i/5,x+w,y+h*i/5,'#8fa9af',3)
 for i in range(4):s+=rect(x+20+i*(w-40)/4,y+20,(w-70)/4,35,'#edf4ef',3)
 return s

def coil(x=260,y=240,n=22,gap=None):
 s=line(x-70,y,x+n*16+70,y,muted,12)
 for i in range(n):
  if gap is not None and gap<=i<gap+3:continue
  s+=f'<ellipse cx="{x+i*16}" cy="{y}" rx="10" ry="44" stroke="{navy}" stroke-width="6" fill="none"/>'
 return s

def clipboard(x=735,y=110):
 s=rect(x,y,230,290,'#fff',16,navy)+rect(x+65,y-15,100,35,teal)
 for i in range(4):s+=circle(x+40,y+65+i*53,10,teal)+line(x+70,y+65+i*53,x+185,y+65+i*53,'#c5d8d9',9)
 return s

def arrow(x,y,x2,y2):return line(x,y,x2,y2,orange,9)+line(x2,y2,x2-18,y2-16,orange,8)+line(x2,y2,x2-18,y2+16,orange,8)

def motor(x=770,y=120):return rect(x,y,230,120,navy,30)+rect(x+20,y+70,190,26,'#edc18f')+circle(x+185,y+30,7,teal)+line(x,y+40,x-190,y+40,muted,16)

def warn(x,y):return f'<path d="M{x} {y-55} L{x+58} {y+48} L{x-58} {y+48} Z" fill="{orange}" stroke="white" stroke-width="6"/>'+text(x-6,y+27,'!',55,'white')

scenes={}
def add(slug,title,subtitle,art,alt,bg='#f3f1e9'):
 svg=f'<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675"><rect width="1200" height="675" fill="{bg}"/><circle cx="1030" cy="120" r="240" fill="#e2e9e1"/><path d="M0 465 H1200" stroke="#d5ddd7" stroke-width="2"/>{art}<text x="72" y="535" font-family="Arial,sans-serif" font-size="17" font-weight="700" letter-spacing="4" fill="{teal}">SMART GARAGE DOORS / FIELD GUIDE</text>{text(72,590,title,38)}{text(72,628,subtitle,21,muted)}</svg>'
 (out/(slug+'.svg')).write_text(svg)
 scenes[slug]={'image':'/blog-images/'+slug+'.webp','imageAlt':alt,'kind':'illustration'}

add('cost-of-garage-door-spring-replacement','What goes into a spring quote?','Parts, labor and the work your door needs.',coil(170,225,22)+clipboard()+text(130,350,'SPRING ASSEMBLY',20,teal)+arrow(590,240,690,240),'Illustration of a garage door spring beside a written repair checklist')
add('signs-your-garage-door-spring-needs-replacement','Recognizing a damaged spring','A visible gap is a reason to stop and call.',coil(265,220,31,14)+warn(540,385)+circle(513,220,65,'none',orange),'Illustration highlighting a gap in a broken torsion spring')
add('how-to-fix-garage-door-opener','When the opener will not respond','Controls, power and the door system.',motor(740,160)+rect(180,115,180,250,navy,24)+circle(270,200,35,orange)+rect(225,272,90,12,'white')+arrow(405,240,630,240)+text(750,355,'OPENER',22,teal),'Illustration of a garage remote sending a signal toward an overhead opener')
add('how-to-fix-garage-door-wont-close','The door will not close','Check the opening before trying again.',door(330,105,500,290)+rect(265,350,45,42,orange)+rect(850,350,45,42,orange)+f'<path d="M310 370 H850" stroke="{orange}" stroke-width="5" stroke-dasharray="14 12"/>'+rect(530,320,85,76,navy)+warn(1020,255),'Illustration of a box obstructing a garage door safety sensor beam')
add('winter-garage-door-maintenance-tips','Getting ready for winter','Weather seals, moisture and moving parts.',door(145,120,500,280)+rect(125,396,550,20,'white',10)+text(790,200,'0°',90,teal)+line(765,265,1020,265,'#bfd2db',4)+''.join(line(x-20,y,x+20,y,'#8caeba',5)+line(x,y-20,x,y+20,'#8caeba',5) for x,y in [(760,340),(910,370),(1030,310)]),'Winter illustration with a garage door, snow and freezing-temperature symbol','#eaf1f3')
add('emergency-garage-door-repair-guide','A damaged door: what now?','Keep the opening clear. Call for assistance.',door(120,115,410,290)+warn(700,250)+rect(880,115,160,285,navy,25)+rect(898,147,124,203,'#e9eee6')+text(921,255,'CALL',28,teal)+circle(960,379,10,'white'),'Illustration of a garage door, warning symbol and phone call screen')
add('garage-door-repair-cost-guide-2025','Compare the scope, not just the total','A useful estimate explains every part of the job.',clipboard(175,105)+clipboard(470,105)+rect(805,140,190,230,navy,20)+rect(825,160,150,55,'#c5d8d9')+''.join(circle(845+i*50,250+j*45,10,'#edc18f') for i in range(3) for j in range(3)),'Illustration comparing two written estimates beside a calculator')
add('garage-door-safety-tips-homeowner','A clear opening is a safer opening','Keep people and objects away from a moving door.',door(350,110,430,300)+rect(250,396,630,16,orange)+circle(990,160,32,teal)+rect(964,205,52,95,teal)+line(980,285,950,375,teal,17)+line(1000,285,1030,375,teal,17)+line(975,220,916,258,teal,15)+warn(135,260),'Illustration showing a person standing outside the garage door opening')
add('garage-door-roller-replacement-cost','The small parts behind smooth travel','Rollers, tracks and the condition of the door.',f'<path d="M215 100 V360 Q215 400 255 400 H490" stroke="{muted}" stroke-width="38" fill="none"/>'+circle(230,230,60,'#e4e9e2',navy)+circle(230,230,21,teal)+line(285,230,620,230,navy,20)+circle(800,230,95,'#d7e5e0',navy)+circle(800,230,30,teal)+text(685,380,'ROLLER + BEARING',22,teal),'Technical illustration of a garage door roller, shaft and curved track')
add('chain-drive-vs-belt-drive-opener','Chain drive or belt drive?','Two ways to move the same door.',text(115,140,'CHAIN',24,teal)+''.join(rect(130+i*53,195,73,39,'none',19,navy) for i in range(8))+text(680,140,'BELT',24,teal)+rect(690,195,380,39,navy,8)+''.join(rect(704+i*26,227,15,14,orange,1) for i in range(14))+line(600,100,600,400,'#ccd6cf',3)+text(130,325,'Metal links',27)+text(690,325,'Reinforced belt',27),'Side-by-side illustration of linked chain and toothed belt opener drives')
add('commercial-garage-door-spring-cycle-ratings','One opening. One closing. One cycle.','Usage matters when planning commercial service.',door(420,130,340,260)+f'<path d="M325 315 A280 190 0 0 1 820 130 M860 220 A280 190 0 0 1 390 395" stroke="{teal}" stroke-width="16" fill="none"/>'+text(155,140,'OPEN',25,teal)+text(925,370,'CLOSE',25,teal)+arrow(804,115,835,142),'Illustration of a commercial door surrounded by an opening and closing cycle')
add('garage-door-opener-not-working-after-power-outage','After the power comes back','Power supply, controls and opener settings.',motor(680,160)+rect(155,145,185,200,'white',20,navy)+rect(205,190,16,55,navy,3)+rect(275,190,16,55,navy,3)+circle(248,292,13,navy)+f'<path d="M495 95 L425 235 H493 L443 355 L585 190 H515 L563 95Z" fill="{orange}"/>','Illustration of an electrical outlet, power symbol and garage door opener')
add('parking-garage-door-gate-repair-buildings','Keeping building access moving','Doors and gates need coordinated service.',rect(125,90,475,320,navy,6)+''.join(rect(160+i*100,120+j*70,65,40,'#c9dcdf',3) for i in range(4) for j in range(2))+door(240,290,245,120)+rect(695,155,55,255,teal)+line(720,210,1060,130,orange,24)+rect(830,315,190,62,'#c6d8d2',22)+circle(865,380,21,navy)+circle(982,380,21,navy),'Illustration of a parking building with a garage entrance, barrier gate and car')
add('pedestrian-door-vs-side-door-garage','Two ways to add walk-in access','A door within the garage door, or a separate entrance.',door(90,125,420,280)+rect(355,225,105,180,teal,3)+circle(440,320,5,'white')+door(650,125,300,280)+rect(980,185,110,220,teal,3)+circle(1068,300,5,'white')+text(95,85,'INTEGRATED',21,teal)+text(650,85,'SEPARATE',21,teal),'Comparison illustration of an integrated pedestrian garage door and separate side entrance')
add('puerta-de-garaje-no-cierra','¿La puerta no cierra?','Comprueba que la entrada esté despejada.',door(120,105,430,295)+rect(680,170,85,85,orange,16)+rect(980,170,85,85,orange,16)+f'<path d="M775 210 H970" stroke="{teal}" stroke-width="7" stroke-dasharray="13 9"/>'+circle(725,213,15,navy)+circle(1023,213,15,navy)+text(682,340,'SENSORES DE SEGURIDAD',21,teal),'Ilustración de una puerta de garaje y sus sensores de seguridad')
add('quiet-garage-door-openers-attached-garages','Less noise beside your living space','Compare the opener and the condition of the door.',door(130,150,350,240)+rect(550,115,500,295,'#dbe6db')+rect(630,275,325,105,teal,20)+rect(650,245,115,80,teal,10)+rect(780,245,150,80,teal,10)+line(548,105,548,410,navy,15)+f'<path d="M400 85 Q480 30 540 85 M440 110 Q480 78 515 110" stroke="{orange}" stroke-width="8" fill="none"/>','Illustration of an attached garage beside a living room, showing sound near the dividing wall')
add('roll-up-gate-repair-facilities-guide','A closer look at rolling gates','Curtain, guides and barrel work as a system.',rect(245,135,600,270,'#bacdcf',2)+''.join(line(250,y,840,y,'#6c8993',4) for y in range(155,405,18))+rect(215,130,28,285,navy,3)+rect(846,130,28,285,navy,3)+rect(200,70,690,65,navy,25)+circle(865,103,33,orange)+circle(865,103,17,'none','white')+text(925,105,'BARREL',19,teal)+line(930,120,890,125,teal,3),'Technical illustration of a rolling steel gate showing its curtain, guides and overhead barrel')
add('should-you-replace-garage-door-before-selling','Look at the home as a whole','Door condition, curb appeal and your plans.',door(130,155,400,250)+f'<path d="M100 140 L330 40 L560 140" fill="none" stroke="{navy}" stroke-width="20" stroke-linejoin="round"/>'+line(815,130,815,405,navy,14)+line(770,145,1090,145,navy,14)+rect(840,172,220,140,'white',6,teal)+text(869,227,'FOR',27,teal)+text(869,274,'SALE',38,teal)+circle(650,105,42,'#edbd82'),'Illustration of a house and garage beside a for-sale sign')
Path('scripts/blog-illustration-assignments.json').write_text(json.dumps(scenes,indent=2))
print('Created',len(scenes),'distinct SVG illustrations')
