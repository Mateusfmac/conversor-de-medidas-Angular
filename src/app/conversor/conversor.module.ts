import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversaoComponent } from './components';
import { MedidaService, ConversorService } from './services';
import { FormsModule } from '@angular/forms';
import { ModalConversaoComponent } from './utils';




@NgModule({
  declarations: [
    ConversaoComponent,
    ModalConversaoComponent
   
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ConversaoComponent
   ],
   providers: [
     MedidaService,
     ConversorService
     
   ]
})
export class ConversorModule { }
