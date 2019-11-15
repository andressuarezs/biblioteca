import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutoresService } from 'src/app/services/autores.service';
@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {
  public autores:any;
  public autoresForm:FormGroup;
  constructor(protected fb:FormBuilder, protected service:AutoresService) {
    this.CreateForm();
   }
    
  CreateForm(){
    this.autoresForm = this.fb.group({
      code: ["",[Validators.required,Validators.maxLength(5)]],
      name: ["",[Validators.required]],
      lastname: ["",[Validators.required]],    
      bd_year: ["",[Validators.required]],
      bd_place: ["",[Validators.required]],
      death_year: ["",[Validators.required]]
     
    })  
}
  

  ngOnInit() {
    this.service.getAutores().subscribe (data=>{
     // console.log(data);
     this.autores=data
    });
} 


saveAutores(){

  this.service.postAutores(this.autoresForm.value).subscribe(data => alert ("listo"))
}

}

