package com.assignment.employeeList.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.assignment.employeeList.User.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
