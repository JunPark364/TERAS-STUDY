package com.teras.api.service;

import java.util.List;

import com.teras.db.dto.TimeTableDto;

public interface TimeTableService {
	List<TimeTableDto> getTimeTable(String userId);
}
