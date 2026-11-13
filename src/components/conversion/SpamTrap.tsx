/**
 * Invisible bot trap for every lead form.
 *
 * A field people never see (off-screen, skipped by Tab and screen readers, no
 * autofill) that form-filling bots fill anyway. submitForm() reads it: if it has
 * a value, the "submission" is answered with success and nothing is sent - no
 * email, no CRM lead, no text to the "customer". Real visitors are unaffected.
 */
export default function SpamTrap() {
  return (
    <div
      aria-hidden="true"
      style={{ position: 'absolute', left: '-10000px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }}
    >
      <label>
        Leave this field empty
        <input type="text" name="company_website" data-sgd-hp="1" tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  );
}
