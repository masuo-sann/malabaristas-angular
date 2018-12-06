import { NgModule } from '@angular/core';
import { MatInputModule, MatCheckboxModule, MatRadioModule, MatButtonModule, MatListModule, MatToolbarModule, MatIconModule, MatTabsModule, 
  MatExpansionModule, MatDividerModule, MatCardModule, MatDialogModule, MatTableModule, MatProgressSpinnerModule, 
 } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [ MatInputModule, MatCheckboxModule, MatRadioModule, MatButtonModule, MatListModule, MatToolbarModule, MatIconModule, MatTabsModule, 
    MatExpansionModule, MatDividerModule, MatCardModule, MatDialogModule, MatTableModule, MatProgressSpinnerModule, 
  ],
  exports: [ MatInputModule, MatCheckboxModule, MatRadioModule, MatButtonModule, MatListModule, MatToolbarModule, MatIconModule, MatTabsModule, 
    MatExpansionModule, MatDividerModule, MatCardModule, MatDialogModule, MatTableModule, MatProgressSpinnerModule, 
  ]
})
export class MyMaterialModule { }