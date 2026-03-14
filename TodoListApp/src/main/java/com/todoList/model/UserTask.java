package com.todoList.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class UserTask {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String task;
	private Date date;
	private String status;
	
	
	public Integer getId() {
		return id;
	}

	public String getTask() {
		return task;
	}

	public Date getDate() {
		return date;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public void setTask(String task) {
		this.task = task;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public UserTask() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserTask(Integer id, String task, Date date, String status) {
		super();
		this.id = id;
		this.task = task;
		this.date = date;
		this.status = status;
	}

	@Override
	public String toString() {
		return String.format("UserTask [id=%s, task=%s, date=%s, status=%s]", id, task, date, status);
	}

	

}
