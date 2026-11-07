import test from 'node:test';import assert from 'node:assert/strict';
import {seed,validatePost,validateState,safeURL,escapeHTML,localDate} from '../src/model.js';
test('scheduled content must have a future instant and a channel',()=>{
 const base={text:' A useful update ',channels:['ig'],status:'scheduled',date:'2030-01-01T10:00:00Z'};
 assert.equal(validatePost(base,Date.parse('2029-01-01')).text,'A useful update');
 assert.throws(()=>validatePost({...base,date:'2028-01-01'},Date.parse('2029-01-01')),/future/);
 assert.throws(()=>validatePost({...base,channels:[]}),/channel/);
 assert.throws(()=>validatePost({...base,text:' '}),/content/);
 assert.throws(()=>validatePost({...base,status:'published'}),/status/);
});
test('drafts may retain a past planning date',()=>assert.equal(validatePost({text:'Draft',channels:['ig'],status:'draft',date:'2020-01-01'}).status,'draft'));
test('workspace survives JSON backup round trip',()=>{
 const state=seed();const restored=validateState(JSON.parse(JSON.stringify(state)));
 assert.deepEqual(restored,state);assert.equal(restored.posts.length,4);
});
test('imports reject malformed state and unknown channel references',()=>{
 assert.throws(()=>validateState({version:99}),/supported/);
 const state=seed();state.posts[0].channels=['missing'];assert.throws(()=>validateState(state),/post/);
 const dup=seed();dup.channels.push({...dup.channels[0]});assert.throws(()=>validateState(dup),/channel/);
});
test('imports reject executable media, injected art, colors and invalid time',()=>{
 for(const mutate of [
 s=>s.posts[0].media='data:image/svg+xml,<svg onload=alert(1)>',
 s=>s.posts[0].art='"><img src=x onerror=alert(1)>',
 s=>s.page.color='red;position:fixed',
 s=>s.settings.time='99:99',
 s=>s.page.links[0].url='javascript:alert(1)',
 ]){const state=seed();mutate(state);assert.throws(()=>validateState(state));}
});
test('user content is escaped and navigation URLs are protocol checked',()=>{
 assert.equal(escapeHTML('<img src=x onerror="x">'), '&lt;img src=x onerror=&quot;x&quot;&gt;');
 assert.equal(safeURL('javascript:alert(1)'),'');assert.equal(safeURL('data:text/html,hello'),'');
 assert.equal(safeURL('https://example.com/path'),'https://example.com/path');
});
test('calendar keys follow local calendar components',()=>{
 const date=new Date(2026,10,7,23,55);assert.equal(localDate(date),'2026-11-07');
});

