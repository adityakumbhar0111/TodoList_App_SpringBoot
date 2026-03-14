package com.todoList.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.todoList.model.UserTask;

@Repository
public interface IUserTask extends JpaRepository<UserTask, Integer> {
	
}
