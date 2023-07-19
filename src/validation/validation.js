import ResponseError from "../error/response-error.js";

const validate = (schema, reques) => {
  const result = schema.validate(reques);

  if (result.error) {
    throw new ResponseError(400, result.error.message);
  } else {
    return result.value;
  }
};

export default validate;
