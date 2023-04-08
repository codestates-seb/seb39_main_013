package com.codestates.eCommerce.common.config.matterMost;

import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;

public class MatterMostHelper {

    public static String getParams(HttpServletRequest req) {
        StringBuilder params = new StringBuilder();
        Enumeration<String> keys = req.getParameterNames();
        while (keys.hasMoreElements()) {
            String key = keys.nextElement();
            params.append("- ").append(key).append(" : ").append(req.getParameter(key)).append("/n");
        }

        return params.toString();
    }
}
