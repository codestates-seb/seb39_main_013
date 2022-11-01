package com.codestates.eCommerce.restdocs.helper;

import com.codestates.eCommerce.common.config.matterMost.NotificationManager;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class MockGlobalExceptionAdvice {
    @MockBean
    private final NotificationManager notificationManager;

    public MockGlobalExceptionAdvice(NotificationManager notificationManager) {
        this.notificationManager = notificationManager;
    }
}
