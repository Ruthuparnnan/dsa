function findUniqueEmails(emails) {
  const uniqueEmails = new Set();

  for (let email of emails) {
    const filteredEmail = filterEmail(email);
    uniqueEmails.add(filteredEmail);
  }

  function filterEmail(email) {
    const splittedEmail = email.split("@");
    const filteredLocalName = splittedEmail[0].replace(/\./g, "").split("+");
    return filteredLocalName[0] + "@" + splittedEmail[1];
  }

  return uniqueEmails.size;
}

// test cases
console.log(
  findUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
);
