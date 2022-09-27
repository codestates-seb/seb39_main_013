package com.codestates.eCommerce.common.advice;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class ErrorResponse {
    private List<FieldError> fieldErrors;
    private List<ConstraintViolationError> constraintViolationErrors;

    @Getter
    @AllArgsConstructor
    public static class FieldError {
        private String field;
        private Object rejectedValue;
        private String reason;
    }

    @Getter
    @AllArgsConstructor
    public static class ConstraintViolationError {
        private String propertyPath;
        private Object rejectedValue;
        private String reason;
    }
}
