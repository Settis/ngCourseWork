import { Injectable } from '@angular/core';
import {TripService} from './trip.service';
import {MdDialog, MdDialogRef} from '@angular/material';
import {CreateTripDialogComponent} from '../create-trip-dialog/create-trip-dialog.component';

@Injectable()
export class CreateTripService {

  public constructor(private _trip: TripService,
                     private _dialog: MdDialog) {

  }

  public openDialog(): void {
    let dialogRef: MdDialogRef<CreateTripDialogComponent> = this._dialog.open(CreateTripDialogComponent);
    dialogRef.afterClosed().subscribe((result: Trip) => {
      if (result)
        this._trip.add(result)
    });
  }

}
