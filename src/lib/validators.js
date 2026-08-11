
const EMAIL_REGEX =
  /^[a-zA-Z0-9](?:[a-zA-Z0-9_.%+-]*[a-zA-Z0-9])?@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)+$/;

const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com", "mailinator.net", "mailinator.org",
  "tempmail.com", "temp-mail.org", "temp-mail.io", "tempmailo.com",
  "tempmail.net", "tempmailaddress.com", "tempinbox.com", "tempr.email",
  "guerrillamail.com", "guerrillamail.info", "guerrillamail.biz",
  "guerrillamail.net", "guerrillamail.org", "guerrillamail.de",
  "sharklasers.com", "grr.la", "guerrillamailblock.com",
  "10minutemail.com", "10minutemail.net", "20minutemail.com",
  "yopmail.com", "yopmail.fr", "yopmail.net", "cool.fr.nf",
  "throwawaymail.com", "throwawayemail.com", "trashmail.com",
  "trashmail.net", "trash-mail.com", "fakeinbox.com", "fakemailgenerator.com",
  "getnada.com", "dispostable.com", "maildrop.cc", "mailnesia.com",
  "mintemail.com", "mytemp.email", "moakt.com", "emailondeck.com",
  "spamgourmet.com", "mohmal.com", "burnermail.io", "discard.email",
  "discardmail.com", "mailcatch.com", "getairmail.com", "inboxbear.com",
  "spambog.com", "mailnull.com", "instant-mail.de",
  "no-spam.ws", "mailtemp.info", "one-time.email", "tempail.com",
  "33mail.com", "anonbox.net", "deadaddress.com", "mailexpire.com",
  "mytrashmail.com", "spam4.me", "tempemail.co", "emailfake.com",
  "fakemail.net", "harakirimail.com", "jetable.org", "mail-temporaire.fr",
]);

const TYPO_DOMAINS = {
  "gmial.com": "gmail.com", "gmal.com": "gmail.com", "gmai.com": "gmail.com",
  "gmaill.com": "gmail.com", "gnail.com": "gmail.com", "gmail.con": "gmail.com",
  "gmail.cm": "gmail.com", "gmail.co": "gmail.com", "gamil.com": "gmail.com",
  "yaho.com": "yahoo.com", "yhoo.com": "yahoo.com", "yahooo.com": "yahoo.com",
  "yahoo.con": "yahoo.com", "yahoo.cm": "yahoo.com",
  "hotmial.com": "hotmail.com", "hotmal.com": "hotmail.com", "hotmai.com": "hotmail.com",
  "hotmail.con": "hotmail.com", "hotmail.cm": "hotmail.com",
  "outlok.com": "outlook.com", "outllook.com": "outlook.com", "outlook.con": "outlook.com",
  "rediffmai.com": "rediffmail.com", "rediffmail.con": "rediffmail.com",
  "iclod.com": "icloud.com", "icloud.con": "icloud.com",
};

export function validateEmail(value) {
  const email = (value || "").trim();

  if (!email) return "Email is required";
  if (!email.includes("@")) return "Email must contain an @ symbol";
  if (email.indexOf("@") !== email.lastIndexOf("@")) {
    return "Email must contain only one @ symbol";
  }

  const [local, domain] = email.split("@");

  if (!local || local.includes("..")) {
    return "Enter a valid email address (e.g. name@example.com)";
  }
  if (!domain || domain.includes("..")) {
    return "Enter a valid email address (e.g. name@example.com)";
  }
  if (!EMAIL_REGEX.test(email)) {
    return "Enter a valid email address (e.g. name@example.com)";
  }

  const domainLower = domain.toLowerCase();

  if (DISPOSABLE_DOMAINS.has(domainLower)) {
    return "Temporary/disposable email addresses aren't accepted — please use a real email";
  }

  const suggestion = TYPO_DOMAINS[domainLower];
  if (suggestion) {
    return `That domain looks like a typo — did you mean ${local}@${suggestion}?`;
  }

  return true;
}

export const PHONE_REGEX = /^[0-9]{10}$/;

export function sanitizeDigits(value, maxLength = 10) {
  return (value || "").replace(/\D/g, "").slice(0, maxLength);
}

export function validatePhone(value) {
  const phone = (value || "").trim();
  if (!phone) return "Phone number is required";
  if (!PHONE_REGEX.test(phone)) return "Enter a valid 10-digit phone number (numbers only)";
  return true;
}