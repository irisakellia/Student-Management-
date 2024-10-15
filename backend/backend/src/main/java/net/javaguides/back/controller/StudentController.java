package net.javaguides.back.controller;

import lombok.AllArgsConstructor;
import net.javaguides.back.dto.StudentDto;
import net.javaguides.back.service.StudentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@AllArgsConstructor
@RestController
@RequestMapping("/api/student")
public class StudentController {

    private StudentService studentService ;

    @PostMapping("/register")
    public ResponseEntity<StudentDto> createStudent(@RequestBody StudentDto studentDto){
        StudentDto savedStudent =  studentService.createStudent(studentDto);
        return new ResponseEntity<>(savedStudent , HttpStatus.CREATED);
    }
}
