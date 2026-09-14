/** An HTTP success alone does not guarantee FormSubmit accepted the message. */
export async function sendContact(form, email, fetcher = fetch) {
  const response = await fetcher(`https://formsubmit.co/ajax/${email}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ ...form, _captcha: 'false', _template: 'table' }),
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error('Message could not be sent');
  const result = await response.json();
  if (result.success !== true && result.success !== 'true') throw new Error('Message was not accepted');
}
