<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="models.Attempt" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page isELIgnored="false" %>
<jsp:useBean id="collectionAttempts" class="models.CollectionAttempts"
             scope="session"/>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Table</title>
    <link rel="stylesheet" type="text/css" href="<c:url value="/styles/style.css"/>">
    <link rel="shortcut icon" href="<c:url value="images/biscuit.png"/>" type="image/x-icon"/>
</head>
<body>
<div class="container">
    <jsp:include page="header.html"/>
    <div class="content">
        <div class="main">
            <table border="1px black solid">
                <tr>
                    <th>X</th>
                    <th>Y</th>
                    <th>R</th>
                    <th>Есть ли попадание</th>
                </tr>
                <%-- через JSTL и JSP EL--%>
                <c:if test="${collectionAttempts != null}">
                    <c:forEach var="attempt" items="${collectionAttempts.attempts}">
                        <tr>
                            <td>${attempt.x}</td>
                            <td>${attempt.y}</td>
                            <td>${attempt.r}</td>
                            <td>${attempt.isHit}</td>
                        </tr>
                    </c:forEach>
                </c:if>

                <%--  через скриптлеты и выражения--%>
                <%--                <% if (collectionAttempts != null)--%>
                <%--                    for (Attempt attempt : collectionAttempts.getAttempts()) {%>--%>
                <%--                <tr>--%>
                <%--                    <td><%= attempt.getX() %>--%>
                <%--                    </td>--%>
                <%--                    <td><%= attempt.getY() %>--%>
                <%--                    </td>--%>
                <%--                    <td><%= attempt.getR() %>--%>
                <%--                    </td>--%>
                <%--                    <td><%= attempt.getIsHit() %>--%>
                <%--                    </td>--%>
                <%--                </tr>--%>
                <%--                <% } %>--%>

            </table>
        </div>
        <div class="sidebar">
            <canvas id="canvas" width="450px" height="450px">

            </canvas>
        </div>
    </div>
</div>

<jsp:include page="footer.html"/>

<script src="<c:url value="/js/draw.js"/>"></script>
<script>
    window.onload = () => {
        <% if (collectionAttempts != null) {
            for (Attempt attempt : collectionAttempts.getAttempts()) {%>
        drawPointForJsp(<%= attempt.getX() %>, <%= attempt.getY() %>);
        <% }} %>
    }
</script>
</body>
</html>