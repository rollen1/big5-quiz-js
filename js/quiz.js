function displayResults() {

    let o1 = document.querySelector('input[name="o1"]:checked').value;
    let o2 = document.querySelector('input[name="o2"]:checked').value;
    let o3 = document.querySelector('input[name="o3"]:checked').value;
    let o4 = document.querySelector('input[name="o4"]:checked').value;
    let o5 = document.querySelector('input[name="o5"]:checked').value;

    let openness = Number(o1) + Number(o2) + Number(o3) + Number(o4) + Number(o5);

    if (openness > 10) {
        document.getElementById("openness").innerHTML
            = `<h4 class="text-center">You scored <span class="text-success">high</span> on <span class="text-warning">Openness</span></h4>`
            + `<div>Individuals who score high on Openness are creative and open to new experiences. Low scorers tend to be traditional and conventional.</div>`;
    } else {
        document.getElementById("openness").innerHTML
            = `<h4 class="text-center">You scored <span class="text-danger">low</span> on <span class="text-warning">Openness</span></h4>`
            + `<div>Individuals who score high on Openness are creative and open to new experiences. Low scorers tend to be traditional and conventional.</div>`;
    }
}
