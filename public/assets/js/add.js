"use strict";
var KTModalCustomersAdd = function () {
    var t, e, o, n, r, i;
    return {
        init: function () {
            i = new bootstrap.Modal(document.querySelector("#kt_modal_add_customer")),
                r = document.querySelector("#kt_modal_add_customer_form"),
                t = r.querySelector("#kt_modal_add_customer_submit"),
                e = r.querySelector("#kt_modal_add_customer_cancel"),
                o = r.querySelector("#kt_modal_add_customer_close"),
                n = FormValidation.formValidation(r, {
                fields: {
                    name: {validators: {notEmpty: {message: "إسم الكتاب مطلوب"}}},
                    email: {validators: {notEmpty: {message: "Customer email is required"}}},
                    "first-name": {validators: {notEmpty: {message: "First name is required"}}},
                    "last-name": {validators: {notEmpty: {message: "Last name is required"}}},
                    country: {validators: {notEmpty: {message: "Country is required"}}},
                    address1: {validators: {notEmpty: {message: "Address 1 is required"}}},
                    city: {validators: {notEmpty: {message: "City is required"}}},
                    state: {validators: {notEmpty: {message: "State is required"}}},
                    postcode: {validators: {notEmpty: {message: "Postcode is required"}}}
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger,
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: ".fv-row",
                        eleInvalidClass: "",
                        eleValidClass: ""
                    })
                }
            }), $(r.querySelector('[name="country"]')).on("change", (function () {
                n.revalidateField("country")
            })), t.addEventListener("click", (function (e) {
                e.preventDefault(),
                n && n.validate().then((function (e) {
                    console.log("validated!"), "Valid" == e ?
                        (t.setAttribute("data-kt-indicator", "on"), t.disabled = !0,
                            setTimeout((function () {
                        t.removeAttribute("data-kt-indicator"), Swal.fire({
                            text: "تمت العملية بنجاح",
                            icon: "success",
                            buttonsStyling: !1,
                            confirmButtonText: "أوكي , إذهب",
                            customClass: {confirmButton: "btn btn-primary"}
                        }).then((function (e) {
                            e.isConfirmed && (i.hide(), t.disabled = !1, window.location = r.getAttribute("data-kt-redirect"))
                        }))
                    }), 2e3)) : Swal.fire({
                        text: "Sorry, looks like there are some errors detected, please try again.",
                        icon: "error",
                        buttonsStyling: !1,
                        confirmButtonText: "Ok, got it!",
                        customClass: {confirmButton: "btn btn-primary"}
                    })
                }))
            })), e.addEventListener("click", (function (t) {
                t.preventDefault(), Swal.fire({
                    text: "هل أنت متأكد أنك تريد الإلغاء ؟ ",
                    icon: "warning",
                    showCancelButton: !0,
                    buttonsStyling: !1,
                    confirmButtonText: "نعم, إلغاء!",
                    cancelButtonText: "بقاء",
                    customClass: {confirmButton: "btn btn-primary", cancelButton: "btn btn-active-light"}
                }).then((function (t) {
                    t.value ? (r.reset(), i.hide()) : "cancel" === t.dismiss && Swal.fire({
                        text: "لم يتم الإلغاء !",
                        icon: "error",
                        buttonsStyling: !1,
                        confirmButtonText: "أوكي , إذهب",
                        customClass: {confirmButton: "btn btn-primary"}
                    })
                }))
            })), o.addEventListener("click", (function (t) {
                t.preventDefault(), Swal.fire({
                    text: "هل أنت متأكد أنك تريد الإلغاء ؟ ",
                    icon: "warning",
                    showCancelButton: !0,
                    buttonsStyling: !1,
                    confirmButtonText: "نعم, إلغاء!",
                    cancelButtonText: "بقاء",
                    customClass: {confirmButton: "btn btn-primary", cancelButton: "btn btn-active-light"}
                })
                    .then((function (t) {
                    t.value ?
                        (r.reset(), i.hide())
                    :
                        "cancel" ===
                        t.dismiss && Swal.fire({
                        text: "لم يتم الإلغاء !",
                        icon: "error",
                        buttonsStyling: !1,
                        confirmButtonText: "أوكي , إذهب",
                        customClass: {confirmButton: "btn btn-primary"}
                    })
                }))
            }))
        }
    }
}();
KTUtil.onDOMContentLoaded((function () {
    KTModalCustomersAdd.init()
}));
