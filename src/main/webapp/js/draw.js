let centerX = 225;  //в этом мест x=0 с точки зрения математических координат
let centerY = 225;  //в этом мест y=0 с точки зрения математических координат
let R = 200;
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
context.font = "12px Verdana";

function drawPoint(x, y, delta = 2) {
    context.rect(x - delta / 2, y - delta / 2, delta, delta);
}

function get_r_() {
    if (document.getElementsByName("param_r").length === 0) {
        let params = (new URL(document.location)).searchParams;
        return +params.get("param_r");
    } else {
        return +document.getElementsByName("param_r")[0].value;
    }
}

function drawPointForJsp(mathX, mathY, delta = 2) {
    let r_ = get_r_();

    let x = mathX * R / r_ + centerX;
    let y = centerY - mathY * R / r_;

    context.beginPath();
    drawPoint(x, y, delta);
    context.strokeStyle = "red";
    context.stroke();
}

function drawTextWithDeltaX(text, x, y, delta = 4) {
    //смещение по оси х для надписей на оси y
    context.fillText(text, x + delta, y);
    drawPoint(x, y);
}

function drawTextWithDeltaY(text, x, y, delta = 4) {
    //смещение по оси y для надписей на оси x
    context.fillText(text, x, y - delta);
    drawPoint(x, y);
}

function drawArrow(x, y, arrowDelta, direction) {
    context.moveTo(x, y);
    if (direction === "right")
        context.lineTo(x - arrowDelta, y - arrowDelta);
    else
        context.lineTo(x - arrowDelta, y + arrowDelta);

    context.moveTo(x, y);
    if (direction === "right")
        context.lineTo(x - arrowDelta, y + arrowDelta);
    else
        context.lineTo(x + arrowDelta, y + arrowDelta);
}

function drawAxes(radius, delta) {
    let arrowDelta = 4;
    context.beginPath();

    drawPoint(centerX, centerY, 4);

    context.moveTo(centerX - radius - delta, centerY);
    context.lineTo(centerX + radius + delta, centerY); //OX

    drawArrow(centerX + radius + delta, centerY, arrowDelta, "right");
    context.fillText("X", centerX + radius + delta, centerY);

    context.moveTo(centerX, centerY + radius + delta);
    context.lineTo(centerX, centerY - radius - delta); //OY
    drawArrow(centerX, centerY - radius - delta, arrowDelta, "up");
    context.fillText("Y", centerX, centerY - radius - delta);

    //OX
    drawTextWithDeltaY("-R", centerX - radius, centerY);
    drawTextWithDeltaY("-R/2", centerX - radius / 2, centerY);
    drawTextWithDeltaY("R/2", centerX + radius / 2, centerY);
    drawTextWithDeltaY("R", centerX + radius, centerY);

    //OY
    drawTextWithDeltaX("-R", centerX, centerY + radius);
    drawTextWithDeltaX("-R/2", centerX, centerY + radius / 2);
    drawTextWithDeltaX("R/2", centerX, centerY - radius / 2);
    drawTextWithDeltaX("R", centerX, centerY - radius);

    context.stroke();
}

function drawFistQuarter(radius) {
    //четверть окружности по радиусу
    context.moveTo(centerX, centerY);  //(0;0)
    context.arc(centerX, centerY, radius,
        Math.PI * 3 / 2, Math.PI * 2,
        false);
    context.fill();
}

function drawSecondQuarter(height, width) {
    //прямоугольный треугольник по катетам
    context.moveTo(centerX, centerY);  //(0;0)
    context.lineTo(centerX, centerY - height); //(0;r)
    context.lineTo(centerX - width, centerY);  //(-r/2;0)
    context.lineTo(centerX, centerY);  //(0;0)
}

function drawThirdQuarter(height, width) {
    //прямоугольник по сторонам
    context.moveTo(centerX, centerY); //(0;0)

    // context.rect(centerX - width, centerY, width, height);  //слишком просто

    context.lineTo(centerX - width, centerY); //(-r;0)
    context.lineTo(centerX - width, centerY + height); //(-r;-r/2)
    context.lineTo(centerX, centerY + height); //(0;-r/2)
    context.lineTo(centerX, centerY); //(0;0)
}

function drawPlot() {
    context.beginPath();

    drawFistQuarter(R / 2);
    drawSecondQuarter(R, R / 2);
    drawThirdQuarter(R / 2, R);

    context.closePath();
    context.strokeStyle = "blue";
    context.fillStyle = "blue";
    context.fill();
    context.stroke();
    context.strokeStyle = "black";
    context.fillStyle = "black";
    drawAxes(R, 14);
}

drawPlot();

canvas.onclick = (event) => {
    let x = event.pageX - event.target.offsetLeft;
    let y = event.pageY - event.target.offsetTop;

    let mathX = x - centerX;
    let mathY = centerY - y;

    let r_ = get_r_();

    let x_ = mathX / R * r_;
    let y_ = mathY / R * r_;

    context.beginPath();
    drawPoint(x, y);
    context.strokeStyle = "red";
    context.stroke();

    location.href = `/lab2/table?param_x=${x_}&param_y=${y_}&param_r=${r_}`;
}
