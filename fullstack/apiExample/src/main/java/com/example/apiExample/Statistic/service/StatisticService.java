package com.example.apiExample.Statistic.service;

import com.example.apiExample.Statistic.DTO.StatisticDTO;
import com.example.apiExample.Statistic.repository.SurveyRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class StatisticService {

    private final SurveyRepository surveyRepository;

    public StatisticDTO.SurveyForStatisticResponseDto getSurveyForStatistic(Long surveyId) {

    }
}
