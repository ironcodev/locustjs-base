import { isNumber, typename } from "./src";

function test_typename_and_special_numbers() {
  function t(key) {
    const x = Number[key];
    console.log(key, x);
    console.log("typename: ", typename(x));
    console.log("typeof:", typeof x);
    console.log("isNumber: ", isNumber(x));
    console.log("isNaN: ", isNaN(x));
    console.log("\n");
  }

  t("MAX_SAFE_INTEGER");
  t("EPSILON");
  t("MAX_VALUE");
  t("MIN_SAFE_INTEGER");
  t("MIN_VALUE");
  t("NEGATIVE_INFINITY");
  t("NaN");
  t("POSITIVE_INFINITY");
}

function test_typename() {
  [
    null,
    undefined,
    NaN,
    23,
    new Number(23),
    Number(23),
    true,
    new Boolean(false),
    Boolean(false),
    "test",
    String("123"),
    new String("123"),
    new Date(),
    [],
    new Array(2),
    {},
    // Symbol('123'),
    function () {},
    () => {},
    new Function("a", "return a * 2"),
    function* () {
      yield 1;
      yield 2;
    },
    (function* () {
      yield 1;
      yield 2;
    })(),
  ].forEach((x) => {
    const type1 = typeof x;
    const type2 = typename(x);

    console.log({ value: x, typeof: type1, typename: type2 });
  });
}

test_typename_and_special_numbers();
test_typename();