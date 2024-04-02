package com.assignment.employeeList.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.assignment.employeeList.User.Grades;

@Repository
public interface GradeRepository extends JpaRepository<Grades, Long> {
}

