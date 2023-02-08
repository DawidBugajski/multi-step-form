const NAME_REGEX =
  /^(?=.{1,30}$)[a-zA-Z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+(?:[\s][a-zA-Z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)*$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+\d{2}(?:\s?\d{3}){2}\s?\d{3}$/; //+12 123 456 789 || +12123456789

export { NAME_REGEX, EMAIL_REGEX, PHONE_REGEX };
