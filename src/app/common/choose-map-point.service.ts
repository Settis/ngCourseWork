/* tslint:disable */
import { Injectable } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {ChoosePointComponent} from '../choose-point/choose-point.component';

@Injectable()
export class ChooseMapPointService {

  public constructor(private _dialog: MdDialog) { };

  public openDialog(setter: (coord: LatLng) => void): void {
    let dialogRef: MdDialogRef<ChoosePointComponent> = this._dialog.open(ChoosePointComponent, {width: '1200px'});
    dialogRef.afterClosed().subscribe((result: LatLng) => {
      if (result)
        setter(result);
    });
  }

}
