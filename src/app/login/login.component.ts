import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
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
    private toastr: ToastrService
  ) { }
  ngOnInit(){
   
  }
  
  onClick()
  {
    
      this.authService.getLogin(this.userName , this.userPass)
        .subscribe(data => {
          this.res = data;
          //console.log("Sub : " +data);
          
          if(data == '1'){
            console.log("Success :" + this.res)
            this.toastr.success('Successfully ', 'Login');
            this.router.navigateByUrl("pages/dashboard");
  
          }
          else {
            this.toastr.warning('Warning', 'Login Error');
          }
        },
        error =>{
          this.errorMsg = error
          this.toastr.error('Error ', 'this.errorMsg ');
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
