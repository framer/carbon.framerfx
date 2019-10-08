import { Data, Override } from "framer";

const data = Data({
  email: undefined,
  password: undefined
});

const isValidEmail = (str: string) => {
  return /\w+@\w+\.\w+/.test(str);
};

const isValidPassword = (str: string) => {
  return str && str.length > 8;
};

export function FormStack(): Override {
  return {
    size: "auto"
  };
}

export function EmailField(): Override<any> {
  return {
    onChange: email => {
      data.email = email;
    },
    invalid: data.email !== undefined && !isValidEmail(data.email)
  };
}

export function PasswordField(): Override<any> {
  return {
    onChange: password => {
      data.password = password;
    },
    invalid: data.password !== undefined && !isValidPassword(data.password)
  };
}

export function SubmitFormButton(): Override {
  return {
    disabled: !isValidPassword(data.password) || !isValidEmail(data.email)
  };
}
