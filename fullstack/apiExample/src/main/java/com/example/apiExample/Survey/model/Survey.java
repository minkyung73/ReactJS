package com.example.apiExample.Survey.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class Survey {
    @Id
    @Column(name = "survey_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;



}
