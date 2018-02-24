import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SettingsService } from '@delon/theme';
import { StateService } from '@core/data/state.service';

@Component({
  selector: 'app-pages-lock',
  templateUrl: './lock.component.html'
})
export class LockComponent {
  valForm: FormGroup;

  constructor(public settings: SettingsService, fb: FormBuilder,
    private router: Router,
    private stateService: StateService) {
    this.valForm = fb.group({
      password: [null, Validators.required]
    });
  }

  submit() {
    // tslint:disable-next-line:forin
    for (const i in this.valForm.controls) {
      this.valForm.controls[i].markAsDirty();
    }
    if (this.valForm.valid) {
      console.log('Valid!');
      console.log(this.valForm.value);
      this.router.navigate([this.stateService.config.router.home]);
    }
  }
  
}
