let account = [];
let userNames = JSON.parse(process.env.TY_USER_NAME || "[]");
let passwords = JSON.parse(process.env.TY_PASSWORD || "[]");
let account_size = Math.min(userNames.length, passwords.length);
for(let i=0; i < account_size;i++) {
  account.push({
    userName: userNames[i],
    password: passwords[i]
  });
}
module.exports = account;
