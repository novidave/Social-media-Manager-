export const NETWORKS = ['Instagram','Facebook','TikTok','LinkedIn','X','YouTube','Threads','Pinterest','Google Business Profile','Bluesky','Mastodon','Substack'];
export const STATUSES = ['draft','scheduled','approval','sent'];
export function escapeHTML(value) { return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
export function safeURL(value) { try { const u=new URL(value); return ['https:','http:'].includes(u.protocol)?u.href:''; } catch{return '';} }
export function uid(){return globalThis.crypto.randomUUID();}
export function localDate(value=new Date()){const d=new Date(value);return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');}
export function validatePost(post, now=Date.now()) {
 if(!post.text?.trim())throw new Error('Write some content for your post.');
 if(post.text.length>10000)throw new Error('Keep your post under 10,000 characters.');
 if(!STATUSES.includes(post.status))throw new Error('Choose a valid post status.');
 if(!Array.isArray(post.channels)||!post.channels.length)throw new Error('Choose at least one channel.');
 if(post.status==='scheduled'&&(!Number.isFinite(Date.parse(post.date))||Date.parse(post.date)<=now))throw new Error('Choose a future date and time.');
 return {...post,text:post.text.trim()};
}
export function validateState(s){
 if(!s||s.version!==1||!Array.isArray(s.posts)||!Array.isArray(s.ideas)||!Array.isArray(s.channels)||!Array.isArray(s.comments)||!Array.isArray(s.members)||!Array.isArray(s.tags)||!s.page||!s.settings)throw new Error('This is not a supported Social Studio backup.');
 if(s.posts.length>10000||s.ideas.length>10000)throw new Error('Backup is too large.');
 const str=(v,n=10000)=>typeof v==='string'&&v.length<=n;
 const ids=new Set();
 for(const c of s.channels){if(!str(c.id,100)||ids.has(c.id)||!NETWORKS.includes(c.network)||!str(c.name,100))throw new Error('Invalid channel in backup.');ids.add(c.id);}
 for(const p of s.posts){if(!str(p.id,100)||!str(p.text)||!STATUSES.includes(p.status)||!Array.isArray(p.channels)||!p.channels.length||!p.channels.every(c=>ids.has(c))||!Array.isArray(p.tags)||!p.tags.every(t=>str(t,100))||!str(p.date,100)||!Number.isFinite(Date.parse(p.date))||!['','sage','peach','blue'].includes(p.art??'')||!str(p.media??'',3000000)||p.media&&!/^data:image\/(png|jpeg|webp|gif);base64,[A-Za-z0-9+/=]+$/.test(p.media))throw new Error('Invalid post in backup.');}
 for(const i of s.ideas)if(!str(i.id,100)||!str(i.text)||!['Unassigned','To do','In progress','Done'].includes(i.column)||!str(i.tag,100))throw new Error('Invalid idea in backup.');
 for(const c of s.comments)if(!str(c.id,100)||!str(c.name,100)||!str(c.text)||typeof c.done!=='boolean'||!str(c.reply??'')||!str(c.network,100))throw new Error('Invalid comment in backup.');
 for(const m of s.members)if(!str(m.id,100)||!str(m.email,200)||!['Owner','Admin','Editor','Contributor'].includes(m.role))throw new Error('Invalid member in backup.');
 if(!s.tags.every(t=>str(t,100))||!str(s.page.title,200)||!str(s.page.bio,500)||!/^#[0-9a-f]{6}$/i.test(s.page.color)||!Array.isArray(s.page.links)||!s.page.links.every(l=>str(l.title,200)&&str(l.url,2000)&&safeURL(l.url))||!str(s.settings.name,100)||!str(s.settings.time,10)||!/^([01]\d|2[0-3]):[0-5]\d$/.test(s.settings.time))throw new Error('Invalid settings in backup.');
 return s;
}
export function seed(){
 const future=(days,hour=10)=>{const d=new Date();d.setDate(d.getDate()+days);d.setHours(hour,0,0,0);return d.toISOString();};
 return {version:1,channels:[{id:'ig',network:'Instagram',name:'studio.social'},{id:'li',network:'LinkedIn',name:'Social Studio'},{id:'th',network:'Threads',name:'studio.social'}],
 posts:[
 {id:'p1',text:'A little behind the scenes of what we have been creating lately. Good things take a little time. 🌿',channels:['ig'],status:'scheduled',date:future(1),tags:['Behind the scenes'],art:'sage'},
 {id:'p2',text:'Your next big idea starts with a small step. What are you working on this week?',channels:['li','th'],status:'scheduled',date:future(2,14),tags:['Community'],art:''},
 {id:'p3',text:'Less scrolling. More creating. A gentle reminder to make space for the things you love.',channels:['ig'],status:'draft',date:future(3),tags:['Inspiration'],art:'peach'},
 {id:'p4',text:'A first look at our new collection. Thoughtfully made, ready for everyday moments.',channels:['ig','th'],status:'approval',date:future(4),tags:['Launch'],art:'blue'}],
 ideas:[{id:'i1',text:'Share the story behind our newest collection',column:'Unassigned',tag:'Behind the scenes'},{id:'i2',text:'Five things we learned from building a creative business',column:'To do',tag:'Inspiration'},{id:'i3',text:'Ask our community: what would you love to see next?',column:'To do',tag:'Community'},{id:'i4',text:'A day in the studio, from first coffee to final touches',column:'In progress',tag:'Behind the scenes'},{id:'i5',text:'Introduce the people who make it happen',column:'Done',tag:'Community'}],
 comments:[{id:'c1',name:'Alex Morgan',network:'Instagram',text:'Love this! Will there be more colors available?',done:false,reply:''},{id:'c2',name:'Sam Rivera',network:'Threads',text:'Exactly the inspiration I needed today ✨',done:false,reply:''},{id:'c3',name:'Jordan Lee',network:'LinkedIn',text:'Such a thoughtful approach. Thanks for sharing!',done:true,reply:'Thank you, Jordan!'}],
 tags:['Behind the scenes','Community','Inspiration','Launch'],members:[{id:'m1',email:'you@example.com',role:'Owner'}],
 page:{title:'Social Studio',bio:'A little space for everything we create. Made with intention, shared with you.',color:'#e9efdf',links:[{title:'Explore our collection',url:'https://example.com'},{title:'Read our story',url:'https://example.com/about'}]},
 settings:{name:'My workspace',time:'10:00'}};
}

