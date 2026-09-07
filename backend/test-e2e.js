

async function test() {
  try {
    const u = await fetch('http://localhost:5000/api/posts/upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        authorName: 'AI',
        pollString: JSON.stringify({ question: 'yes?', options: ['y', 'n'] })
      })
    });
    
    const ud = await u.json();
    console.log("UPLOAD RESPONSE:", ud);

    const pid = ud.post.id;
    console.log("WAIT PID:", pid);
    
    const likeRes = await fetch(`http://localhost:5000/api/posts/${pid}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'a@a.com' })
    });
    console.log("LIKE RESPONSE:", await likeRes.json());
    
    const cmtRes = await fetch(`http://localhost:5000/api/posts/${pid}/comment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: 'cmt' })
    });
    console.log("COMMENT RESPONSE:", await cmtRes.json());
    
    const opid = ud.post.poll.options[0]._id;
    const voteRes = await fetch(`http://localhost:5000/api/posts/${pid}/vote`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'a@a.com', optionId: opid })
    });
    console.log("VOTE RESPONSE:", await voteRes.json());
    
    // final poll
    const fp = await fetch('http://localhost:5000/api/posts');
    const fpd = await fp.json();
    console.log("FINAL POST:", JSON.stringify(fpd[0]));
  } catch (e) {
    console.error(e);
  }
}
test();
