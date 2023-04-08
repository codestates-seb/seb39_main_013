package com.codestates.eCommerce.common.config.matterMost;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class NotificationManager {
    private Logger log = LoggerFactory.getLogger(NotificationManager.class);


    private final MatterMostSender mmSender;

    public void sendNotification(Exception e, String uri, String params) {
        log.info("#### SEND Notification");
        mmSender.sendMessage(e, uri, params);
    }

    public void sendNotification(Exception e) {
        log.info("#### SEND Notification");
        mmSender.sendMessage(e);
    }
}