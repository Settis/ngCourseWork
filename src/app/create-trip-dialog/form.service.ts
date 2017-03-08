import { Injectable } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CountryListService} from '../common/country-list.service';
import {Observable} from 'rxjs';

import 'rxjs/add/operator/startWith';

@Injectable()
export class FormService {

  public form: FormGroup;
  public filteredCountries: Observable<String[]>;

  public constructor (private _fb: FormBuilder,
                      private _countryList: CountryListService) {
    this.form = _fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      description: [''],
      image: [''],
      lat: [''],
      lng: [''],
    });
    this.filteredCountries = this.form.get('name').valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));
  }

  private filterStates(val: string): String[] {
    return val ? this._countryList.countries.filter((s:string) => new RegExp(val, 'gi').test(s)) : this._countryList.countries;
  }

}
