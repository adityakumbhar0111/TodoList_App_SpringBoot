package com.todoList.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todoList.model.UserTask;
import com.todoList.repo.IUserTask;

@Service
public class UserTaskService 
{
	@Autowired
	private IUserTask repo;
	
	public UserTask addTask(UserTask task)
	{
		return repo.save(task);
	}
	
	public List<UserTask> getTask()
	{
		return repo.findAll();
	}

	public String deleteTask(Integer id) 
	{
		Optional<UserTask> task = repo.findById(id);
		if(task.isPresent())
		{
			UserTask Actualtask = task.get();
			repo.delete(Actualtask);
			return "Task Deleted Successfully.";
		}
		else {
			return "Record Not Found with ID : "+id;
		}
	}

	public String updateUserTask(Integer id, UserTask task) {
		Optional<UserTask> oldtask = repo.findById(id);
		if(oldtask.isPresent())
		{
			UserTask newUsertask = oldtask.get();
			newUsertask.setTask(task.getTask());
			newUsertask.setDate(task.getDate());
			repo.save(newUsertask);
			return "Task Updated Successfully.";
		}
		else {
			return "Record Not Found with ID : "+id;
		}
		
	}

	public String updateUserTaskStatus(Integer id,String msg) {
		Optional<UserTask> task = repo.findById(id);
		if(task.isPresent())
		{
			UserTask Actualtask = task.get();
			Actualtask.setStatus(msg);
			repo.save(Actualtask);
			return msg;
		}
		else {
			return "Record Not Found with ID : "+id;
		}
	}
	

}
