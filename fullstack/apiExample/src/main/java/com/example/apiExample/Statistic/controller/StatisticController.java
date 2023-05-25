package com.example.apiExample.Statistic.controller;

import com.example.apiExample.Statistic.DTO.StatisticDTO;
import com.example.apiExample.Statistic.service.StatisticService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/statistic")
@CrossOrigin
public class StatisticController {

    private final StatisticService statisticService;

    @GetMapping("/getSurvey")
    public ResponseEntity<StatisticDTO.SurveyForStatisticResponseDto> getSurveyForStatistic(
            @PathVariable Long survey_id) {


        StatisticDTO.SurveyForStatisticResponseDto surveyForStatistic =
                statisticService.getSurveyForStatistic(survey_id);

        return new ResponseEntity<>(surveyForStatistic, HttpStatus.CREATED);
    }
}
