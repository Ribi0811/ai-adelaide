from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from pypdf import PdfReader

ROOT=Path(__file__).resolve().parents[3]
OUT=ROOT/'output/pdf/MDEX-Website-Discovery.pdf'
FONT=Path('/Users/ivanribicic/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/pdfjs-dist/standard_fonts')
for name,file in [('Body','LiberationSans-Regular.ttf'),('Bold','LiberationSans-Bold.ttf')]:pdfmetrics.registerFont(TTFont(name,str(FONT/file)))
W,H=A4; M=44; CW=W-M*2
INK=HexColor('#122C38'); TEAL=HexColor('#007F79'); MUTED=HexColor('#51636B'); LIGHT=HexColor('#F3F7F7'); LINE=HexColor('#CAD9DC')
c=canvas.Canvas(str(OUT),pagesize=A4,pageCompression=1)
c.setTitle('My Dezign Exteriors | Website discovery');c.setAuthor('AI Adelaide');c.setSubject('Free website redesign discovery and separately agreed ongoing services')
fields=[]

def text(s,x,y,size=10,font='Body',color=INK):
 c.setFillColor(color);c.setFont(font,size);c.drawString(x,y,s)
def para(s,x,y,w=CW,size=10,leading=14,color=INK,font='Body'):
 p=Paragraph(s,ParagraphStyle('p',fontName=font,fontSize=size,leading=leading,textColor=color));_,h=p.wrap(w,800);p.drawOn(c,x,y-h);return y-h

def header(n,label):
 text('AI ADELAIDE',M,H-40,13,'Bold')
 c.setStrokeColor(TEAL);c.setLineWidth(2);c.line(M,H-51,M+26,H-51)
 c.setFillColor(MUTED);c.setFont('Body',8);c.drawRightString(W-M,H-40,'MY DEZIGN EXTERIORS  /  WEBSITE DISCOVERY')
 text(label,M,H-83,9,'Bold',TEAL)

def footer(n):
 c.setStrokeColor(LINE);c.setLineWidth(.5);c.line(M,48,W-M,48)
 text('aiadelaide.com.au',M,31,8,'Body',MUTED)
 c.linkURL('https://aiadelaide.com.au/',(M,28,M+90,41),relative=0)
 c.setFont('Body',8);c.setFillColor(MUTED);c.drawRightString(W-M,31,f'MDEX  /  SEPTEMBER 2026  /  {n:02d}')

def field(name,y,h):
 fields.append(name)
 c.acroForm.textfield(name=name,tooltip=name.replace('_',' ').capitalize(),x=M+28,y=y-h,width=CW-28,height=h,fontName='Helvetica',fontSize=10,textColor=INK,borderColor=LINE,fillColor=LIGHT,borderWidth=.6,borderStyle='solid',forceBorder=True,fieldFlags='multiline',maxlen=450,value='')
 return y-h

def question(num,title,hint,y,name,h=45):
 c.setFillColor(TEAL);c.circle(M+8,y-7,8,fill=1,stroke=0)
 c.setFillColor(white);c.setFont('Bold',8);c.drawCentredString(M+8,y-10,str(num))
 y=para(title,M+28,y+1,CW-28,11.3,14,font='Bold')
 y=para(hint,M+28,y-4,CW-28,9,12,color=MUTED)
 return field(name,y-8,h)-18

header(1,'01  /  YOUR BUSINESS')
# Bespoke architectural linework within a restrained dark hero.
c.setFillColor(INK);c.roundRect(M,H-255,CW,153,8,fill=1,stroke=0)
c.setStrokeColor(HexColor('#2F5D66'));c.setLineWidth(.8)
for k in range(6):
 x=W-M-140+k*17
 c.line(x,H-231,x,H-148-k*4)
 c.line(x,H-148-k*4,W-M-15,H-119-k*4)
c.setStrokeColor(HexColor('#54B8AF'));c.setLineWidth(2);c.line(W-M-145,H-233,W-M-15,H-233)
text('MY DEZIGN EXTERIORS',M+21,H-130,9,'Bold',HexColor('#9EDFD6'))
text('Before we redesign',M+21,H-166,25,'Bold',white)
text('your website',M+21,H-196,25,'Bold',white)
text('A few questions to help us get it right.',M+21,H-229,10,'Body',white)
y=H-274
# Free scope presented clearly, without implying free continuing services.
y=para('Your redesign is free',M,y,size=14,leading=17,font='Bold')
y=para('As discussed, we will redesign your website at no charge. Hosting, domain and email charges, ongoing SEO, maintenance and any additional automation are separate. We will agree the redesign scope and any paid services with you before starting.',M,y-6,size=10,leading=14)
y=para('Short answers are fine. Type into the shaded fields and save a copy, print it, or simply use these questions for a conversation with us.',M,y-10,size=9,leading=12,color=MUTED)
y=question(1,'Which work would you like more enquiries for?','For example: verandahs, carports, outdoor rooms, decks or screens. Any work you prefer not to take on?',y-22,'preferred_work',42)
y=question(2,'Where do you work?','Your main suburbs or service area, and how far you are happy to travel.',y,'service_area',38)
y=question(3,'What makes a project a good fit for you?','Typical customer, project size or budget, and anything customers particularly value about your work.',y,'ideal_project',38)
assert y>55,y
footer(1);c.showPage()

header(2,'02  /  HOW THE WORK COMES IN')
text('From first enquiry',M,H-121,25,'Bold')
text('to finished project',M,H-151,25,'Bold')
y=para('Understanding your process helps us make the website useful day to day. We want enquiries to reach the right person with enough detail to take the next step.',M,H-170,size=10,leading=14)
y=question(4,'How do customers find you and make contact?','Phone, website, Google, Facebook, Instagram or referrals? Who responds, and how do you keep track of new enquiries?',y-25,'enquiry_sources_and_handling',55)
y=question(5,'What happens between an enquiry and a quote?','Site visit, measurements, plans or photos? Tell us what you need from the customer and any software, calendar or spreadsheet you use.',y,'quoting_process_and_tools',55)
y=question(6,'How do you post your recent work?','Who posts to Facebook or Instagram, and how often? Would you like posts to appear on the site automatically, or approve selected updates first?',y,'social_posting_workflow',55)
y=question(7,'What project photos and details do you have?','Original photos, videos or before-and-after shots of 3 to 5 jobs would help. Can we feature them, and are any customer permissions needed?',y,'project_photos_and_permissions',55)
y=para('Your website already has a Facebook feed. We will check how it is connected before recommending changes. Google Business Profile updates would need a separate connection and agreed scope.',M,y-2,size=9,leading=12,color=MUTED)
assert y>60,y
footer(2);c.showPage()

header(3,'03  /  YOUR WEBSITE AND NEXT STEPS')
text('Make it easy to manage',M,H-121,25,'Bold')
y=para('We will plan around your existing web address, useful links and email setup. Your answers will help us recommend the right platform and agree the ongoing costs.',M,H-140,size=10,leading=14)
y=question(8,'How would you prefer to update the website?','Keep WordPress and edit it yourself, have us look after changes, or a mix? Both WordPress and Next.js can look excellent; we can recommend the best fit.',y-24,'website_editing_preference',45)
y=question(9,'What is included in your current website arrangement?','Who handles hosting, domain, email and maintenance, and what do you pay? A renewal invoice would help. Do you prefer monthly or annual care billing?',y,'current_services_and_costs',51)
y=question(10,'What would you like the new site to feel like?','What do you like or dislike about the current site? Share any websites you like, plus branding, content or features we should keep.',y,'design_preferences',45)
y=question(11,'Who should we work with, and when would suit you?','Best contact person and contact details, any timing preferences, and anything else we should know.',y,'contact_and_timing',42)
y=para('What happens next',M,y-2,size=13,leading=16,font='Bold')
y=para('We will use your answers to confirm the free redesign scope, recommend a platform and outline any paid running costs. Once agreed, we can prepare the visual direction for you to review. Nothing goes live until you approve it.',M,y-6,size=9.5,leading=13)
y=para('Please save your answers before returning the PDF to us. If your PDF viewer does not support form fields, reply in a message or talk it through. Please do not include passwords.',M,y-8,size=8.5,leading=11,color=MUTED)
assert y>58,y
footer(3);c.save()
r=PdfReader(str(OUT));assert len(r.pages)==3
assert set(r.get_fields())==set(fields)
for page in r.pages:
 for ref in page.get('/Annots',[]):
  a=ref.get_object()
  if a.get('/Subtype')=='/Widget':
   assert a['/T'] in fields and '/AP' in a
print(f'{OUT}\n3 pages; {len(fields)} interactive fields verified')
