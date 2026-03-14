package com.todoList.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.todoList.model.UserTask;
import com.todoList.service.UserTaskService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class UserTaskController 
{
	@Autowired
	private UserTaskService service;
	
	@PostMapping("/add-task")
	public ResponseEntity<String> addUserTask(@RequestBody UserTask task)
	{
		UserTask userTask = service.addTask(task);
		String msg ="Task Added Successfully.";
		return new ResponseEntity<String>(msg,HttpStatus.CREATED);		
	}
	
	@GetMapping("/get-task")
	public ResponseEntity<List> getUserTask()
	{
		List<UserTask> allTask = service.getTask();
		return new ResponseEntity<List>(allTask,HttpStatus.OK);
	}
	
	@DeleteMapping("/delete-task/{id}")
	public ResponseEntity<String> deleteUserTask(@PathVariable Integer id)
	{
		String msg =service.deleteTask(id);
		return new ResponseEntity<String>(msg,HttpStatus.OK);
	}
	
	@PutMapping("/update-task/{id}")
	public ResponseEntity<String> updateUserTask(@PathVariable Integer id,@RequestBody UserTask task)
	{
		String msg = service.updateUserTask(id,task);
		return new ResponseEntity<String>(msg,HttpStatus.OK);
	}
	
	@PatchMapping("/update-status/{id}/{msg}")
	public ResponseEntity<String> updateUserTaskStatus(@PathVariable Integer id,@PathVariable String msg)
	{
		 String res = service.updateUserTaskStatus(id,msg);
		return new ResponseEntity<String>(res,HttpStatus.OK);
	}
}
