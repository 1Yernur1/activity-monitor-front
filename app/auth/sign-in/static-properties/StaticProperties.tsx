const StaticProperties = {
  emailInputProperties: {
    id: "email",
    name: "email",
    label: "Email Address",
    type: "email",
    autoComplete: "email",
    margin: "normal" as "none" | "normal" | "dense" | undefined,
    required: true,
    fullWidth: true,
  },
  buttonSubmitProperties: {
    type: "submit" as "submit" | "button" | "reset" | undefined,
    variant: "contained" as "text" | "outlined" | "contained",
    className: "bg-black",
    fullWidth: true,
  },
};

export default StaticProperties;
