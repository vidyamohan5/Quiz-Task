import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, from } from 'rxjs';
import { ModalDirective } from '../../node_modules/ngx-bootstrap';
import { QuestionClass } from './question-class';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	isQuestionCardShow: boolean = false;
	totalAnswered: number = 0;
	rightAnswer: number;
	questionObj = new QuestionClass();
	@ViewChild('submitModal') submitModal: ModalDirective;
	@ViewChild('addQuestionModal') addQuestionModal : ModalDirective;
	@ViewChild('answerModal') answerModal : ModalDirective;
	@ViewChild('questionForm') questionForm: any;
	@ViewChild('questionTest') questionTest : any;

	constructor( private toastr: ToastrService) { }
	userInform: FormGroup;
	answerArray = [];
	main= true;
	allQuestions: any = [{
		"id": 1,
		"question": "Who is the best cricketer in the world?",
		"a": "Sachin Tendulkar",
		"b": "Virat Kohli",
		"c": "Adam Gilchirst",
		"d": "Jacques Kallis",
		"answer": "b"
	},
	];
	allQuestions1: any = [{
		"id": 1,
		"question": "What are the colors in the Indian national flag?",
		"a": "White",
		"b": "Yellow",
		"c": "Orange",
		"d": "Green",
		"answer": "a,c,d"
	},
	];

	/**Method call on submit the test */
	submitTest() {
		this.rightAnswer = 0;
		this.totalAnswered = 0;
		for (let i = 0; i < this.allQuestions.length; i++) {
			if ("selected" in this.allQuestions[i] && (this.allQuestions[i]["selected"] != null)) {
				this.totalAnswered++;
				if (this.allQuestions[i]["selected"] == this.allQuestions[i]["answer"]) {
					this.rightAnswer++;
				}
			}

		}
		for (let i = 0; i < this.allQuestions1.length; i++) {
			if ("selected" in this.allQuestions1[i] && (this.allQuestions1[i]["selected"] != null)) {
				this.totalAnswered++;
				if (this.allQuestions1[i]["selected"] == this.allQuestions1[i]["answer"]) {
					this.rightAnswer++;
				}
			}

		}
		this.submitModal.show();
		this.showHistory = true;
		this.main = true;
	}
	date = new Date();
	startQuiz() {
		for (let i = 0; i < this.allQuestions.length; i++) {
			if ("selected" in this.allQuestions[i]) {
				delete this.allQuestions[i]["selected"];
			}

		}
		for (let i = 0; i < this.allQuestions1.length; i++) {
			if ("selected" in this.allQuestions1[i]) {
				delete this.allQuestions1[i]["selected"];
			}

		}
		this.questionTest.reset();
		this.isQuestionCardShow = true;

	}
	HomePage() {
		this.isQuestionCardShow = false;
	}
	checkAnswers(){
		this.submitModal.hide();
		this.answerModal.show();
	}
	showHistory = false;
	showdetails = false;
	hide(){
		this.showHistory = true;
		this.main = true;
	}
	History(){
		this.showdetails = true;
	}
	ngOnInit() {



	}

}
