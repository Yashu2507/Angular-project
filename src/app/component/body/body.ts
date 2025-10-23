import { Component } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { Assignment1 } from '../assignment1/assignment1';
import { Directives } from "../directives/directives";
import { Assignment2 } from '../assignment2/assignment2';
import { Productlist } from "../productlist/productlist";
import { Assignment3 } from "../assignment3/assignment3";
import { Assignment4 } from '../assignment4/assignment4';
import { Pipesdemo } from "../pipesdemo/pipesdemo";
import { Assignment5 } from "../assignment5/assignment5";
import { ParentDemo } from '../parent-demo/parent-demo';
import { Child1Demo } from '../child1-demo/child1-demo';
import { Child2Demo } from '../child2-demo/child2-demo';
import { Categories } from '../categories/categories';
import { Employeecrud } from "../employeecrud/employeecrud";
import { Employee } from "../employee/employee";
import { HttpDemo1 } from "../http-demo1/http-demo1";
import { UserCrud } from "../user-crud/user-crud";
import { Stocks } from "../stocks/stocks";
import { ObervableDemo2 } from "../obervable-demo2/obervable-demo2";
import { EmployeeList } from "../employee-list/employee-list";
import { EmployeeAdd } from "../employee-add/employee-add";
import { Exam } from "../exam/exam";
import { FormDemo1 } from "../form-demo1/form-demo1";
import { TemplateFormDemo1 } from "../template-form-demo1/template-form-demo1";
import { ModelFormDemo1 } from "../model-form-demo1/model-form-demo1";
import { AssignmentForms } from "../assignment-forms/assignment-forms";
import { DynamicForm } from "../dynamic-form/dynamic-form";
import { RouterOutlet } from '@angular/router';
import { UserSpring } from "../user-spring/user-spring";


@Component({
  selector: 'app-body',
   imports: [
    FormDemo1,
    TemplateFormDemo1,
    ModelFormDemo1,
    AssignmentForms,
    DynamicForm,
    RouterOutlet,
    UserSpring
],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {

}
