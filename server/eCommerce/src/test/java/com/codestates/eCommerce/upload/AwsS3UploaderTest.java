package com.codestates.eCommerce.upload;

import com.codestates.eCommerce.config.AwsS3MockConfig;
import io.findify.s3mock.S3Mock;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.mock.web.MockMultipartFile;

import java.io.IOException;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@Import(AwsS3MockConfig.class)
@SpringBootTest
class AwsS3UploaderTest {

    @Autowired
    private S3Mock s3Mock;
    @Autowired
    private AwsS3Uploader awsS3Uploader;

    @AfterEach
    public void tearDown() {
        s3Mock.stop();
    }

    @Test
    void upload() throws IOException {
        // given
        String path = "test.png";
        String contentType = "image/png";
        String dirName = "test";

        MockMultipartFile file = new MockMultipartFile("test", path, contentType, "test".getBytes());

        // when
        String urlPath = awsS3Uploader.upload(file, dirName);

        // then
        assertThat(urlPath).contains(path);
        assertThat(urlPath).contains(dirName);
    }
}
