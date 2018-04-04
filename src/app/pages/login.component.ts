
import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgProgress } from 'ngx-progressbar';
import {AuthService} from '../auth.service';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AuthService]
})
export class LoginComponent implements OnInit{
   userName = '';
   userPass = '';
   
  public res ;
  public errorMsg ='';
  constructor(
    private authService:AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private ngProgress : NgProgress
  ) { }
  ngOnInit(){
   
  }
  
  onClick()
  {
    this.ngProgress.start();
      this.authService.getLogin(this.userName , this.userPass)
        .subscribe(data => {
          this.res = data;
          //console.log("Sub : " +data);
          
          if(data == '1'){
            console.log("Success :" + this.res)
            this.toastr.success('Successfully ', 'Login');
            this.router.navigateByUrl("/dashboard");
  
          }
          else {
            this.toastr.warning('Username or Password is incorrect' , 'ERROR');
          }
        },
        error =>{
          this.errorMsg = error
          this.toastr.error(this.errorMsg , 'Error');
        });

          

          // console.log(Response);
          // this.router.navigateByUrl("/pages/dashboard");
      
      // this._employeeService.getEmployees()
      // .subscribe(data => this.employees = data,
      //           error => this.errorMsg = error);
        //console.log("values : " + this.res)
        if(this.res == '1'){
          console.log("Success :" + this.res)

        }
        else {
          console.log("Error data :" + this.res)
        }
      
  }
 
}
