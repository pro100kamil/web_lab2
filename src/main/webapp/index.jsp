<%@ page import="models.Attempt" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:useBean id="collectionAttempts" class="models.CollectionAttempts"
             scope="session"/>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Main</title>
    <link rel="stylesheet" type="text/css" href="<c:url value="/styles/style.css"/>">
    <link rel="shortcut icon" href="images/biscuit.png" type="image/x-icon"/>
</head>
<body>
<div class="container">
    <jsp:include page="header.html"/>
    <div class="content">
        <div class="main">
            <form action="<c:url value="/table" />" method="GET" id="form">
                <p>
                    X
                    <select name="param_x">
                        <option>-4</option>
                        <option>-3</option>
                        <option>-2</option>
                        <option>-1</option>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </p>
                <p>
                    Y (3;3)
                    <input type="text" id="input_y" name="param_y">
                </p>
                <p>
                    R
                    <select name="param_r">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </p>
                <p id="error-message"></p>
                <p>
                    <input type="submit" value="Отправить форму">
                </p>

            </form>
        </div>
        <div class="sidebar">
            <canvas id="canvas" width="450px" height="450px">

            </canvas>
        </div>
    </div>
</div>

<jsp:include page="footer.html"/>

<script src="<c:url value="/js/validate.js"/>"></script>

<script src="<c:url value="/js/draw.js"/>"></script>
<script>
    window.onload = () => {
        <%  if (collectionAttempts != null) {
            for (Attempt attempt : collectionAttempts.getAttempts()) {%>
        drawPointForJsp(<%= attempt.getX() %>, <%= attempt.getY() %>);
        <% }} %>
    }
</script>
</body>
</html>