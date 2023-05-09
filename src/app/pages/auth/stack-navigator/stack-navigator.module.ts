import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StackNavigatorComponent } from './stack-navigator.component';
import { StackNavigatorRoutingModule } from './stack-navigator-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    StackNavigatorRoutingModule,
  ],
  declarations: [StackNavigatorComponent],
})
export class StackNavigatorModule {}
