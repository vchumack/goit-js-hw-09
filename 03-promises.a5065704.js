!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var u={id:e,exports:{}};return n[e]=u,o.call(u.exports,u,u.exports),u.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var u=o("h6c0i"),i={inputDelay:document.querySelector('input[name="delay"]'),inputStep:document.querySelector('input[name="step"]'),inputAmount:document.querySelector('input[name="amount"]'),form:document.querySelector(".form")};function r(e,n){var t,o;(t=e,o=n,new Promise((function(e,n){Math.random()>.3?e("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms")):n("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))).then((function(e){u.Notify.success(e)})).catch((function(e){u.Notify.failure(e)}))}i.form.addEventListener("submit",(function(e){e.preventDefault();var n=Number(i.inputDelay.value),t=Number(i.inputStep.value),o=Number(i.inputAmount.value);console.log("inputFirstDelayValue",n),console.log("inputStepValue",t),console.log("inputAmountValue",o);var u=n,l=1;setTimeout((function(){r(l,u),l+=1,u+=t;var e=setInterval((function(){r(l,u),u+=t,(l+=1)===o+1&&clearInterval(e)}),t)}),n)}))}();
//# sourceMappingURL=03-promises.a5065704.js.map
