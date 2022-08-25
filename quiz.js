function q1() {
    document.getElementsByClassName("quiz-1")[0].setAttribute("hidden", "true");
    document.getElementsByClassName("quiz-2")[0].removeAttribute("hidden");
}

function q2() {
    document.getElementsByClassName("quiz-2")[0].setAttribute("hidden", "true");
    document.getElementsByClassName("quiz-3")[0].removeAttribute("hidden");
}

function q3() {
    document.getElementsByClassName("quiz-3")[0].setAttribute("hidden", "true");
    document.getElementsByClassName("quiz-4")[0].removeAttribute("hidden");
}

function q4() {
    document.getElementsByClassName("quiz-4")[0].setAttribute("hidden", "true");
    document.getElementsByClassName("quiz-5")[0].removeAttribute("hidden");
}

function q5() {
    document.getElementsByClassName("quiz-5")[0].setAttribute("hidden", "true");
    document.getElementsByClassName("quiz-6")[0].removeAttribute("hidden");
}

function q6() {
    document.getElementsByClassName("quiz-6")[0].setAttribute("hidden", "true");
    document.getElementsByClassName("quiz-7")[0].removeAttribute("hidden");
}

function q7() {
    window.location.replace("result.html")
}