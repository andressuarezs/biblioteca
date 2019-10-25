import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder} from'@angular/forms';
@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {
  public atuoresForm:FormGroup;
  constructor(protected fb:FormBuilder){
  }
    
  CreateForm(){
    this.autoresForm=this.fb.group({
      Codigo:'',
      nombre:'',
      
    })
  }

  ngOnInit() {
  }

}
