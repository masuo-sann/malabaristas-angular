import { NgModule } from '@angular/core';
import { MatInputModule, MatCheckboxModule, MatRadioModule, MatButtonModule, MatListModule, MatToolbarModule, MatIconModule, MatTabsModule, 
  MatExpansionModule, MatDividerModule, MatCardModule, MatDialogModule, MatTableModule, 
 } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [ MatInputModule, MatCheckboxModule, MatRadioModule, MatButtonModule, MatListModule, MatToolbarModule, MatIconModule, MatTabsModule, 
    MatExpansionModule, MatDividerModule, MatCardModule, MatDialogModule, MatTableModule, 
  ],
  exports: [ MatInputModule, MatCheckboxModule, MatRadioModule, MatButtonModule, MatListModule, MatToolbarModule, MatIconModule, MatTabsModule, 
    MatExpansionModule, MatDividerModule, MatCardModule, MatDialogModule, MatTableModule, 
  ]
})
export class MyMaterialModule { }