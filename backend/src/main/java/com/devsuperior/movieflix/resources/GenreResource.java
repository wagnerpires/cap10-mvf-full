package com.devsuperior.movieflix.resources;

import java.util.List;

import com.devsuperior.movieflix.dtos.GenreDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.movieflix.services.GenreService;

@RestController
@RequestMapping(value = "/genres")
public class GenreResource {

	@Autowired
	private GenreService service;
	
	@GetMapping
	public ResponseEntity<List<GenreDTO>> findAll() {
		List<GenreDTO> dto = service.findAll();
		return ResponseEntity.ok().body(dto);
	}
}