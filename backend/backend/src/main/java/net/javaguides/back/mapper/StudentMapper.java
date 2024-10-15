package net.javaguides.back.mapper;

import net.javaguides.back.dto.StudentDto;
import net.javaguides.back.entity.Student;
import org.springframework.stereotype.Service;

@Service
public class StudentMapper {

    public static StudentDto mapToStudentDto(Student student){
        return  new StudentDto(
                student.getId(),
                student.getPhotourl(),
                student.getFirstName(),
                student.getLastName(),
                student.getEmail(),
                student.getGender()
        );
    }

    public static Student mapToStudent(StudentDto studentDto){
        return new Student(
                studentDto.getId(),
                studentDto.getPhotourl(),
                studentDto.getFirstName(),
                studentDto.getLastName(),
                studentDto.getEmail(),
                studentDto.getGender()

                );
    }
}
