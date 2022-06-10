let results = document.getElementById("results");
let tableBody = document.getElementById("quiz");
let btn = document.getElementById("btn");

function displayResults() {

    results.classList.remove('d-none');

    let o1 = document.querySelector('input[name="o1"]:checked').value;
    let o2 = document.querySelector('input[name="o2"]:checked').value;
    let o3 = document.querySelector('input[name="o3"]:checked').value;
    let o4 = document.querySelector('input[name="o4"]:checked').value;
    let o5 = document.querySelector('input[name="o5"]:checked').value;

    let c1 = document.querySelector('input[name="c1"]:checked').value;
    let c2 = document.querySelector('input[name="c2"]:checked').value;
    let c3 = document.querySelector('input[name="c3"]:checked').value;
    let c4 = document.querySelector('input[name="c4"]:checked').value;
    let c5 = document.querySelector('input[name="c5"]:checked').value;

    let e1 = document.querySelector('input[name="e1"]:checked').value;
    let e2 = document.querySelector('input[name="e2"]:checked').value;
    let e3 = document.querySelector('input[name="e3"]:checked').value;
    let e4 = document.querySelector('input[name="e4"]:checked').value;
    let e5 = document.querySelector('input[name="e5"]:checked').value;

    let a1 = document.querySelector('input[name="a1"]:checked').value;
    let a2 = document.querySelector('input[name="a2"]:checked').value;
    let a3 = document.querySelector('input[name="a3"]:checked').value;
    let a4 = document.querySelector('input[name="a4"]:checked').value;
    let a5 = document.querySelector('input[name="a5"]:checked').value;

    let n1 = document.querySelector('input[name="n1"]:checked').value;
    let n2 = document.querySelector('input[name="n2"]:checked').value;
    let n3 = document.querySelector('input[name="n3"]:checked').value;
    let n4 = document.querySelector('input[name="n4"]:checked').value;
    let n5 = document.querySelector('input[name="n5"]:checked').value;


    const openness = Number(o1) + Number(o2) + Number(o3) + Number(o4) + Number(o5);
    const conscientiousness = Number(c1) + Number(c2) + Number(c3) + Number(c4) + Number(c5);
    const extraversion = Number(e1) + Number(e2) + Number(e3) + Number(e4) + Number(e5);
    const agreeableness = Number(a1) + Number(a2) + Number(a3) + Number(a4) + Number(a5);
    const neuroticism = Number(n1) + Number(n2) + Number(n3) + Number(n4) + Number(n5);

    if (openness >= 14) {
        document.getElementById("openness").innerHTML
            = `<h4 class="text-center">You scored <span class="text-success">` + openness +
            `</span> on <span class="text-warning">Openness</span></h4>`;
    } else {
        document.getElementById("openness").innerHTML
            = `<h4 class="text-center">You scored <span class="text-danger">` + openness +
            `</span> on <span class="text-warning">Openness</span></h4>`;

    } if (conscientiousness >= 14) {
        document.getElementById("conscientiousness").innerHTML
            = `<h4 class="text-center">You scored <span class="text-success">` + conscientiousness +
            `</span> on <span class="text-success">Conscientiousness</span></h4>`;
    } else {
        document.getElementById("conscientiousness").innerHTML
            = `<h4 class="text-center">You scored <span class="text-danger">` + conscientiousness +
            `</span> on <span class="text-success">Conscientiousness</span></h4>`;

    } if (extraversion >= 14) {
        document.getElementById("extraversion").innerHTML
            = `<h4 class="text-center">You scored <span class="text-success">` + extraversion +
            `</span> on <span class="text-danger">Extraversion</span></h4>`;
    } else {
        document.getElementById("extraversion").innerHTML
            = `<h4 class="text-center">You scored <span class="text-danger">` + extraversion +
            `</span> on <span class="text-danger">Extraversion</span></h4>`;

    } if (agreeableness >= 14) {
        document.getElementById("agreeableness").innerHTML
            = `<h4 class="text-center">You scored <span class="text-success">` + agreeableness +
            `</span> on <span class="text-primary">Agreeableness</span></h4>`;
    } else {
        document.getElementById("agreeableness").innerHTML
            = `<h4 class="text-center">You scored <span class="text-danger">` + agreeableness +
            `</span> on <span class="text-primary">Agreeableness</span></h4>`;

    } if (neuroticism >= 14) {
        document.getElementById("neuroticism").innerHTML
            = `<h4 class="text-center">You scored <span class="success">` + neuroticism +
            `</span> on <span class="text-muted">Neuroticism</span></h4>`;
    } else {
        document.getElementById("neuroticism").innerHTML
            = `<h4 class="text-center">You scored <span class="text-danger">` + neuroticism +
            `</span> on <span class="text-muted">Neuroticism</span></h4>`;

    }

    tableBody.classList.add('d-none');
    btn.classList.add('d-none');

}
