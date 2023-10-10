package servlets;

import models.Attempt;
import models.CollectionAttempts;
import models.Validator;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class AreaCheckFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException, ServletException {
        String x = request.getParameter("param_x");
        String y = request.getParameter("param_y");
        String r = request.getParameter("param_r");

        if (Validator.validate(x, y, r)) {
            Attempt attempt = new Attempt(x, y, r);

            HttpSession session = ((HttpServletRequest) request).getSession();

            CollectionAttempts attempts = (CollectionAttempts) session.getAttribute("collectionAttempts");
            if (attempts == null) {
                attempts = new CollectionAttempts();
                session.setAttribute("collectionAttempts", attempts);
            }

            attempts.add(attempt);

            filterChain.doFilter(request, response);
        } else {
            ((HttpServletResponse) response).sendRedirect("/lab2/filter.jsp");
        }

    }

    @Override
    public void destroy() {

    }
}
