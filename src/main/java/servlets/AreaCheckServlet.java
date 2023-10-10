package servlets;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/area_check")
public class AreaCheckServlet extends HttpServlet {
    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
            throws IOException, ServletException {
        //  логика валидации и проверки попадания теперь находится в фильтре

        getServletContext().getRequestDispatcher("/table.jsp").forward(request, response);

    }
}
