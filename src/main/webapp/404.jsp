<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>404</title>
    <link rel="stylesheet" type="text/css" href="<c:url value="/styles/style.css"/>">
    <link rel="shortcut icon" href="<c:url value="images/biscuit.png"/>" type="image/x-icon"/>
</head>
<body>
<div class="container">
    <jsp:include page="header.html"/>
    <div class="content">
        <p style="font-size: 20px;">Страница не существует</p>
        <br>
        <img src="<c:url value="/images/404.jpg"/>" alt="Ошибка 404" width="500px">
    </div>
</div>

<jsp:include page="footer.html"/>

</body>
</html>