package com.example.demo.model;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class FileResponse {

    private String id;
    private String name;
    private Long size;
    private String url;
    private String contentType;
}