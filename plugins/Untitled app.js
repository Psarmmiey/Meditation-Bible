"use strict";

function MyApp() {
	var version = "v1.0";
	
	function setStatus(message){
		$("#app>footer").text(message);
	}
	this.start = function(){
		$("#app>header").append(version);
		setStatus("ready");
	};
}

function addTaskElement(taskName) {
	var $task = $("#task-template .task").clone();
	$("span.task-name", $task) .text(taskName);
	
	$("task-list").append($task);
	
	$("button.delete", $task).click(function(){
		$task.remove();
	}); 
	
	$("button.move-Up", $task).click(function() {
		$task.insertBefore($task.prev());
	});
	$("button.move-down", $task).click(function() {
		$task.insertAfter($task.next());
	});
}


$(function() {
window.app = new MyApp();
window.app.start();
});