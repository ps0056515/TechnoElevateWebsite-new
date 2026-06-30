async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log('Fetching Guerrilla Mail email address...');
  const initRes = await fetch('http://api.guerrillamail.com/ajax.php?f=get_email_address');
  const initData = await initRes.json();
  const email = initData.email_addr;
  const sid = initData.sid_token;
  console.log(`Email: ${email}, SID: ${sid}`);

  console.log('Registering bucket on KVdb.io...');
  const registerRes = await fetch('https://kvdb.io', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `email=${encodeURIComponent(email)}`
  });
  const bucketId = (await registerRes.text()).trim();
  console.log(`Bucket ID: ${bucketId}`);

  if (!bucketId || bucketId.includes('error')) {
    console.error('Failed to register bucket.');
    return;
  }

  // Poll for verification email
  console.log('Waiting for verification email (polling every 5s)...');
  let tokenLink = null;
  for (let i = 0; i < 15; i++) {
    await delay(5000);
    const messagesRes = await fetch(`http://api.guerrillamail.com/ajax.php?f=check_email&seq=0&sid_token=${sid}`);
    const messagesData = await messagesRes.json();
    const list = messagesData.list || [];
    console.log(`Polled: found ${list.length} emails.`);
    
    // Check if there is an email from KVdb
    const kvdbEmail = list.find(m => m.mail_from.toLowerCase().includes('kvdb'));
    if (kvdbEmail) {
      console.log('Found KVdb email! Fetching full content...');
      const detailRes = await fetch(`http://api.guerrillamail.com/ajax.php?f=fetch_email&email_id=${kvdbEmail.mail_id}&sid_token=${sid}`);
      const detailData = await detailRes.json();
      const body = detailData.mail_body || '';

      const match = body.match(/https:\/\/kvdb\.io\/login\?token=[^\s'"]+/);
      if (match) {
        tokenLink = match[0];
        console.log(`Found activation link: ${tokenLink}`);
        break;
      }
    }
  }

  if (!tokenLink) {
    console.error('Verification email did not arrive in time.');
    return;
  }

  console.log('Activating bucket...');
  const activateRes = await fetch(tokenLink);
  console.log('Activation response status:', activateRes.status);

  console.log('Verification completed! Testing write...');
  const testWrite = await fetch(`https://kvdb.io/${bucketId}/test_key`, {
    method: 'POST',
    body: 'verification_successful'
  });
  const writeRes = await testWrite.text();
  console.log('Write test response:', writeRes);

  console.log('Testing read...');
  const testRead = await fetch(`https://kvdb.io/${bucketId}/test_key`);
  const readVal = await testRead.text();
  console.log('Read test response:', readVal);

  if (readVal === 'verification_successful') {
    console.log('Success! Fully verified KVdb Bucket ID:', bucketId);
  } else {
    console.error('Bucket is not writable.');
  }
}

run().catch(console.error);
