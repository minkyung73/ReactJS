package com.example.apiExample.Statistic.repository;

import com.example.apiExample.Survey.model.Survey;
import org.springframework.data.jpa.repository.JpaRepository;

public class SurveyRepository extends JpaRepository<Survey, Long>, SurveyCustomRepository {

}
