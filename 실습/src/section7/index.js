/** @format */
function whoAreYou(user) {
    if (user.profile.job === "student") {
        console.log("".concat(user.name, "\uB2D8 ").concat(user.profile.school, "\uAC00\uC154\uC57C\uC8E0"));
    }
    else {
        console.log("".concat(user.name, "\uB2D8 ").concat(user.profile.skill, "\uBC16\uC5D0 \uC0AC\uC6A9 \uBABB\uD558\uC2DC\uB098\uC694?"));
    }
}
whoAreYou({ name: "재환", profile: { job: "developer", skill: "JavaScript" } });
